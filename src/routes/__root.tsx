import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/company-info";
import {
  ArrowRight,
  Menu,
  X,
  ExternalLink,
  Shield,
  Building,
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  ChevronRight,
  Terminal,
} from "lucide-react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Error 404
        </span>
        <h1 className="mt-3 text-5xl font-bold tracking-tight text-foreground">404</h1>
        <h2 className="mt-4 text-lg font-semibold text-foreground">Page Not Found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The requested coordinate does not exist or has been relocated to another subsystem.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Return to Overview
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error("Runtime error caught:", error);
  const router = useRouter();

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-destructive">
          Runtime Fault
        </span>
        <h1 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
          System Execution Paused
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          An unexpected exception occurred during page assembly.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            variant="default"
            size="sm"
          >
            Re-evaluate State
          </Button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Go to Overview
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SKAND Technologies — Sovereign Defense Intelligence & Institutional Platforms" },
      {
        name: "description",
        content:
          "Corporate portfolio of SKAND Technologies (SKAND TECHNOLOGIES SDN BHD, Kuala Lumpur & SKAND DEV TECHNOLOGIES OPC PVT LTD). Engineering sovereign defense intelligence, autonomous AI execution, and institutional financial systems.",
      },
      {
        name: "keywords",
        content:
          "SKAND Technologies, SKAND.SYSTEMS, Skhy AI, Swarn Capital, GeoHy, SecureShieldPQ, Vidur execution plane, sovereign AI, defense tech, post-quantum cryptography, Kuala Lumpur, deep tech portfolio",
      },
      { name: "author", content: "SKAND Technologies" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:title", content: "SKAND Technologies — Corporate Portfolio" },
      {
        property: "og:description",
        content:
          "Sovereign defense intelligence, autonomous AI middleware (Vidur), institutional financial platforms, and post-quantum cybersecurity.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "SKAND Technologies" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SKAND Technologies — Corporate Portfolio" },
      {
        name: "twitter:description",
        content:
          "Explore SKAND Technologies client engineering: Skhy AI, Swarn Capital, GeoHy, and SecureShieldPQ.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-foreground selection:text-background flex flex-col">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const currentPath = useRouterState({ select: (s) => s.location.pathname });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Overview", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Services & Pricing", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <QueryClientProvider client={queryClient}>
      {/* Sticky Executive Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/85 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-foreground text-background font-mono text-sm font-bold tracking-tighter transition-transform group-hover:scale-105">
              SK
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold tracking-wider text-foreground group-hover:text-muted-foreground transition-colors">
                SKAND<span className="text-muted-foreground">.SYSTEMS</span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/80">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-border/60 bg-card/60 p-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                    isActive
                      ? "bg-foreground text-background shadow-xs font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/70"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact">
              <Button size="sm" variant="default" className="text-xs font-medium tracking-wide">
                Initiate Engagement
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-border bg-card/95 px-4 pt-3 pb-5 backdrop-blur-lg animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPath === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium ${
                      isActive
                        ? "bg-foreground text-background font-semibold"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="h-4 w-4 opacity-50" />
                  </Link>
                );
              })}
              <div className="pt-3">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full">
                  <Button size="sm" className="w-full justify-center text-xs">
                    Initiate Engagement
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Global Minimalist Corporate Footer */}
      <footer className="border-t border-border bg-card/40 text-foreground transition-colors">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-foreground text-background font-mono text-xs font-bold">
                  SK
                </div>
                <span className="font-display text-base font-bold tracking-tight">
                  SKAND TECHNOLOGIES
                </span>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground max-w-sm">
                Engineering sovereign defense intelligence, autonomous AI execution middleware,
                institutional financial infrastructure, and post-quantum cryptosystems.
              </p>
              <div className="pt-2 text-[11px] font-mono text-muted-foreground flex flex-col gap-1">
                <span>
                  Domain: <strong className="text-foreground">skand.systems</strong>
                </span>
                <span>
                  Inquiries:{" "}
                  <a href="mailto:contact@skhy.systems" className="text-foreground hover:underline">
                    contact@skhy.systems
                  </a>
                </span>
                <span>
                  Direct WhatsApp:{" "}
                  <a
                    href="https://wa.me/60123172237"
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground hover:underline"
                  >
                    +60123172237
                  </a>
                </span>
              </div>
            </div>

            {/* Client Systems */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-foreground">
                Client Systems
              </h4>
              <ul className="space-y-2 text-xs">
                {COMPANY_INFO.clients.map((c) => (
                  <li key={c.id}>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span>{c.name}</span>
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
                <li>
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-foreground hover:underline pt-1"
                  >
                    View all technical case studies <ArrowRight className="h-3 w-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Corporate Registered Entities */}
            <div className="lg:col-span-5 space-y-4">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-foreground">
                Registered Corporate Entities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Malaysia Entity */}
                <div className="rounded-md border border-border/80 bg-background/60 p-3.5 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
                    International Sales Office
                  </span>
                  <div className="text-xs font-semibold text-foreground">
                    {COMPANY_INFO.malaysiaEntity.legalName}
                  </div>
                  <div className="text-[11px] font-mono text-muted-foreground">
                    Reg: {COMPANY_INFO.malaysiaEntity.registrationNo}
                  </div>
                  <p className="text-[11px] text-muted-foreground/90 leading-snug pt-1">
                    {COMPANY_INFO.malaysiaEntity.building}
                    <br />
                    {COMPANY_INFO.malaysiaEntity.street}
                    <br />
                    {COMPANY_INFO.malaysiaEntity.postalCode} {COMPANY_INFO.malaysiaEntity.city},{" "}
                    {COMPANY_INFO.malaysiaEntity.country}
                  </p>
                </div>

                {/* India Entity */}
                <div className="rounded-md border border-border/80 bg-background/60 p-3.5 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
                    Global Headquarters &amp; R&amp;D
                  </span>
                  <div className="text-xs font-semibold text-foreground">
                    {COMPANY_INFO.indiaEntity.legalName}
                  </div>
                  <div className="text-[11px] font-mono text-muted-foreground">
                    CIN: {COMPANY_INFO.indiaEntity.cin}
                  </div>
                  <p className="text-[11px] text-muted-foreground/90 leading-snug pt-1">
                    {COMPANY_INFO.indiaEntity.building}
                    <br />
                    {COMPANY_INFO.indiaEntity.city}, {COMPANY_INFO.indiaEntity.country}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar with Verified Repos & Copyright */}
          <div className="mt-12 border-t border-border/60 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px]">
                © {new Date().getFullYear()} SKAND Technologies. All rights reserved.
              </span>
            </div>

            {/* Verified Open Source & NDA Notice */}
            <div className="flex flex-wrap items-center gap-4 text-[11px]">
              <a
                href="https://github.com/skhy-ai/wsl-linux-disk-manager-cleaner"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-foreground hover:underline"
              >
                <Terminal className="h-3 w-3" />
                Verified Tool: wsl-linux-disk-manager-cleaner
                <ExternalLink className="h-2.5 w-2.5" />
              </a>
              <span className="text-border">|</span>
              <span className="text-muted-foreground">
                Proprietary &amp; defense code delivered under Mutual NDA
              </span>
            </div>
          </div>
        </div>
      </footer>
    </QueryClientProvider>
  );
}
