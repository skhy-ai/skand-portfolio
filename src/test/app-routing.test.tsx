import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

describe("SKAND Technologies App Routing", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

  it("matches root overview page for / instead of falling back to not found", () => {
    const matches = router.matchRoutes("/");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    expect(matches.at(-1)?.routeId).toBe("/");
  });

  it("matches the dedicated client work page for /work", () => {
    const matches = router.matchRoutes("/work");
    expect(matches.at(-1)?.routeId).toBe("/work");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches the services and pricing page for /services", () => {
    const matches = router.matchRoutes("/services");
    expect(matches.at(-1)?.routeId).toBe("/services");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches the corporate contact directory for /contact", () => {
    const matches = router.matchRoutes("/contact");
    expect(matches.at(-1)?.routeId).toBe("/contact");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("falls back to root/not-found on unknown paths", () => {
    const matches = router.matchRoutes("/unknown-subsystem-path");
    // An unmatched route should fall back to root or not found
    expect(matches.at(-1)?.routeId).toBe(rootRouteId);
  });
});
