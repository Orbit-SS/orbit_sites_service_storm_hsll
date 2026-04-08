import Link from "next/link";

const variations = [
  {
    href: "/v1",
    name: "Classic Green",
    tagline: "Faithful to the original brand identity",
    palette: ["#2E7D32", "#B66E41", "#F4F5F7", "#1F2933"],
    desc: "Deep forest green header, warm brown accents, clean white body. Professional and on-brand.",
  },
  {
    href: "/v2",
    name: "Bold & Industrial",
    tagline: "High-contrast contractor energy",
    palette: ["#0F1A0F", "#4ADE80", "#F59E0B", "#E5E7EB"],
    desc: "Near-black background, electric green + amber accents. Heavy type, built for impact.",
  },
  {
    href: "/v3",
    name: "Rustic Warmth",
    tagline: "Earthy tones, ranch & farm aesthetic",
    palette: ["#FAF7F0", "#6B4E2A", "#8A7355", "#3B2F1E"],
    desc: "Cream base with deep brown and olive tones. Grounded, honest, land-forward.",
  },
  {
    href: "/v4",
    name: "Modern Minimal",
    tagline: "Clean whitespace, refined simplicity",
    palette: ["#FFFFFF", "#166534", "#D1FAE5", "#111827"],
    desc: "All white canvas, sparse forest green accents, generous spacing. Premium and understated.",
  },
  {
    href: "/v5",
    name: "Dark Premium",
    tagline: "Night-mode luxury feel",
    palette: ["#0A1628", "#059669", "#D97706", "#F9FAFB"],
    desc: "Deep navy-black background, emerald + amber accents. Sophisticated and bold.",
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
