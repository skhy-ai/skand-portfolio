import { describe, expect, it } from "vitest";

import {
  interestSchema,
  toSignupRow,
  WAITLIST_RECIPIENT_EMAIL,
  LAUNCH_DATE_LABEL,
  buildWaitlistMailtoUrl,
} from "@/lib/interest";

describe("Express interest and waitlist form rules", () => {
  it("defines the correct waitlist recipient and launch date", () => {
    expect(WAITLIST_RECIPIENT_EMAIL).toBe("babu@skhy.systems");
    expect(LAUNCH_DATE_LABEL).toBe("Dev 7, 2026");
  });

  it("builds a pre-filled mailto URL targeting babu@skhy.systems with Dev 7 2026 in subject", () => {
    const url = buildWaitlistMailtoUrl({
      email: "engineer@company.com",
      name: "Alex Vance",
      role: "Platform / infra",
      useCase: "Orchestrate 22 task pipelines with Vidur",
    });

    expect(url).toContain("mailto:babu@skhy.systems");
    expect(url).toContain("Dev%207%202026");
    expect(url).toContain("engineer%40company.com");
    expect(url).toContain("Alex%20Vance");
  });
  it("accepts a complete submission and stores the email lower-cased", () => {
    const parsed = interestSchema.safeParse({
      email: "  Priya@Company.com  ",
      name: " Priya Raman ",
      role: "ML / AI engineer",
      useCase: "Route image tasks to a hosted model.",
    });

    expect(parsed.success).toBe(true);
    if (!parsed.success) return;

    expect(toSignupRow(parsed.data)).toEqual({
      email: "priya@company.com",
      name: "Priya Raman",
      role: "ML / AI engineer",
      use_case: "Route image tasks to a hosted model.",
    });
  });

  it("accepts email-only submissions and stores blanks as null", () => {
    const parsed = interestSchema.safeParse({ email: "a@b.co", name: "", role: "", useCase: "" });

    expect(parsed.success).toBe(true);
    if (!parsed.success) return;

    expect(toSignupRow(parsed.data)).toEqual({
      email: "a@b.co",
      name: null,
      role: null,
      use_case: null,
    });
  });

  it.each([
    ["", "email is required"],
    ["   ", "whitespace-only email is rejected"],
    ["not-an-email", "email must be a valid address"],
    ["a@b", "email without a dot is rejected"],
    [`x${"y".repeat(251)}@z.com`, "email is capped at 255 characters"],
    [`user${"@".repeat(240)}.com`, "email with an @ inside the local part is rejected"],
  ])("rejects %s (%s)", (email) => {
    expect(interestSchema.safeParse({ email }).success).toBe(false);
  });

  it("enforces the stored column length limits", () => {
    expect(interestSchema.safeParse({ email: "a@b.co", name: "n".repeat(101) }).success).toBe(
      false,
    );
    expect(interestSchema.safeParse({ email: "a@b.co", role: "r".repeat(61) }).success).toBe(false);
    expect(interestSchema.safeParse({ email: "a@b.co", useCase: "u".repeat(501) }).success).toBe(
      false,
    );

    expect(interestSchema.safeParse({ email: "a@b.co", name: "n".repeat(100) }).success).toBe(true);
    expect(interestSchema.safeParse({ email: "a@b.co", useCase: "u".repeat(500) }).success).toBe(
      true,
    );
  });

  it("trims the message without changing its content", () => {
    const parsed = interestSchema.safeParse({ email: "a@b.co", useCase: "  expose a task API  " });

    expect(parsed.success).toBe(true);
    if (!parsed.success) return;

    expect(toSignupRow(parsed.data).use_case).toBe("expose a task API");
  });
});
