export default function Home() {
  const GH = "git" + "hub.com";
  const projects = [
    {
      title: "DesignSystemX",
      desc: "Production-grade React + TypeScript design system with 12+ reusable, accessible components, dark mode, and documentation.",
      stack: "React - TypeScript - Tailwind CSS",
      live: "https://designsystemx-ten.vercel.app/",
      gh: "https://" + GH + "/nettakiruri750/designsystemx",
    },
    {
      title: "AI Evaluation Dashboard",
      desc: "PhD-level project: AI evaluation dashboard with rubric scoring, dataset management, and research-grade reporting.",
      stack: "Next.js - TypeScript - Python",
      live: "https://ai-eval-psi.vercel.app/",
      gh: "https://" + GH + "/nettakiruri750/ai-eval",
    },
    {
      title: "MyFit",
      desc: "Fitness tracker with workout logging, progress charts, goals, and streaks.",
      stack: "Next.js - TypeScript - Charts",
      live: "#",
      gh: "#",
    },
    {
      title: "ShopNest",
      desc: "Full e-commerce experience: catalog, search, cart, checkout, and order summary.",
      stack: "Next.js - TypeScript - Tailwind CSS",
      live: "#",
      gh: "#",
    },
    {
      title: "InsightDash",
      desc: "Analytics dashboard with KPIs, charts, filters, and dark mode.",
      stack: "Next.js - TypeScript - Charts",
      live: "#",
      gh: "#",
    },
    {
      title: "A11yAudit",
      desc: "Accessibility checker: paste HTML, get WCAG issues, severity, and fix suggestions.",
      stack: "Next.js - TypeScript - WCAG",
      live: "#",
      gh: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-blue-600 font-semibold">NETTA WANGUI KIRURI</p>
        <h1 className="text-5xl font-bold mt-2">Senior Front-End Developer & UI/UX Designer</h1>
        <p className="text-slate-600 mt-4 max-w-2xl">
          I build clean, accessible, high-performance web applications in React, Next.js, and TypeScript.
          Doctoral foundation in Computer Science from Texas. Based in Euless, TX.
        </p>
        <div className="flex gap-3 mt-6 flex-wrap">
          <a href={"https://" + GH + "/nettakiruri750"} target="_blank" className="px-5 py-2.5 bg-slate-900 text-white rounded-lg">View on GH</a>
          <a href="mailto:Kirurinetta@gmail.com" className="px-5 py-2.5 bg-white border rounded-lg">Contact Me</a>
        </div>

        <h2 className="text-3xl font-bold mt-14 mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="bg-white p-6 rounded-xl shadow border">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-slate-600 mt-2">{p.desc}</p>
              <p className="text-sm text-blue-600 font-medium mt-3">{p.stack}</p>
              <div className="flex gap-3 mt-4">
                {p.live !== "#" ? (
                  <a href={p.live} target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">Live Demo</a>
                ) : (
                  <span className="px-4 py-2 bg-slate-200 text-slate-500 rounded-lg text-sm">Coming Soon</span>
                )}
                {p.gh !== "#" ? (
                  <a href={p.gh} target="_blank" className="px-4 py-2 border rounded-lg text-sm">View on GH</a>
                ) : (
                  <span className="px-4 py-2 border rounded-lg text-sm text-slate-400">GH Soon</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-white p-6 rounded-xl border">
          <h2 className="text-2xl font-bold">Education - Texas</h2>
          <p className="mt-3"><b>PhD - Computer Science</b> | University of Texas at Arlington | 2019 - 2023</p>
          <p><b>MS - Computer Science</b> | University of Texas at Dallas | 2016 - 2018</p>
          <p><b>BS - Computer Science</b> | University of Texas at Arlington | 2009 - 2013</p>
        </div>

        <p className="text-center text-slate-500 text-sm mt-10">
          Euless, TX | +1 (732) 609-5128 | Kirurinetta@gmail.com | linkedin.com/in/netta-kiruri-b0458b402
        </p>
      </div>
    </main>
  );
}