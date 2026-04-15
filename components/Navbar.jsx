import Link from "next/link";

const navItems = [
  { href: "/", label: "Discover", key: "discover" },
  { href: "/collection", label: "Plugins", key: "plugins" },
  { href: "/collection", label: "Themes", key: "themes" },
  { href: "/product", label: "Resources", key: "resources" },
];

function getNavItemClass(isActive) {
  return isActive
    ? "border-b-2 border-amber-500 pb-1 font-bold text-amber-500"
    : "text-zinc-400 transition-colors hover:text-white";
}

export default function Navbar({
  active = "discover",
  compact = false,
  cartHighlight = false,
  showSearch = true,
  showNavLinks = true,
}) {
  if (compact) {
    return (
      <nav className="fixed left-1/2 top-0 z-50 flex h-20 w-full max-w-[1440px] -translate-x-1/2 items-center justify-between bg-surface-dim/60 px-8 backdrop-blur-xl">
        <Link href="/" className="font-headline text-xl font-bold tracking-tighter text-white">
          Obsidian Marketplace
        </Link>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm font-medium text-zinc-400">
            <span className="material-symbols-outlined text-sm">lock</span>
            <span className="font-label text-[10px] uppercase tracking-widest">
              Secure Checkout
            </span>
          </div>
          <Link href="/cart" className="transition-standard text-zinc-500 hover:text-white">
            <span className="material-symbols-outlined">close</span>
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 z-50 w-full bg-zinc-900/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-8">
        <div className="flex items-center gap-12">
          <Link href="/" className="font-headline text-xl font-bold tracking-tighter text-white">
            Obsidian Marketplace
          </Link>

          {showNavLinks ? (
            <div className="hidden items-center gap-8 font-headline text-sm font-medium tracking-tight md:flex">
              {navItems.map((item) => (
                <Link key={item.key} href={item.href} className={getNavItemClass(active === item.key)}>
                  {item.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <div className="flex items-center gap-6">
          {showSearch ? (
            <div className="relative hidden group lg:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sm text-zinc-500">
                search
              </span>
              <input
                className="w-64 rounded-full border-none bg-surface-container-highest py-2 pl-10 pr-4 text-sm placeholder:text-zinc-500 transition-all focus:bg-surface-bright focus:ring-1 focus:ring-orange-500"
                placeholder="Search the curated collection..."
                type="text"
              />
            </div>
          ) : null}

          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className={`rounded-full p-2 transition-all duration-300 hover:bg-white/5 ${
                cartHighlight ? "text-amber-500" : "text-zinc-400"
              }`}
            >
              <span className="material-symbols-outlined">shopping_bag</span>
            </Link>
            <button className="rounded-full p-2 text-zinc-400 transition-all duration-300 hover:bg-white/5 hover:text-white">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

