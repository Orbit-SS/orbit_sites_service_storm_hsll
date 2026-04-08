"use client";
import Link from "next/link";

export default function V1() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .v1-root * { box-sizing: border-box; margin: 0; padding: 0; }

        .v1-root {
          font-family: 'Space Grotesk', sans-serif;
          background: #fff;
          color: #000;
          overflow-x: hidden;
        }

        /* Glitch effect */
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-3px, 2px); }
          40% { transform: translate(3px, -2px); }
          60% { transform: translate(-2px, -1px); }
          80% { transform: translate(2px, 1px); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes barFill {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .v1-headline:hover { animation: glitch 0.3s ease infinite; cursor: default; }
        .v1-marquee-inner { animation: marquee 18s linear infinite; }
        .v1-card:hover .v1-card-bar { animation: barFill 0.4s ease forwards; }
        .v1-btn-main {
          background: #FFE500;
          color: #000;
          border: 3px solid #000;
          padding: 14px 36px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.3rem;
          letter-spacing: 0.1em;
          text-decoration: none;
          display: inline-block;
          transition: all 0.1s;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
        }
        .v1-btn-main:hover { background: #000; color: #FFE500; transform: translate(2px, 2px); }
        .v1-btn-outline {
          background: transparent;
          color: #000;
          border: 3px solid #000;
          padding: 14px 36px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.3rem;
          letter-spacing: 0.1em;
          text-decoration: none;
          display: inline-block;
          transition: all 0.1s;
        }
        .v1-btn-outline:hover { background: #000; color: #fff; transform: translate(2px, 2px); }
        .v1-service-card {
          border: 3px solid #000;
          background: #fff;
          overflow: hidden;
          position: relative;
          transition: transform 0.1s;
        }
        .v1-service-card:hover { transform: translate(-4px, -4px); box-shadow: 4px 4px 0 #000; }
        .v1-service-card:nth-child(2) { margin-top: 40px; }
        .v1-tag {
          display: inline-block;
          background: #FFE500;
          border: 2px solid #000;
          padding: 2px 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .v1-nav-link {
          color: #fff;
          text-decoration: none;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.1rem;
          letter-spacing: 0.1em;
          padding: 4px 0;
          border-bottom: 3px solid transparent;
          transition: border-color 0.15s;
        }
        .v1-nav-link:hover { border-bottom-color: #FFE500; }
        .v1-fade-up { animation: fadeUp 0.7s ease both; }
      `}} />

      <div className="v1-root">

        {/* TICKER */}
        <div style={{ background: "#FFE500", borderBottom: "3px solid #000", overflow: "hidden", whiteSpace: "nowrap", padding: "8px 0" }}>
          <div className="v1-marquee-inner" style={{ display: "inline-flex", gap: "3rem" }}>
            {Array(6).fill(0).map((_, i) => (
              <span key={i} style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.95rem", letterSpacing: "0.2em", color: "#000" }}>
                SITE CLEARING &nbsp;✦&nbsp; TREE SERVICES &nbsp;✦&nbsp; FENCING &nbsp;✦&nbsp; ISA CERTIFIED &nbsp;✦&nbsp; CENTRAL FLORIDA &nbsp;✦&nbsp; EST. 2017 &nbsp;✦&nbsp;
              </span>
            ))}
          </div>
        </div>

        {/* BACK */}
        <div style={{ background: "#000", padding: "4px 20px" }}>
          <Link href="/" style={{ color: "#FFE500", fontSize: "0.75rem", fontWeight: 700, textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            ← Back to Variations
          </Link>
        </div>

        {/* NAV */}
        <header style={{ background: "#000", borderBottom: "4px solid #FFE500", position: "sticky", top: 0, zIndex: 50 }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="HLS" style={{ height: 42, width: "auto", filter: "invert(1) sepia(1) saturate(5) hue-rotate(5deg)" }} />
              <div style={{ borderLeft: "3px solid #FFE500", paddingLeft: 12 }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#FFE500", fontSize: "1.4rem", letterSpacing: "0.1em", lineHeight: 1 }}>HOAG LAND</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#fff", fontSize: "0.75rem", letterSpacing: "0.3em" }}>SERVICES</div>
              </div>
            </div>
            <nav style={{ display: "flex", gap: 32 }}>
              {["Services", "About", "Portfolio", "Contact"].map(l => (
                <a key={l} href="#" className="v1-nav-link">{l}</a>
              ))}
            </nav>
            <a href="#" className="v1-btn-main" style={{ padding: "10px 24px", fontSize: "1rem" }}>FREE QUOTE</a>
          </div>
        </header>

        {/* HERO */}
        <section style={{ position: "relative", minHeight: "88vh", display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>
          {/* Left: Text */}
          <div style={{ background: "#fff", padding: "5rem 3rem 5rem 2rem", display: "flex", flexDirection: "column", justifyContent: "center", borderRight: "6px solid #000", position: "relative", zIndex: 2 }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
              <span className="v1-tag">DeLand, FL</span>
              <span className="v1-tag">Est. 2017</span>
            </div>
            <h1 className="v1-headline" style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(4rem, 8vw, 7rem)",
              lineHeight: 0.95,
              color: "#000",
              letterSpacing: "0.02em",
              marginBottom: 24
            }}>
              WE DO
              <br /><span style={{ color: "#FFE500", WebkitTextStroke: "3px #000" }}>THE DIRTY</span>
              <br />WORK.
            </h1>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.1rem", lineHeight: 1.65, color: "#333", maxWidth: 420, marginBottom: 36, fontWeight: 400 }}>
              Site clearing, tree services, and fencing for Central Florida properties. Commercial &amp; residential. No job too big.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#" className="v1-btn-main">GET ESTIMATE</a>
              <a href="tel:+13865610003" className="v1-btn-outline">(386) 561-0003</a>
            </div>
            {/* Stats */}
            <div style={{ display: "flex", gap: 32, marginTop: 48, borderTop: "3px solid #000", paddingTop: 24 }}>
              {[["7+", "YRS"], ["3", "DIVISIONS"], ["ISA", "CERTIFIED"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.2rem", lineHeight: 1, color: "#000" }}>{n}</div>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: "#666", marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image with overlay */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo_enhanced.png" alt="HLS work" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(30%) contrast(1.1)" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, transparent 40%, rgba(255,229,0,0.35))" }} />
            {/* Big text overlay */}
            <div style={{ position: "absolute", bottom: 40, right: 24, textAlign: "right" }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "6rem", lineHeight: 0.9, color: "#FFE500", textShadow: "4px 4px 0 #000", opacity: 0.9 }}>
                SITE<br />TREE<br />FENCE
              </div>
            </div>
            {/* Red accent bar */}
            <div style={{ position: "absolute", top: 0, left: 0, width: 12, height: "100%", background: "#FF2200" }} />
          </div>
        </section>

        {/* SERVICES */}
        <section style={{ background: "#000", padding: "5rem 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 24, marginBottom: 48 }}>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.85rem", color: "#FFE500", letterSpacing: "0.3em" }}>WHAT WE DO</span>
              <div style={{ flex: 1, height: 3, background: "#FFE500" }} />
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "4rem", color: "#fff", letterSpacing: "0.05em", lineHeight: 1 }}>SERVICES</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}>
              {[
                { num: "01", title: "SITE SERVICES", desc: "Land clearing, excavation, grading, drainage, erosion control. From 1 acre to 100+. Building pads, roads, ponds, forestry mulching.", img: "/site1.JPEG", accent: "#FFE500" },
                { num: "02", title: "TREE SERVICES", desc: "ISA Certified Arborist on staff. Removals, trimming, palm pruning, storm cleanup, and tree installation done safely.", img: "/tree5.JPEG", accent: "#FF2200" },
                { num: "03", title: "FENCE SERVICES", desc: "Wood, vinyl, and aluminum fencing. Perimeter, pasture, privacy, pool, estate fencing — residential and commercial.", img: "/fence5.jpeg", accent: "#FFE500" },
              ].map((s, i) => (
                <div key={s.title} className="v1-service-card" style={{ borderColor: "#333", borderTop: `6px solid ${s.accent}`, marginTop: i === 1 ? 40 : 0, background: "#0a0a0a" }}>
                  <div style={{ aspectRatio: "4/3", overflow: "hidden", position: "relative" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(60%) contrast(1.2)", transition: "transform 0.3s, filter 0.3s" }}
                      onMouseOver={e => { (e.target as HTMLImageElement).style.filter = "grayscale(0%) contrast(1)"; (e.target as HTMLImageElement).style.transform = "scale(1.04)"; }}
                      onMouseOut={e => { (e.target as HTMLImageElement).style.filter = "grayscale(60%) contrast(1.2)"; (e.target as HTMLImageElement).style.transform = "scale(1)"; }}
                    />
                    <div style={{ position: "absolute", top: 12, left: 12, fontFamily: "'Bebas Neue', sans-serif", fontSize: "4rem", color: "rgba(255,255,255,0.12)", lineHeight: 1, pointerEvents: "none" }}>{s.num}</div>
                  </div>
                  <div style={{ padding: "24px 20px" }}>
                    <span className="v1-tag" style={{ background: s.accent, marginBottom: 12 }}>{s.num}</span>
                    <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", color: "#fff", letterSpacing: "0.05em", margin: "8px 0 12px" }}>{s.title}</h3>
                    <p style={{ color: "#999", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</p>
                    <a href="#" style={{ color: s.accent, fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", letterSpacing: "0.1em", textDecoration: "none" }}>READ MORE →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section style={{ background: "#FFE500", borderTop: "6px solid #000", borderBottom: "6px solid #000" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 500 }}>
            <div style={{ borderRight: "6px solid #000", overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/site4.PNG" alt="HLS work" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(40%) contrast(1.1)" }} />
            </div>
            <div style={{ padding: "4rem 3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ width: 40, height: 6, background: "#000" }} />
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.9rem", letterSpacing: "0.25em" }}>ABOUT HLS</span>
              </div>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3.5rem", lineHeight: 1, color: "#000", marginBottom: 24 }}>
                LOCAL.<br />EXPERIENCED.<br />BUILT TO LAST.
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#222", marginBottom: 16 }}>
                Founded by CEO Tyler Hoag in 2019, HLS grew from a single tractor operation into a certified arborist tree service and full site company.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#222", marginBottom: 28 }}>
                Our team is knowledgeable, driven, and durable — built to surpass customer expectations on every property we touch.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["ISA Certified Arborist", "Tree Risk Assessment Qualified", "Est. 2017", "Central Florida"].map(t => (
                  <span key={t} style={{ background: "#000", color: "#FFE500", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", fontWeight: 700, padding: "5px 14px", letterSpacing: "0.1em", textTransform: "uppercase" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#FF2200", padding: "5rem 24px", textAlign: "center", borderBottom: "6px solid #000" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 className="v1-headline" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem,6vw,5.5rem)", color: "#fff", lineHeight: 1, marginBottom: 16, WebkitTextStroke: "2px #000" }}>
              READY TO TALK?
            </h2>
            <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.9)", marginBottom: 36, fontWeight: 500 }}>
              Walk us through your property and goals — we&apos;ll take it from there.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+13865610003" style={{ background: "#FFE500", color: "#000", border: "4px solid #000", padding: "16px 40px", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", letterSpacing: "0.08em", textDecoration: "none" }}>
                (386) 561-0003
              </a>
              <a href="mailto:tyler@hlsdeland.com" style={{ background: "#000", color: "#FFE500", border: "4px solid #000", padding: "16px 40px", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", letterSpacing: "0.08em", textDecoration: "none" }}>
                EMAIL US
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: "#0a0a0a", borderTop: "4px solid #FFE500", padding: "3rem 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
            <div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "#FFE500", letterSpacing: "0.1em" }}>HOAG LAND SERVICES</div>
              <div style={{ color: "#555", fontSize: "0.8rem", letterSpacing: "0.1em", marginTop: 4 }}>DELAND, FL · (386) 561-0003 · TYLER@HLSDELAND.COM</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ display: "flex", gap: 24, marginBottom: 8 }}>
                {["Site Services", "Tree Services", "Fence Services"].map(s => (
                  <a key={s} href="#" style={{ color: "#666", fontSize: "0.8rem", textDecoration: "none", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>{s}</a>
                ))}
              </div>
              <div style={{ color: "#333", fontSize: "0.75rem" }}>© 2025 Hoag Land Services. All rights reserved.</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
