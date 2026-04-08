import Link from "next/link";

export default function V5() {
  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", background: "#0A1628", color: "#F9FAFB", minHeight: "100vh" }}>

      {/* Back */}
      <div style={{ background: "#070F1C", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "0.4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Link href="/" style={{ color: "rgba(249,250,251,0.3)", fontSize: "0.78rem", textDecoration: "none" }}>
            ← All variations
          </Link>
        </div>
      </div>

      {/* NAV */}
      <header style={{ background: "rgba(10,22,40,0.9)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(5,150,105,0.15)", position: "sticky", top: 0, zIndex: 40 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://hlsdeland.com/photos/HLSlogo-nobackground.png" alt="HLS" style={{ height: 36, width: "auto", filter: "brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(95deg)" }} />
            <span style={{ fontWeight: 600, fontSize: "1rem", color: "#F9FAFB", letterSpacing: "0.04em" }}>Hoag Land Services</span>
          </div>
          <nav style={{ display: "flex", gap: "2rem" }}>
            {["About", "Services", "Portfolio", "Contact"].map(l => (
              <a key={l} href="#" style={{ color: "rgba(249,250,251,0.5)", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.15s" }}>{l}</a>
            ))}
          </nav>
          <a href="#" style={{
            background: "linear-gradient(135deg, #059669, #047857)",
            color: "#fff", padding: "0.5rem 1.5rem", borderRadius: 6,
            fontWeight: 600, fontSize: "0.875rem", textDecoration: "none",
            boxShadow: "0 0 20px rgba(5,150,105,0.3)"
          }}>Get Estimate</a>
        </div>
      </header>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "88vh", display: "flex", alignItems: "center", overflow: "hidden", padding: "6rem 2rem" }}>
        {/* Background image with overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(10,22,40,0.92) 40%, rgba(10,22,40,0.65)), url('https://hlsdeland.com/photos/logo_enhanced.png') center/cover no-repeat",
          zIndex: 0
        }} />
        {/* Glow effects */}
        <div style={{ position: "absolute", top: "20%", left: "5%", width: 500, height: 500, background: "radial-gradient(circle, rgba(5,150,105,0.1), transparent 70%)", zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: "10%", right: "10%", width: 300, height: 300, background: "radial-gradient(circle, rgba(217,119,6,0.08), transparent 70%)", zIndex: 0 }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(5,150,105,0.12)", border: "1px solid rgba(5,150,105,0.25)", padding: "0.35rem 1rem", borderRadius: 100, marginBottom: "2rem" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#059669", boxShadow: "0 0 8px rgba(5,150,105,0.8)" }} />
            <span style={{ color: "#34D399", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Central Florida Land Services</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.5rem,6vw,4.25rem)", fontWeight: 700, lineHeight: 1.1, margin: "0 0 1.5rem", maxWidth: 780, letterSpacing: "-0.02em" }}>
            Precision land services for<br />
            <span style={{ background: "linear-gradient(135deg, #34D399, #059669)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Central Florida</span>{" "}
            properties.
          </h1>
          <p style={{ color: "rgba(249,250,251,0.6)", fontSize: "1.05rem", maxWidth: 520, lineHeight: 1.75, marginBottom: "3rem" }}>
            Site work, tree services, and fencing for residential and commercial properties. Serving DeLand, DeLeon Springs, and surrounding areas.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
            <a href="#" style={{
              background: "linear-gradient(135deg, #059669, #047857)", color: "#fff",
              padding: "0.8rem 2rem", borderRadius: 8, fontWeight: 600, fontSize: "0.95rem",
              textDecoration: "none", boxShadow: "0 4px 20px rgba(5,150,105,0.35)"
            }}>Request Estimate</a>
            <a href="#" style={{
              border: "1px solid rgba(249,250,251,0.15)", color: "rgba(249,250,251,0.7)",
              padding: "0.8rem 2rem", borderRadius: 8, fontWeight: 500, fontSize: "0.95rem",
              textDecoration: "none", background: "rgba(255,255,255,0.04)"
            }}>View Services</a>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
            {[
              { n: "7+", l: "Years in Business" },
              { n: "ISA", l: "Certified Arborist" },
              { n: "3", l: "Service Divisions" },
            ].map(({ n, l }) => (
              <div key={l} style={{ borderLeft: "2px solid rgba(5,150,105,0.4)", paddingLeft: "1.25rem" }}>
                <p style={{ fontSize: "1.75rem", fontWeight: 700, color: "#34D399", margin: 0, lineHeight: 1 }}>{n}</p>
                <p style={{ fontSize: "0.75rem", color: "rgba(249,250,251,0.4)", margin: "0.25rem 0 0", letterSpacing: "0.06em" }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "7rem 2rem", background: "#070F1C" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: "4rem" }}>
            <span style={{ color: "#34D399", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em" }}>What We Do</span>
            <h2 style={{ fontSize: "2.25rem", fontWeight: 700, margin: "0.5rem 0 0", letterSpacing: "-0.02em" }}>Our Services</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {[
              { num: "01", title: "Site Services", accent: "#059669", glow: "rgba(5,150,105,0.15)", desc: "From land clearing to excavation, grading, building pads, drainage, and environmental services. 1 acre to 100+.", img: "https://hlsdeland.com/photos/site1.JPEG" },
              { num: "02", title: "Tree Services", accent: "#D97706", glow: "rgba(217,119,6,0.12)", desc: "ISA Certified Arborist on staff. Safe removals, trimming, palm pruning, storm cleanup, and tree installation.", img: "https://hlsdeland.com/photos/tree5.JPEG" },
              { num: "03", title: "Fence Services", accent: "#059669", glow: "rgba(5,150,105,0.15)", desc: "Wood, vinyl, and aluminum fencing for perimeter, pasture, privacy, pools, and commercial properties.", img: "https://hlsdeland.com/photos/fence5.jpeg" },
            ].map(s => (
              <div key={s.title} style={{
                background: "#0A1628",
                border: `1px solid rgba(255,255,255,0.06)`,
                borderRadius: 12, overflow: "hidden",
                transition: "border-color 0.2s"
              }}>
                <div style={{ aspectRatio: "16/9", overflow: "hidden", background: "#000", position: "relative" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.75 }} />
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${s.glow}, transparent)` }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,15,28,0.7), transparent 60%)" }} />
                </div>
                <div style={{ padding: "1.75rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                    <h3 style={{ fontWeight: 700, fontSize: "1.1rem", margin: 0, color: "#F9FAFB" }}>{s.title}</h3>
                    <span style={{ fontSize: "0.7rem", color: s.accent, fontFamily: "monospace", fontWeight: 700 }}>{s.num}</span>
                  </div>
                  <p style={{ color: "rgba(249,250,251,0.5)", fontSize: "0.875rem", lineHeight: 1.7, margin: "0 0 1.5rem" }}>{s.desc}</p>
                  <a href="#" style={{ color: s.accent, fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}>Learn more →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "7rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(5,150,105,0.2)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://hlsdeland.com/photos/site4.PNG" alt="Site work" style={{ width: "100%", display: "block" }} />
            </div>
            {/* Floating badge */}
            <div style={{
              position: "absolute", bottom: -20, right: -20,
              background: "linear-gradient(135deg, #059669, #047857)",
              borderRadius: 10, padding: "1rem 1.25rem",
              boxShadow: "0 8px 30px rgba(5,150,105,0.4)"
            }}>
              <p style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0, color: "#fff", lineHeight: 1 }}>ISA</p>
              <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.75)", margin: "0.2rem 0 0", letterSpacing: "0.08em" }}>CERTIFIED</p>
            </div>
          </div>
          <div>
            <span style={{ color: "#34D399", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em" }}>About HLS</span>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, margin: "0.5rem 0 1.5rem", letterSpacing: "-0.02em", lineHeight: 1.25 }}>
              A decade of experience.<br />A reputation built on the job.
            </h2>
            <p style={{ color: "rgba(249,250,251,0.55)", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.9rem" }}>
              Founded in 2019 by CEO Tyler Hoag, HLS built its foundation through over a decade of utility forestry and construction work. What started as a single tractor service has grown into a certified arborist tree service and full site operation.
            </p>
            <p style={{ color: "rgba(249,250,251,0.55)", lineHeight: 1.8, marginBottom: "2rem", fontSize: "0.9rem" }}>
              Backed by a team that is knowledgeable, driven, and built to surpass customer expectations on every property we touch.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              {["ISA Certified Arborist", "Tree Risk Assessment Qualified", "Site & Excavation", "All Fence Types"].map(t => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{ width: 16, height: 16, borderRadius: "50%", background: "rgba(5,150,105,0.15)", border: "1px solid rgba(5,150,105,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#059669" }} />
                  </div>
                  <span style={{ fontSize: "0.8rem", color: "rgba(249,250,251,0.55)" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "6rem 2rem", background: "#070F1C", borderTop: "1px solid rgba(5,150,105,0.1)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 300, background: "radial-gradient(ellipse, rgba(5,150,105,0.07), transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <span style={{ color: "#34D399", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em" }}>Start a Project</span>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 700, margin: "0.75rem 0 1rem", letterSpacing: "-0.02em" }}>Ready to get started?</h2>
          <p style={{ color: "rgba(249,250,251,0.5)", lineHeight: 1.75, marginBottom: "2.5rem" }}>
            Tell us about your property and what you&apos;re hoping to accomplish. We&apos;ll follow up, ask questions, and schedule a walkthrough.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#" style={{
              background: "linear-gradient(135deg, #059669, #047857)", color: "#fff",
              padding: "0.85rem 2.25rem", borderRadius: 8, fontWeight: 600, fontSize: "0.95rem",
              textDecoration: "none", boxShadow: "0 4px 20px rgba(5,150,105,0.35)"
            }}>Contact us</a>
            <a href="tel:+13865610003" style={{
              border: "1px solid rgba(249,250,251,0.15)", color: "rgba(249,250,251,0.7)",
              padding: "0.85rem 2.25rem", borderRadius: 8, fontWeight: 500, fontSize: "0.95rem",
              textDecoration: "none", background: "rgba(255,255,255,0.04)"
            }}>(386) 561-0003</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#040B17", borderTop: "1px solid rgba(255,255,255,0.04)", padding: "3rem 2rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "2rem", marginBottom: "2rem" }}>
          <div>
            <p style={{ fontWeight: 700, color: "#F9FAFB", marginBottom: "0.5rem", letterSpacing: "0.04em" }}>Hoag Land Services</p>
            <p style={{ color: "rgba(249,250,251,0.25)", fontSize: "0.82rem", lineHeight: 1.65 }}>Site work, tree services, and fencing for residential &amp; commercial properties across Central Florida.</p>
            <p style={{ color: "rgba(249,250,251,0.15)", fontSize: "0.75rem", marginTop: "0.75rem" }}>DeLand, FL · Est. 2017</p>
          </div>
          <div>
            <p style={{ fontWeight: 600, color: "rgba(249,250,251,0.4)", marginBottom: "0.75rem", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Services</p>
            {["Site Services", "Tree Services", "Fence Services"].map(s => (
              <a key={s} href="#" style={{ display: "block", color: "rgba(249,250,251,0.25)", fontSize: "0.82rem", marginBottom: "0.4rem", textDecoration: "none" }}>{s}</a>
            ))}
          </div>
          <div>
            <p style={{ fontWeight: 600, color: "rgba(249,250,251,0.4)", marginBottom: "0.75rem", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Contact</p>
            <p style={{ color: "rgba(249,250,251,0.25)", fontSize: "0.82rem", marginBottom: "0.35rem" }}>(386) 561-0003</p>
            <p style={{ color: "rgba(249,250,251,0.25)", fontSize: "0.82rem" }}>tyler@hlsdeland.com</p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1.25rem", fontSize: "0.75rem", color: "rgba(249,250,251,0.15)" }}>
          © 2025 Hoag Land Services, LLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
