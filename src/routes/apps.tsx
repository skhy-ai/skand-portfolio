import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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
  Maximize2,
  Play,
  RotateCcw,
  Zap,
  Boxes,
  Code2,
  Atom,
  Eye,
} from "lucide-react";

export const Route = createFileRoute("/apps")({
  head: () => ({
    meta: [
      {
        title: "Interactive Simulators & Open-Source Engineering — SKAND Technologies",
      },
      {
        name: "description",
        content:
          "Launch interactive simulators and inspect verified open-source engineering systems developed by SKAND Technologies, including the GeoHy Lithographic Reactor Simulator, Skhy AI Mission Architect, TAMI-CAMA fusion digital twin, and Ultrasudo PQC desktop.",
      },
      {
        property: "og:title",
        content: "Interactive Simulators & Open Source — SKAND Technologies",
      },
      {
        property: "og:description",
        content:
          "Interactive subterranean reactors, tactical defense planners, and open-source fusion telemetry and post-quantum desktop systems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://skand.systems/apps" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Interactive Simulators & Open Source — SKAND Technologies",
      },
      {
        name: "twitter:description",
        content:
          "Launch the GeoHy Lithographic Reactor Simulator and explore TAMI-CAMA and Ultrasudo architectures.",
      },
    ],
    links: [{ rel: "canonical", href: "https://skand.systems/apps" }],
  }),
  component: AppsPage,
});

function AppsPage() {
  const [simulatorActive, setSimulatorActive] = useState(false);

  return (
    <div className="relative min-h-screen py-16 sm:py-24 overflow-hidden">
      {/* Background Grids */}
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-96 w-full max-w-7xl hero-glow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1 text-xs font-mono text-muted-foreground">
            <span className="flex h-1.5 w-1.5 rounded-full bg-foreground animate-pulse" />
            <span>Interactive Labs &amp; Open Source Architecture</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Simulators &amp; Open-Source Engineering Hub
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Directly test interactive subterranean physics simulators, inspect mission architecture
            wizards, and review high-assurance open-source stacks engineered for sovereign autonomy,
            nuclear fusion control, and post-quantum computing.
          </p>
        </div>

        {/* ── 1. Featured Production App: GeoHy Lithographic Reactor Simulator ── */}
        <section id="geohy-simulator" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-sm bg-secondary px-2 py-0.5 text-[10px] font-mono uppercase text-muted-foreground">
                  Production Web Application
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live Interactive App
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                GeoHy Lithographic Reactor Simulator
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Subterranean geological modeling application targeting 4 to 5 km lithospheric
                depths. Models natural serpentinization, CAPEX/OPEX drilling economics, and 30-year
                Hy10 gas yield curves.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant={simulatorActive ? "outline" : "default"}
                size="sm"
                onClick={() => setSimulatorActive(!simulatorActive)}
                className="text-xs"
              >
                {simulatorActive ? (
                  <>
                    <Eye className="mr-1.5 h-3.5 w-3.5" /> Show Static Preview
                  </>
                ) : (
                  <>
                    <Play className="mr-1.5 h-3.5 w-3.5" /> Launch Live Simulator
                  </>
                )}
              </Button>
              <a
                href="/apps/geohy-simulator.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground hover:bg-secondary transition-colors"
              >
                Fullscreen Window <Maximize2 className="h-3 w-3" />
              </a>
              <a
                href="https://geohy.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border/80 bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                geohy.com <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Interactive Frame / Preview Container */}
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
            {/* Browser / Terminal Chrome Top Bar */}
            <div className="flex items-center justify-between border-b border-border/80 bg-background/90 px-4 py-3 text-xs font-mono text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[11px] text-muted-foreground/80 hidden sm:inline">
                  geohy-lithographic-simulator.v10.app
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> Leaflet GIS Engine + Chart.js Physics
                </span>
              </div>
            </div>

            {/* Content Body: Either Interactive Iframe or Visual Preview */}
            {simulatorActive ? (
              <div className="relative aspect-[16/10] w-full bg-black min-h-[580px]">
                <iframe
                  src="/apps/geohy-simulator.html"
                  title="GeoHy Lithographic Reactor Simulator"
                  className="h-full w-full border-0"
                />
              </div>
            ) : (
              <div className="relative group aspect-[16/10] w-full bg-black/90 overflow-hidden min-h-[420px] max-h-[640px] flex items-center justify-center">
                <img
                  src="/images/websites/geohy-simulator-preview.png"
                  alt="GeoHy Lithographic Simulator Interactive Preview"
                  className="w-full h-full object-cover object-top opacity-90 transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent flex flex-col items-center justify-end p-8 text-center space-y-4">
                  <div className="max-w-md space-y-2">
                    <span className="rounded-full bg-foreground text-background px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider inline-block">
                      Simulator Ready
                    </span>
                    <h3 className="text-xl font-bold text-foreground">
                      Subterranean Hydrothermal &amp; FTT Modeling
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Control lateral drill paths, adjust mantle overburden depths, calculate
                      serpentinization heat transfer, and export project pro-forma.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button
                      size="default"
                      onClick={() => setSimulatorActive(true)}
                      className="text-xs font-semibold"
                    >
                      <Play className="mr-2 h-4 w-4" /> Run Live in Browser
                    </Button>
                    <a
                      href="/apps/geohy-simulator.html"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-secondary border border-border px-4 py-2 text-xs font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
                    >
                      Open Fullscreen Simulator <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Technical Specifications Bar */}
            <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border/60 border-t border-border/80 bg-background/50 p-4 text-xs">
              <div className="p-2 space-y-1">
                <strong className="text-foreground block font-mono text-[11px] uppercase tracking-wider">
                  Target Depth
                </strong>
                <span className="text-muted-foreground text-[11px]">
                  4.0 to 5.2 km lithospheric mantle interface
                </span>
              </div>
              <div className="p-2 space-y-1">
                <strong className="text-foreground block font-mono text-[11px] uppercase tracking-wider">
                  Geological Engine
                </strong>
                <span className="text-muted-foreground text-[11px]">
                  Ultramafic peridotite &amp; awaruite catalytic beds
                </span>
              </div>
              <div className="p-2 space-y-1">
                <strong className="text-foreground block font-mono text-[11px] uppercase tracking-wider">
                  Thermodynamics
                </strong>
                <span className="text-muted-foreground text-[11px]">
                  180°C - 350°C serpentinization driving ORC turbines
                </span>
              </div>
              <div className="p-2 space-y-1">
                <strong className="text-foreground block font-mono text-[11px] uppercase tracking-wider">
                  Fuel Yield
                </strong>
                <span className="text-muted-foreground text-[11px]">
                  Hy10 synthetic blend (H₂ + CH₄ pipeline-grade)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Defense Mission & Tactical Simulators ── */}
        <section className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Defense Intelligence &amp; Avionics Planners
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Tactical Mission Architecture Wizards
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Deterministic scenario simulators and wiring blueprint planners developed for Skhy AI
              defense operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Simulator 1: Skhy Mission Architect */}
            <div className="rounded-xl border border-border bg-card overflow-hidden flex flex-col justify-between card-hover">
              <div className="space-y-4">
                <div className="relative aspect-video bg-black/80 overflow-hidden border-b border-border/70">
                  <img
                    src="/images/products/mission-architect/mission_architect_map.png"
                    alt="Skhy Mission Architect Planning Wizard"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 rounded-sm bg-black/80 backdrop-blur-xs px-2.5 py-1 text-[10px] font-mono uppercase text-foreground border border-border/80">
                    Avionics &amp; Power Planner
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                      4-Phase UAV/UGV Wizard
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" /> Deterministic Output
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground">
                    Skhy AI Mission Architect &amp; Scenario Planner
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    A four-phase operational configuration wizard that translates defense mission
                    parameters into verifiable electronic wiring blueprints, power distribution
                    budgets, and persistent sensor profiles.
                  </p>

                  <ul className="space-y-1.5 text-xs text-muted-foreground pt-2">
                    <li className="flex items-center gap-2">
                      <Zap className="h-3.5 w-3.5 text-foreground shrink-0" />
                      <span>Automatic power budget calculation for high-draw avionics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FileCode2 className="h-3.5 w-3.5 text-foreground shrink-0" />
                      <span>Generates Mermaid wiring blueprints for manufacturing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Radio className="h-3.5 w-3.5 text-foreground shrink-0" />
                      <span>RF frequency allocation avoiding active radar interference</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-border/60 mt-4 flex items-center justify-between">
                <a
                  href="https://skhy.systems"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-foreground hover:underline"
                >
                  Inspect in Skhy AI <ExternalLink className="h-3 w-3" />
                </a>
                <span className="text-[10px] font-mono text-muted-foreground">
                  Proprietary Sovereign Stack
                </span>
              </div>
            </div>

            {/* Simulator 2: Skhy Threat Awareness Tactical Planner */}
            <div className="rounded-xl border border-border bg-card overflow-hidden flex flex-col justify-between card-hover">
              <div className="space-y-4">
                <div className="relative aspect-video bg-black/80 overflow-hidden border-b border-border/70">
                  <img
                    src="/images/products/threat-awareness/threat-awareness-planning-network.png"
                    alt="Skhy Threat Awareness Tactical Planner"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 rounded-sm bg-black/80 backdrop-blur-xs px-2.5 py-1 text-[10px] font-mono uppercase text-foreground border border-border/80">
                    Geospatial Radar Mesh
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                      Counter-UAS Sensor Coverage
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" /> Real-time Mesh
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground">
                    Skhy Threat Awareness Tactical Planner
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Interactive tactical engine computing coastal radar lines-of-sight, acoustic
                    blindspots, hostile intercept vectors, and automated field deployment
                    Bill-of-Materials (BOM).
                  </p>

                  <ul className="space-y-1.5 text-xs text-muted-foreground pt-2">
                    <li className="flex items-center gap-2">
                      <Activity className="h-3.5 w-3.5 text-foreground shrink-0" />
                      <span>Predictive hostile trajectory modeling with velocity decay</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="h-3.5 w-3.5 text-foreground shrink-0" />
                      <span>Zero-blindspot overlapping radar &amp; acoustic node placement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Terminal className="h-3.5 w-3.5 text-foreground shrink-0" />
                      <span>One-click BOM procurement export for field engineers</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-border/60 mt-4 flex items-center justify-between">
                <a
                  href="https://skhy.systems"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-foreground hover:underline"
                >
                  Inspect in Skhy AI <ExternalLink className="h-3 w-3" />
                </a>
                <span className="text-[10px] font-mono text-muted-foreground">
                  Proprietary Sovereign Stack
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Open Source Engineering Showcase (TAMI-CAMA, Ultrasudo, WSL Cleaner) ── */}
        <section id="opensource" className="space-y-8 border-t border-border/80 pt-16">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-mono text-muted-foreground">
              <Code2 className="h-3.5 w-3.5 text-foreground" />
              <span>Verified Systems Engineering</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Open-Source Engineering &amp; Architectures
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              SKAND Technologies designs mission-grade open-source systems spanning nuclear fusion
              quench protection, post-quantum private workstations, and system administrator
              tooling.
            </p>
          </div>

          <div className="space-y-8">
            {/* Project 1: TAMI-CAMA */}
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8 space-y-6 card-hover">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-border/70 pb-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded-sm bg-secondary px-2 py-0.5 text-[10px] font-mono uppercase text-muted-foreground">
                      Nuclear Fusion &amp; Industrial Control
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <Atom className="h-3.5 w-3.5" /> High-Assurance Architecture
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    TAMI-CAMA — Fusion Reactor Digital Twin &amp; Quench Kernel
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground">
                    Telemetry, Analytics, Monitoring &amp; Integration Architecture Stack
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-2">
                  <span className="rounded-md border border-border bg-background px-3 py-1 text-xs font-mono text-foreground">
                    Rust + Three.js + Protobuf
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Enterprise Instrumentation &amp; Control (I&amp;C) telemetry stack engineered for
                Quasi-Isodynamic (QI-HTS) Stellarators, Advanced Tokamaks, and Inertial Confinement
                Fusion (ICF). Designed under strict Purdue 6-Tier computer-integrated manufacturing
                isolation and IEC 62443 zero-trust conduits.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg border border-border/80 bg-background/70 p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-foreground font-mono font-bold text-xs">
                    <Boxes className="h-4 w-4" /> 3D WebGL Multi-Reactor Twin
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Interactive Three.js studio rendering real-time plasma currents, magnetic flux
                    surfaces, and 18 critical sensor telemetry feeds across Stellarator, Tokamak,
                    and ICF configurations.
                  </p>
                </div>

                <div className="rounded-lg border border-border/80 bg-background/70 p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-foreground font-mono font-bold text-xs">
                    <Zap className="h-4 w-4" /> Rust Level-1 Quench Kernel
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Deterministic zero-allocation MTCA.4 microsecond kernel executing
                    superconducting magnet quench detection with sub-50μs breaker actuation into
                    helium dump tanks.
                  </p>
                </div>

                <div className="rounded-lg border border-border/80 bg-background/70 p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-foreground font-mono font-bold text-xs">
                    <Activity className="h-4 w-4" /> 2D Interactive Sankey Balance
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Dynamic plasma energy flow calculator tracking RF heating injection, alpha
                    particle thermalization, Bremsstrahlung radiation losses, and net electrical
                    gain (Q_sci).
                  </p>
                </div>

                <div className="rounded-lg border border-border/80 bg-background/70 p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-foreground font-mono font-bold text-xs">
                    <FileCode2 className="h-4 w-4" /> Polymorphic Protocol Buffers
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Formal <code>skhy_telemetry.proto</code> schema handling high-frequency binary
                    serialization, Strawberry GraphQL telemetry gateways, and HDF5 scientific
                    archival.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Rust",
                    "Three.js",
                    "Python / FastAPI",
                    "Protocol Buffers",
                    "Strawberry GraphQL",
                    "HDF5",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm bg-secondary px-2 py-0.5 text-[10px] font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-[11px] font-mono text-muted-foreground">
                  Available under Sovereign &amp; Academic Licenses
                </span>
              </div>
            </div>

            {/* Project 2: Ultrasudo */}
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8 space-y-6 card-hover">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-border/70 pb-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded-sm bg-secondary px-2 py-0.5 text-[10px] font-mono uppercase text-muted-foreground">
                      Cybersecurity &amp; Workstations
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <Lock className="h-3.5 w-3.5" /> Post-Quantum Ready
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Ultrasudo — Private Post-Quantum Desktop Suite
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground">
                    Secure, Sovereign &amp; Zero-Telemetry Multi-Platform Workspace
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-2">
                  <span className="rounded-md border border-border bg-background px-3 py-1 text-xs font-mono text-foreground">
                    React 19 + Rust + Tauri
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                A private desktop suite engineered to eliminate corporate telemetry, third-party
                cloud syncing, and eavesdropping. Built on React 19, Rust, Electron, and Tauri, with
                native local post-quantum cryptographic primitives.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg border border-border/80 bg-background/70 p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-foreground font-mono font-bold text-xs">
                    <Shield className="h-4 w-4" /> Native Post-Quantum KEM
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Local Kyber-1024 Key Encapsulation Mechanism (ML-KEM) and AES-256-GCM vault
                    encryption safeguarding passwords, private notes, and sensitive portfolios.
                  </p>
                </div>

                <div className="rounded-lg border border-border/80 bg-background/70 p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-foreground font-mono font-bold text-xs">
                    <Cpu className="h-4 w-4" /> Dual Runtime Engine
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Operates seamlessly across full-featured Electron environments and ultra-lean,
                    zero-dependency Tauri Rust native binaries for constrained defense endpoints.
                  </p>
                </div>

                <div className="rounded-lg border border-border/80 bg-background/70 p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-foreground font-mono font-bold text-xs">
                    <Layers className="h-4 w-4" /> Consolidated Native Hubs
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Integrated Financial Intelligence Tracker, Productivity Hub (Kanban, Pomodoro,
                    Notes), and Health Suite with local SQLite offline storage.
                  </p>
                </div>

                <div className="rounded-lg border border-border/80 bg-background/70 p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-foreground font-mono font-bold text-xs">
                    <HardDrive className="h-4 w-4" /> Absolute Zero Telemetry
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    All network sockets are closed by default; news and market feeds are stripped of
                    tracking pixels, analytics cookies, and JavaScript fingerprints.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {["React 19", "Rust", "Tauri", "Electron", "Kyber-1024 PQC", "Chart.js"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-sm bg-secondary px-2 py-0.5 text-[10px] font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
                <span className="text-[11px] font-mono text-muted-foreground">
                  Verified Engineering Architecture
                </span>
              </div>
            </div>

            {/* Project 3: WSL Cleaner Utility */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 card-hover">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-mono text-base font-bold text-foreground flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-foreground" />
                    skhy-ai/wsl-linux-disk-manager-cleaner
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">
                    Language: Shell / PowerShell • Status: Original Public Repository
                  </span>
                </div>
                <a
                  href="https://github.com/skhy-ai/wsl-linux-disk-manager-cleaner"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-foreground hover:bg-foreground hover:text-background transition-colors shrink-0"
                >
                  View on GitHub <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                A custom developer utility engineered to audit and shrink dynamically expanding WSL2
                virtual disk files (<code>ext4.vhdx</code>) on Windows host machines, safely
                reclaiming tens of gigabytes of disk space without corrupting the Linux filesystem.
              </p>

              <div className="pt-2 border-t border-border/60 text-[11px] font-mono text-muted-foreground flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> Public &amp; Verifiable Source
                </span>
                <span>Verified Non-Forked skhy-ai Repository</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Mutual NDA & Governance Notice ── */}
        <section className="rounded-2xl border border-border bg-card/60 p-8 sm:p-10 text-center space-y-4">
          <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-secondary border border-border text-foreground mx-auto">
            <Lock className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold text-foreground">
            Sovereign Code Access &amp; Enterprise Governance
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            All proprietary defense AI code, Vidur model registries, and institutional capital deal
            rooms are strictly sequestered from public indices and provided only under Mutual
            Non-Disclosure Agreements (NDA) or sovereign defense procurement contracts.
          </p>
          <div className="pt-2 flex justify-center">
            <Link to="/contact">
              <Button size="sm" variant="default" className="text-xs">
                Request Mutual NDA &amp; System Access
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
