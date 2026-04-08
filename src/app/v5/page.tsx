"use client";
import Link from "next/link";

export default function V5() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap');

        .v5-root * { box-sizing: border-box; margin: 0; padding: 0; }

        .v5-root {
          font-family: 'Montserrat', sans-serif;
          background: #0d0d0d;
          color: #f0ead8;
          overflow-x: hidden;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(48px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes goldShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes slowZoom {
          from { transform: scale(1.12); }
          to { transform: scale(1.02); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }

        .v5-fade-up { animation: fadeInUp 1s cubic-bezier(0.16,1,0.3,1) both; }
        .v5-fade-up-d1 { animation: fadeInUp 1s cubic-bezier(0.16,1,0.3,1) 0.2s both; }
        .v5-fade-up-d2 { animation: fadeInUp 1s cubic-bezier(0.16,1,0.3,1) 0.4s both; }
        .v5-fade-up-d3 { animation: fadeInUp 1s cubic-bezier(0.16,1,0.3,1) 0.6s both; }
        .v5-fade-in { animation: fadeIn 1.2s ease both; }
        .v5-float { animation: float 7s ease-in-out infinite; }

        .v5-gold-text {
          background: linear-gradient(90deg, #a8864c, #d4af6e, #f0d080, #d4af6e, #a8864c);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: goldShimmer 5s linear infinite;
        }

        .v5-thin-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, #c9a84c, transparent);
        }

        .v5-btn-gold {
          display: inline-block;
          background: transparent;
          border: 1px solid #c9a84c;
          color: #c9a84c;
          padding: 14px 48px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        .v5-btn-gold::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #c9a84c;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
          z-index: 0;
        }
        .v5-btn-gold:hover::before { transform: scaleX(1); }
        .v5-btn-gold:hover { color: #0d0d0d; }
        .v5-btn-gold span { position: relative; z-index: 1; }

        .v5-btn-solid {
          display: inline-block;
          background: #c9a84c;
          color: #0d0d0d;
          padding: 14px 48px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .v5-btn-solid:hover {
          background: #d4af6e;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(201,168,76,0.35);
        }

        .v5-service-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        .v5-service-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 1px solid rgba(201,168,76,0);
          transition: border-color 0.4s ease;
          pointer-events: none;
          z-index: 2;
        }
        .v5-service-card:hover::after { border-color: rgba(201,168,76,0.5); }
        .v5-service-card:hover .v5-card-image { transform: scale(1.06); }
        .v5-service-card:hover .v5-card-overlay { opacity: 1; }

        .v5-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s ease;
          filter: brightness(0.85) saturate(0.8);
        }
        .v5-card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(13,13,13,0.5);
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .v5-nav-link {
          color: rgba(240,234,216,0.6);
          text-decoration: none;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          transition: color 0.25s;
          position: relative;
        }
        .v5-nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #c9a84c;
          transition: width 0.3s ease;
        }
        .v5-nav-link:hover { color: #c9a84c; }
        .v5-nav-link:hover::after { width: 100%; }

        .v5-roman {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: italic;
          color: rgba(201,168,76,0.35);
          font-size: 1rem;
          letter-spacing: 0.1em;
        }

        .v5-quote-mark {
          font-family: 'Cormorant Garamond', serif;
          font-size: 8rem;
          line-height: 0.5;
          color: rgba(201,168,76,0.1);
          font-weight: 300;
          display: block;
          margin-bottom: 8px;
        }

        .v5-hero-image { animation: slowZoom 20s ease-out both; }

        .v5-divider {
          display: flex;
          align-items: center;
          gap: 20px;
          margin: 24px 0;
        }
        .v5-divider::before, .v5-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(201,168,76,0.2);
        }
        .v5-divider-diamond {
          width: 6px;
          height: 6px;
          background: #c9a84c;
          transform: rotate(45deg);
          flex-shrink: 0;
        }
      `}} />

      <div className="v5-root">

        {/* BACK */}
        <div style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(201,168,76,0.1)", padding: "5px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Link href="/" style={{ color: "rgba(201,168,76,0.45)", fontSize: "0.72rem", textDecoration: "none", fontFamily: "'Montserrat', sans-serif", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              ← All variations
            </Link>
          </div>
        </div>

        {/* NAV */}
        <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(13,13,13,0.88)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid rgba(201,168,76,0.12)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="HLS" style={{ height: 40, filter: "brightness(0) invert(1) sepia(0.3) saturate(2) hue-rotate(5deg)", opacity: 0.9 }} />
              <div style={{ borderLeft: "1px solid rgba(201,168,76,0.3)", paddingLeft: 14 }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontWeight: 600, color: "#f0ead8", letterSpacing: "0.1em", lineHeight: 1.2 }}>Hoag Land Services</div>
                <div style={{ fontSize: "0.6rem", color: "#c9a84c", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" }}>Central Florida</div>
              </div>
            </div>
            <nav style={{ display: "flex", gap: 36 }}>
              {["About", "Services", "Portfolio", "Contact"].map(l => (
                <a key={l} href="#" className="v5-nav-link">{l}</a>
              ))}
            </nav>
            <a href="#" className="v5-btn-gold"><span>Request Estimate</span></a>
          </div>
        </header>

        {/* HERO — Full bleed split */}
        <section style={{ position: "relative", minHeight: "95vh", display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>
          {/* Left: Image */}
          <div style={{ overflow: "hidden", position: "relative" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="v5-hero-image" src="/logo_enhanced.png" alt="HLS" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(13,13,13,0.1), rgba(13,13,13,0.5))" }} />
            {/* Caption overlay */}
            <div style={{ position: "absolute", bottom: 40, left: 32 }}>
              <div style={{ borderLeft: "2px solid #c9a84c", paddingLeft: 16 }}>
                <div style={{ fontSize: "0.65rem", color: "#c9a84c", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 4 }}>DeLand, Florida</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "rgba(240,234,216,0.75)", fontStyle: "italic" }}>Est. 2017</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div style={{ background: "#0d0d0d", display: "flex", flexDirection: "column", justifyContent: "center", padding: "5rem 4rem 5rem 5rem", position: "relative" }}>
            {/* Decorative top line */}
            <div style={{ position: "absolute", top: 48, left: 48, right: 48 }}>
              <div className="v5-thin-line" />
            </div>

            <div className="v5-fade-up" style={{ marginBottom: 12 }}>
              <span style={{ fontSize: "0.68rem", color: "#c9a84c", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" }}>Land · Tree · Fence</span>
            </div>

            <h1 className="v5-fade-up-d1" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 5.5vw, 5rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "#f0ead8",
              marginBottom: 10
            }}>
              Where <span className="v5-gold-text">precision</span><br />
              meets the<br />
              <em>land.</em>
            </h1>

            <div className="v5-divider v5-fade-up-d2">
              <div className="v5-divider-diamond" />
            </div>

            <p className="v5-fade-up-d2" style={{ fontSize: "0.88rem", lineHeight: 1.85, color: "rgba(240,234,216,0.55)", maxWidth: 380, marginBottom: 44, fontWeight: 300, letterSpacing: "0.02em" }}>
              Residential &amp; commercial site clearing, ISA certified tree services, and premium fencing for Central Florida properties — executed with expertise and care.
            </p>

            <div className="v5-fade-up-d3" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#" className="v5-btn-solid">Request Estimate</a>
              <a href="#" className="v5-btn-gold"><span>View Services</span></a>
            </div>

            {/* Stats */}
            <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid rgba(201,168,76,0.12)", paddingTop: 32 }}>
              {[["7+", "Years\nExperience"], ["3", "Service\nDivisions"], ["ISA", "Certified\nArborist"]].map(([n, l]) => (
                <div key={l} style={{ textAlign: "center", borderRight: "1px solid rgba(201,168,76,0.1)", padding: "0 16px" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", fontWeight: 600, color: "#c9a84c", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: "0.65rem", color: "rgba(240,234,216,0.35)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 6, lineHeight: 1.5, whiteSpace: "pre-line" }}>{l}</div>
                </div>
              ))}
            </div>

            {/* Bottom line */}
            <div style={{ position: "absolute", bottom: 48, left: 48, right: 48 }}>
              <div className="v5-thin-line" />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section style={{ padding: "7rem 24px", background: "#111" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            {/* Section header */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: 40, marginBottom: 60 }}>
              <div>
                <div style={{ fontSize: "0.65rem", color: "#c9a84c", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 10 }}>What we offer</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 400, color: "#f0ead8", lineHeight: 1.1 }}>
                  Three pillars of<br /><em className="v5-gold-text">land mastery.</em>
                </h2>
              </div>
              <div style={{ flex: 1 }}>
                <div className="v5-thin-line" />
              </div>
            </div>

            {/* Service grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr", gap: 2 }}>
              {[
                { num: "I", label: "Site Services", sub: "Land clearing · Excavation · Grading", desc: "From 1 to 100+ acres. Building pads, roads, ponds, drainage and erosion control for residential and commercial properties.", img: "/site1.JPEG", height: 520 },
                { num: "II", label: "Tree Services", sub: "ISA Certified · Removals · Pruning", desc: "Certified Arborist on staff. Removals, trimming, palm pruning, storm cleanup and tree installation.", img: "/tree5.JPEG", height: 440 },
                { num: "III", label: "Fence Services", sub: "Wood · Vinyl · Aluminum", desc: "Perimeter, pasture, privacy, pool and estate fencing — residential and commercial.", img: "/fence5.jpeg", height: 360 },
              ].map((s) => (
                <div key={s.label} className="v5-service-card" style={{ height: s.height }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="v5-card-image" src={s.img} alt={s.label} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.3) 60%)", zIndex: 1 }} />
                  <div className="v5-card-overlay">
                    <a href="#" style={{ color: "#c9a84c", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", textDecoration: "none" }}>
                      Learn More
                    </a>
                  </div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 24px", zIndex: 2 }}>
                    <div className="v5-roman" style={{ marginBottom: 6, fontSize: "0.85rem" }}>{s.num} —</div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 600, color: "#f0ead8", marginBottom: 6, lineHeight: 1.2 }}>{s.label}</h3>
                    <div style={{ fontSize: "0.7rem", color: "#c9a84c", letterSpacing: "0.1em", fontWeight: 600, marginBottom: 10 }}>{s.sub}</div>
                    <p style={{ color: "rgba(240,234,216,0.5)", fontSize: "0.8rem", lineHeight: 1.65 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section style={{ background: "#0d0d0d", padding: "7rem 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 0.9fr", gap: 80, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "0.65rem", color: "#c9a84c", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 20 }}>Our story</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 300, color: "#f0ead8", lineHeight: 1.25, marginBottom: 8 }}>
                Built from the ground up,<br /><em><span className="v5-gold-text">rooted in Central Florida.</span></em>
              </h2>
              <div className="v5-divider" style={{ margin: "28px 0" }}>
                <div className="v5-divider-diamond" />
              </div>
              <p style={{ color: "rgba(240,234,216,0.55)", lineHeight: 1.9, marginBottom: 20, fontSize: "0.9rem", fontWeight: 300 }}>
                HLS officially came to life in 2019 by CEO Tyler Hoag — with over a decade of experience in utility forestry and construction behind it. What began as a single tractor service has grown into a certified arborist tree service and full site operation.
              </p>
              <p style={{ color: "rgba(240,234,216,0.55)", lineHeight: 1.9, marginBottom: 40, fontSize: "0.9rem", fontWeight: 300 }}>
                We are knowledgeable, driven, and durable — built to surpass customer expectations on every property we touch.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["ISA Certified Arborist", "Tree Risk Assessment Qualified", "Established 2017"].map(t => (
                  <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)", color: "#c9a84c", padding: "6px 18px", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    <span style={{ width: 4, height: 4, background: "#c9a84c", transform: "rotate(45deg)", display: "inline-block" }} />
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="v5-float" style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: -12, border: "1px solid rgba(201,168,76,0.15)" }} />
              <div style={{ overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/site4.PNG" alt="About HLS" style={{ width: "100%", display: "block", aspectRatio: "4/3", objectFit: "cover", filter: "brightness(0.85) saturate(0.7)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(201,168,76,0.08), transparent)" }} />
              </div>
              {/* Gold corner accents */}
              <div style={{ position: "absolute", top: -12, left: -12, width: 24, height: 24, borderTop: "2px solid #c9a84c", borderLeft: "2px solid #c9a84c" }} />
              <div style={{ position: "absolute", bottom: -12, right: -12, width: 24, height: 24, borderBottom: "2px solid #c9a84c", borderRight: "2px solid #c9a84c" }} />
            </div>
          </div>
        </section>

        {/* PORTFOLIO ROW */}
        <section style={{ background: "#111", padding: "5rem 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div style={{ fontSize: "0.65rem", color: "#c9a84c", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 12 }}>Portfolio</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", fontWeight: 300, color: "#f0ead8" }}>
                Selected <em>projects.</em>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 3 }}>
              {["/tree7.jpeg", "/fence4.jpeg", "/site18.JPEG", "/tree11.jpeg"].map((img) => (
                <div key={img} style={{ overflow: "hidden", aspectRatio: "3/4" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.8) saturate(0.7)", transition: "all 0.5s ease" }}
                    onMouseOver={e => { (e.target as HTMLImageElement).style.filter = "brightness(0.95) saturate(1)"; (e.target as HTMLImageElement).style.transform = "scale(1.05)"; }}
                    onMouseOut={e => { (e.target as HTMLImageElement).style.filter = "brightness(0.8) saturate(0.7)"; (e.target as HTMLImageElement).style.transform = "scale(1)"; }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#0d0d0d", padding: "8rem 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          {/* Decorative lines */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
            <div className="v5-thin-line" />
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
            <div className="v5-thin-line" />
          </div>
          {/* Faint background quote */}
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontFamily: "'Cormorant Garamond', serif", fontSize: "22rem", fontWeight: 300, color: "rgba(201,168,76,0.025)", lineHeight: 1, pointerEvents: "none", whiteSpace: "nowrap" }}>HLS</div>

          <div style={{ maxWidth: 680, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: "0.65rem", color: "#c9a84c", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 20 }}>Begin your project</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 300, color: "#f0ead8", lineHeight: 1.15, marginBottom: 10 }}>
              Ready to transform<br /><em><span className="v5-gold-text">your property?</span></em>
            </h2>
            <div className="v5-divider">
              <div className="v5-divider-diamond" />
            </div>
            <p style={{ color: "rgba(240,234,216,0.45)", fontSize: "0.9rem", lineHeight: 1.8, fontWeight: 300, marginBottom: 52 }}>
              Walk us through your property and goals — we&apos;ll schedule a time to visit and discuss the work in detail.
            </p>
            <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+13865610003" className="v5-btn-solid">(386) 561-0003</a>
              <a href="mailto:tyler@hlsdeland.com" className="v5-btn-gold"><span>tyler@hlsdeland.com</span></a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: "#080808", borderTop: "1px solid rgba(201,168,76,0.1)", padding: "3.5rem 24px 2rem" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="HLS" style={{ height: 44, marginBottom: 20, filter: "brightness(0) invert(1) sepia(0.2) saturate(2) opacity(0.7)" }} />
                <p style={{ color: "rgba(240,234,216,0.3)", fontSize: "0.82rem", lineHeight: 1.75, fontWeight: 300 }}>
                  Site work, tree services, and fencing for residential &amp; commercial properties across Central Florida.
                </p>
              </div>
              <div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: "#c9a84c", marginBottom: 16, fontSize: "1rem", letterSpacing: "0.05em" }}>Services</p>
                {["Site Services", "Tree Services", "Fence Services"].map(s => (
                  <a key={s} href="#" style={{ display: "block", color: "rgba(240,234,216,0.3)", fontSize: "0.8rem", marginBottom: 10, textDecoration: "none", fontWeight: 300 }}>{s}</a>
                ))}
              </div>
              <div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: "#c9a84c", marginBottom: 16, fontSize: "1rem", letterSpacing: "0.05em" }}>Contact</p>
                <p style={{ color: "rgba(240,234,216,0.3)", fontSize: "0.8rem", marginBottom: 8, fontWeight: 300 }}>(386) 561-0003</p>
                <p style={{ color: "rgba(240,234,216,0.3)", fontSize: "0.8rem", marginBottom: 8, fontWeight: 300 }}>tyler@hlsdeland.com</p>
                <p style={{ color: "rgba(240,234,216,0.3)", fontSize: "0.8rem", fontWeight: 300 }}>DeLand, FL</p>
              </div>
              <div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: "#c9a84c", marginBottom: 16, fontSize: "1rem", letterSpacing: "0.05em" }}>Credentials</p>
                <p style={{ color: "rgba(240,234,216,0.3)", fontSize: "0.8rem", marginBottom: 8, fontWeight: 300 }}>ISA Certified Arborist</p>
                <p style={{ color: "rgba(240,234,216,0.3)", fontSize: "0.8rem", fontWeight: 300 }}>Tree Risk Assessment Qualified</p>
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(201,168,76,0.08)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
              <div style={{ fontSize: "0.72rem", color: "rgba(240,234,216,0.2)", fontWeight: 300 }}>© 2025 Hoag Land Services. All rights reserved.</div>
              <div style={{ fontSize: "0.65rem", color: "rgba(201,168,76,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500 }}>DeLand · Central Florida</div>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
