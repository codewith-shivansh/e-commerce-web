import Link from "next/link";

export default function Footer({ variant = "default" }) {
  if (variant === "checkout") {
    return (
      <footer className="w-full border-t border-white/5 bg-zinc-950 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 font-headline font-bold text-amber-500">Obsidian Marketplace</div>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
              The Digital Curator. A premium ecosystem for high-performance assets and sophisticated
              digital tools.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="mb-2 font-headline text-xs font-bold uppercase tracking-widest text-zinc-300">
              Company
            </span>
            <Link className="text-sm text-zinc-500 transition-colors hover:text-amber-400" href="#">
              Privacy
            </Link>
            <Link className="text-sm text-zinc-500 transition-colors hover:text-amber-400" href="#">
              Terms
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="mb-2 font-headline text-xs font-bold uppercase tracking-widest text-zinc-300">
              Help
            </span>
            <Link className="text-sm text-zinc-500 transition-colors hover:text-amber-400" href="#">
              API
            </Link>
            <Link className="text-sm text-zinc-500 transition-colors hover:text-amber-400" href="#">
              Support
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl items-center justify-between px-12 font-headline text-[10px] uppercase tracking-widest text-zinc-600">
          <span>© 2024 Obsidian Marketplace. The Digital Curator.</span>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-sm">shield</span>
            <span>Tier IV Security</span>
          </div>
        </div>
      </footer>
    );
  }

  if (variant === "collection") {
    return (
      <footer className="w-full border-t border-white/5 bg-zinc-950 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-12 md:grid-cols-4">
          <div className="col-span-1">
            <span className="font-headline text-lg font-bold tracking-tighter text-amber-500">
              Obsidian Marketplace
            </span>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              The premier destination for elite digital assets. Curating the tools for the next
              generation of digital architects.
            </p>
          </div>
          <div>
            <h4 className="mb-6 font-headline text-xs uppercase tracking-widest text-white">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>
                <Link className="transition-colors hover:text-amber-400" href="/collection">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-amber-400" href="/collection">
                  Featured Plugins
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-amber-400" href="/collection">
                  Elite Themes
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-amber-400" href="#">
                  Developer API
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-headline text-xs uppercase tracking-widest text-white">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>
                <Link className="transition-colors hover:text-amber-400" href="#">
                  Documentation
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-amber-400" href="#">
                  Community Forum
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-amber-400" href="#">
                  Support Center
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-amber-400" href="#">
                  Brand Assets
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-headline text-xs uppercase tracking-widest text-white">
              Newsletter
            </h4>
            <p className="mb-4 text-xs text-zinc-500">Curated weekly updates on new assets.</p>
            <div className="flex gap-2">
              <input
                className="w-full rounded-lg border-none bg-surface-container px-4 py-2 text-sm focus:ring-1 focus:ring-orange-500"
                placeholder="Email address"
                type="email"
              />
              <button className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-on-primary">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-white/5 px-12 pt-8 text-sm text-zinc-500 md:flex-row">
          <span>© 2024 Obsidian Marketplace. The Digital Curator.</span>
          <div className="flex gap-8">
            <Link className="transition-colors hover:text-white" href="#">
              Privacy
            </Link>
            <Link className="transition-colors hover:text-white" href="#">
              Terms
            </Link>
            <Link className="transition-colors hover:text-white" href="#">
              API
            </Link>
            <Link className="transition-colors hover:text-white" href="#">
              Support
            </Link>
          </div>
        </div>
      </footer>
    );
  }

  if (variant === "product") {
    return (
      <footer className="w-full border-t border-white/5 bg-zinc-950 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-12 md:grid-cols-4">
          <div className="space-y-4">
            <span className="font-headline font-bold text-amber-500">Obsidian Marketplace</span>
            <p className="text-sm leading-relaxed text-zinc-500">
              © 2024 Obsidian Marketplace. The Digital Curator. Elevating the standard for modern
              knowledge workers.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link className="text-sm text-zinc-500 transition-colors hover:text-amber-400" href="/">
                  Discover
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-zinc-500 transition-colors hover:text-amber-400"
                  href="/collection"
                >
                  Themes
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-zinc-500 transition-colors hover:text-amber-400"
                  href="/collection"
                >
                  Plugins
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link className="text-sm text-zinc-500 transition-colors hover:text-amber-400" href="#">
                  Privacy
                </Link>
              </li>
              <li>
                <Link className="text-sm text-zinc-500 transition-colors hover:text-amber-400" href="#">
                  Terms
                </Link>
              </li>
              <li>
                <Link className="text-sm text-zinc-500 transition-colors hover:text-amber-400" href="#">
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Connect</h4>
            <div className="flex gap-4">
              <Link
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-all hover:text-amber-500"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">terminal</span>
              </Link>
              <Link
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-all hover:text-amber-500"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">public</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  if (variant === "cart") {
    return (
      <footer className="w-full border-t border-white/5 bg-zinc-950 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-12 text-sm leading-relaxed md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="mb-4 block font-bold text-amber-500">Obsidian Marketplace</span>
            <p className="max-w-xs text-zinc-500">
              © 2024 Obsidian Marketplace. The Digital Curator. Elevating the standard for modern
              knowledge management assets.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="mb-1 font-medium text-white">Resources</span>
            <Link className="text-zinc-500 transition-colors hover:text-amber-400" href="#">
              API Documentation
            </Link>
            <Link className="text-zinc-500 transition-colors hover:text-amber-400" href="#">
              Developer Portal
            </Link>
            <Link className="text-zinc-500 transition-colors hover:text-amber-400" href="#">
              Plugin Guidelines
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="mb-1 font-medium text-white">Company</span>
            <Link className="text-zinc-500 transition-colors hover:text-amber-400" href="#">
              Privacy
            </Link>
            <Link className="text-zinc-500 transition-colors hover:text-amber-400" href="#">
              Terms
            </Link>
            <Link className="text-zinc-500 transition-colors hover:text-amber-400" href="#">
              Support
            </Link>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full border-t border-white/5 bg-zinc-950 py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-12 md:grid-cols-4">
        <div className="col-span-1">
          <span className="mb-6 block font-headline text-lg font-bold text-amber-500">
            Obsidian Marketplace
          </span>
          <p className="font-body text-sm leading-relaxed text-zinc-500">
            The premier destination for high-end digital curators and PKM enthusiasts.
          </p>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <span className="font-headline text-sm font-bold uppercase tracking-widest text-white">
            Platform
          </span>
          <Link className="text-sm text-zinc-500 transition-colors hover:text-amber-400" href="/collection">
            Plugins
          </Link>
          <Link className="text-sm text-zinc-500 transition-colors hover:text-amber-400" href="/collection">
            Themes
          </Link>
          <Link className="text-sm text-zinc-500 transition-colors hover:text-amber-400" href="/product">
            Resources
          </Link>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <span className="font-headline text-sm font-bold uppercase tracking-widest text-white">
            Company
          </span>
          <Link className="text-sm text-zinc-500 transition-colors hover:text-amber-400" href="#">
            Privacy
          </Link>
          <Link className="text-sm text-zinc-500 transition-colors hover:text-amber-400" href="#">
            Terms
          </Link>
          <Link className="text-sm text-zinc-500 transition-colors hover:text-amber-400" href="#">
            API
          </Link>
          <Link className="text-sm text-zinc-500 transition-colors hover:text-amber-400" href="#">
            Support
          </Link>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <span className="font-headline text-sm font-bold uppercase tracking-widest text-white">
            Social
          </span>
          <div className="flex gap-4">
            <Link className="text-zinc-500 transition-colors hover:text-white" href="#">
              <span className="material-symbols-outlined">alternate_email</span>
            </Link>
            <Link className="text-zinc-500 transition-colors hover:text-white" href="#">
              <span className="material-symbols-outlined">hub</span>
            </Link>
            <Link className="text-zinc-500 transition-colors hover:text-white" href="#">
              <span className="material-symbols-outlined">public</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center font-label text-xs uppercase tracking-widest text-zinc-600">
        © 2024 Obsidian Marketplace. The Digital Curator.
      </div>
    </footer>
  );
}

