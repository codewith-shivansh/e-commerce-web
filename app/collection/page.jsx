import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function CollectionPage() {
  const products = [
    {
      title: "Hyper-Focus Canvas",
      type: "Plugin",
      rating: "4.9 (1.2k)",
      price: "$49.00",
      description:
        "Transform your workspace into a distraction-free editorial environment with adaptive dark modes.",
      cta: "Add to Cart",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDiBD96d0R0rR0_4FVvxiAvqvlMhcrslXb5WD2tRoStVjydvEPaNMfSqfDSkC1f3uF3aZJyBaf6aaV5jW6XRhkVS_-VXF8pJFvLjSv8EqHv0zKgZLHIeVQYYPal255T-5ggnf163F0sm0EE2RVAZl9y9aIm1AqcfI3h_wLMrYyNvO8SFH5ZN2fxxarpOE6ID-5JWJ7_VF_9OE7NxKV1KCt09q0UeHesYEKS_m7zAnUcPfOqcMXckrMzx4kR-GlXgy2RbigsAC1FXbw",
      accent: true,
    },
    {
      title: "Geometric Primitives",
      type: "Asset Pack",
      rating: "5.0 (850)",
      price: "$12.00",
      description:
        "High-fidelity 3D assets optimized for modern web interfaces and editorial layouts.",
      cta: "Add to Cart",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBsHytEeEqoxyfw18NK2cAaLoKcs_X7E9eNuHPza7coJD_NTAC7elrnvA9ISqUtro0CrgHim-0vz006xw8fam1NgLZ58pq3eqDfunIvLKjwNTNrsECQODe9-5GWVBR3um5IrTkIJ9CUwRgkaVrbxIT1iqfe91UI8jFs0jIJ5FPuh8jQUHfAl-ScWWWZc86yb79vxqoXhpELuUEq9g4qZz22gbaNjFhbLxtRPNBc2Z_usxdfX45EsbWAaowXxkSL9jZazyRWEuj5c8I",
    },
    {
      title: "Neural Core Sync",
      type: "Integration",
      rating: "4.8 (340)",
      price: "$129.00",
      description:
        "Real-time bi-directional synchronization for distributed team workflows and knowledge bases.",
      cta: "Add to Cart",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCPVKrxUGvDR9LECHicDGUlQNRMI0EELAiW8raaz7ZRF3QOFhSnggKI_hBgnOpj345uGCY-vH9OoIVco1I4-gdldgn22gy6LJwcOEW2VIaBlWRqMmwqto-sjZMkWE9eqgpARPbnUaWWE_5HVIxmwEt_EtSZK4K5gvgfvp-qRI8gaPmAhPwGDIMp5pztPthN4AvwG7IOo6O4Kxbwbq_qvo9m5PYxzdk4I29Jp_wghk_Gs_9O56D_K3Np5lO0T74Z0KxFayx9uCz4TTo",
    },
    {
      title: "Obsidian Noir",
      type: "Theme",
      rating: "4.9 (5.4k)",
      price: "Free",
      description:
        "The original obsidian experience refined for maximum readability and visual comfort.",
      cta: "Download Now",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDrP9uPQJcqb8LGI08wMpaL7P737pSV3yX7TnnNVKxVqSt2HyrMQAKS-1erTOuOFxszQBeWPRqVvQn7nhv1tBWEhrjJTmDcKSW5aEHq1Ds8G0GXs_APczqqwpqonNkimrRJmkVxCH0_QbP6ilMDozvaBikz8hhfScDqf_gJG5K5zDZBZbMHZkMp0KwUGaouGlD3bwc7TJcajAOd8SLqjm32m1loq6QmvGsV6BJ5YqJO7FyMh6riOHmzytmbDOH_mfTZwVdKHe-w7B4",
    },
    {
      title: "Global Meta-Data",
      type: "Resources",
      rating: "4.7 (120)",
      price: "$35.00",
      description:
        "Complete library of localized assets and metadata schemas for international scaling.",
      cta: "Add to Cart",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBbuYAdHRq-QFGY9wH3yjhQyQ6Bbd-PvGcuBP97rpUwJlDXvZMa4cSBhyIaPC9041nAWq8O4WWQY-FmjKwmAZf6AvFK2tLX8x5AnjaIbusUC9sr71atZd9d6V964ZqHRD6WB8f60jYDEb2OD-m5sLRE7sZKbjc8_yyOjkxVK-1HoeWVwDyNGgs1OJJ867mMaeznkwBlHcAfefG7v-L-iH9KGspSzv0JtFM8aOqOLL_H63Hf-sELtL2eB00IuQZpfWaeq5W3YuxH8rE",
    },
    {
      title: "Prism Interface",
      type: "Plugin",
      rating: "4.9 (1.8k)",
      price: "$79.00",
      description:
        "Advanced layout engine for complex data visualization and nested workspace management.",
      cta: "Add to Cart",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDOL5Elr72f8R2G4lmYViEE8ZAj3G9OwdeIPf-LDcoysMHhByov-dLBnJFITU58EoiH-0zncP_9NwMLDORUhD1CKPk_bHe5yAetnbb9coyQPQHqhw9l77OS3a8eFBpTxrUgy2PA66MZX6LxDeeFUZnHMjvjoez5DinSMNlCCR7LIusLnqv9wt8EPkN-m1MF3HbpIAMDiGzYav1h3zdKOWqE0nHzo6UVWr07XGpF3jp4IhFSIGbwn0_MTaP18j73743g8SNc3ILp3Qo",
    },
  ];

  return (
    <>
      <Navbar active="plugins" />

      <main className="mx-auto flex max-w-[1440px] gap-12 bg-surface px-8 pb-24 pt-32">
        <aside className="hidden w-64 flex-shrink-0 lg:block">
          <div className="sticky top-32 space-y-10">
            <div>
              <h3 className="mb-6 font-headline text-xs uppercase tracking-widest text-on-surface-variant">
                Categories
              </h3>
              <ul className="space-y-4">
                {[
                  ["Productivity", "24"],
                  ["Visual Editors", "12"],
                  ["Integrations", "08"],
                  ["Experimental", "15"],
                ].map(([name, count]) => (
                  <li key={name}>
                    <Link className="group flex items-center justify-between" href="/collection">
                      <span className="text-on-surface transition group-hover:text-primary">
                        {name}
                      </span>
                      <span className="rounded bg-surface-container-high px-2 py-0.5 text-[10px] text-zinc-500">
                        {count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px bg-white/10" />

            <div>
              <h3 className="mb-6 font-headline text-xs uppercase tracking-widest text-on-surface-variant">
                Price Range
              </h3>
              <div className="px-2">
                <div className="relative mb-4 h-1 rounded-full bg-surface-container-highest">
                  <div className="editorial-gradient absolute left-0 right-1/4 h-full rounded-full" />
                  <div className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-primary bg-white shadow-lg" />
                  <div className="absolute right-1/4 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-primary bg-white shadow-lg" />
                </div>
                <div className="flex justify-between text-[11px] font-medium text-zinc-500">
                  <span>$0</span>
                  <span>$250+</span>
                </div>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            <div>
              <h3 className="mb-6 font-headline text-xs uppercase tracking-widest text-on-surface-variant">
                Rating
              </h3>
              <div className="space-y-3">
                {[4, 3].map((filled, index) => (
                  <label key={index} className="group flex cursor-pointer items-center gap-3">
                    <input
                      className="h-4 w-4 rounded border-none bg-surface-container-highest text-primary"
                      type="checkbox"
                    />
                    <div className="flex text-amber-500">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className="material-symbols-outlined text-sm"
                          style={{
                            fontVariationSettings:
                              star <= filled ? "'FILL' 1" : "'FILL' 0",
                          }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-on-surface-variant">&amp; up</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <button className="w-full rounded-xl border border-white/10 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white/5">
                Reset Filters
              </button>
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <header className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="mb-2 font-headline text-5xl font-extrabold tracking-tighter text-white">
                The Collection
              </h1>
              <p className="text-lg text-on-surface-variant">
                Curated digital assets for the modern workflow.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                Sort by:
              </span>
              <button className="flex items-center gap-2 rounded-lg bg-surface-container-low px-4 py-2 text-sm hover:bg-surface-container">
                <span>Newest Arrivals</span>
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </button>
            </div>
          </header>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.title}
                className="group overflow-hidden rounded-xl border border-white/5 bg-surface-container-low transition hover:scale-[1.02]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition group-hover:scale-110"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent opacity-60" />
                  <div className="absolute right-4 top-4 rounded-full border border-white/5 bg-surface-container/80 px-3 py-1 backdrop-blur-md">
                    <span className="text-xs font-bold text-primary">{product.price}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80">
                      {product.type}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] text-zinc-500">
                      <span
                        className="material-symbols-outlined text-[12px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="mb-2 font-headline text-xl font-bold leading-tight text-white">
                    {product.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
                    {product.description}
                  </p>

                  <Link
                    href={product.cta === "Download Now" ? "/checkout" : "/cart"}
                    className={`flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-bold transition active:scale-95 ${
                      product.accent
                        ? "editorial-gradient text-on-primary hover:shadow-[0_0_20px_rgba(255,153,0,0.3)]"
                        : "border border-white/5 bg-surface-container-highest text-white hover:bg-surface-bright"
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">
                      {product.cta === "Download Now" ? "download" : "add_shopping_cart"}
                    </span>
                    {product.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex items-center justify-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-low text-on-surface-variant transition-colors hover:text-white">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-container font-bold text-on-primary">
              1
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-low text-on-surface-variant transition-colors hover:text-white">
              2
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-low text-on-surface-variant transition-colors hover:text-white">
              3
            </button>
            <span className="px-2 text-zinc-600">...</span>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-low text-on-surface-variant transition-colors hover:text-white">
              12
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-low text-on-surface-variant transition-colors hover:text-white">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </main>

      <Footer variant="collection" />
    </>
  );
}

