"use client";
import Link from "next/link";

export default function V3() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Nunito:wght@300;400;500;600;700&display=swap');

        .v3-root * { box-sizing: border-box; margin: 0; padding: 0; }

        .v3-root {
          font-family: 'Nunito', sans-serif;
          background: #faf6f0;
          color: #2d1f0e;
          overflow-x: hidden;
        }

        @keyframes slowPan {
          0%, 100% { transform: scale(1.08) translateX(0); }
          50% { transform: scale(1.08) translateX(-2%); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes leafSway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes drawLine {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }

        .v3-hero-img { animation: slowPan 18s ease-in-out infinite; }
        .v3-fade-up { animation: fadeUp 0.9s ease both; }
        .v3-fade-up-d1 { animation: fadeUp 0.9s ease 0.2s both; }
        .v3-fade-up-d2 { animation: fadeUp 0.9s ease 0.4s both; }
        .v3-breathe { animation: breathe 4s ease-in-out infinite; }

        .v3-btn-primary {
          display: inline-block;
          background: #3d2410;
          color: #f5e6cc;
          padding: 15px 40px;
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-style: italic;
          text-decoration: none;
          border-radius: 100px;
          letter-spacing: 0.03em;
          transition: all 0.3s ease;
          border: 2px solid #3d2410;
        }
        .v3-btn-primary:hover {
          background: #c17e42;
          border-color: #c17e42;
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(193,126,66,0.35);
        }

        .v3-btn-outline {
          display: inline-block;
          background: transparent;
          color: #f5e6cc;
          padding: 15px 40px;
          font-family: 'Nunito', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 100px;
          border: 2px solid rgba(245,230,204,0.5);
          transition: all 0.3s ease;
        }
        .v3-btn-outline:hover {
          background: rgba(245,230,204,0.1);
          border-color: #f5e6cc;
          transform: translateY(-3px);
        }

        .v3-service-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.35s ease;
          box-shadow: 0 4px 20px rgba(45,31,14,0.08);
        }
        .v3-service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 24px 60px rgba(45,31,14,0.15);
        }
        .v3-service-card:hover .v3-card-img { transform: scale(1.06); }

        .v3-card-img {
          transition: transform 0.5s ease;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .v3-tag {
          display: inline-block;
          background: rgba(193,126,66,0.12);
          color: #8a5425;
          border: 1px solid rgba(193,126,66,0.3);
          padding: 4px 14px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .v3-section-label {
          font-family: 'Nunito', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c17e42;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .v3-section-label::before {
          content: '';
          display: inline-block;
          width: 32px;
          height: 2px;
          background: #c17e42;
        }

        .v3-diagonal-divider {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        .v3-diagonal-divider-rev {
          clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
        }

        .v3-leaf {
          position: absolute;
          font-size: 4rem;
          opacity: 0.07;
          animation: leafSway 6s ease-in-out infinite;
          pointer-events: none;
          user-select: none;
        }

        .v3-nav-link {
          color: #3d2410;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.92rem;
          padding: 4px 0;
          position: relative;
        }
        .v3-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #c17e42;
          transition: width 0.25s ease;
        }
        .v3-nav-link:hover::after { width: 100%; }

        .v3-cert-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(61,36,16,0.07);
          border: 1px solid rgba(61,36,16,0.12);
          padding: 8px 18px;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #5c3318;
        }

        .v3-about-image {
          border-radius: 24px;
          overflow: hidden;
          position: relative;
        }
        .v3-about-image::before {
          content: '';
          position: absolute;
          inset: -16px;
          border: 2px solid rgba(193,126,66,0.25);
          border-radius: 32px;
          z-index: 0;
        }
      `}} />

      <div className="v3-root">

        {/* BACK */}
        <div style={{ background: "#3d2410", padding: "5px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Link href="/" style={{ color: "rgba(245,230,204,0.6)", fontSize: "0.78rem", textDecoration: "none", fontWeight: 600 }}>
              ← All variations
            </Link>
          </div>
        </div>

        {/* NAV */}
        <header style={{ background: "#faf6f0", borderBottom: "1px solid rgba(61,36,16,0.1)", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 2px 20px rgba(45,31,14,0.06)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="HLS" style={{ height: 44, width: "auto" }} />
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.05rem", color: "#2d1f0e", lineHeight: 1.2 }}>Hoag Land Services</div>
                <div style={{ fontSize: "0.65rem", color: "#9a7455", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>Central Florida</div>
              </div>
            </div>
            <nav style={{ display: "flex", gap: 32 }}>
              {["About", "Services", "Portfolio", "Contact"].map(l => (
                <a key={l} href="#" className="v3-nav-link">{l}</a>
              ))}
            </nav>
            <a href="#" className="v3-btn-primary" style={{ padding: "10px 28px", fontSize: "0.9rem" }}>Get Estimate</a>
          </div>
        </header>

        {/* HERO */}
        <section style={{ position: "relative", minHeight: "90vh", overflow: "hidden", display: "flex", alignItems: "center" }}>
          {/* Background */}
          <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="v3-hero-img" src="/logo_enhanced.png" alt="" style={{ width: "100%", height: "110%", objectFit: "cover", position: "absolute", top: 0, left: 0 }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(30,20,8,0.82) 0%, rgba(30,20,8,0.55) 60%, rgba(193,126,66,0.15) 100%)" }} />
          </div>

          {/* Leaf decorations */}
          <span className="v3-leaf" style={{ top: "10%", right: "8%", animationDelay: "0s" }}>🌿</span>
          <span className="v3-leaf" style={{ bottom: "15%", right: "15%", animationDelay: "2s", fontSize: "6rem" }}>🍃</span>

          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "5rem 24px", position: "relative", zIndex: 2, width: "100%" }}>
            <div className="v3-fade-up" style={{ marginBottom: 20 }}>
              <span style={{ background: "rgba(193,126,66,0.25)", border: "1px solid rgba(193,126,66,0.45)", color: "#f5c882", padding: "5px 18px", borderRadius: 100, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                DeLand, Florida · Est. 2017
              </span>
            </div>
            <h1 className="v3-fade-up-d1" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              color: "#fff",
              maxWidth: 680,
              marginBottom: 24
            }}>
              Where the land<br />
              <em style={{ color: "#f5c882", fontStyle: "italic" }}>speaks,</em><br />
              we listen.
            </h1>
            <p className="v3-fade-up-d2" style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "rgba(245,230,204,0.8)", maxWidth: 480, marginBottom: 44 }}>
              Site work, tree services, and fencing crafted with care for Central Florida properties — residential and commercial.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <a href="#" className="v3-btn-primary">Free Consultation</a>
              <a href="#" className="v3-btn-outline">See Our Work</a>
            </div>

            {/* Scroll hint */}
            <div style={{ marginTop: 72, display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ width: 1, height: 32, background: "rgba(245,230,204,0.4)", margin: "0 auto" }} />
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#f5c882", margin: "0 auto" }} />
              </div>
              <span style={{ fontSize: "0.75rem", color: "rgba(245,230,204,0.45)", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>Scroll to explore</span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section style={{ padding: "6rem 24px", background: "#faf6f0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="v3-section-label" style={{ justifyContent: "center", marginBottom: 16 }}>What we offer</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#2d1f0e", lineHeight: 1.2 }}>
                Services rooted in<br /><em style={{ color: "#c17e42" }}>honest craftsmanship.</em>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
              {[
                { icon: "⛏️", title: "Site Services", desc: "Land clearing, grading, excavation, erosion control and environmental services from an acre to hundreds.", img: "/site1.JPEG", detail: "Building pads · Roads · Ponds · Forestry mulching" },
                { icon: "🌳", title: "Tree Services", desc: "ISA Certified Arborist on staff. Removals, trimming, palm pruning and tree installation done safely.", img: "/tree5.JPEG", detail: "ISA Certified · Storm cleanup · Tree installation" },
                { icon: "🔨", title: "Fence Services", desc: "Wood, vinyl and aluminum fencing for perimeter, pasture, privacy and pool applications.", img: "/fence5.jpeg", detail: "Wood · Vinyl · Aluminum · Estate fencing" },
              ].map((s, i) => (
                <div key={s.title} className="v3-service-card" style={{ animationDelay: `${i * 0.15}s` }}>
                  <div style={{ aspectRatio: "4/3", overflow: "hidden", position: "relative" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="v3-card-img" src={s.img} alt={s.title} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(45,31,14,0.5), transparent 50%)" }} />
                    <div style={{ position: "absolute", bottom: 14, left: 14, fontSize: "1.5rem" }}>{s.icon}</div>
                  </div>
                  <div style={{ padding: "24px 24px 28px" }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.25rem", color: "#2d1f0e", marginBottom: 10 }}>{s.title}</h3>
                    <p style={{ color: "#7a5c3a", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</p>
                    <div style={{ fontSize: "0.75rem", color: "#c17e42", fontWeight: 700, letterSpacing: "0.05em", borderTop: "1px solid rgba(193,126,66,0.15)", paddingTop: 14 }}>{s.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT - angled */}
        <section style={{ background: "#2d1f0e", padding: "7rem 24px", clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)", marginTop: -60, position: "relative" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div className="v3-section-label" style={{ color: "#c17e42", marginBottom: 16 }}>
                <span style={{ background: "#c17e42" }} />
                About HLS
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#f5e6cc", lineHeight: 1.2, margin: "16px 0 24px" }}>
                Local, experienced,<br /><em>grown from the ground up.</em>
              </h2>
              <p style={{ color: "rgba(245,230,204,0.7)", lineHeight: 1.85, marginBottom: 16, fontSize: "0.95rem" }}>
                HLS officially came to life in 2019 by CEO Tyler Hoag — with over a decade of experience in utility forestry and construction behind it. What began as a single tractor service has grown into a certified arborist tree service and full site operation.
              </p>
              <p style={{ color: "rgba(245,230,204,0.7)", lineHeight: 1.85, marginBottom: 36, fontSize: "0.95rem" }}>
                We serve DeLand, DeLeon Springs, and surrounding Central Florida for both residential and commercial clients.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {["ISA Certified Arborist", "Tree Risk Assessment Qualified", "Est. 2017"].map(t => (
                  <span key={t} className="v3-cert-badge" style={{ background: "rgba(193,126,66,0.15)", borderColor: "rgba(193,126,66,0.3)", color: "#f5c882" }}>{t}</span>
                ))}
              </div>
            </div>
            <div className="v3-about-image">
              <div style={{ position: "relative", zIndex: 1, borderRadius: 24, overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.4)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/site4.PNG" alt="About HLS" style={{ width: "100%", display: "block", aspectRatio: "1", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(193,126,66,0.15), transparent)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO STRIP */}
        <section style={{ padding: "5rem 24px", background: "#f0e8d8" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div className="v3-section-label" style={{ justifyContent: "center", marginBottom: 12 }}>Our work</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "2rem", color: "#2d1f0e", marginTop: 12 }}>
                Properties we&apos;ve <em style={{ color: "#c17e42" }}>transformed.</em>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 16 }}>
              {["/tree7.jpeg", "/fence6.jpeg", "/site18.JPEG"].map((img, i) => (
                <div key={img} style={{ borderRadius: 16, overflow: "hidden", aspectRatio: i === 0 ? "16/10" : "1", boxShadow: "0 8px 32px rgba(45,31,14,0.12)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt="Portfolio" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
                    onMouseOver={e => (e.target as HTMLImageElement).style.transform = "scale(1.05)"}
                    onMouseOut={e => (e.target as HTMLImageElement).style.transform = "scale(1)"}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#c17e42", padding: "5rem 24px", clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)", marginTop: -50 }}>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#fff", lineHeight: 1.2, marginBottom: 20 }}>
              Let&apos;s walk your<br />land together.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: 44 }}>
              Tell us about your project and we&apos;ll schedule a time to visit. No pressure, just honest conversation.
            </p>
            <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+13865610003" style={{ background: "#fff", color: "#c17e42", padding: "16px 44px", borderRadius: 100, fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.05rem", textDecoration: "none", transition: "all 0.3s", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}>
                (386) 561-0003
              </a>
              <a href="mailto:tyler@hlsdeland.com" style={{ background: "transparent", color: "#fff", padding: "16px 44px", borderRadius: 100, fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "1rem", textDecoration: "none", border: "2px solid rgba(255,255,255,0.6)", transition: "all 0.3s" }}>
                Send a Message
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: "#1c1108", padding: "3.5rem 24px 2rem" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="HLS" style={{ height: 48, marginBottom: 16, filter: "brightness(0) invert(1) opacity(0.8)" }} />
                <p style={{ fontFamily: "'Playfair Display', serif", color: "rgba(245,230,204,0.55)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                  Site work, tree services, and fencing for residential &amp; commercial properties across Central Florida.
                </p>
              </div>
              <div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#f5c882", marginBottom: 16, fontSize: "0.95rem" }}>Services</p>
                {["Site Services", "Tree Services", "Fence Services"].map(s => (
                  <a key={s} href="#" style={{ display: "block", color: "rgba(245,230,204,0.5)", fontSize: "0.875rem", marginBottom: 10, textDecoration: "none" }}>{s}</a>
                ))}
              </div>
              <div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#f5c882", marginBottom: 16, fontSize: "0.95rem" }}>Contact</p>
                <p style={{ color: "rgba(245,230,204,0.5)", fontSize: "0.875rem", marginBottom: 8 }}>(386) 561-0003</p>
                <p style={{ color: "rgba(245,230,204,0.5)", fontSize: "0.875rem", marginBottom: 8 }}>tyler@hlsdeland.com</p>
                <p style={{ color: "rgba(245,230,204,0.5)", fontSize: "0.875rem" }}>DeLand, Florida</p>
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(245,230,204,0.1)", paddingTop: 20, fontSize: "0.78rem", color: "rgba(245,230,204,0.25)" }}>
              © 2025 Hoag Land Services. All rights reserved.
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
