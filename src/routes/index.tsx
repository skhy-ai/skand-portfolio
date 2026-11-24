import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/company-info";
import {
  Shield,
  Cpu,
  Layers,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Lock,
  Globe,
  Radio,
  Building2,
  Terminal,
  Zap,
  Activity,
  Server,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "SKAND Technologies — Sovereign Defense Intelligence, AI Middleware & Institutional Platforms",
      },
      {
        name: "description",
        content:
          "Official corporate portfolio of SKAND Technologies. High-assurance engineering for Skhy AI, Swarn Capital, GeoHy, and SecureShieldPQ. Based in Kuala Lumpur, Malaysia & Pune, India.",
      },
      { property: "og:title", content: "SKAND Technologies — Corporate Portfolio" },
      {
        property: "og:description",
        content:
          "Engineering mission-critical defense intelligence, autonomous AI execution middleware (Vidur), lithospheric reactor modeling, and institutional capital platforms.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://skand.systems" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SKAND Technologies — Corporate Portfolio" },
      {
        name: "twitter:description",
        content:
          "Sovereign defense intelligence, autonomous AI middleware, and institutional financial infrastructure.",
      },
    ],
    links: [{ rel: "canonical", href: "https://skand.systems" }],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Grid & Glow Accent */}
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-96 w-full max-w-7xl hero-glow" />

      {/* ── 1. Hero Section ── */}
      <section className="relative mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:pt-28 lg:pb-24">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/70 px-3.5 py-1 text-xs font-mono text-muted-foreground backdrop-blur-xs">
            <span className="flex h-1.5 w-1.5 rounded-full bg-foreground animate-pulse" />
            <span>Sovereign Defense Intelligence &amp; Institutional Engineering</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
            Engineering Mission-Critical Software &amp; Sovereign Systems
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground font-normal max-w-2xl mx-auto">
            SKAND Technologies develops high-assurance engineering systems spanning autonomous
            defense AI, multi-agent execution planes, deep-earth geochemical reactors, and
            post-quantum cryptosystems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Link to="/work">
              <Button
                size="lg"
                className="text-xs font-semibold tracking-wider uppercase h-11 px-6"
              >
                Explore Client Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="text-xs font-semibold tracking-wider uppercase h-11 px-6 border-border hover:bg-secondary"
              >
                Services &amp; Pricing
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="text-xs font-semibold tracking-wider uppercase h-11 px-6"
              >
                Contact Directory
              </Button>
            </Link>
          </div>

          {/* Trust Credentials Bar */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-mono text-muted-foreground/80">
            <span className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5 text-foreground" />
              Kuala Lumpur: SKAND TECHNOLOGIES SDN BHD
            </span>
            <span className="hidden sm:inline text-border">•</span>
            <span className="flex items-center gap-1.5">
              <Building2 className="h-3.5 w-3.5 text-foreground" />
              Reg: 202601038169 (1700264-U)
            </span>
            <span className="hidden sm:inline text-border">•</span>
            <span className="flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5 text-foreground" />
              Global R&amp;D Hub: Pune, India
            </span>
          </div>
        </div>
      </section>

      {/* ── 2. The 4 Featured Client Platforms Banner ── */}
      <section className="relative border-y border-border/80 bg-card/30 py-12 backdrop-blur-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground block mb-1">
                Authoritative Deployments
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Featured Client Platforms
              </h2>
            </div>
            <Link
              to="/work"
              className="text-xs font-medium text-foreground hover:underline inline-flex items-center gap-1"
            >
              Read comprehensive case studies <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COMPANY_INFO.clients.map((client) => (
              <div
                key={client.id}
                className="group relative flex flex-col justify-between rounded-lg border border-border/90 bg-card p-5 card-hover"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-sm bg-secondary px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                      {client.category.split("&")[0].trim()}
                    </span>
                    <a
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      title={`Visit ${client.name}`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-foreground group-hover:text-foreground transition-colors">
                      {client.name}
                    </h3>
                    <div className="text-[11px] font-mono text-muted-foreground">
                      {client.domain}
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground/90 line-clamp-3 leading-relaxed">
                    {client.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-border/60">
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-foreground hover:underline"
                  >
                    Launch Live System <ExternalLink className="h-2.5 w-2.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Interactive Vidur Demo Video Spotlight ── */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Video Column */}
          <div className="lg:col-span-7 space-y-3">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl relative aspect-video">
              <iframe
                src="https://www.youtube-nocookie.com/embed/Z_lzV_X4cis?rel=0&modestbranding=1"
                title="Vidur Manager Overview — Autonomous Multi-Agent AI Execution Gateway"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="flex items-center justify-between px-1 text-[11px] font-mono text-muted-foreground">
              <span>Verified Artifact: Vidur AI Ecosystem Demo</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="h-3 w-3" /> Privacy-Enhanced Embed (youtube-nocookie)
              </span>
            </div>
          </div>

          {/* Explanation Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary px-3 py-1 text-xs font-mono text-muted-foreground">
              <Cpu className="h-3.5 w-3.5 text-foreground" />
              <span>Core Technology Architecture</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Vidur Execution Plane &amp; Autonomous AI Gateway
            </h2>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Featured in Skhy AI and the AI Middleware framework, the{" "}
              <strong>Vidur Execution Gateway</strong> orchestrates multi-GPU model registries,
              routes real-time inference tasks across 22 scientific &amp; physical domains, and
              proxies Model Context Protocol (MCP) tool servers.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-3 rounded-md border border-border/80 bg-card p-3">
                <Server className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                <div>
                  <strong className="text-foreground block">Port 8000 Execution Service</strong>
                  <span className="text-muted-foreground text-[11px]">
                    Hosts model registry with VRAM hardware guard preventing out-of-memory crashes.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-md border border-border/80 bg-card p-3">
                <Activity className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                <div>
                  <strong className="text-foreground block">
                    DataC &amp; DataS Telemetry Coupling
                  </strong>
                  <span className="text-muted-foreground text-[11px]">
                    Integrates streaming RF/acoustic buffer ingestion with episodic vector memory.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link to="/work">
                <Button variant="outline" size="sm" className="text-xs">
                  Inspect All Skhy AI Defense Systems
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Real SKHY Product Imagery Gallery ── */}
      <section className="relative border-t border-border/80 bg-card/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Physical Systems &amp; Situational Awareness
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Defense Hardware &amp; Operational Network Planning
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Real screenshots, telemetry topologies, and aerodynamic interceptor airframes
              developed under the SKHY defense engineering umbrella.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Image 1: Threat Awareness Planning Network */}
            <div className="rounded-xl border border-border bg-card overflow-hidden card-hover flex flex-col">
              <div className="relative aspect-video bg-black/60 overflow-hidden flex items-center justify-center border-b border-border/60">
                <img
                  src="/images/products/threat-awareness/threat-awareness-planning-network.png"
                  alt="SKHY Threat Awareness Planning Network"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                    Situational Awareness HUD
                  </div>
                  <h4 className="text-sm font-bold text-foreground">
                    Threat Awareness Planning Network
                  </h4>
                  <p className="text-xs text-muted-foreground/90 leading-relaxed mt-1">
                    Multi-sensor grid topology mapping coastal radar, acoustic arrays, and
                    jamming-resilient telemetry nodes.
                  </p>
                </div>
                <div className="pt-2 text-[10px] font-mono text-foreground flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400" /> Operational in Skhy AI
                </div>
              </div>
            </div>

            {/* Image 2: Delta Wing Interceptor Airframe */}
            <div className="rounded-xl border border-border bg-card overflow-hidden card-hover flex flex-col">
              <div className="relative aspect-video bg-black/60 overflow-hidden flex items-center justify-center border-b border-border/60">
                <img
                  src="/images/products/delta_wing_drone.png"
                  alt="SKHY Delta Wing Drone Airframe"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                    Aeronautical Defense Hardware
                  </div>
                  <h4 className="text-sm font-bold text-foreground">
                    Delta Wing Interceptor Airframe
                  </h4>
                  <p className="text-xs text-muted-foreground/90 leading-relaxed mt-1">
                    Autonomous long-endurance fixed-wing UAV platform designed for rapid border
                    surveillance and acoustic intercept.
                  </p>
                </div>
                <div className="pt-2 text-[10px] font-mono text-foreground flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400" /> CFD aerodynamic validation
                </div>
              </div>
            </div>

            {/* Image 3: Coastal Planning Network */}
            <div className="rounded-xl border border-border bg-card overflow-hidden card-hover flex flex-col">
              <div className="relative aspect-video bg-black/60 overflow-hidden flex items-center justify-center border-b border-border/60">
                <img
                  src="/images/products/threat-awareness/coastal-planning.png"
                  alt="SKHY Coastal Planning and Sensor Coverage"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                    RF &amp; Radar Geo-Coverage
                  </div>
                  <h4 className="text-sm font-bold text-foreground">
                    Coastal Intercept &amp; Surveillance Mesh
                  </h4>
                  <p className="text-xs text-muted-foreground/90 leading-relaxed mt-1">
                    Predictive threat vector analysis estimating hostile ETA, radar blindspot
                    elimination, and automated BOM generation.
                  </p>
                </div>
                <div className="pt-2 text-[10px] font-mono text-foreground flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400" /> Real-time edge compute
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Indicative Services & Starting Rates in MYR ── */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-mono text-muted-foreground mb-2">
              <Sparkles className="h-3.5 w-3.5 text-foreground" />
              <span>Transparent Indicative Benchmarks</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Services &amp; Starting Rates (MYR)
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Indicative Malaysian Ringgit starting rates for bespoke software, payment rails, and
              institutional systems.
            </p>
          </div>
          <Link to="/services">
            <Button variant="default" size="sm" className="text-xs">
              View Dual Tiers &amp; Add-ons <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_INFO.pricing.core.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-border bg-card p-6 flex flex-col justify-between card-hover"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block">
                  Core Engineering
                </span>
                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <div className="flex items-baseline gap-1 pt-1">
                  <span className="text-xs text-muted-foreground">from</span>
                  <span className="text-2xl font-bold font-mono text-foreground">
                    RM {item.startingPriceMYR}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>

              <ul className="mt-5 space-y-1.5 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                {item.deliverables.slice(0, 3).map((d, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-foreground shrink-0" />
                    <span className="line-clamp-1">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enterprise Highlights Strip */}
        <div className="mt-6 rounded-lg border border-border bg-secondary/40 p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Mission-Grade &amp; Enterprise Tiers Available
            </div>
            <h4 className="text-lg font-bold text-foreground">
              High-Scale Database Clustering, Post-Quantum DAST &amp; AI Chatbots
            </h4>
            <p className="text-xs text-muted-foreground">
              From RM 8,500+ for complete full-stack platforms, SAML/SSO enterprise authentication,
              and zero-cloud-egress on-premise deployments.
            </p>
          </div>
          <Link to="/services" className="shrink-0">
            <Button size="sm" variant="outline" className="text-xs">
              Explore Enterprise Tiers
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* ── 6. Verified Open Source Repositories ── */}
      <section className="relative border-t border-border/80 bg-card/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground block">
                Open Source Governance
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Verified Public Repositories
              </h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                In accordance with our strict verification policy, we feature only public
                repositories created originally by <code>skhy-ai</code> without upstream forks.
              </p>
              <div className="rounded-md border border-border bg-background/80 p-3 text-[11px] text-muted-foreground/90 space-y-1">
                <strong className="text-foreground block font-medium">
                  Enterprise Access Protocol:
                </strong>
                <p>
                  All core sovereign defense intelligence, Vidur execution middleware, and
                  institutional financial engines are proprietary and distributed exclusively under
                  signed mutual non-disclosure agreements (NDA).
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {COMPANY_INFO.openSource.verifiedRepos.map((repo) => (
                <div
                  key={repo.name}
                  className="rounded-lg border border-border bg-card p-5 space-y-3 card-hover"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-foreground" />
                      <span className="font-mono text-sm font-bold text-foreground">
                        skhy-ai/{repo.name}
                      </span>
                    </div>
                    <span className="rounded-sm bg-secondary px-2 py-0.5 text-[10px] font-mono uppercase text-muted-foreground">
                      {repo.language} • Original Non-Forked
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {repo.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs">
                    <a
                      href={repo.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-foreground hover:underline"
                    >
                      View on GitHub <ExternalLink className="h-3 w-3" />
                    </a>
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" /> Verified Public Tool
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Corporate Registration & Location Anchor ── */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-12">
          <div className="max-w-2xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Corporate Credentials
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Direct Corporate Directory &amp; Office Locations
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              SKAND Technologies operates international sales and client engagements from Kuala
              Lumpur, Malaysia, supported by deep-tech defense R&amp;D facilities in Pune, India.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Kuala Lumpur Card */}
            <div className="rounded-lg border border-border/80 bg-background/80 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                  International Sales Office
                </span>
                <span
                  className="h-2 w-2 rounded-full bg-emerald-400"
                  title="Active Corporate Entity"
                />
              </div>
              <h3 className="text-sm font-bold text-foreground">
                {COMPANY_INFO.malaysiaEntity.legalName}
              </h3>
              <div className="text-xs font-mono text-muted-foreground">
                Registration No:{" "}
                <span className="text-foreground">
                  {COMPANY_INFO.malaysiaEntity.registrationNo}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                {COMPANY_INFO.malaysiaEntity.building}
                <br />
                {COMPANY_INFO.malaysiaEntity.street}
                <br />
                {COMPANY_INFO.malaysiaEntity.postalCode} {COMPANY_INFO.malaysiaEntity.city},{" "}
                {COMPANY_INFO.malaysiaEntity.country}
              </p>
              <div className="pt-2 flex items-center gap-3 text-xs">
                <a
                  href={COMPANY_INFO.contact.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-foreground hover:underline inline-flex items-center gap-1"
                >
                  WhatsApp: +60123172237 <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </div>
            </div>

            {/* Pune Headquarters Card */}
            <div className="rounded-lg border border-border/80 bg-background/80 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                  Global Headquarters &amp; R&amp;D
                </span>
                <span
                  className="h-2 w-2 rounded-full bg-emerald-400"
                  title="Active Corporate Entity"
                />
              </div>
              <h3 className="text-sm font-bold text-foreground">
                {COMPANY_INFO.indiaEntity.legalName}
              </h3>
              <div className="text-xs font-mono text-muted-foreground">
                Corporate Identification No (CIN):{" "}
                <span className="text-foreground">{COMPANY_INFO.indiaEntity.cin}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                {COMPANY_INFO.indiaEntity.building}
                <br />
                {COMPANY_INFO.indiaEntity.street}
                <br />
                {COMPANY_INFO.indiaEntity.city}, {COMPANY_INFO.indiaEntity.state}{" "}
                {COMPANY_INFO.indiaEntity.postalCode}, {COMPANY_INFO.indiaEntity.country}
              </p>
              <div className="pt-2 flex items-center gap-3 text-xs">
                <a
                  href={`tel:${COMPANY_INFO.contact.phoneIndia}`}
                  className="font-medium text-foreground hover:underline inline-flex items-center gap-1"
                >
                  Phone: {COMPANY_INFO.contact.phoneIndia}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-muted-foreground">
              Official Correspondence:{" "}
              <a
                href="mailto:contact@skhy.systems"
                className="text-foreground hover:underline font-mono"
              >
                contact@skhy.systems
              </a>
            </div>
            <Link to="/contact">
              <Button size="sm" className="text-xs">
                Open Contact Directory
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
