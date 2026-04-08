"use client";
import Link from "next/link";

export default function V4() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600;700;800;900&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap');

        .v4-root * { box-sizing: border-box; margin: 0; padding: 0; }

        .v4-root {
          font-family: 'IBM Plex Sans', sans-serif;
          background: #f2ede6;
          color: #1a1a1a;
          overflow-x: hidden;
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .v4-slide-left { animation: slideInLeft 0.8s cubic-bezier(0.16,1,0.3,1) both; }
        .v4-slide-right { animation: slideInRight 0.8s cubic-bezier(0.16,1,0.3,1) both; }
        .v4-fade-up { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both; }

        .v4-btn-primary {
          display: inline-block;
          background: #D62B00;
          color: #fff;
          padding: 14px 42px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.2s;
        }
        .v4-btn-primary:hover {
          background: #b52200;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(214,43,0,0.4);
        }

        .v4-btn-secondary {
          display: inline-block;
          background: #1a1a1a;
          color: #f2ede6;
          padding: 14px 42px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.2s;
        }
        .v4-btn-secondary:hover {
          background: #333;
          transform: translateY(-2px);
        }

        .v4-service-block {
          position: relative;
          overflow: hidden;
          background: #1a1a1a;
          cursor: pointer;
          transition: all 0.3s;
          height: 440px;
        }
        .v4-service-block:hover { transform: translateY(-6px); }
        .v4-service-block:hover .v4-service-overlay { opacity: 1; }
        .v4-service-block:hover .v4-service-img { transform: scale(1.08); }

        .v4-service-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
          filter: grayscale(20%);
          position: absolute;
          inset: 0;
        }
        .v4-service-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.55);
          opacity: 0;
          transition: opacity 0.3s;
          display: flex;
          align-items: flex-end;
          padding: 24px;
          z-index: 3;
        }

        .v4-grid-line {
          position: absolute;
          background: rgba(26,26,26,0.08);
          pointer-events: none;
        }

        .v4-stat-block {
          padding: 32px;
          border-right: 2px solid rgba(26,26,26,0.1);
          text-align: center;
        }
        .v4-stat-block:last-child { border-right: none; }

        .v4-nav-link {
          color: #f2ede6;
          text-decoration: none;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .v4-nav-link:hover { color: #D62B00; }

        .v4-bold-tag {
          display: inline-block;
          background: #D62B00;
          color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 3px 12px;
        }
      `}} />

      <div className="v4-root">

        {/* BACK */}
        <div style={{ background: "#1a1a1a", padding: "4px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Link href="/" style={{ color: "rgba(242,237,230,0.45)", fontSize: "0.75rem", textDecoration: "none", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              ← All Variations
            </Link>
          </div>
        </div>

        {/* NAV */}
        <header style={{ background: "#1a1a1a", position: "sticky", top: 0, zIndex: 50, borderBottom: "3px solid #D62B00" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 66 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="HLS" style={{ height: 40, filter: "brightness(0) invert(1)" }} />
              <div style={{ width: 2, height: 36, background: "#D62B00" }} />
              <div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.3rem", fontWeight: 900, color: "#f2ede6", letterSpacing: "0.12em", textTransform: "uppercase", lineHeight: 1.1 }}>Hoag Land</div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.7rem", fontWeight: 500, color: "#999", letterSpacing: "0.3em", textTransform: "uppercase" }}>Services</div>
              </div>
            </div>
            <nav style={{ display: "flex", gap: 32 }}>
              {["About", "Services", "Portfolio", "Contact"].map(l => (
                <a key={l} href="#" className="v4-nav-link">{l}</a>
              ))}
            </nav>
            <a href="#" className="v4-btn-primary" style={{ padding: "10px 28px", fontSize: "1rem" }}>Get Quote</a>
          </div>
        </header>

        {/* HERO */}
        <section style={{ background: "#f2ede6", position: "relative", minHeight: "88vh", overflow: "hidden" }}>
          {/* Grid lines */}
          {[20, 40, 60, 80].map(p => (
            <div key={p} className="v4-grid-line" style={{ left: `${p}%`, top: 0, width: 1, height: "100%" }} />
          ))}
          {[25, 50, 75].map(p => (
            <div key={p} className="v4-grid-line" style={{ top: `${p}%`, left: 0, height: 1, width: "100%" }} />
          ))}

          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "88vh", alignItems: "stretch" }}>
            {/* Left: Typography */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "5rem 0 5rem", borderRight: "2px solid rgba(26,26,26,0.12)", paddingRight: 48 }}>
              <div style={{ marginBottom: 24 }}>
                <span className="v4-bold-tag">Central Florida</span>
                <span className="v4-bold-tag" style={{ background: "#003399", marginLeft: 4 }}>Est. 2017</span>
              </div>

              <div style={{ marginBottom: 32 }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(3.5rem, 7vw, 6.5rem)", lineHeight: 0.95, textTransform: "uppercase", letterSpacing: "-0.01em", color: "#1a1a1a" }}>
                  LAND<br />
                  <span style={{ color: "#D62B00" }}>CLEARED.</span><br />
                  TREES<br />
                  <span style={{ color: "#003399" }}>FELLED.</span><br />
                  FENCES<br />
                  BUILT.
                </div>
              </div>

              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#555", maxWidth: 400, marginBottom: 40 }}>
                Residential &amp; commercial land services across DeLand, DeLeon Springs, and Central Florida.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#" className="v4-btn-primary">Free Estimate</a>
                <a href="#" className="v4-btn-secondary">Our Services</a>
              </div>
            </div>

            {/* Right: Image + Stats */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ flex: 1, overflow: "hidden", minHeight: 400 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo_enhanced.png" alt="HLS" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(15%) contrast(1.1)" }} />
              </div>
              {/* Stats bar */}
              <div style={{ background: "#1a1a1a", display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
                {[["7+", "YEARS"], ["3", "SERVICES"], ["ISA", "CERTIFIED"]].map(([n, l]) => (
                  <div key={l} className="v4-stat-block" style={{ borderColor: "rgba(242,237,230,0.08)" }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2.5rem", fontWeight: 900, color: "#D62B00", lineHeight: 1 }}>{n}</div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.72rem", fontWeight: 600, color: "#666", letterSpacing: "0.2em", marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Background watermark */}
          <div style={{ position: "absolute", bottom: 60, left: 16, opacity: 0.04, pointerEvents: "none", zIndex: 0 }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "16rem", lineHeight: 1, color: "#1a1a1a" }}>HLS</div>
          </div>
        </section>

        {/* SERVICES */}
        <section style={{ background: "#1a1a1a", padding: "5rem 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "end", marginBottom: 60 }}>
              <div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.3em", color: "#D62B00", textTransform: "uppercase", marginBottom: 8 }}>
                  What We Do
                </div>
                <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "4rem", color: "#f2ede6", textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 1 }}>
                  Three<br />Divisions
                </h2>
              </div>
              <div style={{ borderBottom: "2px solid rgba(242,237,230,0.08)", paddingBottom: 8 }}>
                <p style={{ color: "#777", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: 480 }}>
                  From raw land to finished perimeter — every phase of exterior land improvement for residential and commercial properties.
                </p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, alignItems: "start" }}>
              {[
                { num: "I", title: "Site Services", desc: "Land clearing, excavation, grading, drainage, erosion control. From 1 to 100+ acres. Building pads, roads, ponds.", img: "/site1.JPEG", offset: 0 },
                { num: "II", title: "Tree Services", desc: "ISA Certified Arborist. Removals, trimming, palm pruning, storm cleanup, and full tree installation.", img: "/tree5.JPEG", offset: 40 },
                { num: "III", title: "Fence Services", desc: "Wood, vinyl, and aluminum fencing — perimeter, pasture, privacy, pool, and estate fencing.", img: "/fence5.jpeg", offset: 80 },
              ].map((s) => (
                <div key={s.title} className="v4-service-block" style={{ marginTop: s.offset }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="v4-service-img" src={s.img} alt={s.title} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.15) 60%)", zIndex: 1 }} />
                  <div className="v4-service-overlay">
                    <a href="#" style={{ color: "#D62B00", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}>
                      LEARN MORE →
                    </a>
                  </div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px", zIndex: 2 }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1rem", color: "#D62B00", letterSpacing: "0.2em", marginBottom: 8, textTransform: "uppercase" }}>Division {s.num}</div>
                    <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.6rem", color: "#fff", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10, lineHeight: 1.1 }}>{s.title}</h3>
                    <p style={{ color: "rgba(242,237,230,0.65)", fontSize: "0.82rem", lineHeight: 1.7 }}>{s.desc}</p>
                  </div>
                  <div style={{ position: "absolute", top: 8, right: 12, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "6rem", color: "rgba(255,255,255,0.04)", lineHeight: 1, pointerEvents: "none", zIndex: 1 }}>{s.num}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT — COLOR BLOCKED */}
        <section style={{ background: "#f2ede6" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 500 }}>
            <div style={{ overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/site4.PNG" alt="About" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(10%)" }} />
            </div>
            <div style={{ background: "#003399", padding: "4rem 3.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.3em", color: "rgba(242,237,230,0.5)", textTransform: "uppercase", marginBottom: 12 }}>About HLS</div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "3rem", color: "#f2ede6", textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1.1, marginBottom: 24 }}>
                A DECADE<br />OF DIRT.
              </h2>
              <p style={{ color: "rgba(242,237,230,0.7)", lineHeight: 1.8, marginBottom: 16, fontSize: "0.95rem" }}>
                Founded by CEO Tyler Hoag in 2019, HLS grew from a single tractor operation into a certified arborist tree service and full site company across Central Florida.
              </p>
              <p style={{ color: "rgba(242,237,230,0.7)", lineHeight: 1.8, marginBottom: 36, fontSize: "0.95rem" }}>
                Our team is knowledgeable, driven, and durable — built to surpass expectations on every property we touch.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["ISA Certified Arborist", "Tree Risk Assessment Qualified", "Central Florida Since 2017"].map(t => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 8, height: 8, background: "#D62B00", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "#f2ede6", letterSpacing: "0.05em", textTransform: "uppercase" }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#D62B00", padding: "5rem 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 48 }}>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.3em", color: "rgba(242,237,230,0.6)", textTransform: "uppercase", marginBottom: 12 }}>
                Start a Project
              </div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem,5vw,4.5rem)", color: "#f2ede6", textTransform: "uppercase", lineHeight: 1.05, letterSpacing: "0.02em" }}>
                LET&apos;S TALK LAND.
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <a href="tel:+13865610003" style={{ background: "#f2ede6", color: "#D62B00", padding: "16px 40px", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.2rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap", textAlign: "center" }}>
                (386) 561-0003
              </a>
              <a href="mailto:tyler@hlsdeland.com" style={{ background: "transparent", color: "#f2ede6", padding: "14px 40px", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", border: "2px solid rgba(242,237,230,0.4)", textAlign: "center" }}>
                tyler@hlsdeland.com
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: "#0d0d0d", padding: "3rem 24px", borderTop: "4px solid #D62B00" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="HLS" style={{ height: 36, filter: "brightness(0) invert(1) opacity(0.8)" }} />
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#f2ede6", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7 }}>Hoag Land Services</span>
            </div>
            <div style={{ display: "flex", gap: 24 }}>
              {["Site Services", "Tree Services", "Fence Services"].map(s => (
                <a key={s} href="#" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#555", fontSize: "0.9rem", textDecoration: "none", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{s}</a>
              ))}
            </div>
            <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#333", fontSize: "0.78rem" }}>
              © 2025 Hoag Land Services
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
