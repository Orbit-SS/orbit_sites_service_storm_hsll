import Link from "next/link";

export default function V1() {
  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif", color: "#2F2F2F", background: "#FFFFFF" }}>

      {/* Back */}
      <div style={{ background: "#2E7D32", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1rem" }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", textDecoration: "none", display: "inline-block", padding: "0.4rem 0" }}>
            ← All variations
          </Link>
        </div>
      </div>

      {/* NAV */}
      <header style={{ position: "sticky", top: 0, zIndex: 40, background: "#2E7D32", boxShadow: "0 2px 6px rgba(0,0,0,0.15)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://hlsdeland.com/photos/HLSlogo-nobackground.png" alt="HLS" style={{ height: 40, width: "auto" }} />
            <span style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Hoag Land Services</span>
          </div>
          <nav style={{ display: "flex", gap: "0.25rem" }}>
            {["About", "Services", "Portfolio", "Contact"].map(l => (
              <a key={l} href="#" style={{ color: "#fff", padding: "0.3rem 0.75rem", borderRadius: 999, fontSize: "0.9rem", textDecoration: "none" }}>{l}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section style={{
        position: "relative",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, rgba(11,44,25,0.72), rgba(11,44,25,0.52)), url('https://hlsdeland.com/photos/logo_enhanced.png') center/cover no-repeat",
        color: "#fff",
        padding: "5rem 1rem",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
          <span style={{
            display: "inline-block", background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.18)",
            padding: "0.25rem 1rem", borderRadius: 999, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: "1.25rem"
          }}>Central Florida · Est. 2017</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 1rem", maxWidth: 680 }}>
            Site work, tree services &amp; fencing for Central Florida properties.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", maxWidth: 520, margin: "0 0 2rem", lineHeight: 1.6 }}>
            Residential &amp; commercial land services across DeLand, DeLeon Springs, and surrounding areas.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="#" style={{ background: "#fff", color: "#2E7D32", padding: "0.65rem 1.5rem", borderRadius: 999, fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>Get a free estimate</a>
            <a href="#" style={{ border: "1px solid rgba(255,255,255,0.5)", color: "#fff", padding: "0.65rem 1.5rem", borderRadius: 999, fontWeight: 500, fontSize: "0.95rem", textDecoration: "none" }}>View services</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "5rem 1rem", background: "#F4F5F7" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.8rem", color: "#6B7280", marginBottom: "0.5rem" }}>What we do</p>
          <h2 style={{ fontSize: "1.9rem", fontWeight: 700, margin: "0 0 2.5rem", color: "#1F2933", borderBottom: "3px solid #B66E41", display: "inline-block", paddingBottom: "0.5rem" }}>Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              { title: "Site Services", desc: "Land clearing, grading, excavation, erosion control and environmental services from an acre to hundreds.", img: "https://hlsdeland.com/photos/site1.JPEG" },
              { title: "Tree Services", desc: "ISA Certified Arborist on staff. Removals, trimming, palm pruning and tree installation done safely.", img: "https://hlsdeland.com/photos/tree5.JPEG" },
              { title: "Fence Services", desc: "Wood, vinyl and aluminum fencing for perimeter, pasture, privacy and pool applications.", img: "https://hlsdeland.com/photos/fence5.jpeg" },
            ].map(s => (
              <div key={s.title} style={{ background: "#fff", borderRadius: 10, boxShadow: "0 6px 20px rgba(0,0,0,0.08)", overflow: "hidden", border: "1px solid #E5E7EB", position: "relative" }}>
                <div style={{ height: 6, background: "linear-gradient(90deg, #B66E41, rgba(182,110,65,0.2))" }} />
                <div style={{ aspectRatio: "16/10", overflow: "hidden", background: "#111" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <h3 style={{ fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.5rem", color: "#1F2933" }}>{s.title}</h3>
                  <p style={{ color: "#6B7280", fontSize: "0.9rem", margin: "0 0 1rem", lineHeight: 1.6 }}>{s.desc}</p>
                  <a href="#" style={{ color: "#B66E41", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}>Learn more →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section style={{ padding: "4rem 1rem", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
          <div>
            <p style={{ textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.8rem", color: "#6B7280", marginBottom: "0.5rem" }}>About HLS</p>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, margin: "0 0 1rem", color: "#1F2933" }}>Local, experienced land services in Central Florida.</h2>
            <p style={{ color: "#4B5563", lineHeight: 1.7, marginBottom: "1rem" }}>
              HLS officially came to life in 2019 by CEO Tyler Hoag — with over a decade of experience in utility forestry and construction behind it.
            </p>
            <p style={{ color: "#4B5563", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              What began as a single tractor service has grown into a certified arborist tree service and full site operation.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {["ISA Certified Arborist", "Tree Risk Assessment Qualified", "Est. 2017"].map(t => (
                <span key={t} style={{ background: "rgba(46,125,50,0.08)", color: "#2E7D32", fontSize: "0.8rem", padding: "0.25rem 0.75rem", borderRadius: 999 }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ borderRadius: 10, overflow: "hidden", boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://hlsdeland.com/photos/site4.PNG" alt="Site work" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{ background: "#2E7D32", padding: "3.5rem 1rem", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: "1.75rem", fontWeight: 700, margin: "0 0 0.75rem" }}>Ready to walk through your property?</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "1.75rem" }}>Tell us about your project and we&apos;ll schedule a time to visit.</p>
          <a href="#" style={{ background: "#fff", color: "#2E7D32", padding: "0.7rem 2rem", borderRadius: 999, fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>Contact us</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#101623", color: "#E5E7EB", padding: "3rem 1rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "2rem", marginBottom: "2rem" }}>
          <div>
            <p style={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#fff", marginBottom: "0.5rem" }}>Hoag Land Services</p>
            <p style={{ fontSize: "0.85rem", color: "#9CA3AF", lineHeight: 1.6 }}>Site work, tree services, and fencing for residential &amp; commercial properties.</p>
            <p style={{ fontSize: "0.8rem", color: "#6B7280", marginTop: "0.5rem" }}>Serving DeLand, DeLeon Springs &amp; surrounding Central Florida.</p>
          </div>
          <div>
            <p style={{ fontWeight: 600, color: "#fff", marginBottom: "0.75rem", fontSize: "0.9rem" }}>Services</p>
            {["Site Services", "Tree Services", "Fence Services"].map(s => (
              <a key={s} href="#" style={{ display: "block", color: "#9CA3AF", fontSize: "0.85rem", marginBottom: "0.4rem", textDecoration: "none" }}>{s}</a>
            ))}
          </div>
          <div>
            <p style={{ fontWeight: 600, color: "#fff", marginBottom: "0.75rem", fontSize: "0.9rem" }}>Contact</p>
            <p style={{ color: "#9CA3AF", fontSize: "0.85rem", marginBottom: "0.4rem" }}>(386) 561-0003</p>
            <p style={{ color: "#9CA3AF", fontSize: "0.85rem" }}>tyler@hlsdeland.com</p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(148,163,184,0.2)", paddingTop: "1.25rem", fontSize: "0.8rem", color: "#6B7280" }}>
          © 2025 Hoag Land Services. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
