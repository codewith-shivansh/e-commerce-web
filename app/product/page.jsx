import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function ProductPage() {
  return (
    <>
      <Navbar active="plugins" showSearch={false} />

      <main className="mx-auto max-w-[1440px] bg-surface px-8 pb-20 pt-28 text-on-surface">
        <nav className="mb-10 flex items-center gap-2 font-label text-xs uppercase tracking-widest text-on-surface-variant">
          <Link className="transition-colors hover:text-primary" href="/">
            Marketplace
          </Link>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <Link className="transition-colors hover:text-primary" href="/collection">
            Premium Plugins
          </Link>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <span className="text-on-surface">Neural Graph Engine</span>
        </nav>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            <div className="group relative aspect-[4/5] cursor-crosshair overflow-hidden rounded-xl bg-surface-container-low">
              <img
                alt="Premium digital interface"
                className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC1S88c6brFwTPLUx71GbwD8Edswd_4k0qDAQcReQ4RPd4MtPbc01PUaFkcuOWqbFl7xJdr0RQUmii-RT6Ppq8No-D5DA2nyEfGj_Wk42jqgQnLAowsAx8M3f3K9lIuvL6uSWrFjHHIlUz1F87eifz0ccFJec8w6OhoYtEnpBIws-DnPkTQLk09JK9RwLEmV7-65z9Z4wSlj5brDHIy1z8B6FctTnyUhEtxOwtZsTwvjNdOgPcEq9OGsfZ1orAejhIOm6t2FO0Oz8"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="aspect-square overflow-hidden rounded-xl bg-surface-container-low">
                <img
                  alt="Detail view"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPOGHcPfrKB6tr1nhvqMhEuJqWNd5otvJweUh1Skoic2BkQGqSzUQ_-ccyKvi3yALCz1IdB7XMBIBdCYgK9lFYqLQYsWxcnFjxrK9Xs4-Q7yv-U5Zm2YOY-hc1wJSwcI1pTT-AZCsdQI5D1iCHWo-AZFnIrySPicwAQz66AKXsE8UnEkc0HL3uWnyNbja3Rp_rgIschAy69XSxtrmkjj68SlVfcV-U_0FEgiD-FhuH6Dcrls_7H1LJbW-KWMFd2UZeKn78fBUQ-jU"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl bg-surface-container-low">
                <img
                  alt="Interface view"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMWS92Kp9fI1Lds3S_WwU-zjkCVlJuQVGY4E2gZK82oMlnlYRMTuIjxqZagSe9Vnj5uYoK0b9PUBNbhsKcRpq4ftAT8qoV-urbcJJbzKrI-YddPyNbh-MOV6IuFSNOgIgNXJFLeIm9dNIBCuMMj9zt5UFTJcc907OAVSxgwEjaJwSxe4OXHJns0EZE9XMCouA-fuKghrwNSCJXU2QoyAmLuHvhjQJLF8FzlNrCz1SMoRf5p0QP7SOid_TmbW8L514ZoD8a1WlZT7U"
                />
              </div>
            </div>
          </div>

          <div className="sticky top-32 h-fit space-y-12 lg:col-span-5">
            <header className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-primary/20 bg-primary-container/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary">
                  Enterprise Grade
                </span>
                <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-[14px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  4.9 (128 Reviews)
                </span>
              </div>
              <h1 className="text-tight font-headline text-6xl font-extrabold leading-none text-white">
                Neural Graph Engine
              </h1>
              <p className="max-w-md font-body text-lg leading-relaxed text-on-surface-variant">
                A generative AI-powered visualization layer that maps latent connections across
                your entire Obsidian vault in real-time.
              </p>
            </header>

            <div className="space-y-8">
              <div className="flex items-baseline gap-4">
                <span className="font-headline text-5xl font-bold tracking-tighter text-white">
                  $149.00
                </span>
                <span className="font-body text-xl line-through opacity-50 text-on-surface-variant">
                  $299.00
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  href="/cart"
                  className="hero-gradient rounded-full py-5 text-center font-headline text-lg font-extrabold text-on-primary shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  Add to Library
                </Link>
                <Link
                  href="/checkout"
                  className="rounded-full border border-white/10 bg-surface-container-highest/50 py-5 text-center font-headline text-lg font-bold text-on-surface transition-colors hover:bg-surface-bright"
                >
                  View Documentation
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                Technical Architecture
              </h3>
              <div className="space-y-1">
                {[
                  ["Processing Model", "LLM-Graph v4.2"],
                  ["Memory Efficiency", "< 50MB RAM"],
                  ["Compatibility", "Obsidian 1.5+"],
                  ["Updates", "Life-time Access"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="group flex items-center justify-between border-b border-white/10 py-4"
                  >
                    <span className="font-medium text-on-surface-variant">{label}</span>
                    <span className="font-headline font-bold text-white transition-colors group-hover:text-primary">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-surface-container p-8">
              <div className="absolute right-0 top-0 p-4">
                <span className="material-symbols-outlined text-4xl text-primary/40">bolt</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-headline text-5xl font-extrabold tracking-tighter text-white">
                  48%
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
                  Efficiency Increase reported by power users
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-40 space-y-12">
          <div className="flex items-end justify-between">
            <div className="space-y-4">
              <h2 className="font-headline text-4xl font-extrabold tracking-tight text-white">
                Curated Features
              </h2>
              <p className="max-w-xl text-on-surface-variant">
                Each module is hand-crafted to meet the standards of the world&apos;s most
                demanding digital curators.
              </p>
            </div>
            <div className="mx-12 hidden h-[1px] flex-grow bg-white/10 md:block" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-xl bg-surface-container-low p-10 md:col-span-2">
              <div className="relative z-10 space-y-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">hub</span>
                </div>
                <h3 className="font-headline text-3xl font-extrabold text-white">
                  Semantic Spatial Mapping
                </h3>
                <p className="max-w-md text-on-surface-variant">
                  Our engine doesn&apos;t just link tags; it understands the intent behind your
                  prose, clustering related concepts visually before you even realize they are
                  connected.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 h-full w-2/3 translate-x-1/4 translate-y-1/4 opacity-40 transition-opacity group-hover:opacity-60">
                <img
                  alt="Network Map"
                  className="h-full w-full rounded-tl-3xl object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv37EQn2vhhjp2vzdU0tQD8ghNX4KAHZ0oK40IO1juyl0EX_AT65279dPxJ1-s9S2Vz_C0csCYpvdQ9R4gYQIMtZMVLyi2JZxESYu9x8Je6J6WhU4Kf170ohw2A2e0HeJyLVHbyVim-0Qz_IZln_VVkMYckX_LxGO6Mvn2nbQ4ptUbcQmvv_smCrB75b7ubQ03QLr4j6nObHXSNXTIcjiy_5HoTth25fH4IqZswWMFbtM4a2CqgLXAqIFbaEHlz5RdehDbdb-0CGg"
                />
              </div>
            </div>

            <div className="space-y-6 rounded-xl bg-surface-container-high p-10 transition-colors duration-500 hover:bg-surface-bright">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-tertiary/10 text-tertiary">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <h3 className="font-headline text-2xl font-extrabold text-white">
                Neural Suggest
              </h3>
              <p className="leading-relaxed text-on-surface-variant">
                Predictive text expansion that learns your unique tone of voice and technical
                vocabulary over time.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-6 rounded-xl border border-white/5 bg-surface-container-low p-10 text-center">
              <span className="font-headline text-6xl font-extrabold text-primary">0.2ms</span>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">Latency Zero</h3>
                <p className="px-4 text-sm text-on-surface-variant">
                  Built with Rust for near-instant indexing of vaults exceeding 100k notes.
                </p>
              </div>
            </div>

            <div className="group flex items-center gap-12 rounded-xl bg-gradient-to-br from-surface-container to-surface-container-highest p-10 md:col-span-2">
              <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-xl shadow-2xl">
                <img
                  alt="Security"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF7JLqCGhBaQQASEL2MZ-FRbXea-IHHx2b28JoLGt2lv5iJiX_5H1falLqE8fFONcuJx7NJfOpDG8iYO5q-INVNvMDFkdlnICMmYkXkptgPrXws4X_ddTtc2qkStw7yUc8trfDsfkmyatQfSkYfDWfP7JlE7E8qiYRIw-lt8JE7oihkJZLgFKEpuF3Cg97i0m5TLd81HewsC-sa83aCsfVE6RRHHkpfvxdKmIn4U8MfX9EydZwDStmAbQGHQiiXoqjJ_5Ii8tW68Q"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-headline text-2xl font-extrabold text-white">
                  Local-First Privacy
                </h3>
                <p className="text-on-surface-variant">
                  All neural computations happen on your machine. Your data never touches a cloud
                  server, ensuring absolute curator privacy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="product" />
    </>
  );
}

