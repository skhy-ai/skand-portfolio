// Centralized Single Source of Truth for SKAND Technologies Details & Legal Entities

export interface LegalEntity {
  title: string;
  legalName: string;
  registrationNo: string;
  locations: string[];
  registeredOffice?: string;
}

export const COMPANY_INFO = {
  name: "SKAND Technologies",
  brand: "SKAND.SYSTEMS",
  tagline: "Mission-Critical Software, Sovereign Defense Intelligence & Institutional Platforms",
  description:
    "Specialized engineering practice delivering sovereign defense intelligence, autonomous AI execution middleware, institutional financial platforms, and post-quantum cybersecurity.",

  // Malaysia International Sales Office & Entity
  malaysiaEntity: {
    title: "International Sales Office",
    legalName: "SKAND TECHNOLOGIES SDN BHD",
    registrationNo: "202601038169 (1700264-U)",
    locations: ["Kuala Lumpur", "Malaysia"],
    building: "1-19-03, Menara Bangkok Bank, Laman Sentral Berjaya",
    street: "No. 105, Jalan Ampang",
    postalCode: "50450",
    city: "Kuala Lumpur",
    country: "Malaysia",
    formattedAddress:
      "1-19-03, Menara Bangkok Bank, Laman Sentral Berjaya, No. 105, Jalan Ampang, 50450 Kuala Lumpur, Malaysia",
    mapsUrl: "https://maps.google.com/?q=Menara+Bangkok+Bank+Kuala+Lumpur",
  },

  // India Headquarters & R&D Entity
  indiaEntity: {
    title: "Global Headquarters & R&D",
    legalName: "SKAND DEV TECHNOLOGIES (OPC) PVT LTD",
    cin: "U62010UP2025OPC235270",
    locations: ["Pune, Maharashtra", "India"],
    building: "Pune Defense Innovation Hub",
    street: "R&D Corridor, Baner / Viman Nagar",
    postalCode: "411014",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    registeredOffice: "1386, Sheshpur, Maharajganj, Uttar Pradesh 273151, India",
    formattedAddress:
      "Pune Defense Innovation Hub, Baner / Viman Nagar, Pune, Maharashtra 411014, India",
  },

  // Direct Communication
  contact: {
    primaryEmail: "contact@skhy.systems",
    secondaryEmail: "contact@skhysignal.com",
    inquiryEmail: "contact@skhy.systems",
    phoneIndia: "+91-9335193489",
    phoneMalaysia: "+60123172237",
    whatsappMalaysia: "+60123172237",
    whatsappUrl:
      "https://wa.me/60123172237?text=Hello%20SKAND%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project.",
    website: "https://skand.systems",
  },

  // Featured Client Platforms
  clients: [
    {
      id: "skhy",
      name: "Skhy AI",
      url: "https://skhy.systems",
      domain: "skhy.systems",
      tagline: "Autonomous Systems Simplified & Jamming-Resilient Defense Intelligence",
      category: "Defense Intelligence & Sovereign AI",
      summary:
        "End-to-end multi-agent execution plane powered by Vidur, continuous threat intelligence scraping via DataC, and real-time RF/IoT streaming via DataS.",
      highlights: [
        "Vidur Execution Plane with multi-GPU model routing on port 8000",
        "Threat Awareness Manager with real-time situational coastal planning",
        "Zero-cloud-egress autonomous drone sensor fusion",
      ],
      videoId: "Z_lzV_X4cis",
      videoTitle: "Vidur Manager Overview & Task Execution",
      image: "/images/products/threat-awareness/threat-awareness-planning-network.png",
      previewImage: "/images/websites/skhy-preview.png",
    },
    {
      id: "swarn",
      name: "Swarn Capital",
      url: "https://swarncapital.com",
      domain: "swarncapital.com",
      tagline: "Institutional Capital & Sovereign State Financing",
      category: "Fintech & Institutional Capital",
      summary:
        "Bilateral asset financing and structured institutional capital placements for sovereign states, central banks, and corporate credit facilities (€5M+).",
      highlights: [
        "Principal-to-principal protocol executed under ECB & BIS frameworks",
        "Closed-loop supply chain financing underwritten on AAA offtakers",
        "Encrypted sovereign deal-room and private credit facility orchestration",
      ],
      image: null,
      previewImage: "/images/websites/swarncapital-preview.png",
    },
    {
      id: "geohy",
      name: "GeoHy",
      url: "https://geohy.com",
      domain: "geohy.com",
      tagline: "Geological Hydrogen & Lithospheric Reactors",
      category: "Deep Tech & Clean Energy",
      summary:
        "Targeting 4 to 5 km lithospheric depths to trigger natural Fischer-Tropsch Type (FTT) synthesis, producing synthetic Hy10 baseload fuel with organic Rankine cycle co-generation.",
      highlights: [
        "Lithospheric reactor mapping utilizing AI and robotics to mitigate HPHT drilling risks",
        "Natural serpentinization heat capture driving ORC turbines for site power",
        "Midstream pipeline-compatible Hy10 synthetic hydrogen/methane fuel blend",
      ],
      image: null,
      previewImage: "/images/websites/geohy-preview.png",
      simulatorUrl: "/apps/geohy-simulator.html",
      simulatorImage: "/images/websites/geohy-simulator-preview.png",
    },
    {
      id: "shieldpq",
      name: "SecureShieldPQ",
      url: "https://shieldpq.com",
      domain: "shieldpq.com",
      tagline: "Be Quantum Ready — Workstation Threat Sentinel & DAST Auditor",
      category: "Cybersecurity & Post-Quantum Cryptography",
      summary:
        "Zero-cloud-egress desktop threat sentinel and dynamic application security testing (DAST) engine engineered for defense workstations and edge appliances.",
      highlights: [
        "Two-stage verification eliminating false positives with streaming IPC HUD",
        "TLS cipher & Kyber/ML-KEM hybrid post-quantum readiness auditor",
        "Encrypted local Quarantine Vault with active file remediation",
      ],
      image: null,
      previewImage: "/images/websites/shieldpq-preview.png",
    },
  ],

  // Interactive Simulators & Apps Catalog
  simulators: [
    {
      id: "geohy-litho",
      title: "GeoHy Lithographic Reactor Simulator",
      category: "Clean Energy & Subterranean Physics",
      description:
        "Interactive geologic hydrogen modeling application targeting 4-5 km depths. Features dynamic Leaflet source (ultramafic), heat, and seal overlays, lateral drill path trajectory design, CAPEX/OPEX cost calculation, and 30-year Hy10 gas yield curves.",
      appUrl: "/apps/geohy-simulator.html",
      previewImage: "/images/websites/geohy-simulator-preview.png",
      badge: "Production Interactive App",
      tags: ["Leaflet Map", "FTT Synthesis", "CAPEX/OPEX Modeling", "Hy10 Yield Curves"],
      externalOrigin: "https://geohy.com",
    },
    {
      id: "skhy-mission-architect",
      title: "Skhy AI Mission Architect & Scenario Planner",
      category: "Defense Intelligence & Avionics",
      description:
        "4-phase mission configuration wizard for defense UAVs, rovers, and sensor meshes. Generates deterministic electronic wiring blueprints, power distribution budgets, and persistent scenario profiles.",
      previewImage: "/images/products/mission-architect/mission_architect_map.png",
      badge: "Scenario Architecture",
      tags: ["Mermaid Blueprint", "Power Budgeting", "RF Resilience", "Avionics Topology"],
      externalOrigin: "https://skhy.systems",
    },
    {
      id: "skhy-threat-awareness",
      title: "Skhy Threat Awareness Tactical Planner",
      category: "Counter-UAS & Situational Awareness",
      description:
        "Tactical sensor coverage planning engine modeling coastal radar lines-of-sight, acoustic sensor blindspot elimination, hostile threat ETA calculation, and automated deployment Bill-of-Materials (BOM).",
      previewImage: "/images/products/threat-awareness/threat-awareness-planning-network.png",
      badge: "Tactical Planning Engine",
      tags: ["Radar Mesh", "Hostile ETA", "Deployment BOM", "Edge Sensor Fusion"],
      externalOrigin: "https://skhy.systems",
    },
  ],

  // Open Source Engineering Projects
  openSourceProjects: [
    {
      id: "tami-cama",
      name: "TAMI-CAMA",
      subtitle: "Telemetry, Analytics, Monitoring & Integration Architecture Stack",
      category: "Nuclear Fusion & Industrial Control (I&C)",
      description:
        "Enterprise Instrumentation & Control (I&C) stack and multi-reactor digital twin for Quasi-Isodynamic (QI-HTS) Stellarators, Advanced Tokamaks, and Inertial Confinement Fusion (ICF). Engineered with an Obsidian Tactical C2 interface, strict Purdue 6-Tier architecture isolation, and IEC 62443 zero-trust conduits.",
      highlights: [
        "3D WebGL Multi-Reactor Digital Twin Studio (Stellarator, Tokamak, ICF) with Three.js",
        "2D Interactive Sankey Energy Flow Simulator computing net electrical gain (Q_sci)",
        "Level 1 Edge Quench Protection Kernel in Rust (<50μs breaker actuation into helium dump)",
        "Polymorphic Protocol Buffers schema (skhy_telemetry.proto) tracking 18 failure modes",
      ],
      techStack: [
        "Rust",
        "Three.js",
        "Python / FastAPI",
        "Protocol Buffers",
        "Strawberry GraphQL",
        "HDF5",
      ],
      status: "Verified Open Source Architecture",
    },
    {
      id: "ultrasudo",
      name: "Ultrasudo",
      subtitle: "Secure & Private Post-Quantum Desktop Workspace",
      category: "Cybersecurity & Operating Systems",
      description:
        "High-performance, secure, and purely private desktop environment built with React 19, Rust, Electron, and Tauri. Features native local Post-Quantum Cryptography (Kyber-1024, AES-256-GCM) protecting user credentials, notes, and datasets without telemetry egress.",
      highlights: [
        "Native Post-Quantum Security with local Kyber-1024 KEM and AES-256-GCM encryption",
        "Dual Runtime Support: Runs seamlessly across Electron and ultra-lightweight Tauri",
        "Consolidated Native Hubs: Finance Hub, Productivity Hub (Kanban/Pomodoro), and Health Suite",
        "Zero-tracking feeds stripped of telemetry, corporate tracking, and analytic scripts",
      ],
      techStack: ["React 19", "Rust", "Tauri", "Electron", "Kyber-1024 PQC", "Chart.js"],
      status: "Verified Open Source Architecture",
    },
    {
      id: "wsl-cleaner",
      name: "wsl-linux-disk-manager-cleaner",
      subtitle: "WSL2 Virtual Disk Compact & Storage Reclamation Utility",
      category: "Developer Tooling & System Administration",
      description:
        "Custom Linux/Windows utility script engineered by skhy-ai to audit, analyze, and shrink dynamically expanding WSL2 virtual hard disk files (ext4.vhdx) on Windows host machines, reclaiming gigabytes of disk space.",
      highlights: [
        "Automated ext4.vhdx size audit and unused sector trimming",
        "Safe disk shrinking without risking Linux distribution corruption",
        "One-command execution for development workstations",
      ],
      techStack: ["Shell", "PowerShell", "WSL2", "Hyper-V"],
      repoUrl: "https://github.com/skhy-ai/wsl-linux-disk-manager-cleaner",
      status: "Public GitHub Repository",
    },
  ],

  // Indicative MYR Pricing Tiers
  pricing: {
    core: [
      {
        id: "web-dev",
        title: "Website & Web Application Development",
        startingPriceMYR: "3,000",
        description:
          "Modern, responsive, high-speed corporate landing page or multi-page portal built with modern React / TanStack frameworks, SEO metadata, and semantic styling.",
        deliverables: [
          "Custom responsive UI/UX architecture",
          "SSR/SSG speed optimization & accessibility",
          "Complete Open Graph, Twitter & Schema.org SEO",
          "Continuous deployment setup",
        ],
      },
      {
        id: "stripe",
        title: "Stripe & Payment Gateway Integration",
        startingPriceMYR: "1,200",
        description:
          "Seamless checkout, customer portal, webhooks, and subscription lifecycle integration with Stripe.",
        deliverables: [
          "Stripe Checkout & Billing Customer Portal",
          "Webhook event handler & idempotent ledger",
          "Subscription tier management & invoice delivery",
          "Sandbox & production test verification",
        ],
      },
      {
        id: "database",
        title: "Database Architecture & Integration",
        startingPriceMYR: "1,800",
        description:
          "Robust relational database design and connection using PostgreSQL, Supabase, or Drizzle ORM with strict type safety.",
        deliverables: [
          "Normalized schema design & relational migrations",
          "Row Level Security (RLS) policies",
          "Indexing, search queries & connection pooling",
          "Automated backup configuration",
        ],
      },
      {
        id: "auth",
        title: "Authentication & Access Control",
        startingPriceMYR: "1,200",
        description:
          "Secure user registration, passwordless magic links, OAuth providers (Google, GitHub), and session token management.",
        deliverables: [
          "Email/Password & OAuth social login",
          "JWT session verification & cookie storage",
          "Protected route guards & role-based middleware",
          "Password reset & profile update flows",
        ],
      },
      {
        id: "courseware",
        title: "Educational Courseware & Tutorial Labs",
        startingPriceMYR: "2,000",
        description:
          "Interactive technical curriculum, interactive labs, code runner sandboxes, or modular LMS documentation portals.",
        deliverables: [
          "Structured course module navigation",
          "Interactive exercises & code snippet execution",
          "Progress tracking & completion state",
          "Downloadable cheat sheets & PDF export",
        ],
      },
    ],
    enterprise: [
      {
        id: "ent-platform",
        title: "Mission-Grade Web & Desktop Platforms",
        startingPriceMYR: "8,500+",
        description:
          "End-to-end full-stack architectures, high-concurrency portals, or cross-platform desktop applications (Electron/Tauri) with zero-cloud-egress guarantees.",
        deliverables: [
          "Multi-role enterprise RBAC & tenant isolation",
          "Native desktop packaging (Windows, macOS, Linux)",
          "Real-time WebSocket / SSE telemetry streaming",
          "Automated E2E test suites & CI/CD quality gates",
        ],
      },
      {
        id: "ent-payments",
        title: "Global Multi-Currency & Bilateral Financing Rails",
        startingPriceMYR: "3,500+",
        description:
          "Complex payment routing, multi-currency settlement, automated escrow workflows, and compliance reporting.",
        deliverables: [
          "Multi-provider failover (Stripe + regional gateways)",
          "Bilateral invoicing, VAT/SST reconciliation",
          "Custom billing quotas, metering & usage calculation",
          "Audit logs & tamper-evident transaction ledger",
        ],
      },
      {
        id: "ent-data",
        title: "High-Scale Database Clustering & Vector Stores",
        startingPriceMYR: "4,500+",
        description:
          "Distributed database architecture, read-replicas, pgvector semantic search embeddings, and high-throughput cache layers.",
        deliverables: [
          "High-availability clustering & automated failover",
          "Vector embedding pipelines for enterprise RAG",
          "Redis caching & rate-limiting microservices",
          "Zero-downtime database schema migration strategy",
        ],
      },
      {
        id: "ent-security",
        title: "Enterprise SSO & Post-Quantum Security Hardening",
        startingPriceMYR: "3,000+",
        description:
          "SAML 2.0 / OIDC enterprise Single Sign-On, Multi-Factor Authentication (TOTP/WebAuthn), and quantum-ready TLS configurations.",
        deliverables: [
          "Okta / Azure AD / Google Workspace SAML/SSO",
          "WebAuthn / FIDO2 hardware key authentication",
          "Post-quantum hybrid cipher readiness (Kyber / ML-KEM)",
          "Strict CSP, HSTS & CORS security header hardening",
        ],
      },
      {
        id: "ent-lms",
        title: "Full-Scale Interactive Simulation LMS",
        startingPriceMYR: "5,000+",
        description:
          "Comprehensive corporate training portals featuring real-time simulators, certification exams, and SCORM/xAPI compliant analytics.",
        deliverables: [
          "Custom interactive physics or software simulators",
          "Timed assessments, proctoring & certificate generation",
          "Manager dashboards & learner analytics reporting",
          "White-label institutional branding",
        ],
      },
    ],
    enterpriseAddons: [
      {
        title: "Custom Sovereign AI Chatbots & Agents",
        description:
          "Self-hosted LLMs, domain-specific retrieval-augmented generation (RAG), and private tool execution.",
      },
      {
        title: "Dynamic Application Security Testing (DAST)",
        description:
          "Automated vulnerability scanning, sensitive endpoint probing, and OWASP Top 10 remediation audit.",
      },
      {
        title: "Zero-Cloud-Egress / On-Premise GPU Deployments",
        description:
          "Air-gapped deployment configurations for high-security defense or proprietary banking workstations.",
      },
      {
        title: "Dedicated Mission Engineering SLA",
        description:
          "Priority 24/7 technical advisory, rapid incident response, and active architectural reviews.",
      },
    ],

    // Christmas & Year-End Bundle Offers (25% Total Discount) — 3-Tier Staircase Model
    christmasOffer: {
      title: "Christmas & Year-End Institutional Bundle Offer",
      badge: "25% Off Total • Christmas Offer",
      discountPercentage: 25,
      validNotice: "Valid for Q4 / Year-End Engagements Initiated by Dec 31",
      bundles: [
        {
          id: "tier-1-bundle",
          tierNumber: "Tier 1",
          title: "Tier 1: Core Growth Foundation",
          tierBadge: "Tier 1 Baseline",
          unbundledTotalMYR: "9,200",
          discountedPriceMYR: "6,900",
          savingsMYR: "2,300",
          summary: "Essential digital presence, transaction processing & secure user foundation.",
          description:
            "Complete digital presence and transaction stack: responsive custom web app, Stripe customer portal and billing, normalized database architecture, OAuth/JWT access control, and modular educational courseware.",
          includesPredecessor: null,
          includedServices: [
            "Website & Web Application Development (RM 3,000)",
            "Stripe & Payment Gateway Integration (RM 1,200)",
            "Database Architecture & Integration (RM 1,800)",
            "Authentication & Access Control (RM 1,200)",
            "Educational Courseware & Tutorial Labs (RM 2,000)",
          ],
          highlight: "Ideal for Startups & Fast-Scaling Tech Ventures",
        },
        {
          id: "tier-2-bundle",
          tierNumber: "Tier 2",
          title: "Tier 2: Advanced Infrastructure & Scale",
          tierBadge: "Tier 2 • Tier 1 + Advanced Features",
          unbundledTotalMYR: "24,500+",
          discountedPriceMYR: "18,375+",
          savingsMYR: "6,125+",
          summary: "Everything in Tier 1 PLUS 5 advanced mission-grade infrastructure systems.",
          description:
            "Builds directly on Tier 1 to deliver institutional sovereign architecture: cross-platform desktop platforms, multi-currency bilateral financing rails, high-scale distributed pgvector clustering, enterprise SAML SSO + Kyber post-quantum cryptography, and interactive simulation training LMS.",
          includesPredecessor:
            "Includes Everything in Tier 1 (Web, Payments, Database, Auth, Courseware)",
          extraFeaturesTitle: "What's Added in Tier 2 (Advanced Infrastructure):",
          includedServices: [
            "Mission-Grade Web & Desktop Platforms (RM 8,500+)",
            "Global Multi-Currency & Bilateral Financing Rails (RM 3,500+)",
            "High-Scale Database Clustering & Vector Stores (RM 4,500+)",
            "Enterprise SSO & Post-Quantum Security Hardening (RM 3,000+)",
            "Full-Scale Interactive Simulation LMS (RM 5,000+)",
          ],
          highlight: "Engineered for Scaling Platforms & Sovereign Systems",
        },
        {
          id: "tier-3-bundle",
          tierNumber: "Tier 3",
          title: "Tier 3: Sovereign Enterprise Master Suite",
          tierBadge: "Tier 3 • All Tier 2 + Enterprise Add-Ons",
          unbundledTotalMYR: "33,700+",
          discountedPriceMYR: "25,275+",
          savingsMYR: "8,425+",
          summary:
            "All Tier 1 & Tier 2 systems PLUS all 4 specialized sovereign add-on capabilities.",
          description:
            "The complete sovereign enterprise stack: combines all Tier 1 Core and Tier 2 Enterprise systems with air-gapped custom sovereign AI RAG chatbots, continuous DAST vulnerability auditing, zero-cloud-egress GPU hardware configuration, and 24/7 dedicated mission engineering SLA.",
          includesPredecessor: "Includes All Tier 1 Foundation + All Tier 2 Advanced Systems",
          extraFeaturesTitle: "What's Added in Tier 3 (Specialized Enterprise Add-Ons):",
          includedServices: [
            "Custom Sovereign AI Chatbots & Private Domain RAG",
            "Dynamic Application Security Testing (DAST) Vulnerability Auditing",
            "Zero-Cloud-Egress / On-Premise Air-Gapped GPU Deployments",
            "Dedicated 24/7 Mission Engineering SLA & Priority Architecture Advisory",
          ],
          highlight: "Ultimate Sovereign Stack (Save RM 8,425+ on All-Inclusive Scope)",
        },
      ],
    },
  },

  // Open Source Governance & Notice
  openSource: {
    enterpriseNotice:
      "Proprietary defense intelligence, Vidur execution middleware, and institutional financial engines are distributed exclusively under enterprise licensing or signed mutual non-disclosure agreements (NDA).",
  },
};
