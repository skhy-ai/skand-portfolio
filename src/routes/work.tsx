import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/company-info";
import {
  ExternalLink,
  Shield,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2,
  Lock,
  Flame,
  Radio,
  Server,
  Terminal,
  Activity,
  FileCode2,
  Sparkles,
  ChevronRight,
  HardDrive,
} from "lucide-react";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      {
        title: "Client Work & Case Studies — SKAND Technologies",
      },
      {
        name: "description",
        content:
          "Explore production engineering systems delivered by SKAND Technologies: Skhy AI (defense intelligence), Swarn Capital (institutional financing), GeoHy (lithospheric hydrogen reactors), and SecureShieldPQ (post-quantum cybersecurity).",
      },
      { property: "og:title", content: "Client Work & Case Studies — SKAND Technologies" },
      {
        property: "og:description",
        content:
          "Production platforms engineered by SKAND Technologies across defense AI, sovereign fintech, geochemical reactors, and post-quantum security.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://skand.systems/work" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Client Work & Case Studies — SKAND Technologies" },
      {
        name: "twitter:description",
        content: "In-depth case studies for Skhy AI, Swarn Capital, GeoHy, and SecureShieldPQ.",
      },
    ],
    links: [{ rel: "canonical", href: "https://skand.systems/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="relative min-h-screen py-16 sm:py-24 overflow-hidden">
      {/* Background Grids */}
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-96 w-full max-w-7xl hero-glow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1 text-xs font-mono text-muted-foreground">
            <span className="flex h-1.5 w-1.5 rounded-full bg-foreground" />
            <span>Production Portfolio</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Systems Architecture &amp; Client Deployments
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            High-assurance engineering developed for sovereign defense intelligence, bilateral
            institutional capital, deep-earth geochemical reactors, and quantum-ready threat
            sentinels.
          </p>
        </div>

        {/* ── Case Study 1: Skhy AI ── */}
        <section
          id="skhy"
          className="rounded-2xl border border-border bg-card p-6 sm:p-10 space-y-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border/80 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="rounded-sm bg-secondary px-2 py-0.5 text-[10px] font-mono uppercase text-muted-foreground">
                  Defense Intelligence &amp; Sovereign AI
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live System
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Skhy AI — Autonomous Systems &amp; Jamming-Resilient Defense Intelligence
              </h2>
              <p className="text-xs font-mono text-muted-foreground">
                Domain:{" "}
                <a
                  href="https://skhy.systems"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground hover:underline"
                >
                  skhy.systems
                </a>
              </p>
            </div>
            <a
              href="https://skhy.systems"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-xs font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              Visit Live Platform <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <p>
                Skhy AI is an end-to-end sovereign defense intelligence architecture engineered to
                deliver real-time situational awareness, counter-UAS electronic warfare resilience,
                and autonomous mission control without cloud reliance.
              </p>

              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground pt-2">
                Key Subsystems &amp; Architectural Components:
              </h3>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5">
                  <Cpu className="h-4 w-4 text-foreground shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">
                      Vidur AI Execution Gateway (Port 8000):
                    </strong>{" "}
                    Central model registry managing on-premise GPU inference across 22 scientific
                    &amp; physical domains, VRAM guards, and Model Context Protocol (MCP) tool
                    dispatching.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Shield className="h-4 w-4 text-foreground shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">
                      DataC Acquisition &amp; Hygiene (Port 8002):
                    </strong>{" "}
                    Automated web, PDF, and RSS ingestion engine with heuristic malware sandboxing
                    and episodic vector indexing.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Radio className="h-4 w-4 text-foreground shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">
                      DataS Telemetry Streamer (Port 8001):
                    </strong>{" "}
                    High-throughput circular ring buffer handling live IoT, MQTT, and acoustic RF
                    signals with automated event triggers.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Activity className="h-4 w-4 text-foreground shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Threat Awareness Manager:</strong>{" "}
                    Geospatial tactical planning network that computes coastal radar coverage,
                    calculates hostile threat ETA, and outputs bill-of-materials (BOM)
                    configurations.
                  </div>
                </li>
              </ul>
            </div>

            {/* Embedded Verified Video Demo */}
            <div className="lg:col-span-6 space-y-3">
              <div className="overflow-hidden rounded-xl border border-border bg-black aspect-video relative">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/Z_lzV_X4cis?rel=0"
                  title="Vidur Manager Overview Video"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground px-1">
                <span>Verified Demo: Vidur Model Registry &amp; Pipelines</span>
                <span className="text-emerald-400">youtube-nocookie privacy mode</span>
              </div>
            </div>
          </div>

          {/* Real Skhy Product Gallery */}
          <div className="pt-4 border-t border-border/60">
            <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
              Validated System Diagrams &amp; Airframe Hardware
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="rounded-lg border border-border bg-background p-2 space-y-2">
                <img
                  src="/images/products/threat-awareness/threat-awareness-planning-network.png"
                  alt="Threat Awareness Planning Network"
                  className="rounded-md w-full aspect-video object-cover"
                  loading="lazy"
                />
                <div className="px-1 text-[11px] font-mono text-muted-foreground">
                  Threat Awareness Planning Network HUD
                </div>
              </div>
              <div className="rounded-lg border border-border bg-background p-2 space-y-2">
                <img
                  src="/images/products/delta_wing_drone.png"
                  alt="Delta Wing Drone Airframe"
                  className="rounded-md w-full aspect-video object-cover"
                  loading="lazy"
                />
                <div className="px-1 text-[11px] font-mono text-muted-foreground">
                  Delta Wing Interceptor Airframe (CFD)
                </div>
              </div>
              <div className="rounded-lg border border-border bg-background p-2 space-y-2">
                <img
                  src="/images/products/threat-awareness/coastal-planning.png"
                  alt="Coastal Planning Coverage"
                  className="rounded-md w-full aspect-video object-cover"
                  loading="lazy"
                />
                <div className="px-1 text-[11px] font-mono text-muted-foreground">
                  Coastal Radar &amp; Acoustic Sensor Mesh
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Case Study 2: Swarn Capital ── */}
        <section
          id="swarn"
          className="rounded-2xl border border-border bg-card p-6 sm:p-10 space-y-6"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border/80 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="rounded-sm bg-secondary px-2 py-0.5 text-[10px] font-mono uppercase text-muted-foreground">
                  Fintech &amp; Institutional Capital
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live Platform
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Swarn Capital — Sovereign &amp; Central Bank Financing Infrastructure
              </h2>
              <p className="text-xs font-mono text-muted-foreground">
                Domain:{" "}
                <a
                  href="https://swarncapital.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground hover:underline"
                >
                  swarncapital.com
                </a>
              </p>
            </div>
            <a
              href="https://swarncapital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-xs font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              Visit Live Platform <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <div className="rounded-lg border border-border/80 bg-background/60 p-5 space-y-2">
              <h3 className="text-xs font-mono font-bold uppercase text-foreground">
                Sovereign Asset Placements
              </h3>
              <p>
                Structured institutional capital placements and bilateral asset financing for
                sovereign states and central banks, executed strictly principal-to-principal under
                ECB frameworks and BIS guidelines.
              </p>
            </div>

            <div className="rounded-lg border border-border/80 bg-background/60 p-5 space-y-2">
              <h3 className="text-xs font-mono font-bold uppercase text-foreground">
                Corporate Credit Facilities (€5M+)
              </h3>
              <p>
                Direct corporate credit facilities and closed-loop supply chain financing
                underwritten on AAA offtakers, bypassing public syndicates or speculative retail
                roadshows.
              </p>
            </div>

            <div className="rounded-lg border border-border/80 bg-background/60 p-5 space-y-2">
              <h3 className="text-xs font-mono font-bold uppercase text-foreground">
                Zero-Leakage Deal Room
              </h3>
              <p>
                Confidential mandate orchestration with cryptographic document tracking, verifying
                counterparties through high-assurance digital credentials and tamper-evident audit
                logs.
              </p>
            </div>
          </div>
        </section>

        {/* ── Case Study 3: GeoHy ── */}
        <section
          id="geohy"
          className="rounded-2xl border border-border bg-card p-6 sm:p-10 space-y-6"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border/80 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="rounded-sm bg-secondary px-2 py-0.5 text-[10px] font-mono uppercase text-muted-foreground">
                  Deep Tech &amp; Clean Energy
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live Platform
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                GeoHy — Geological Hydrogen &amp; Lithospheric Reactors
              </h2>
              <p className="text-xs font-mono text-muted-foreground">
                Domain:{" "}
                <a
                  href="https://geohy.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground hover:underline"
                >
                  geohy.com
                </a>
              </p>
            </div>
            <a
              href="https://geohy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-xs font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              Visit Live Platform <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-xs text-muted-foreground leading-relaxed">
            <div className="rounded-lg border border-border/80 bg-background/60 p-4 space-y-2">
              <h3 className="font-mono font-bold uppercase text-foreground text-xs">
                Lithospheric Reactors
              </h3>
              <p>
                Targeting depths of 4 to 5 kilometers to leverage extreme hydrostatic pressures and
                high temperatures, triggering natural Fischer-Tropsch Type (FTT) synthesis.
              </p>
            </div>

            <div className="rounded-lg border border-border/80 bg-background/60 p-4 space-y-2">
              <h3 className="font-mono font-bold uppercase text-foreground text-xs">
                Natural Catalysts
              </h3>
              <p>
                Harnessing subterranean Awaruite and Magnetite minerals to catalyze high-density
                abiotic hydrocarbons and continuous geological hydrogen liberation.
              </p>
            </div>

            <div className="rounded-lg border border-border/80 bg-background/60 p-4 space-y-2">
              <h3 className="font-mono font-bold uppercase text-foreground text-xs">
                Exothermic Co-Generation
              </h3>
              <p>
                Capturing natural serpentinization heat to drive Organic Rankine Cycle (ORC)
                turbines for emission-free site power and local grid injection.
              </p>
            </div>

            <div className="rounded-lg border border-border/80 bg-background/60 p-4 space-y-2">
              <h3 className="font-mono font-bold uppercase text-foreground text-xs">
                Hy10 Baseload Gas
              </h3>
              <p>
                Producing a synthetic hydrogen and methane gas blend fully compatible with existing
                midstream pipeline transport without expensive retrofitting.
              </p>
            </div>
          </div>
        </section>

        {/* ── Case Study 4: SecureShieldPQ ── */}
        <section
          id="shieldpq"
          className="rounded-2xl border border-border bg-card p-6 sm:p-10 space-y-6"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border/80 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="rounded-sm bg-secondary px-2 py-0.5 text-[10px] font-mono uppercase text-muted-foreground">
                  Cybersecurity &amp; Post-Quantum
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live Platform
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                SecureShieldPQ — Workstation Threat Sentinel &amp; DAST Auditor
              </h2>
              <p className="text-xs font-mono text-muted-foreground">
                Domain:{" "}
                <a
                  href="https://shieldpq.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground hover:underline"
                >
                  shieldpq.com
                </a>{" "}
                • "Be Quantum Ready"
              </p>
            </div>
            <a
              href="https://shieldpq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-xs font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              Visit Live Platform <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <div className="rounded-lg border border-border/80 bg-background/60 p-5 space-y-2">
              <div className="flex items-center gap-2 text-foreground font-mono font-bold text-xs">
                <Lock className="h-4 w-4" /> Zero-Cloud-Egress Sentinel
              </div>
              <p>
                Desktop threat sentinel operating strictly on-premise without telemetry egress.
                Features two-stage verification eliminating false positives and a real-time
                streaming IPC HUD.
              </p>
            </div>

            <div className="rounded-lg border border-border/80 bg-background/60 p-5 space-y-2">
              <div className="flex items-center gap-2 text-foreground font-mono font-bold text-xs">
                <Shield className="h-4 w-4" /> Native DAST &amp; Post-Quantum Audit
              </div>
              <p>
                Zero-dependency Node.js dynamic security scanner verifying security headers (CSP,
                HSTS), TLS ciphers, and Post-Quantum hybrid algorithm readiness (Kyber / ML-KEM).
              </p>
            </div>

            <div className="rounded-lg border border-border/80 bg-background/60 p-5 space-y-2">
              <div className="flex items-center gap-2 text-foreground font-mono font-bold text-xs">
                <HardDrive className="h-4 w-4" /> Encrypted Quarantine Vault
              </div>
              <p>
                Automated file remediation with encrypted quarantine isolation (
                <code>userData/Quarantine/</code>), disarming malicious extensions and stripping
                malicious PDF scripts.
              </p>
            </div>
          </div>
        </section>

        {/* ── Verified Open Source Repositories ── */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-mono text-muted-foreground">
              <Terminal className="h-3.5 w-3.5 text-foreground" />
              <span>Public Code Repositories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Verified Public Code &amp; Enterprise Governance
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl">
              Following strict verification standards, only original non-forked public repositories
              created by <code>skhy-ai</code> are listed below.
            </p>
          </div>

          <div className="rounded-xl border border-border/90 bg-background/70 p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-mono text-base font-bold text-foreground flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-foreground" />
                  skhy-ai/wsl-linux-disk-manager-cleaner
                </h3>
                <span className="text-xs font-mono text-muted-foreground">
                  Language: Shell • Status: Original Public Repository
                </span>
              </div>
              <a
                href="https://github.com/skhy-ai/wsl-linux-disk-manager-cleaner"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Inspect on GitHub <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              A specialized utility engineered to audit and compact Windows Subsystem for Linux
              (WSL2) dynamically expanding virtual hard disk files (<code>ext4.vhdx</code>). Fixes
              the common Windows developer issue where deleting files inside Linux fails to reclaim
              drive space on the host machine.
            </p>

            <div className="pt-2 border-t border-border/60 text-[11px] font-mono text-muted-foreground flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" /> Public &amp; Verifiable Source
              </span>
              <span>Proprietary Defense Repositories: Protected under Mutual NDA</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
