import Link from "next/link";

const variations = [
  {
    href: "/v1",
    name: "Brutalist Editorial",
    tagline: "Raw · Confrontational · Anti-design as design",
    palette: ["#000000", "#FFE500", "#FF2200", "#FFFFFF"],
    desc: "Bebas Neue headlines, electric yellow accents, newspaper grid, scrolling ticker, glitch hover effects. Bold and unapologetic.",
    font: "Bebas Neue + Space Grotesk",
  },
  {
    href: "/v2",
    name: "Aurora Glassmorphism",
    tagline: "Dreamy · Ethereal · Soft tech",
    palette: ["#07071a", "#7c3aed", "#38bdf8", "#34d399"],
    desc: "Syne + Plus Jakarta Sans, animated aurora gradient mesh, frosted glass cards, glowing orbs, floating elements.",
    font: "Syne + Plus Jakarta Sans",
  },
  {
    href: "/v3",
    name: "Organic Botanical",
    tagline: "Earthy · Rooted · Artisanal",
    palette: ["#faf6f0", "#c17e42", "#2d1f0e", "#7B9E87"],
    desc: "Playfair Display serifs, diagonal clip-path sections, slow-pan hero, warm organic palette with leaf animations.",
    font: "Playfair Display + Nunito",
  },
  {
    href: "/v4",
    name: "Swiss Bauhaus",
    tagline: "Geometric · Systematic · Precise",
    palette: ["#f2ede6", "#1a1a1a", "#D62B00", "#003399"],
    desc: "Barlow Condensed + IBM Plex Sans, strict grid with color blocking, Bauhaus red & blue, architectural typography.",
    font: "Barlow Condensed + IBM Plex Sans",
  },
  {
    href: "/v5",
    name: "Luxury Editorial",
    tagline: "Refined · Magazine · Haute",
    palette: ["#0d0d0d", "#c9a84c", "#f0ead8", "#2a2a2a"],
    desc: "Cormorant Garamond serifs, aged gold shimmer, split-screen hero, thin gold dividers, magazine layout with corner accents.",
    font: "Cormorant Garamond + Montserrat",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      {/* Header */}
      <div className="border-b border-white/10 px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-0.5">Hoag Land Services</p>
            <h1 className="text-xl font-semibold tracking-tight">Design Variations</h1>
          </div>
          <span className="text-xs text-white/30 border border-white/10 rounded-full px-3 py-1">5 concepts</span>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto px-6 pt-12 pb-8">
        <p className="text-white/50 text-sm max-w-lg">
          Each variation below is a fully built HLS landing page with a distinct visual identity — same content, different design direction. Click any card to preview.
        </p>
      </div>

      {/* Cards grid */}
      <div className="max-w-5xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {variations.map((v, i) => (
          <Link
            key={v.href}
            href={v.href}
            className="group relative flex flex-col bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-200"
          >
            {/* Color palette strip */}
            <div className="flex h-2">
              {v.palette.map((c) => (
                <div key={c} className="flex-1" style={{ background: c }} />
              ))}
            </div>

            <div className="p-6 flex flex-col flex-1">
              {/* Number badge */}
              <span className="text-xs text-white/30 font-mono mb-4">0{i + 1}</span>

              {/* Palette swatches */}
              <div className="flex gap-2 mb-5">
                {v.palette.map((c) => (
                  <div
                    key={c}
                    className="w-7 h-7 rounded-full border border-white/10 shadow-sm"
                    style={{ background: c }}
                    title={c}
                  />
                ))}
              </div>

              <h2 className="text-base font-semibold mb-1 text-white group-hover:text-white/90">{v.name}</h2>
              <p className="text-xs text-white/40 mb-3 uppercase tracking-wider">{v.tagline}</p>
              <p className="text-sm text-white/55 leading-relaxed flex-1">{v.desc}</p>
              <p className="text-xs text-white/25 mt-3 font-mono">{v.font}</p>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                View design
                <svg className="w-4 h-4 -translate-x-0.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
