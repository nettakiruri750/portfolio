"use client";

export default function Portfolio() {
  return (
    <div style={{ minHeight: "100vh", background: "white", fontFamily: "system-ui, sans-serif", color: "#0F172A" }}>
      <header style={{ maxWidth: 1100, margin: "0 auto", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <b style={{ fontSize: 20 }}>Netta Kiruri</b>
        <div style={{ display: "flex", gap: 10 }}>
          <a href="https://github.com/nettakiruri750" target="_blank" style={{ background: "#0F172A", color: "white", padding: "10px 18px", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>View on GH</a>
          <a href="mailto:Kirurinetta@gmail.com" style={{ border: "1px solid #0F172A", padding: "10px 18px", borderRadius: 10, fontWeight: 700, textDecoration: "none", color: "#0F172A", fontSize: 14 }}>Contact Me</a>
        </div>
      </header>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 20px 10px" }}>
        <h1 style={{ fontSize: 38, margin: "0 0 10px" }}>Netta Wangui Kiruri</h1>
        <p style={{ fontSize: 18, fontWeight: 700, color: "#2563EB", margin: 0 }}>Software Engineer — Python, TypeScript, AI Evaluation, Systems & CAD</p>
        <p style={{ color: "#475569", maxWidth: 800, lineHeight: 1.6, fontSize: 16 }}>
          I build clean, scalable, maintainable systems in Python and TypeScript. Doctoral foundation in Computer Science from Texas. Expert in debugging complex systems, large codebase refactoring, legacy modernization, and CAD visualization. Based in Euless, TX.
        </p>
        <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
          <a href="https://github.com/nettakiruri750" target="_blank" style={{ background: "#0F172A", color: "white", padding: "12px 20px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>View on GH</a>
          <a href="mailto:Kirurinetta@gmail.com" style={{ border: "1px solid #0F172A", padding: "12px 20px", borderRadius: 10, fontWeight: 700, textDecoration: "none", color: "#0F172A" }}>Contact Me</a>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px" }}>
        <h2 style={{ fontSize: 34, margin: "0 0 24px" }}>Projects</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

          <div style={{ border: "1px solid #0F172A", borderRadius: 16, padding: 28 }}>
            <h3 style={{ fontSize: 24, margin: "0 0 12px" }}>CADViewer</h3>
            <p style={{ color: "#475569", lineHeight: 1.6, margin: "0 0 16px" }}>Web CAD viewer: layers, measurements, dimensions, zoom, grid. Click any object to see type, layer, size, area, and perimeter.</p>
            <p style={{ color: "#2563EB", margin: "0 0 20px" }}>TypeScript - Next.js - Canvas - CAD</p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://cadviewer-wheat.vercel.app/" target="_blank" style={{ background: "#2563EB", color: "white", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none" }}>Live Demo</a>
              <a href="https://github.com/nettakiruri750/cadviewer" target="_blank" style={{ border: "1px solid #0F172A", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none", color: "#0F172A" }}>View on GH</a>
            </div>
          </div>

          <div style={{ border: "1px solid #0F172A", borderRadius: 16, padding: 28 }}>
            <h3 style={{ fontSize: 24, margin: "0 0 12px" }}>LegacyLens</h3>
            <p style={{ color: "#475569", lineHeight: 1.6, margin: "0 0 16px" }}>Large codebase refactoring analyzer: paste legacy code, detect legacy patterns, get modern replacements, before/after, impact score, and migration plan.</p>
            <p style={{ color: "#2563EB", margin: "0 0 20px" }}>Python - TypeScript - Next.js</p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://legacy-lens-zeta.vercel.app/" target="_blank" style={{ background: "#2563EB", color: "white", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none" }}>Live Demo</a>
              <a href="https://github.com/nettakiruri750/legacylens" target="_blank" style={{ border: "1px solid #0F172A", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none", color: "#0F172A" }}>View on GH</a>
            </div>
          </div>

          <div style={{ border: "1px solid #0F172A", borderRadius: 16, padding: 28 }}>
            <h3 style={{ fontSize: 24, margin: "0 0 12px" }}>AI Evaluation Dashboard</h3>
            <p style={{ color: "#475569", lineHeight: 1.6, margin: "0 0 16px" }}>PhD-level project: AI evaluation dashboard with rubric scoring, dataset management, and research-grade reporting.</p>
            <p style={{ color: "#2563EB", margin: "0 0 20px" }}>Next.js - TypeScript - Python</p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://ai-eval-psi.vercel.app/" target="_blank" style={{ background: "#2563EB", color: "white", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none" }}>Live Demo</a>
              <a href="https://github.com/nettakiruri750/ai-eval" target="_blank" style={{ border: "1px solid #0F172A", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none", color: "#0F172A" }}>View on GH</a>
            </div>
          </div>

          <div style={{ border: "1px solid #0F172A", borderRadius: 16, padding: 28 }}>
            <h3 style={{ fontSize: 24, margin: "0 0 12px" }}>DesignSystemX</h3>
            <p style={{ color: "#475569", lineHeight: 1.6, margin: "0 0 16px" }}>Production-grade React + TypeScript design system with 12+ reusable, accessible components, dark mode, and documentation.</p>
            <p style={{ color: "#2563EB", margin: "0 0 20px" }}>React - TypeScript - Tailwind CSS</p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://designsystemx-ten.vercel.app/" target="_blank" style={{ background: "#2563EB", color: "white", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none" }}>Live Demo</a>
              <a href="https://github.com/nettakiruri750/designsystemx" target="_blank" style={{ border: "1px solid #0F172A", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none", color: "#0F172A" }}>View on GH</a>
            </div>
          </div>

          <div style={{ border: "1px solid #0F172A", borderRadius: 16, padding: 28 }}>
            <h3 style={{ fontSize: 24, margin: "0 0 12px" }}>MyFit</h3>
            <p style={{ color: "#475569", lineHeight: 1.6, margin: "0 0 16px" }}>Fitness tracker with workout logging, progress charts, goals, and streaks.</p>
            <p style={{ color: "#2563EB", margin: "0 0 20px" }}>Next.js - TypeScript - Charts</p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://myfit-fawn.vercel.app/" target="_blank" style={{ background: "#2563EB", color: "white", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none" }}>Live Demo</a>
              <a href="https://github.com/nettakiruri750/myfit" target="_blank" style={{ border: "1px solid #0F172A", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none", color: "#0F172A" }}>View on GH</a>
            </div>
          </div>

          <div style={{ border: "1px solid #0F172A", borderRadius: 16, padding: 28 }}>
            <h3 style={{ fontSize: 24, margin: "0 0 12px" }}>ShopNest</h3>
            <p style={{ color: "#475569", lineHeight: 1.6, margin: "0 0 16px" }}>Full e-commerce experience: catalog, search, cart, checkout, and order summary.</p>
            <p style={{ color: "#2563EB", margin: "0 0 20px" }}>Next.js - TypeScript - Tailwind CSS</p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://shopnest-delta-green.vercel.app/" target="_blank" style={{ background: "#2563EB", color: "white", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none" }}>Live Demo</a>
              <a href="https://github.com/nettakiruri750/shopnest" target="_blank" style={{ border: "1px solid #0F172A", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none", color: "#0F172A" }}>View on GH</a>
            </div>
          </div>

          <div style={{ border: "1px solid #0F172A", borderRadius: 16, padding: 28 }}>
            <h3 style={{ fontSize: 24, margin: "0 0 12px" }}>InsightDash</h3>
            <p style={{ color: "#475569", lineHeight: 1.6, margin: "0 0 16px" }}>Analytics dashboard with KPIs, charts, filters, and dark mode. Shows revenue, users, conversion, and engagement.</p>
            <p style={{ color: "#2563EB", margin: "0 0 20px" }}>Next.js - TypeScript - Charts</p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://insightdash-brown.vercel.app/" target="_blank" style={{ background: "#2563EB", color: "white", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none" }}>Live Demo</a>
              <a href="https://github.com/nettakiruri750/insightdash" target="_blank" style={{ border: "1px solid #0F172A", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none", color: "#0F172A" }}>View on GH</a>
            </div>
          </div>

          <div style={{ border: "1px solid #0F172A", borderRadius: 16, padding: 28 }}>
            <h3 style={{ fontSize: 24, margin: "0 0 12px" }}>A11yAudit</h3>
            <p style={{ color: "#475569", lineHeight: 1.6, margin: "0 0 16px" }}>Accessibility auditing tool: paste HTML, get WCAG issues, severity, and fix suggestions — with scores and reports.</p>
            <p style={{ color: "#2563EB", margin: "0 0 20px" }}>Next.js - TypeScript - WCAG</p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://a11yaudit-theta.vercel.app/" target="_blank" style={{ background: "#2563EB", color: "white", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none" }}>Live Demo</a>
              <a href="https://github.com/nettakiruri750/a11yaudit" target="_blank" style={{ border: "1px solid #0F172A", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none", color: "#0F172A" }}>View on GH</a>
            </div>
          </div>

          <div style={{ border: "1px solid #0F172A", borderRadius: 16, padding: 28 }}>
            <h3 style={{ fontSize: 24, margin: "0 0 12px" }}>Portfolio</h3>
            <p style={{ color: "#475569", lineHeight: 1.6, margin: "0 0 16px" }}>This portfolio — showcasing all 9 projects with Live Demo + GitHub links, responsive design, and dark mode.</p>
            <p style={{ color: "#2563EB", margin: "0 0 20px" }}>Next.js - TypeScript - Tailwind CSS</p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://portfolio-orpin-phi-9iz8ygptaq.vercel.app/" target="_blank" style={{ background: "#2563EB", color: "white", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none" }}>Live Demo</a>
              <a href="https://github.com/nettakiruri750/portfolio" target="_blank" style={{ border: "1px solid #0F172A", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none", color: "#0F172A" }}>View on GH</a>
            </div>
          </div>

        </div>
        <p style={{ textAlign: "center", color: "#64748B", fontSize: 13, marginTop: 40 }}>© 2026 Netta Kiruri • Euless, TX • Built with Next.js, TypeScript & Tailwind</p>
      </div>
    </div>
  );
}