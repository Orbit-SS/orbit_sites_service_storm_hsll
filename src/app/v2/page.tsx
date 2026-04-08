"use client";
import Link from "next/link";

export default function V2() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

        .v2-root * { box-sizing: border-box; margin: 0; padding: 0; }

        .v2-root {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #07071a;
          color: #e8e8f0;
          overflow-x: hidden;
        }

        @keyframes aurora {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139,92,246,0.3), 0 0 60px rgba(139,92,246,0.1); }
          50% { box-shadow: 0 0 40px rgba(139,92,246,0.6), 0 0 80px rgba(139,92,246,0.2); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .v2-aurora-bg {
          background: linear-gradient(135deg, #07071a, #0d0b2e, #0f1528, #07071a);
          background-size: 400% 400%;
          animation: aurora 12s ease infinite;
        }

        .v2-glass {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
        }

        .v2-glass-card {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .v2-glass-card:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(139,92,246,0.35);
          transform: translateY(-8px);
          box-shadow: 0 32px 64px rgba(0,0,0,0.4), 0 0 40px rgba(139,92,246,0.15);
        }

        .v2-gradient-text {
          background: linear-gradient(135deg, #a78bfa, #818cf8, #38bdf8, #34d399);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .v2-btn-primary {
          background: linear-gradient(135deg, #7c3aed, #6d28d9);
          color: #fff;
          border: none;
          padding: 14px 36px;
          border-radius: 100px;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s;
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .v2-btn-primary:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 20px 40px rgba(124,58,237,0.5);
        }

        .v2-btn-outline {
          background: rgba(255,255,255,0.05);
          color: #a78bfa;
          border: 1px solid rgba(167,139,250,0.4);
          padding: 14px 36px;
          border-radius: 100px;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s;
          backdrop-filter: blur(10px);
        }
        .v2-btn-outline:hover {
          background: rgba(167,139,250,0.12);
          border-color: rgba(167,139,250,0.7);
          transform: translateY(-3px);
        }

        .v2-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }

        .v2-float { animation: float 6s ease-in-out infinite; }
        .v2-float-delay { animation: float 6s ease-in-out infinite 2s; }

        .v2-fade-up { animation: fadeSlideUp 0.8s ease both; }
        .v2-fade-up-d1 { animation: fadeSlideUp 0.8s ease 0.15s both; }
        .v2-fade-up-d2 { animation: fadeSlideUp 0.8s ease 0.3s both; }

        .v2-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(139,92,246,0.12);
          border: 1px solid rgba(139,92,246,0.25);
          color: #a78bfa;
          padding: 6px 18px;
          border-radius: 100px;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .v2-service-num {
          font-family: 'Syne', sans-serif;
          font-size: 5rem;
          font-weight: 800;
          position: absolute;
          top: -20px;
          right: 16px;
          opacity: 0.06;
          color: #a78bfa;
          line-height: 1;
          pointer-events: none;
        }

        .v2-stat {
          text-align: center;
          padding: 28px;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .v2-stat:last-child { border-right: none; }

        .v2-rotating-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(167,139,250,0.15);
          animation: rotate-slow 20s linear infinite;
        }
      `}} />

      <div className="v2-root">

        {/* BACK */}
        <div style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "6px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Link href="/" style={{ color: "rgba(167,139,250,0.6)", fontSize: "0.78rem", textDecoration: "none", fontWeight: 500, letterSpacing: "0.05em" }}>
              ← All variations
            </Link>
          </div>
        </div>

        {/* NAV */}
        <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(7,7,26,0.75)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="HLS" style={{ height: 38, width: "auto", filter: "brightness(0) invert(1) opacity(0.9)" }} />
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.05rem", color: "#fff", letterSpacing: "0.05em" }}>HOAG LAND SERVICES</span>
            </div>
            <nav style={{ display: "flex", gap: 36 }}>
              {["About", "Services", "Portfolio", "Contact"].map(l => (
                <a key={l} href="#" style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.88rem", fontWeight: 500, textDecoration: "none", transition: "color 0.2s", letterSpacing: "0.03em" }}
                  onMouseOver={e => (e.target as HTMLAnchorElement).style.color = "#a78bfa"}
                  onMouseOut={e => (e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)"}>{l}</a>
              ))}
            </nav>
            <a href="#" className="v2-btn-primary" style={{ padding: "10px 26px", fontSize: "0.88rem" }}>Get Quote</a>
          </div>
        </header>

        {/* HERO */}
        <section className="v2-aurora-bg" style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", padding: "6rem 24px", overflow: "hidden" }}>
          {/* Orbs */}
          <div className="v2-orb" style={{ width: 600, height: 600, background: "rgba(124,58,237,0.18)", top: "-200px", left: "-200px" }} />
          <div className="v2-orb" style={{ width: 500, height: 500, background: "rgba(14,165,233,0.12)", bottom: "-150px", right: "-150px" }} />
          <div className="v2-orb" style={{ width: 300, height: 300, background: "rgba(52,211,153,0.1)", top: "30%", right: "20%" }} />

          {/* Rotating rings */}
          <div className="v2-rotating-ring" style={{ width: 700, height: 700, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
          <div className="v2-rotating-ring" style={{ width: 500, height: 500, top: "50%", left: "50%", transform: "translate(-50%, -50%)", animationDuration: "14s", animationDirection: "reverse" }} />

          <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "1fr 0.8fr", gap: 60, alignItems: "center" }}>
            <div>
              <div className="v2-badge v2-fade-up" style={{ marginBottom: 28 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                Central Florida · Est. 2017
              </div>
              <h1 className="v2-fade-up-d1" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)", lineHeight: 1.08, marginBottom: 24 }}>
                Land services<br />
                <span className="v2-gradient-text">reimagined</span><br />
                for Florida.
              </h1>
              <p className="v2-fade-up-d2" style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "rgba(232,232,240,0.65)", maxWidth: 460, marginBottom: 40 }}>
                Site clearing, certified arborist tree services, and premium fencing — crafted for residential and commercial properties across Central Florida.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 56 }}>
                <a href="#" className="v2-btn-primary">Get Free Estimate</a>
                <a href="#" className="v2-btn-outline">View Our Work</a>
              </div>
              {/* Stats */}
              <div className="v2-glass" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderRadius: 16, overflow: "hidden" }}>
                {[["7+", "Years"], ["3", "Services"], ["ISA", "Certified"]].map(([n, l]) => (
                  <div key={l} className="v2-stat">
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.8rem", color: "#a78bfa" }}>{n}</div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginTop: 4, letterSpacing: "0.08em", textTransform: "uppercase" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image with glass overlay */}
            <div className="v2-float" style={{ position: "relative" }}>
              <div className="v2-glass" style={{ overflow: "hidden", padding: 0, borderRadius: 28 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo_enhanced.png" alt="HLS work" style={{ width: "100%", display: "block", aspectRatio: "4/5", objectFit: "cover", opacity: 0.85 }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(14,165,233,0.08))", borderRadius: 28 }} />
              </div>
              {/* Floating badge */}
              <div className="v2-glass v2-float-delay" style={{ position: "absolute", bottom: 28, left: -28, padding: "14px 20px", borderRadius: 16, minWidth: 160 }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#4ade80", fontSize: "0.85rem" }}>ISA Certified</div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", marginTop: 2 }}>Arborist on Staff</div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section style={{ padding: "6rem 24px", position: "relative" }}>
          <div className="v2-orb" style={{ width: 400, height: 400, background: "rgba(52,211,153,0.08)", top: "0", left: "-100px" }} />
          <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <span className="v2-badge" style={{ marginBottom: 20 }}>What we do</span>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3.2rem)", color: "#fff", marginTop: 16 }}>
                Three divisions, <span className="v2-gradient-text">one team.</span>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {[
                { num: "01", title: "Site Services", desc: "Land clearing, excavation, grading, drainage, erosion control. From 1 to 100+ acres. Building pads, roads, ponds, forestry mulching.", img: "/site1.JPEG", color: "#7c3aed", glow: "rgba(124,58,237,0.2)" },
                { num: "02", title: "Tree Services", desc: "ISA Certified Arborist. Removals, trimming, palm pruning, storm cleanup, and tree installation across Central Florida.", img: "/tree5.JPEG", color: "#38bdf8", glow: "rgba(56,189,248,0.2)" },
                { num: "03", title: "Fence Services", desc: "Wood, vinyl, and aluminum fencing. Perimeter, pasture, privacy, pool, and estate fencing — residential & commercial.", img: "/fence5.jpeg", color: "#34d399", glow: "rgba(52,211,153,0.2)" },
              ].map(s => (
                <div key={s.title} className="v2-glass-card" style={{ boxShadow: `0 0 40px ${s.glow}` }}>
                  <div style={{ position: "relative", overflow: "hidden" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.img} alt={s.title} style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover", display: "block" }} />
                    <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, rgba(7,7,26,0.9), transparent 60%)` }} />
                    <div style={{ position: "absolute", top: 14, right: 14 }}>
                      <span className="v2-badge" style={{ background: `${s.color}20`, borderColor: `${s.color}40`, color: s.color }}>{s.num}</span>
                    </div>
                  </div>
                  <div style={{ padding: "24px", position: "relative" }}>
                    <div className="v2-service-num">{s.num}</div>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#fff", marginBottom: 12 }}>{s.title}</h3>
                    <p style={{ color: "rgba(232,232,240,0.55)", fontSize: "0.875rem", lineHeight: 1.75, marginBottom: 20 }}>{s.desc}</p>
                    <a href="#" style={{ color: s.color, fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
                      Learn more <span style={{ fontSize: "1rem" }}>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section style={{ padding: "6rem 24px", position: "relative", background: "rgba(255,255,255,0.015)" }}>
          <div className="v2-orb" style={{ width: 500, height: 500, background: "rgba(124,58,237,0.1)", bottom: 0, right: "-200px" }} />
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "0.9fr 1fr", gap: 64, alignItems: "center", position: "relative", zIndex: 1 }}>
            <div style={{ position: "relative" }}>
              <div className="v2-glass" style={{ overflow: "hidden", padding: 0, borderRadius: 28 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/site4.PNG" alt="About HLS" style={{ width: "100%", display: "block", aspectRatio: "1", objectFit: "cover" }} />
              </div>
              {/* Floating cert card */}
              <div className="v2-glass" style={{ position: "absolute", top: -20, right: -28, padding: "18px 22px", borderRadius: 18 }}>
                <div style={{ fontSize: "1.8rem", marginBottom: 4 }}>🌳</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#fff" }}>ISA Certified</div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)" }}>Arborist on Staff</div>
              </div>
            </div>
            <div>
              <span className="v2-badge" style={{ marginBottom: 24 }}>About HLS</span>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#fff", lineHeight: 1.2, margin: "16px 0 24px" }}>
                Built on a decade<br />of <span className="v2-gradient-text">hands-on experience.</span>
              </h2>
              <p style={{ color: "rgba(232,232,240,0.6)", lineHeight: 1.8, marginBottom: 16, fontSize: "0.95rem" }}>
                HLS was founded by CEO Tyler Hoag in 2019, drawing on over a decade of experience in utility forestry and construction. What began as a single tractor service has grown into a three-division operation.
              </p>
              <p style={{ color: "rgba(232,232,240,0.6)", lineHeight: 1.8, marginBottom: 36, fontSize: "0.95rem" }}>
                Serving residential and commercial clients across DeLand, DeLeon Springs, and surrounding Central Florida.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {["ISA Certified Arborist", "Tree Risk Assessment Qualified", "Site & Excavation", "Fencing & Perimeter"].map(t => (
                  <div key={t} className="v2-glass" style={{ padding: "12px 16px", borderRadius: 12, display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 8, height: 8, borderRadius: 2, background: "linear-gradient(135deg, #7c3aed, #38bdf8)", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "6rem 24px", position: "relative", overflow: "hidden" }}>
          <div className="v2-orb" style={{ width: 600, height: 600, background: "rgba(124,58,237,0.15)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <span className="v2-badge" style={{ marginBottom: 24 }}>Start a project</span>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#fff", lineHeight: 1.15, margin: "16px 0 24px" }}>
              Ready to transform<br /><span className="v2-gradient-text">your property?</span>
            </h2>
            <p style={{ color: "rgba(232,232,240,0.55)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 44 }}>
              Tell us about your project and we&apos;ll schedule a time to walk the property together.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+13865610003" className="v2-btn-primary">(386) 561-0003</a>
              <a href="mailto:tyler@hlsdeland.com" className="v2-btn-outline">tyler@hlsdeland.com</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "3rem 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="HLS" style={{ height: 32, filter: "brightness(0) invert(1) opacity(0.6)" }} />
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "rgba(255,255,255,0.5)" }}>Hoag Land Services</span>
            </div>
            <div style={{ display: "flex", gap: 28 }}>
              {["Site Services", "Tree Services", "Fence Services"].map(s => (
                <a key={s} href="#" style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.82rem", textDecoration: "none", fontWeight: 500 }}>{s}</a>
              ))}
            </div>
            <div style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.78rem" }}>© 2025 Hoag Land Services</div>
          </div>
        </footer>
      </div>
    </>
  );
}
