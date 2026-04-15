import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function CheckoutPage() {
  return (
    <>
      <Navbar compact />

      <main className="mx-auto min-h-screen max-w-7xl bg-surface px-6 pb-24 pt-32 text-on-surface md:px-12">
        <div className="mx-auto mb-16 max-w-2xl">
          <div className="relative flex items-center justify-between">
            <div className="absolute left-0 top-1/2 -z-10 h-[1px] w-full bg-white/10" />

            <div className="flex flex-col items-center gap-3">
              <div className="editorial-gradient flex h-10 w-10 items-center justify-center rounded-full text-on-primary shadow-lg">
                <span className="material-symbols-outlined text-xl">check</span>
              </div>
              <span className="font-headline text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                Cart
              </span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container text-on-primary ring-4 ring-surface shadow-lg">
                <span className="font-headline font-bold">2</span>
              </div>
              <span className="font-headline text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                Payment
              </span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-surface-container-highest text-zinc-500">
                <span className="font-headline font-bold">3</span>
              </div>
              <span className="font-headline text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                Review
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-7">
            <header>
              <h1 className="mb-4 font-headline text-5xl font-extrabold tracking-tight text-white">
                Payment Method
              </h1>
              <p className="max-w-md text-lg font-light leading-relaxed text-zinc-500">
                Choose your preferred way to support the marketplace and access premium assets.
              </p>
            </header>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="transition-standard group relative cursor-pointer rounded-xl border border-white/5 bg-surface-container-high p-6 ring-2 ring-primary">
                <div className="mb-8 flex items-start justify-between">
                  <span
                    className="material-symbols-outlined text-3xl text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    credit_card
                  </span>
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-1 font-headline font-bold text-white">Credit Card</h3>
                  <p className="text-xs text-zinc-500">Visa, Mastercard, AMEX</p>
                </div>
              </div>

              <div className="transition-standard group relative cursor-pointer rounded-xl border border-white/10 bg-surface-container p-6 hover:bg-surface-container-high">
                <div className="mb-8 flex items-start justify-between">
                  <span className="material-symbols-outlined text-3xl text-zinc-600">
                    account_balance_wallet
                  </span>
                  <div className="h-5 w-5 rounded-full border-2 border-white/20" />
                </div>
                <div>
                  <h3 className="mb-1 font-headline font-bold text-zinc-300">Crypto Wallet</h3>
                  <p className="text-xs text-zinc-600">BTC, ETH, SOL via Coinbase</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="ml-1 text-[11px] font-headline font-bold uppercase tracking-[0.15em] text-zinc-500">
                  Cardholder Name
                </label>
                <input
                  className="transition-standard h-14 w-full rounded-xl border-none bg-surface-container-highest px-6 font-headline font-medium text-white placeholder:text-zinc-700 focus:bg-surface-bright"
                  placeholder="ALEXANDER VANCE"
                  type="text"
                />
              </div>

              <div className="space-y-2">
                <label className="ml-1 text-[11px] font-headline font-bold uppercase tracking-[0.15em] text-zinc-500">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    className="transition-standard h-14 w-full rounded-xl border-none bg-surface-container-highest px-6 font-headline font-medium text-white placeholder:text-zinc-700 focus:bg-surface-bright"
                    placeholder="0000 0000 0000 0000"
                    type="text"
                  />
                  <div className="absolute right-6 top-1/2 flex -translate-y-1/2 gap-2">
                    <div className="h-5 w-8 rounded-sm bg-zinc-800" />
                    <div className="h-5 w-8 rounded-sm bg-zinc-800" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="ml-1 text-[11px] font-headline font-bold uppercase tracking-[0.15em] text-zinc-500">
                    Expiry Date
                  </label>
                  <input
                    className="transition-standard h-14 w-full rounded-xl border-none bg-surface-container-highest px-6 font-headline font-medium text-white placeholder:text-zinc-700 focus:bg-surface-bright"
                    placeholder="MM / YY"
                    type="text"
                  />
                </div>

                <div className="space-y-2">
                  <label className="ml-1 text-[11px] font-headline font-bold uppercase tracking-[0.15em] text-zinc-500">
                    CVC / CVV
                  </label>
                  <input
                    className="transition-standard h-14 w-full rounded-xl border-none bg-surface-container-highest px-6 font-headline font-medium text-white placeholder:text-zinc-700 focus:bg-surface-bright"
                    placeholder="123"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-surface-container-lowest/50 p-6">
              <span className="material-symbols-outlined shrink-0 text-primary-container">
                verified_user
              </span>
              <p className="text-xs leading-relaxed text-zinc-500">
                Your payment data is encrypted and processed via Stripe&apos;s secure
                infrastructure. Obsidian Marketplace does not store your full card details. By
                proceeding, you agree to our{" "}
                <a className="text-primary hover:underline" href="#">
                  Terms of Service
                </a>
                .
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-32 relative overflow-hidden rounded-xl border border-white/5 bg-surface-container-low p-8 shadow-2xl">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
              <h2 className="mb-8 font-headline text-2xl font-bold text-white">Order Summary</h2>

              <div className="mb-10 space-y-6">
                {[
                  {
                    title: "Obsidian Core Pro Plugin",
                    subtitle: "Annual Subscription",
                    price: "$149.00",
                    image:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuAcGvOIUfRr8Pi794oavNdOfdhLZ8WDeYFFOgonYL3zZfwsMakOAWtlAqQryauM79nqfXZFUSQ7A2hFwDcP3Mkw-vQ5YWybrYvoGk5o6YcA2xlgIoF8mAeD45Ei6InxeqXqUgFZEovMFktH2uHBrnSeJxEDE3q_jlZJHScLFYzd7B4MtVHd3Kb-pH3cHSXFfUSiSzYjfZNIZ66cj-1iNgVOyVScUG2bbZILwvGU3jcK71QfKbCzVvMt28uhLo127xJuBrNwrP56Eqc",
                  },
                  {
                    title: "Ethereal Dark UI Kit",
                    subtitle: "Commercial License",
                    price: "$89.00",
                    image:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuBb2waOQbtBF7bdkvvts5sSsN_klnOKQboSHB7WBSNlTmrEZbZ7fne5r0ytYB4O-uml6LNTpoIIVrh9v-JZw8g_F9e0jBJaT2ehpbSnMsqLGH3AA18iQ0mA1wE7Td01SAG1duZ9TuKLVgT120wC60tGh7YL6DIn_A3gbiUIvZoqrT34HYIJjEtJlrREE6hkTq1MXgElqnILQQ4xs-EEYJ_xEyp-o026gquhrhWH6tl2y8XIqA51I55SHUJls6cGVZQfhndhSNhF9tA",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-surface-container-highest">
                      <img
                        className="h-full w-full object-cover"
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                    <div className="flex flex-grow flex-col justify-center">
                      <h4 className="mb-1 text-sm font-bold text-white">{item.title}</h4>
                      <p className="font-label text-xs uppercase tracking-wide text-zinc-500">
                        {item.subtitle}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-end">
                      <span className="text-sm font-bold text-white">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 border-t border-white/5 pt-8">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Subtotal</span>
                  <span className="text-zinc-300">$238.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Taxes (calculated)</span>
                  <span className="text-zinc-300">$0.00</span>
                </div>
                <div className="flex items-end justify-between pt-4">
                  <div className="flex flex-col">
                    <span className="mb-1 font-headline text-xs font-bold uppercase tracking-widest text-primary">
                      Total Due
                    </span>
                    <span className="font-headline text-4xl font-extrabold tracking-tighter text-white">
                      $238.00
                    </span>
                  </div>
                  <div className="text-right font-label text-[10px] uppercase tracking-tighter text-zinc-600">
                    Billed in USD
                  </div>
                </div>
              </div>

              <button className="editorial-gradient transition-standard mt-10 flex h-16 w-full items-center justify-center gap-3 rounded-full font-headline text-lg font-extrabold tracking-tight text-on-primary shadow-[0_10px_40px_rgba(255,153,0,0.2)] hover:scale-[1.02] active:scale-95">
                <span>Complete Purchase</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>

              <div className="mt-8 flex items-center justify-center gap-2 rounded-full bg-white/5 py-4">
                <span
                  className="material-symbols-outlined text-[14px] text-amber-500"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  workspace_premium
                </span>
                <span className="font-headline text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  Curator Choice Partner
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer variant="checkout" />
    </>
  );
}

