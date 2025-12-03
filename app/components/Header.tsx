"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const nav = [
    { href: "/", label: "Home" },
    { href: "/pick3", label: "Predictions" },
    { href: "/draw-history", label: "Draw History" },
    { href: "/plans", label: "Subscription Plans" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center px-4 py-3 justify-between">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-300">Run by</span>
          <Link
            href="/"
            className="bg-clip-text text-lg font-semibold text-transparent [background-image:linear-gradient(90deg,#ffd34d,#ad7aff)]"
          >
            Best Bet
          </Link>
        </div>

        <div className="md:hidden"> <button onClick={toggleMenu} className="text-lg !p-2 font-semibold text-white hover:text-yellow-300 transition-colors md:text-sm bg-transparent border-none hover:bg-transparent">☰</button></div>

        {/* NAV */}
        <nav className={`w-full md:w-auto mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
          <div className="w-full text-center space-y-6 md:space-y-0 md:flex md:items-center md:justify-center md:gap-6">
            {nav.map((n) => {
              if (pathname === n.href) return null;
              if (pathname === "/" && n.href === "/") return null;

              return (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg font-semibold text-white hover:text-yellow-300 transition-colors md:text-sm"
                >
                  {n.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
