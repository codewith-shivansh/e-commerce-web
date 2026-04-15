import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function CartPage() {
  const cartItems = [
    {
      title: "Ember Aura Theme",
      price: "$49.00",
      subtitle: "Commercial License • Priority Updates",
      quantity: 1,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBwKDd0w1NUgTNlkW8unru3ZTkcIoMWGGY_MPwOApm-kMiHhbK-Z2XG0z4u14VMcZFXMooGlcynJLshJZW3pF1_gIaSFBi4Y1QcE4K8NNNQBP7xjzg0e_4iW9eHeupx-lA_frISLTCpKGeLDw4dSlyclH4s42XV8E_fBEIiJuKZNUjpmUEHM4yXbMQfmPwfNlR6k8Pd9eE_MBnsX4TfY2KrKeFALWIkC4YxDZqbnpB7gWQFbhw6D5wl6jawfM12HsjWmin63vFIe9c",
    },
    {
      title: "Advanced Graph Engine",
      price: "$129.00",
      subtitle: "Plugin Bundle • Lifetime Support",
      quantity: 1,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuChm6_7arAbFlIzExtnq03dcT3GkBCoZPuVsRBDUzYdp4_oGweVyeKUIoMysi6c-x4T2Dm8OZ-Gu_gz9Jd8HYNVAqpxE9kF3H6kJb-uyxCrSzRzZB-V4ijCZWIuygR1NvkVw7xWJGjxtxVukytoV_5k0t3v3jGKhd-mGEUqvsMKM53CM3KsLG3oRIYG02rf5cNp9odbRS7S4gY1Pl6cLDZrjLAkTw3g6xmZEeAGGdJ4MMai7Y-k849PbgooKrZMEH9q7Ushey6wixA",
    },
    {
      title: "Focus Sprints Pack",
      price: "$24.00",
      subtitle: "Productivity Resource • 12 Templates",
      quantity: 2,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAHZFTCU3zwQixIe-VkNTnSh6kAHZiRKpNeGndk0fRqqQo-kLDFrjmubyRtt0SJrA3fdPuM9FXYloXkwfi3wHvsF3n71zV6rl-VoKDMUqzlV0_wU39pG8Za-iZJfWruJGZPogOQRFM5iDhQz_kSelWtHa2VmrfnfLz7fhxRX4UbkJ0m2ryliNEAn4oUSG91o7o2sNG2kyx2umG2z1bxIqs79oHZuVDRsV8QZ_R3QuuW5XEzgKj_GtlXbLqv6r15ehXDoym1qGOniOc",
    },
  ];

  return (
    <>
      <Navbar active="discover" cartHighlight showSearch={false} />

      <main className="mx-auto max-w-[1440px] bg-background px-8 pb-24 pt-32 text-on-surface">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <header className="mb-12">
              <h1 className="mb-2 font-headline text-5xl font-extrabold tracking-tighter text-white">
                Shopping Cart
              </h1>
              <p className="font-label text-sm uppercase tracking-widest text-on-surface-variant">
                3 Curated Assets Selected
              </p>
            </header>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-center gap-8 rounded-xl bg-surface-container-low p-6 transition-all duration-300 hover:bg-surface-container"
                >
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-surface-container-highest">
                    <img
                      className="h-full w-full object-cover"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>

                  <div className="flex-grow">
                    <div className="mb-1 flex items-start justify-between">
                      <h3 className="font-headline text-xl font-bold tracking-tight text-white">
                        {item.title}
                      </h3>
                      <span className="text-xl font-medium text-primary">{item.price}</span>
                    </div>
                    <p className="mb-4 text-sm text-on-surface-variant">{item.subtitle}</p>

                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-4 rounded-full bg-surface-container-highest px-3 py-1">
                        <button className="text-on-surface-variant transition-colors hover:text-primary">
                          <span className="material-symbols-outlined text-lg">remove</span>
                        </button>
                        <span className="w-4 text-center text-sm font-bold">{item.quantity}</span>
                        <button className="text-on-surface-variant transition-colors hover:text-primary">
                          <span className="material-symbols-outlined text-lg">add</span>
                        </button>
                      </div>

                      <button className="flex items-center gap-1 text-xs uppercase tracking-widest text-on-surface-variant transition-colors hover:text-error">
                        <span className="material-symbols-outlined text-sm">delete</span>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-xl border border-white/5 bg-surface-container-lowest p-8">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-amber-500">verified</span>
                <div>
                  <p className="font-bold text-white">Premium Curator Protection</p>
                  <p className="text-sm text-on-surface-variant">
                    All purchases include a 14-day satisfaction guarantee and secure cloud sync.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="glass-panel relative overflow-hidden rounded-xl border border-white/10 p-8 shadow-2xl">
                <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-primary/20 blur-[100px]" />
                <h2 className="mb-8 font-headline text-2xl font-bold tracking-tight text-white">
                  Order Summary
                </h2>

                <div className="mb-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">Subtotal</span>
                    <span className="font-medium text-white">$226.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">Platform Fee</span>
                    <span className="font-medium text-white">$12.50</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">VAT (20%)</span>
                    <span className="font-medium text-white">$45.20</span>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="mb-1 text-xs uppercase tracking-widest text-on-surface-variant">
                          Total Amount
                        </p>
                        <p className="font-headline text-4xl font-extrabold tracking-tighter text-white">
                          $283.70
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-tighter text-primary-container">
                          Secure Checkout
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Link
                    href="/checkout"
                    className="editorial-gradient block w-full rounded-full py-4 text-center font-bold tracking-tight text-on-primary shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                  >
                    Complete Purchase
                  </Link>

                  <div className="flex items-center gap-2">
                    <input
                      className="flex-grow rounded-full border-none bg-surface-container-highest px-6 py-3 text-sm focus:ring-1 focus:ring-orange-500"
                      placeholder="Promo Code"
                      type="text"
                    />
                    <button className="rounded-full bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10">
                      Apply
                    </button>
                  </div>
                </div>

                <div className="mt-8 flex justify-center gap-4 opacity-40">
                  <span className="material-symbols-outlined">contactless</span>
                  <span className="material-symbols-outlined">credit_card</span>
                  <span className="material-symbols-outlined">account_balance_wallet</span>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-surface-container-low p-6">
                <p className="mb-4 text-xs uppercase tracking-widest text-on-surface-variant">
                  Often bought with
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container-highest">
                    <span className="material-symbols-outlined text-primary">bolt</span>
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-bold leading-tight text-white">Turbo Engine Pro</p>
                    <p className="text-xs text-primary">+$15.00</p>
                  </div>
                  <Link
                    href="/product"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all hover:bg-primary hover:text-on-primary"
                  >
                    <span className="material-symbols-outlined text-sm">add</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer variant="cart" />
    </>
  );
}

