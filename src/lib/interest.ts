import { z } from "zod";

/**
 * Single source of truth for the "express interest" form.
 * Mirrors the database policy on public.interest_signups so the browser and the
 * database reject the same submissions.
 */
export const interestSchema = z.object({
  email: z
    .string()
    .trim()
    .min(3, "Enter your email address.")
    .max(255, "That email address is too long.")
    .email("Enter a valid email address."),
  name: z.string().trim().max(100, "Keep your name under 100 characters.").optional(),
  role: z.string().trim().max(60, "Keep that under 60 characters.").optional(),
  useCase: z.string().trim().max(500, "Keep it under 500 characters.").optional(),
});

export type InterestFormValues = z.infer<typeof interestSchema>;

export type InterestSignupRow = {
  email: string;
  name: string | null;
  role: string | null;
  use_case: string | null;
};

/** Blank optional fields become null so the stored rows stay clean. */
export function toSignupRow(values: InterestFormValues): InterestSignupRow {
  const blank = (value?: string) => {
    const trimmed = value?.trim();
    return trimmed && trimmed.length > 0 ? trimmed : null;
  };

  return {
    email: values.email.trim().toLowerCase(),
    name: blank(values.name),
    role: blank(values.role),
    use_case: blank(values.useCase),
  };
}

export const roleOptions = [
  "ML / AI engineer",
  "Backend engineer",
  "Founder / product",
  "Researcher",
  "Platform / infra",
  "Something else",
] as const;

export const WAITLIST_RECIPIENT_EMAIL = "babu@skhy.systems";
export const LAUNCH_DATE_LABEL = "Dev 7, 2026";

/** Builds a pre-filled mailto link directing waitlist submissions to babu@skhy.systems */
export function buildWaitlistMailtoUrl(values: InterestFormValues): string {
  const subject = encodeURIComponent(`AI Middleware Waitlist - Dev 7 2026 (${values.email})`);
  const body = encodeURIComponent(
    `Hi Babu,\n\nI joined the waitlist for AI Middleware launch on Dev 7, 2026.\n\nMy Details:\n- Email: ${values.email}\n- Name: ${values.name || "N/A"}\n- Role: ${values.role || "N/A"}\n- What I want to build: ${values.useCase || "N/A"}\n\nLooking forward to the release!`,
  );
  return `mailto:${WAITLIST_RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
}
