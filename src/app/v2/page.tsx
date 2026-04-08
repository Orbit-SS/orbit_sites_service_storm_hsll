import Link from "next/link";

export default function V2() {
  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#0F1A0F", color: "#E5E7EB", minHeight: "100vh" }}>

      {/* Back */}
      <div style={{ background: "#0a110a", borderBottom: "1px solid rgba(74,222,128,0.1)", padding: "0.4rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Link href="/" style={{ color: "rgba(74,222,128,0.5)", fontSize: "0.78rem", textDecoration: "none", letterSpacing: "0.05em" }}>
            ← All variations
          </Link>
        </div>
      </div>

      {/* NAV */}
      <header style={{ background: "#0a110a", borderBottom: "2px solid #4ADE80", position: "sticky", top: 0, zIndex: 40 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <div style={{ width: 8, height: 36, background: "#4ADE80", borderRadius: 2 }} />
            <span style={{ fontWeight: 900, fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#fff" }}>HLS</span>
            <span style={{ fontWeight: 300, fontSize: "0.75rem", color: "#4ADE80", letterSpacing: "0.2em", textTransform: "uppercase", paddingLeft: "0.5rem", borderLeft: "1px solid rgba(74,222,128,0.3)" }}>Hoag Land Services</span>
          </div>
          <nav style={{ display: "flex", gap: "1.5rem" }}>
            {["About", "Services", "Portfolio", "Contact"].map(l => (
              <a key={l} href="#" style={{ color: "#9CA3AF", fontSize: "0.85rem", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>{l}</a>
            ))}
          </nav>
          <a href="#" style={{ background: "#4ADE80", color: "#0a110a", padding: "0.5rem 1.25rem", borderRadius: 2, fontWeight: 800, fontSize: "0.85rem", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.08em" }}>Get Quote</a>
        </div>
      </header>

      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", padding: "7rem 1rem 6rem" }}>
        {/* Grid overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(74,222,128,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(74,222,128,0.07), transparent)", zIndex: 0 }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.25)", padding: "0.3rem 1rem", borderRadius: 2, marginBottom: "1.5rem" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80" }} />
            <span style={{ color: "#4ADE80", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700 }}>Central Florida · Est. 2017</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", fontWeight: 900, lineHeight: 1.05, margin: "0 0 1.5rem", color: "#fff", maxWidth: 750, textTransform: "uppercase", letterSpacing: "-0.01em" }}>
            WE MOVE <span style={{ color: "#4ADE80" }}>LAND.</span>
            <br />WE CLEAR <span style={{ color: "#F59E0B" }}>TREES.</span>
            <br />WE BUILD <span style={{ color: "#fff" }}>FENCES.</span>
          </h1>
          <p style={{ color: "#6B7280", fontSize: "1rem", maxWidth: 480, lineHeight: 1.7, marginBottom: "2.5rem" }}>
            Residential &amp; commercial land services across DeLand, DeLeon Springs, and rural Central Florida.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#" style={{ background: "#4ADE80", color: "#0a110a", padding: "0.8rem 2rem", fontWeight: 800, fontSize: "0.9rem", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.08em", borderRadius: 2 }}>Get Free Estimate</a>
            <a href="#" style={{ border: "1px solid rgba(74,222,128,0.35)", color: "#4ADE80", padding: "0.8rem 2rem", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.08em", borderRadius: 2 }}>View Work</a>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: "3rem", marginTop: "4rem", flexWrap: "wrap" }}>
            {[["7+", "Years Operating"], ["3", "Service Divisions"], ["ISA", "Certified Arborist"]].map(([n, l]) => (
              <div key={l}>
                <p style={{ fontSize: "2rem", fontWeight: 900, color: "#4ADE80", margin: 0, lineHeight: 1 }}>{n}</p>
                <p style={{ fontSize: "0.75rem", color: "#6B7280", margin: "0.25rem 0 0", textTransform: "uppercase", letterSpacing: "0.1em" }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "5rem 1rem", background: "#0d160d", borderTop: "1px solid rgba(74,222,128,0.1)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", color: "#fff", margin: 0 }}>Services</h2>
            <div style={{ flex: 1, height: 1, background: "rgba(74,222,128,0.2)" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {[
              { label: "01", title: "Site Services", accent: "#4ADE80", desc: "Land clearing from 1 to 100+ acres. Excavation, grading, building pads, roads, ponds, erosion control, forestry mulching.", img: "https://hlsdeland.com/photos/site1.JPEG" },
              { label: "02", title: "Tree Services", accent: "#F59E0B", desc: "ISA Certified Arborist. Removals, trimming, palm pruning, storm cleanup, and tree installation across Central Florida.", img: "https://hlsdeland.com/photos/tree5.JPEG" },
              { label: "03", title: "Fence Services", accent: "#4ADE80", desc: "Wood, vinyl, and aluminum fencing. Perimeter, pasture, privacy, pool, estate. Residential and commercial.", img: "https://hlsdeland.com/photos/fence5.jpeg" },
            ].map(s => (
              <div key={s.title} style={{ border: `1px solid rgba(74,222,128,0.12)`, borderRadius: 4, overflow: "hidden", background: "#0F1A0F" }}>
                <div style={{ aspectRatio: "16/9", overflow: "hidden", background: "#000", position: "relative" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,26,15,0.8), transparent)" }} />
                  <span style={{ position: "absolute", top: 12, left: 12, color: s.accent, fontWeight: 900, fontSize: "0.75rem", letterSpacing: "0.15em", fontFamily: "monospace" }}>{s.label}</span>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h3 style={{ fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.75rem", color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.title}</h3>
                  <p style={{ color: "#6B7280", fontSize: "0.875rem", lineHeight: 1.7, margin: "0 0 1.25rem" }}>{s.desc}</p>
                  <a href="#" style={{ color: s.accent, fontSize: "0.8rem", fontWeight: 700, textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.1em" }}>Details →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "5rem 1rem", background: "#0a110a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div style={{ borderRadius: 4, overflow: "hidden", position: "relative" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://hlsdeland.com/photos/site4.PNG" alt="Site work" style={{ width: "100%", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(74,222,128,0.1), transparent)" }} />
          </div>
          <div>
            <span style={{ color: "#4ADE80", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em" }}>About HLS</span>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#fff", margin: "0.75rem 0 1.25rem" }}>Built on a decade of experience.</h2>
            <p style={{ color: "#6B7280", lineHeight: 1.8, marginBottom: "1rem" }}>
              Founded by CEO Tyler Hoag in 2019, HLS grew from a single tractor operation into a certified arborist tree service and full site service company.
            </p>
            <p style={{ color: "#6B7280", lineHeight: 1.8, marginBottom: "2rem" }}>
              Our team is knowledgeable, driven, and durable — built to surpass customer expectations on every property we touch.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              {["ISA Certified Arborist", "Tree Risk Assessment Qualified", "Site & Excavation", "Fencing & Perimeter"].map(t => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: 6, height: 6, background: "#4ADE80", borderRadius: 1, flexShrink: 0 }} />
                  <span style={{ fontSize: "0.8rem", color: "#9CA3AF" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 1rem", background: "#0F1A0F", borderTop: "1px solid rgba(74,222,128,0.12)", textAlign: "center" }}>
        <p style={{ color: "#4ADE80", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>Start a project</p>
        <h2 style={{ fontSize: "2.5rem", fontWeight: 900, textTransform: "uppercase", color: "#fff", margin: "0 0 0.75rem" }}>LET&apos;S TALK LAND.</h2>
        <p style={{ color: "#6B7280", marginBottom: "2.5rem" }}>Walk us through your property and goals — we&apos;ll take it from there.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="tel:+13865610003" style={{ background: "#4ADE80", color: "#0a110a", padding: "0.8rem 2rem", fontWeight: 800, fontSize: "0.9rem", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.08em", borderRadius: 2 }}>(386) 561-0003</a>
          <a href="mailto:tyler@hlsdeland.com" style={{ border: "1px solid rgba(74,222,128,0.35)", color: "#4ADE80", padding: "0.8rem 2rem", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.08em", borderRadius: 2 }}>tyler@hlsdeland.com</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#070e07", borderTop: "1px solid rgba(74,222,128,0.08)", padding: "2rem 1rem", color: "#374151" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <span style={{ fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "0.85rem", color: "#4ADE80" }}>HLS</span>
          <span style={{ fontSize: "0.75rem" }}>© 2025 Hoag Land Services. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
