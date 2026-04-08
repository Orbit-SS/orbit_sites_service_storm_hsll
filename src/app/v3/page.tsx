import Link from "next/link";

export default function V3() {
  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", background: "#FAF7F0", color: "#3B2F1E", minHeight: "100vh" }}>

      {/* Back */}
      <div style={{ background: "#3B2F1E", padding: "0.4rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Link href="/" style={{ color: "rgba(250,247,240,0.5)", fontSize: "0.78rem", textDecoration: "none", fontFamily: "system-ui, sans-serif" }}>
            ← All variations
          </Link>
        </div>
      </div>

      {/* NAV */}
      <header style={{ background: "#3B2F1E", borderBottom: "3px solid #8A7355", position: "sticky", top: 0, zIndex: 40 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://hlsdeland.com/photos/HLSlogo-nobackground.png" alt="HLS" style={{ height: 38, width: "auto", filter: "brightness(0) invert(1)" }} />
            <div>
              <p style={{ color: "#FAF7F0", fontWeight: 700, fontSize: "1rem", margin: 0, letterSpacing: "0.04em" }}>Hoag Land Services</p>
              <p style={{ color: "#8A7355", fontSize: "0.7rem", margin: 0, fontFamily: "system-ui, sans-serif", letterSpacing: "0.12em", textTransform: "uppercase" }}>Est. 2017 · DeLand, FL</p>
            </div>
          </div>
          <nav style={{ display: "flex", gap: "2rem", fontFamily: "system-ui, sans-serif" }}>
            {["About", "Services", "Portfolio", "Contact"].map(l => (
              <a key={l} href="#" style={{ color: "#C4A97A", fontSize: "0.85rem", textDecoration: "none", letterSpacing: "0.06em" }}>{l}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section style={{
        position: "relative",
        minHeight: "72vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(rgba(59,47,30,0.78), rgba(59,47,30,0.60)), url('https://hlsdeland.com/photos/site18.JPEG') center/cover no-repeat",
        padding: "6rem 1.5rem",
      }}>
        {/* Decorative border */}
        <div style={{ position: "absolute", inset: 20, border: "1px solid rgba(196,169,122,0.25)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
          <p style={{ color: "#C4A97A", fontFamily: "system-ui, sans-serif", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.78rem", marginBottom: "1.5rem" }}>
            Central Florida · Residential &amp; Commercial
          </p>
          <h1 style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)", fontWeight: 700, lineHeight: 1.25, margin: "0 0 1.25rem", color: "#FAF7F0", maxWidth: 680 }}>
            Land services rooted in<br />
            <em style={{ color: "#C4A97A", fontStyle: "italic" }}>craft and character.</em>
          </h1>
          <p style={{ color: "rgba(250,247,240,0.75)", fontSize: "1.05rem", maxWidth: 500, lineHeight: 1.75, marginBottom: "2.5rem", fontFamily: "system-ui, sans-serif", fontWeight: 300 }}>
            Site work, tree care, and fencing for properties across DeLand, DeLeon Springs, and surrounding Central Florida.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#" style={{ background: "#8A7355", color: "#FAF7F0", padding: "0.75rem 2rem", fontFamily: "system-ui, sans-serif", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", border: "1px solid #8A7355" }}>Request an estimate</a>
            <a href="#" style={{ border: "1px solid rgba(196,169,122,0.5)", color: "#C4A97A", padding: "0.75rem 2rem", fontFamily: "system-ui, sans-serif", fontWeight: 500, fontSize: "0.9rem", textDecoration: "none" }}>Our services</a>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <div style={{ background: "#F0EBE0", borderBottom: "1px solid #DDD4C0", padding: "1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: "3rem", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
          {["DeLand, FL", "Licensed & Insured", "ISA Certified Arborist", "(386) 561-0003"].map(t => (
            <span key={t} style={{ color: "#6B4E2A", fontSize: "0.85rem", fontFamily: "system-ui, sans-serif", letterSpacing: "0.05em" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section style={{ padding: "5.5rem 1.5rem", background: "#FAF7F0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "3rem" }}>
            <div style={{ width: 40, height: 2, background: "#8A7355" }} />
            <h2 style={{ fontSize: "1.85rem", fontWeight: 700, margin: 0, color: "#3B2F1E" }}>What We Offer</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {[
              { title: "Site Services", desc: "From land clearing to excavation, grading, and erosion control. We handle everything from a single acre to large-scale commercial projects.", img: "https://hlsdeland.com/photos/site1.JPEG", icon: "⛏" },
              { title: "Tree Services", desc: "ISA Certified Arborist on staff. Professional removals, trimming, palm pruning, storm cleanup, and new tree installation.", img: "https://hlsdeland.com/photos/tree5.JPEG", icon: "🌳" },
              { title: "Fence Services", desc: "Wood, vinyl, and aluminum fencing custom built for your property — perimeter, pasture, privacy, pool, and beyond.", img: "https://hlsdeland.com/photos/fence5.jpeg", icon: "🔨" },
            ].map(s => (
              <div key={s.title} style={{ background: "#fff", border: "1px solid #DDD4C0", overflow: "hidden" }}>
                <div style={{ aspectRatio: "3/2", overflow: "hidden", background: "#3B2F1E" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "1.5rem", borderTop: "3px solid #8A7355" }}>
                  <h3 style={{ fontWeight: 700, fontSize: "1.15rem", margin: "0 0 0.75rem", color: "#3B2F1E" }}>{s.title}</h3>
                  <p style={{ color: "#6B4E2A", fontSize: "0.9rem", margin: "0 0 1.25rem", lineHeight: 1.7, fontFamily: "system-ui, sans-serif", fontWeight: 300 }}>{s.desc}</p>
                  <a href="#" style={{ color: "#8A7355", fontSize: "0.85rem", fontFamily: "system-ui, sans-serif", fontWeight: 600, textDecoration: "none", letterSpacing: "0.05em" }}>Learn more →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "5rem 1.5rem", background: "#F0EBE0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ width: 3, height: 48, background: "#8A7355" }} />
              <h2 style={{ fontSize: "1.85rem", fontWeight: 700, margin: 0, color: "#3B2F1E", lineHeight: 1.3 }}>Our Story</h2>
            </div>
            <p style={{ color: "#6B4E2A", lineHeight: 1.85, marginBottom: "1rem", fontWeight: 300, fontFamily: "system-ui, sans-serif" }}>
              HLS officially came to life in 2019 by CEO Tyler Hoag — though the foundation was built many years before through over a decade of experience in utility forestry and construction.
            </p>
            <p style={{ color: "#6B4E2A", lineHeight: 1.85, marginBottom: "2rem", fontWeight: 300, fontFamily: "system-ui, sans-serif" }}>
              What began as a single tractor service has grown into a certified arborist tree service and full site operation, backed by knowledgeable, driven, and durable team members.
            </p>
            <a href="#" style={{ background: "#3B2F1E", color: "#FAF7F0", padding: "0.75rem 1.75rem", fontFamily: "system-ui, sans-serif", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>Meet the team →</a>
          </div>
          <div>
            <div style={{ border: "1px solid #DDD4C0", padding: "1.5rem", background: "#fff" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://hlsdeland.com/photos/site4.PNG" alt="Site work" style={{ width: "100%", display: "block" }} />
            </div>
            <p style={{ fontSize: "0.78rem", color: "#8A7355", fontFamily: "system-ui, sans-serif", marginTop: "0.75rem", letterSpacing: "0.06em", textAlign: "right" }}>Site work, DeLand FL</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#3B2F1E", padding: "5rem 1.5rem", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", inset: 20, border: "1px solid rgba(196,169,122,0.2)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ color: "#C4A97A", fontFamily: "system-ui, sans-serif", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.78rem", marginBottom: "1rem" }}>Get in touch</p>
          <h2 style={{ color: "#FAF7F0", fontSize: "2.25rem", fontWeight: 700, margin: "0 0 0.75rem" }}>Ready to walk your property?</h2>
          <p style={{ color: "rgba(250,247,240,0.6)", marginBottom: "2.5rem", fontFamily: "system-ui, sans-serif", fontWeight: 300 }}>Tell us about your project and we&apos;ll get back to you promptly.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#" style={{ background: "#8A7355", color: "#FAF7F0", padding: "0.75rem 2.5rem", fontFamily: "system-ui, sans-serif", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>Contact Us</a>
            <a href="tel:+13865610003" style={{ border: "1px solid rgba(196,169,122,0.4)", color: "#C4A97A", padding: "0.75rem 2.5rem", fontFamily: "system-ui, sans-serif", fontWeight: 500, fontSize: "0.95rem", textDecoration: "none" }}>(386) 561-0003</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#2A2015", padding: "2.5rem 1.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "2rem", marginBottom: "2rem" }}>
          <div>
            <p style={{ color: "#C4A97A", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>Hoag Land Services</p>
            <p style={{ color: "#6B5A3A", fontSize: "0.82rem", lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>Site work, tree services, and fencing for residential &amp; commercial properties in Central Florida.</p>
          </div>
          <div>
            <p style={{ color: "#8A7355", fontFamily: "system-ui, sans-serif", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>Services</p>
            {["Site Services", "Tree Services", "Fence Services"].map(s => (
              <a key={s} href="#" style={{ display: "block", color: "#6B5A3A", fontSize: "0.82rem", marginBottom: "0.35rem", textDecoration: "none", fontFamily: "system-ui, sans-serif" }}>{s}</a>
            ))}
          </div>
          <div>
            <p style={{ color: "#8A7355", fontFamily: "system-ui, sans-serif", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>Contact</p>
            <p style={{ color: "#6B5A3A", fontSize: "0.82rem", fontFamily: "system-ui, sans-serif" }}>(386) 561-0003</p>
            <p style={{ color: "#6B5A3A", fontSize: "0.82rem", fontFamily: "system-ui, sans-serif" }}>tyler@hlsdeland.com</p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(138,115,85,0.2)", paddingTop: "1.25rem", fontSize: "0.75rem", color: "#4A3C27", fontFamily: "system-ui, sans-serif" }}>
          © 2025 Hoag Land Services, LLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
