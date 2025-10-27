"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

// components/Navbar.jsx
export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--color-background)] px-10 py-6">
      <nav className="max-w-[90rem] mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink href="#hero">
          <span
            className="text-[32px] tracking-tight text-[var(--color-muted)] font-normal"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            LAWRENCE LEE
          </span>
        </NavLink>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-sm  text-[var(--color-muted)] font-medium">
          <li>
            <NavLink
              href="#projects"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              href="#about"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              href="#contact"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <button
          className="md:hidden text-[var(--color-muted)] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-[var(--color-background)] px-6 pb-6">
          <ul className="flex flex-col gap-4 mt-4 text-[var(--color-muted)] font-medium">
            <li>
              <NavLink
                href="#projects"
                className="hover:text-[var(--color-accent)] transition-colors"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                href="#about"
                className="hover:text-[var(--color-accent)] transition-colors"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                href="#contact"
                className="hover:text-[var(--color-accent)] transition-colors"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
