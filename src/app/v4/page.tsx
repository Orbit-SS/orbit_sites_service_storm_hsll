import Link from "next/link";

export default function V4() {
  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", background: "#FFFFFF", color: "#111827", minHeight: "100vh" }}>

      {/* Back */}
      <div style={{ background: "#F9FAFB", borderBottom: "1px solid #F3F4F6", padding: "0.4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Link href="/" style={{ color: "#9CA3AF", fontSize: "0.78rem", textDecoration: "none" }}>
            ← All variations
          </Link>
        </div>
      </div>

      {/* NAV */}
      <header style={{ background: "#fff", borderBottom: "1px solid #F3F4F6", position: "sticky", top: 0, zIndex: 40 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://hlsdeland.com/photos/HLSlogo-nobackground.png" alt="HLS" style={{ height: 32, width: "auto", filter: "hue-rotate(0deg) saturate(1)" }} />
            <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "#111827", letterSpacing: "0.02em" }}>Hoag Land Services</span>
          </div>
          <nav style={{ display: "flex", gap: "2rem" }}>
            {["About", "Services", "Portfolio", "Contact"].map(l => (
              <a key={l} href="#" style={{ color: "#6B7280", fontSize: "0.875rem", textDecoration: "none", fontWeight: 400 }}>{l}</a>
            ))}
          </nav>
          <a href="#" style={{ background: "#166534", color: "#fff", padding: "0.5rem 1.25rem", borderRadius: 6, fontWeight: 500, fontSize: "0.875rem", textDecoration: "none" }}>Get in touch</a>
        </div>
      </header>

      {/* HERO */}
      <section style={{ padding: "8rem 2rem 6rem", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ maxWidth: 720 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#D1FAE5", padding: "0.3rem 0.75rem", borderRadius: 100, marginBottom: "2rem" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#166534" }} />
            <span style={{ color: "#166534", fontSize: "0.78rem", fontWeight: 500 }}>Central Florida · DeLand, FL</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem,5vw,3.75rem)", fontWeight: 300, lineHeight: 1.15, margin: "0 0 1.5rem", color: "#111827", letterSpacing: "-0.02em" }}>
            Land services for<br />
            <span style={{ fontWeight: 700 }}>Central Florida</span><br />
            properties.
          </h1>
          <p style={{ color: "#6B7280", fontSize: "1.05rem", maxWidth: 480, lineHeight: 1.75, marginBottom: "3rem" }}>
            Site work, tree services, and fencing for residential and commercial properties. Serving DeLand, DeLeon Springs, and surrounding areas.
          </p>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
            <a href="#" style={{ background: "#166534", color: "#fff", padding: "0.75rem 1.75rem", borderRadius: 6, fontWeight: 500, fontSize: "0.9rem", textDecoration: "none" }}>Request an estimate</a>
            <a href="#services" style={{ color: "#166534", fontSize: "0.9rem", fontWeight: 500, textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem" }}>
              View services
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* IMAGE STRIP */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", height: 320, overflow: "hidden" }}>
        {["https://hlsdeland.com/photos/site1.JPEG", "https://hlsdeland.com/photos/tree5.JPEG", "https://hlsdeland.com/photos/fence5.jpeg"].map((src, i) => (
          <div key={i} style={{ overflow: "hidden", position: "relative" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <section id="services" style={{ padding: "7rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: "4rem" }}>
            <span style={{ color: "#166534", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>Services</span>
            <h2 style={{ fontSize: "2.25rem", fontWeight: 300, margin: "0.5rem 0 0", letterSpacing: "-0.02em", color: "#111827" }}>Three areas of <strong style={{ fontWeight: 700 }}>expertise.</strong></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#F3F4F6" }}>
            {[
              { title: "Site Services", label: "01", desc: "Land clearing, excavation, grading, building pads, roads, drainage, and environmental services from 1 to 100+ acres." },
              { title: "Tree Services", label: "02", desc: "ISA Certified Arborist. Safe removals, trimming, palm pruning, storm cleanup, and tree installation for any property." },
              { title: "Fence Services", label: "03", desc: "Wood, vinyl, and aluminum fencing. Perimeter, pasture, privacy, and pool fencing for residential and commercial clients." },
            ].map(s => (
              <div key={s.title} style={{ background: "#fff", padding: "2.5rem" }}>
                <span style={{ fontSize: "0.75rem", color: "#D1D5DB", fontWeight: 600, fontFamily: "monospace" }}>{s.label}</span>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 600, margin: "1rem 0 0.75rem", color: "#111827" }}>{s.title}</h3>
                <p style={{ color: "#6B7280", fontSize: "0.875rem", lineHeight: 1.7, margin: "0 0 1.5rem" }}>{s.desc}</p>
                <a href="#" style={{ color: "#166534", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
                  Details <span style={{ fontSize: "1rem" }}>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "6rem 2rem", background: "#F9FAFB", borderTop: "1px solid #F3F4F6", borderBottom: "1px solid #F3F4F6" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
          <div>
            <span style={{ color: "#166534", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>About</span>
            <h2 style={{ fontSize: "2.25rem", fontWeight: 300, margin: "0.5rem 0 1.5rem", letterSpacing: "-0.02em", lineHeight: 1.3 }}>
              Built on experience.<br /><strong style={{ fontWeight: 700 }}>Focused on results.</strong>
            </h2>
            <p style={{ color: "#6B7280", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.9rem" }}>
              Founded in 2019 by Tyler Hoag with over a decade of utility forestry and construction experience behind it. HLS grew from a single tractor service into a certified arborist tree service and full site operation.
            </p>
            <p style={{ color: "#6B7280", lineHeight: 1.8, marginBottom: "2rem", fontSize: "0.9rem" }}>
              Our team is knowledgeable, driven, and built to surpass expectations on every project.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {["ISA Certified Arborist", "Tree Risk Assessment Qualified", "Est. 2017", "DeLand, FL"].map(t => (
                <span key={t} style={{ background: "#F3F4F6", color: "#374151", fontSize: "0.78rem", padding: "0.3rem 0.75rem", borderRadius: 100 }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ aspectRatio: "4/3", overflow: "hidden", borderRadius: 8 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://hlsdeland.com/photos/site4.PNG" alt="Site work" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "8rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div style={{ width: 40, height: 2, background: "#166534", margin: "0 auto 2rem" }} />
          <h2 style={{ fontSize: "2.5rem", fontWeight: 300, letterSpacing: "-0.02em", margin: "0 0 1rem", lineHeight: 1.2 }}>
            Ready to start<br /><strong style={{ fontWeight: 700 }}>your project?</strong>
          </h2>
          <p style={{ color: "#6B7280", lineHeight: 1.75, marginBottom: "2.5rem" }}>
            Tell us about your property and goals — we&apos;ll follow up, ask any questions, and schedule a walkthrough.
          </p>
          <a href="#" style={{ background: "#166534", color: "#fff", padding: "0.85rem 2.5rem", borderRadius: 6, fontWeight: 500, fontSize: "0.95rem", textDecoration: "none", display: "inline-block" }}>Contact us</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#F9FAFB", borderTop: "1px solid #F3F4F6", padding: "3rem 2rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "2rem", marginBottom: "2.5rem" }}>
          <div>
            <p style={{ fontWeight: 600, color: "#111827", marginBottom: "0.5rem" }}>Hoag Land Services</p>
            <p style={{ color: "#9CA3AF", fontSize: "0.82rem", lineHeight: 1.6 }}>Site work, tree services, and fencing for residential &amp; commercial properties in Central Florida.</p>
          </div>
          <div>
            <p style={{ fontWeight: 500, color: "#374151", marginBottom: "0.75rem", fontSize: "0.85rem" }}>Services</p>
            {["Site Services", "Tree Services", "Fence Services"].map(s => (
              <a key={s} href="#" style={{ display: "block", color: "#9CA3AF", fontSize: "0.82rem", marginBottom: "0.35rem", textDecoration: "none" }}>{s}</a>
            ))}
          </div>
          <div>
            <p style={{ fontWeight: 500, color: "#374151", marginBottom: "0.75rem", fontSize: "0.85rem" }}>Contact</p>
            <p style={{ color: "#9CA3AF", fontSize: "0.82rem", marginBottom: "0.35rem" }}>(386) 561-0003</p>
            <p style={{ color: "#9CA3AF", fontSize: "0.82rem" }}>tyler@hlsdeland.com</p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: "1.25rem", fontSize: "0.78rem", color: "#D1D5DB" }}>
          © 2025 Hoag Land Services, LLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
