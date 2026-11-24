import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/company-info";
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Building,
  Shield,
  ExternalLink,
  Copy,
  Check,
  Globe,
  ArrowRight,
  Terminal,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact & Corporate Directory — SKAND Technologies",
      },
      {
        name: "description",
        content:
          "Official contact details, corporate registration, and office coordinates for SKAND Technologies (SKAND TECHNOLOGIES SDN BHD, Kuala Lumpur & SKAND DEV TECHNOLOGIES OPC PVT LTD, Pune).",
      },
      { property: "og:title", content: "Contact & Corporate Directory — SKAND Technologies" },
      {
        property: "og:description",
        content:
          "Direct communication channels and registered office locations in Kuala Lumpur, Malaysia and Pune, India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://skand.systems/contact" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact & Corporate Directory — SKAND Technologies" },
      {
        name: "twitter:description",
        content:
          "Official contact directory and corporate registration credentials for SKAND Technologies.",
      },
    ],
    links: [{ rel: "canonical", href: "https://skand.systems/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="relative min-h-screen py-16 sm:py-24 overflow-hidden">
      {/* Background Grids */}
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-96 w-full max-w-7xl hero-glow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1 text-xs font-mono text-muted-foreground">
            <span className="flex h-1.5 w-1.5 rounded-full bg-foreground" />
            <span>Official Communications</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Contact &amp; Corporate Directory
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Direct communication channels, verified company registration credentials, and physical
            office coordinates for <strong>SKAND Technologies</strong>.
          </p>
        </div>

        {/* ── Direct Channels Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4 card-hover flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono uppercase text-muted-foreground">
                  Primary Channel
                </span>
              </div>
              <div>
                <h2 className="text-base font-bold text-foreground">Email Communications</h2>
                <p className="text-xs text-muted-foreground mt-1">
                  For corporate proposals, technical reviews, and project inquiries.
                </p>
              </div>
              <div className="pt-2 space-y-2">
                <div className="flex items-center justify-between rounded-md border border-border/80 bg-background/80 p-2.5 text-xs font-mono">
                  <span className="text-foreground">{COMPANY_INFO.contact.primaryEmail}</span>
                  <button
                    onClick={() =>
                      copyToClipboard(COMPANY_INFO.contact.primaryEmail, "primaryEmail")
                    }
                    className="text-muted-foreground hover:text-foreground transition-colors p-1"
                    title="Copy primary email"
                  >
                    {copiedKey === "primaryEmail" ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between rounded-md border border-border/80 bg-background/80 p-2.5 text-xs font-mono">
                  <span className="text-muted-foreground">
                    {COMPANY_INFO.contact.secondaryEmail}
                  </span>
                  <button
                    onClick={() =>
                      copyToClipboard(COMPANY_INFO.contact.secondaryEmail, "secondaryEmail")
                    }
                    className="text-muted-foreground hover:text-foreground transition-colors p-1"
                    title="Copy secondary email"
                  >
                    {copiedKey === "secondaryEmail" ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <a
              href={`mailto:${COMPANY_INFO.contact.primaryEmail}?subject=Project%20Inquiry%20-%20SKAND%20Technologies`}
              className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-xs font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              Compose Mail <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4 card-hover flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-foreground">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono uppercase text-muted-foreground">
                  Instant Messaging
                </span>
              </div>
              <div>
                <h2 className="text-base font-bold text-foreground">WhatsApp Direct</h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Direct line to our Malaysia executive desk for preliminary discussions.
                </p>
              </div>
              <div className="pt-2">
                <div className="flex items-center justify-between rounded-md border border-border/80 bg-background/80 p-2.5 text-xs font-mono">
                  <span className="text-foreground">{COMPANY_INFO.contact.whatsappMalaysia}</span>
                  <button
                    onClick={() =>
                      copyToClipboard(COMPANY_INFO.contact.whatsappMalaysia, "whatsapp")
                    }
                    className="text-muted-foreground hover:text-foreground transition-colors p-1"
                    title="Copy WhatsApp number"
                  >
                    {copiedKey === "whatsapp" ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <a
              href={COMPANY_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-secondary px-4 py-2 text-xs font-medium text-foreground hover:bg-secondary/80 transition-colors"
            >
              Open WhatsApp Chat <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Voice & Phone Card */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4 card-hover flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono uppercase text-muted-foreground">
                  Voice Line
                </span>
              </div>
              <div>
                <h2 className="text-base font-bold text-foreground">Direct Telephony</h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Connect directly with our engineering coordinators.
                </p>
              </div>
              <div className="pt-2 space-y-2">
                <div className="flex items-center justify-between rounded-md border border-border/80 bg-background/80 p-2.5 text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-muted-foreground block">India HQ:</span>
                    <span className="text-foreground">{COMPANY_INFO.contact.phoneIndia}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(COMPANY_INFO.contact.phoneIndia, "phoneIndia")}
                    className="text-muted-foreground hover:text-foreground transition-colors p-1"
                    title="Copy phone"
                  >
                    {copiedKey === "phoneIndia" ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between rounded-md border border-border/80 bg-background/80 p-2.5 text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-muted-foreground block">Malaysia Desk:</span>
                    <span className="text-foreground">{COMPANY_INFO.contact.phoneMalaysia}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(COMPANY_INFO.contact.phoneMalaysia, "phoneMY")}
                    className="text-muted-foreground hover:text-foreground transition-colors p-1"
                    title="Copy phone"
                  >
                    {copiedKey === "phoneMY" ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <a
              href={`tel:${COMPANY_INFO.contact.phoneIndia}`}
              className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-secondary px-4 py-2 text-xs font-medium text-foreground hover:bg-secondary/80 transition-colors"
            >
              Call India Hub <Phone className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* ── Official Registered Corporate Entities ── */}
        <section className="space-y-6">
          <div className="border-b border-border/80 pb-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground block mb-1">
              Legal Entities &amp; Physical Offices
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Corporate Registration &amp; Office Coordinates
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ── Malaysia Entity ── */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
                    Southeast Asia
                  </span>
                  <h3 className="text-lg font-bold text-foreground">
                    International Sales Office (Malaysia)
                  </h3>
                </div>
                <span className="rounded-sm bg-secondary px-2.5 py-1 text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Active Entity
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="text-[11px] font-mono text-muted-foreground block">
                    Legal Entity Name
                  </span>
                  <strong className="text-foreground text-sm font-semibold">
                    {COMPANY_INFO.malaysiaEntity.legalName}
                  </strong>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-muted-foreground block">
                    Company Registration Number
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-mono font-medium text-foreground">
                      {COMPANY_INFO.malaysiaEntity.registrationNo}
                    </span>
                    <button
                      onClick={() =>
                        copyToClipboard(COMPANY_INFO.malaysiaEntity.registrationNo, "regMY")
                      }
                      className="text-muted-foreground hover:text-foreground transition-colors p-1"
                      title="Copy registration number"
                    >
                      {copiedKey === "regMY" ? (
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-muted-foreground block">
                    Office Address
                  </span>
                  <p className="text-muted-foreground leading-relaxed mt-0.5 font-mono text-xs">
                    {COMPANY_INFO.malaysiaEntity.building}
                    <br />
                    {COMPANY_INFO.malaysiaEntity.street}
                    <br />
                    {COMPANY_INFO.malaysiaEntity.postalCode} {COMPANY_INFO.malaysiaEntity.city},{" "}
                    {COMPANY_INFO.malaysiaEntity.country}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={COMPANY_INFO.malaysiaEntity.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:underline"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  View on Google Maps <ExternalLink className="h-3 w-3" />
                </a>
                <span className="text-[11px] font-mono text-muted-foreground">
                  In-Person Meetings by Appointment Only
                </span>
              </div>
            </div>

            {/* ── India Entity ── */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
                    South Asia &amp; R&amp;D
                  </span>
                  <h3 className="text-lg font-bold text-foreground">
                    Global Headquarters &amp; Defense Hub (India)
                  </h3>
                </div>
                <span className="rounded-sm bg-secondary px-2.5 py-1 text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Active Entity
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="text-[11px] font-mono text-muted-foreground block">
                    Legal Entity Name
                  </span>
                  <strong className="text-foreground text-sm font-semibold">
                    {COMPANY_INFO.indiaEntity.legalName}
                  </strong>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-muted-foreground block">
                    Corporate Identification Number (CIN)
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-mono font-medium text-foreground">
                      {COMPANY_INFO.indiaEntity.cin}
                    </span>
                    <button
                      onClick={() => copyToClipboard(COMPANY_INFO.indiaEntity.cin, "cinIndia")}
                      className="text-muted-foreground hover:text-foreground transition-colors p-1"
                      title="Copy CIN"
                    >
                      {copiedKey === "cinIndia" ? (
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-muted-foreground block">
                    Defense R&amp;D Hub Location
                  </span>
                  <p className="text-muted-foreground leading-relaxed mt-0.5 font-mono text-xs">
                    {COMPANY_INFO.indiaEntity.building}
                    <br />
                    {COMPANY_INFO.indiaEntity.street}
                    <br />
                    {COMPANY_INFO.indiaEntity.city}, {COMPANY_INFO.indiaEntity.state}{" "}
                    {COMPANY_INFO.indiaEntity.postalCode}, {COMPANY_INFO.indiaEntity.country}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-muted-foreground block">
                    Registered Corporate Office
                  </span>
                  <p className="text-muted-foreground leading-relaxed mt-0.5 font-mono text-xs">
                    {COMPANY_INFO.indiaEntity.registeredOffice}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-muted-foreground">
                  Direct Line:{" "}
                  <a
                    href={`tel:${COMPANY_INFO.contact.phoneIndia}`}
                    className="text-foreground font-mono hover:underline"
                  >
                    {COMPANY_INFO.contact.phoneIndia}
                  </a>
                </span>
                <span className="text-[11px] font-mono text-muted-foreground">
                  Secure High-Assurance R&amp;D Lab
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Enterprise Governance & NDA Note ── */}
        <section className="rounded-xl border border-border bg-secondary/30 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <h3 className="text-base font-bold text-foreground flex items-center gap-2">
              <Shield className="h-4 w-4 text-foreground" />
              Mutual Non-Disclosure &amp; Enterprise Procurement
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              For defense agencies, sovereign institutions, and institutional capital clients
              requiring mutual NDAs before sharing specifications or RFPs, contact our legal counsel
              directly at{" "}
              <a href="mailto:contact@skhy.systems" className="text-foreground hover:underline">
                contact@skhy.systems
              </a>
              .
            </p>
          </div>
          <a
            href="mailto:contact@skhy.systems?subject=Mutual%20NDA%20Request%20-%20SKAND%20Technologies"
            className="shrink-0"
          >
            <Button size="sm" variant="default" className="text-xs">
              Request Mutual NDA
            </Button>
          </a>
        </section>
      </div>
    </div>
  );
}
