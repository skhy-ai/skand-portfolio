import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/company-info";
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  Cpu,
  Layers,
  Sparkles,
  Lock,
  Server,
  Zap,
  Globe,
  Bot,
  Terminal,
  Activity,
  FileCode,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Engineering Services & Indicative Pricing (MYR) — SKAND Technologies",
      },
      {
        name: "description",
        content:
          "Transparent indicative Malaysian Ringgit (MYR) starting prices for website development, Stripe payments, database architecture, authentication, educational courseware, and enterprise AI & security systems.",
      },
      {
        property: "og:title",
        content: "Engineering Services & Indicative Pricing (MYR) — SKAND Technologies",
      },
      {
        property: "og:description",
        content:
          "Bespoke engineering solutions with clear indicative MYR rates: Core Growth Tiers and Mission-Grade Enterprise Systems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://skand.systems/services" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Services & Indicative Pricing (MYR) — SKAND Technologies",
      },
      {
        name: "twitter:description",
        content:
          "Explore starting prices in MYR for website development, payment gateways, databases, auth, and enterprise AI.",
      },
    ],
    links: [{ rel: "canonical", href: "https://skand.systems/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="relative min-h-screen py-16 sm:py-24 overflow-hidden">
      {/* Background Grids */}
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-96 w-full max-w-7xl hero-glow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1 text-xs font-mono text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-foreground" />
            <span>Commercial Offerings</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Engineering Services &amp; Indicative Pricing
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Transparent starting benchmarks quoted in <strong>Malaysian Ringgit (MYR)</strong> for
            core business capabilities, alongside advanced enterprise-grade systems with sovereign
            AI, security hardening, and high-concurrency architectures.
          </p>
        </div>

        {/* ── Tier 1: Core / Growth Engineering ── */}
        <section className="space-y-8">
          <div className="border-b border-border/80 pb-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground block mb-1">
              Tier 1 Offerings
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Core &amp; Growth Engineering Services
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Engineered for startups, growing enterprises, and technical initiatives requiring
              clean, maintainable, modern implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.pricing.core.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-border bg-card p-6 flex flex-col justify-between card-hover"
              >
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block mb-1">
                      Indicative Starting Rate
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs text-muted-foreground">from</span>
                      <span className="text-3xl font-bold font-mono text-foreground">
                        RM {item.startingPriceMYR}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 space-y-2">
                  <span className="text-[10px] font-mono uppercase text-muted-foreground block">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {item.deliverables.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-foreground shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tier 2: Enterprise & Mission-Grade Systems ── */}
        <section className="space-y-8 rounded-2xl border border-border bg-card/60 p-6 sm:p-10">
          <div className="border-b border-border/80 pb-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground block mb-1">
              Tier 2 Offerings
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Enterprise &amp; Mission-Grade Systems
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Architected for sovereign entities, defense contractors, institutional finance, and
              high-concurrency cloud/desktop workloads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.pricing.enterprise.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-border/90 bg-background/80 p-6 flex flex-col justify-between card-hover"
              >
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block mb-1">
                      Enterprise Starting Benchmark
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs text-muted-foreground">from</span>
                      <span className="text-3xl font-bold font-mono text-foreground">
                        RM {item.startingPriceMYR}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 space-y-2">
                  <span className="text-[10px] font-mono uppercase text-muted-foreground block">
                    Enterprise Capabilities:
                  </span>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {item.deliverables.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-foreground shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Enterprise Add-ons Matrix */}
          <div className="mt-10 pt-8 border-t border-border">
            <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
              <Zap className="h-4 w-4 text-foreground" />
              Specialized Enterprise Add-Ons &amp; Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {COMPANY_INFO.pricing.enterpriseAddons.map((addon, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-border/70 bg-secondary/30 p-4 space-y-1.5"
                >
                  <strong className="text-xs font-semibold text-foreground block">
                    {addon.title}
                  </strong>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    {addon.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Engagement CTA ── */}
        <section className="rounded-2xl border border-border bg-card p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Direct Advisory
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Ready to Scope Your System Architecture?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              All prices are indicative starting points. Final scopes are tailored to your
              infrastructure requirements, regulatory constraints, and concurrency targets.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact">
              <Button
                size="lg"
                className="text-xs font-semibold tracking-wider uppercase h-11 px-6"
              >
                Open Contact Directory
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href={COMPANY_INFO.contact.whatsappUrl} target="_blank" rel="noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="text-xs font-semibold tracking-wider uppercase h-11 px-6"
              >
                Direct WhatsApp (+60123172237)
              </Button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
