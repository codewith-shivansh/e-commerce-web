import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar active="discover" />

      <main className="bg-surface pb-24 pt-32 text-on-surface">
        <section className="mx-auto mb-40 max-w-[1440px] px-8">
          <div className="relative flex min-h-[700px] items-center overflow-hidden rounded-[2.5rem] bg-surface-container-lowest">
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
            <img
              alt="Hero"
              className="absolute inset-0 h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhvx30qlYRsPjmQN5vxSt2bJAqedbMqLCkSAtoc9IF9TDIGDxpiqJWfSNwY2O83mqSVt9ElXxOwGjm9abVfhx4sjD7-yMrn6CdE6_dNLSuloK3RXMlpdSpCSYwnM9fjDHFHb_NPA4TVPuEwTKqmZ0JguqWSa-ddjmZ4hqQGCKCJGnAnTepm2bGTQXmRp1yR5B_5AbVeyd9qiM_hw8fTY1rrGYw-7HDM0vQtHVzp_HwVey3SiSwkABjxDOUmNT-WQ8HTIWje5P4xbY"
            />
            <div className="relative z-20 ml-20 max-w-3xl">
              <span className="mb-6 inline-block font-label text-xs uppercase tracking-[0.3em] text-primary">
                Edition No. 04
              </span>
              <h1 className="mb-8 font-headline text-[5rem] font-extrabold leading-[0.95] tracking-tighter text-white">
                The Master <br />
                <span className="font-medium italic text-primary">Curator.</span>
              </h1>
              <p className="mb-12 max-w-xl font-body text-xl leading-relaxed text-zinc-400">
                Elevate your digital workflow with Obsidian-grade plugins and themes. Built for
                the high-performance intellectual.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/collection"
                  className="transition-editorial rounded-full bg-gradient-to-br from-primary-container to-primary px-10 py-5 font-headline font-bold text-on-primary hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,153,0,0.3)] active:scale-95"
                >
                  Explore Marketplace
                </Link>
                <Link
                  href="/product"
                  className="glass-stroke transition-editorial rounded-full px-10 py-5 font-headline font-semibold text-white hover:bg-white/5"
                >
                  View Documentation
                </Link>
              </div>
            </div>
            <div className="absolute bottom-20 right-20 z-20 flex gap-12">
              <div className="relative">
                <span className="font-headline text-6xl font-black tracking-tighter text-white">
                  14k+
                </span>
                <span className="absolute -right-4 -top-4 origin-left font-label text-[10px] uppercase tracking-widest text-zinc-500">
                  Active Installs
                </span>
              </div>
              <div className="relative">
                <span className="font-headline text-6xl font-black tracking-tighter text-white">
                  99.9%
                </span>
                <span className="absolute -right-4 -top-4 origin-left font-label text-[10px] uppercase tracking-widest text-zinc-500">
                  Uptime SLA
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mb-40 max-w-[1440px] px-8">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <span className="mb-4 block font-label text-xs uppercase tracking-widest text-primary-container">
                Limited Offers
              </span>
              <h2 className="font-headline text-5xl font-extrabold tracking-tighter text-white">
                Curated Specials
              </h2>
            </div>
            <Link
              className="group flex items-center gap-2 font-label text-sm text-zinc-500 transition-colors hover:text-primary"
              href="/collection"
            >
              View all collections
              <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="transition-editorial group relative col-span-8 flex min-h-[480px] flex-col justify-end overflow-hidden rounded-xl bg-surface-container-low p-12 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(0,0,0,0.4),0_0_20px_rgba(255,153,0,0.05)]">
              <img
                alt="Deal"
                className="transition-editorial absolute inset-0 h-full w-full object-cover opacity-30 grayscale group-hover:scale-105 group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAJHBEynzfi2NqKoLCKXVzeOd6vebV_4-hsBGEQhC3tXzHOjHXXkTW4qi8egn321NOmCjl3zkr5An-urqe0UvMRT_6YWHRLd1cxmt2wqBvYz0YFzBTACG1_Bf-HchHv0ANnK0plZKfq9QRhgU52RsCJdpVp6n5UJp3-BXuILF1r_XQOM_XmnddKBPYZtsrgxCneNXRCIF1QqIPznZoQJiDqtfmPQ6LnSmJSoNBIXlK9uMgqQrnKFL-ATeet-id5TMpHi44cCeReQ0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent" />
              <div className="relative z-10">
                <span className="mb-6 inline-block rounded-full bg-primary px-3 py-1 font-headline text-[10px] font-bold uppercase tracking-widest text-on-primary">
                  Flash Deal
                </span>
                <h3 className="mb-4 font-headline text-4xl font-bold text-white">
                  Pro Zen Workspace Bundle
                </h3>
                <p className="mb-8 max-w-md font-body text-zinc-400">
                  A collection of 12 minimalist themes and 4 focus-oriented plugins designed for
                  heavy writing.
                </p>
                <div className="flex items-center gap-4">
                  <span className="font-headline text-2xl font-bold text-primary">$49.00</span>
                  <span className="font-body text-zinc-600 line-through">$120.00</span>
                </div>
              </div>
            </div>

            <div className="col-span-4 flex flex-col gap-8">
              <div className="glass-stroke transition-editorial h-full rounded-xl bg-surface-container-high p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                <span className="material-symbols-outlined mb-6 text-4xl text-primary">
                  auto_stories
                </span>
                <h4 className="mb-2 font-headline text-xl font-bold text-white">
                  Library Extension Pack
                </h4>
                <p className="mb-6 font-body text-sm leading-relaxed text-zinc-400">
                  Automate your book citations and research notes directly from Amazon &amp;
                  Goodreads.
                </p>
                <div className="font-headline font-bold text-white">-30% OFF</div>
              </div>

              <div className="transition-editorial h-full rounded-xl border border-white/5 bg-surface-container-lowest p-8 hover:-translate-y-2">
                <span className="material-symbols-outlined mb-6 text-4xl text-tertiary">
                  analytics
                </span>
                <h4 className="mb-2 font-headline text-xl font-bold text-white">
                  Zettelkasten Pro
                </h4>
                <p className="mb-6 font-body text-sm leading-relaxed text-zinc-400">
                  Visual network analytics for your knowledge graph with advanced heatmaps.
                </p>
                <div className="font-headline font-bold text-white">Free Trial</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mb-40 max-w-[1440px] px-8">
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="mb-4 block font-label text-xs uppercase tracking-widest text-zinc-500">
              Tailored for You
            </span>
            <h2 className="font-headline text-5xl font-extrabold tracking-tighter text-white">
              Recommended Assets
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                title: "Neural Sync Engine",
                author: "By Obsidian Labs",
                price: "$12.00",
                rating: "4.9",
                meta: "v2.1",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAiMfchokyfdGfSOhp7RNYUInBGArp5m-oBhSUa8FmfZW3bPic0fuPsEmXzbHhkXF6NvkqubdjUSIrTjPT2j0epyo0aGYGqpqoopvuqsW6R678nk92pOUu1XijRN-pAt4yOfQi0czFGFGX_Sq490q7qBZeMbeixwHDJ804QrkG1_aQw4MYve6-oxUjwMgQAxlk8ava6khtNPj-ul8BDG07X5Xqkzl2O-BVA_ovbxK3bcSkDeAB44bRtEcKNj2W4O2msguwGDGT6_7I",
              },
              {
                title: "Obsidian Midnight Theme",
                author: "By Curated Design",
                price: "$18.00",
                rating: "5.0",
                meta: "New",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuB2_63txptjdTD9RpCaCzOIe0pPsKu7emNG-m5W488PvnZoRs5FWkgK0enH4eaHAbKg2M55X4j6XkC95hL2Q66-eUWK7-6IFCnKFVsexiwY6bm8y8eEY45h5G5tJ8T9KCoIzCzq0dTz-qgvy1kErfXpKXAnNfLFDjQI4TmTYpv85kKgqR3etlRObATrdEX1Z_EDJQrf7zv9kENmLqiuakqvGNpHGBYa8njV92_sme4ylZ88qWXpcq7a2GIj6WzvpHuVfcyoS6jqU2c",
              },
              {
                title: "Prism Syntax Highlighter",
                author: "By CodeArtisan",
                price: "$9.00",
                rating: "4.7",
                meta: "v1.4",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAoKCrNRvSZz6l-1ZsL4urytOwvlNbKsp1-uneGD-1GutB3zbBKb1hGCY-bcnQE4UT9A8d3dMEVS9ZWGtvvjvNH3hiYCi9gyRptBPvBwH6RRcfFCSP8nYfV0_uYJIRh8pELPzvRpombi-ERxAn2Ot1EVNfpw_9ucwwihn0wQ-wspRJ6jL1ot3sMgSxd8fAXJ2PXjy5_97TS9yxZEfdZJ96sKXh2y7KgtJMTBX5vROc1eRgfa5rxcIJLUd5wfCuk4o4qsAg_TJHe3hE",
              },
              {
                title: "Atlas Map Generator",
                author: "By GeoGraph",
                price: "$25.00",
                rating: "4.8",
                meta: "Pro",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCEA0OtYdj_708Mpv-aUNm1wq6qMp2ezyxESDFjDCYRm3sY0qCYre3f_ASv2cuf6JreRFqew1Wkzas-XG1tr80rljj2NMDb6KXX6RjmhNVAwCpVRdGHlF_LPg_vDvvo_ROG6unauJZuyjcplwkHv8Bn5Q18iWdeZvG2zJH0JkmuuSw2PbQ4KClVcGlSZkM03iQMrBy5dxiN6r6m6tHnigAURwa10t5VDURZXWKUN3hjvtyjXSZM3BFsJYyuqSREgwRxabLNTfsEowk",
              },
            ].map((item) => (
              <div key={item.title} className="group cursor-pointer">
                <div className="transition-editorial relative mb-6 aspect-square overflow-hidden rounded-xl bg-surface-container group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(255,153,0,0.1)]">
                  <img alt={item.title} className="h-full w-full object-cover" src={item.image} />
                  <div className="transition-editorial absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-sm group-hover:opacity-100">
                    <Link
                      href="/product"
                      className="transition-editorial rounded-full bg-white px-6 py-2 font-headline font-bold text-black scale-90 group-hover:scale-100"
                    >
                      Quick View
                    </Link>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-start justify-between">
                    <h5 className="font-headline font-bold text-white transition-colors group-hover:text-primary">
                      {item.title}
                    </h5>
                    <span className="font-label text-xs text-zinc-500">{item.meta}</span>
                  </div>
                  <p className="font-body text-xs text-zinc-500">{item.author}</p>
                  <div className="flex items-center gap-2 pt-2">
                    <span className="font-headline text-sm font-bold text-white">{item.price}</span>
                    <div className="h-1 w-1 rounded-full bg-zinc-700" />
                    <div className="flex items-center">
                      <span
                        className="material-symbols-outlined text-[12px] text-amber-500"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span className="ml-1 text-[10px] font-bold text-zinc-400">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-8">
          <div className="glass-stroke rounded-[2.5rem] bg-surface-container-high p-24 text-center">
            <span className="mb-6 block font-label text-xs uppercase tracking-widest text-primary-container">
              Stay Curated
            </span>
            <h2 className="mb-8 font-headline text-6xl font-extrabold tracking-tighter text-white">
              The Curator&apos;s Weekly.
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-lg text-zinc-400">
              Get the latest plugins, themes, and workflow optimizations delivered to your inbox
              every Friday.
            </p>
            <form className="mx-auto flex max-w-lg gap-4">
              <input
                className="flex-1 rounded-full border-none bg-surface-container-lowest px-8 py-5 text-on-surface transition-all focus:ring-1 focus:ring-orange-500"
                placeholder="curator@example.com"
                type="email"
              />
              <button className="transition-editorial rounded-full bg-primary px-10 py-5 font-headline font-bold text-on-primary hover:shadow-[0_0_20px_rgba(255,153,0,0.4)]">
                Join
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

