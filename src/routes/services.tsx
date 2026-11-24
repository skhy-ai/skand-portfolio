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
  Gift,
  Tag,
  Percent,
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

        {/* ── Christmas Offer: 25% Off Total Bundle Pricing ── */}
        <section
          id="christmas-offer"
          className="rounded-2xl border-2 border-border/90 bg-gradient-to-b from-card via-card/80 to-background p-6 sm:p-10 space-y-8 shadow-2xl relative overflow-hidden"
        >
          {/* Background festive glow */}
          <div className="pointer-events-none absolute -top-24 right-1/4 h-64 w-64 rounded-full bg-foreground/5 blur-3xl" />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-border/80 pb-6 relative">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1 text-xs font-mono text-muted-foreground">
                <Gift className="h-3.5 w-3.5 text-foreground animate-bounce" />
                <span>{COMPANY_INFO.pricing.christmasOffer.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {COMPANY_INFO.pricing.christmasOffer.title}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Save <strong>25% on the total contract value</strong> when procuring our
                comprehensive engineering suites as bundled offerings.{" "}
                {COMPANY_INFO.pricing.christmasOffer.validNotice}.
              </p>
            </div>

            <div className="rounded-lg border border-border/80 bg-background/80 px-4 py-3 text-right hidden sm:block">
              <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                Special Incentive
              </div>
              <div className="text-xl font-bold font-mono text-foreground flex items-center justify-end gap-1">
                <Percent className="h-4 w-4 text-emerald-400" />
                <span>25% Instant Reduction</span>
              </div>
            </div>
          </div>

          {/* 3 Bundle Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
            {COMPANY_INFO.pricing.christmasOffer.bundles.map((bundle) => (
              <div
                key={bundle.id}
                className={`rounded-xl border p-6 flex flex-col justify-between card-hover relative bg-card ${
                  bundle.id === "tier-3-bundle"
                    ? "border-emerald-500/40 shadow-xl ring-1 ring-emerald-500/30"
                    : bundle.id === "tier-2-bundle"
                      ? "border-cyan-500/40 shadow-lg ring-1 ring-cyan-500/20"
                      : "border-border/80"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-sm bg-secondary px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                      {bundle.tierBadge}
                    </span>
                    <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-mono text-emerald-400 font-semibold">
                      Save RM {bundle.savingsMYR}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-foreground">{bundle.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {bundle.summary}
                    </p>
                  </div>

                  {/* Predecessor Tier Badge (Tier 2 = Tier 1 + extra; Tier 3 = Tier 2 + add-ons) */}
                  {bundle.includesPredecessor && (
                    <div className="rounded-md border border-cyan-500/30 bg-cyan-950/20 px-3 py-2 text-xs font-mono text-cyan-300 flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
                      <span className="text-[11px] leading-tight font-medium">
                        {bundle.includesPredecessor}
                      </span>
                    </div>
                  )}

                  {/* Pricing Display with Strike-through */}
                  <div className="rounded-lg border border-border/60 bg-background/60 p-3.5 space-y-1">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Regular Unbundled Total:</span>
                      <span className="line-through font-mono text-xs">
                        RM {bundle.unbundledTotalMYR}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between pt-1">
                      <span className="text-xs font-mono font-medium text-foreground">
                        Christmas Bundle:
                      </span>
                      <span className="text-2xl sm:text-3xl font-bold font-mono text-foreground">
                        RM {bundle.discountedPriceMYR}
                      </span>
                    </div>
                    <div className="text-[10px] font-mono text-emerald-400 text-right">
                      25% total discount applied
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-mono uppercase text-muted-foreground block font-semibold">
                      {bundle.extraFeaturesTitle || "Suite Inclusions:"}
                    </span>
                    <ul className="space-y-1.5 text-xs text-muted-foreground">
                      {bundle.includedServices.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-foreground shrink-0 mt-0.5" />
                          <span className="leading-snug">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <Link to="/contact">
                    <Button
                      size="sm"
                      variant={bundle.id === "tier-3-bundle" ? "default" : "outline"}
                      className="w-full text-xs font-medium"
                    >
                      Lock in 25% {bundle.tierNumber} Rate
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tier 1: Core / Growth Engineering (Baseline) ── */}
        <section className="space-y-8">
          <div className="border-b border-border/80 pb-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground block mb-1">
              Tier 1 Baseline Offerings
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Tier 1: Core &amp; Growth Engineering
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Foundational modules for startups, growing enterprises, and modern technical web
              initiatives. Can be engaged as standalone modules or together as the discounted Tier 1
              bundle.
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

        {/* ── Tier 2: Enterprise & Mission-Grade Systems (Tier 1 + Advanced Scale) ── */}
        <section className="space-y-8 rounded-2xl border border-border bg-card/60 p-6 sm:p-10">
          <div className="border-b border-border/80 pb-4 space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground block">
              Tier 2 Scale Offerings
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Tier 2: Advanced Infrastructure &amp; Scale Systems
            </h2>
            <div className="rounded-md border border-cyan-500/30 bg-cyan-950/20 px-3.5 py-2.5 text-xs font-mono text-cyan-300 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400" />
              <span>
                <strong>Clear Value Proposition:</strong> Tier 2 includes{" "}
                <strong>Everything in Tier 1</strong> plus the 5 advanced high-concurrency systems
                detailed below:
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground pt-1">
              Architected for sovereign entities, defense contractors, institutional finance, and
              high-concurrency cross-platform workloads.
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
                      Tier 2 Module Benchmark
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

          {/* ── Tier 3 Add-Ons Matrix: Tier 2 + Specialized Enterprise Capabilities ── */}
          <div className="mt-12 pt-8 border-t border-border space-y-4">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground block">
                Tier 3 Master Add-Ons
              </span>
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Zap className="h-5 w-5 text-emerald-400" />
                Tier 3: Specialized Enterprise Add-Ons (Tier 2 + Sovereign Add-ons)
              </h3>
              <div className="rounded-md border border-emerald-500/30 bg-emerald-950/20 px-3.5 py-2 text-xs font-mono text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>
                  <strong>Full Sovereign Master Suite:</strong> Tier 3 includes{" "}
                  <strong>All Tier 1 &amp; Tier 2 systems</strong> plus all 4 specialized mission
                  capabilities below:
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {COMPANY_INFO.pricing.enterpriseAddons.map((addon, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-border/70 bg-secondary/40 p-4 space-y-2 card-hover"
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
