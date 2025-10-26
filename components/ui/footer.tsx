"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold">JayMusic Academy</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Inspiring musicians through modern, personalized music education.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+15551234567" className="hover:underline">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@jaymusicacademy.com" className="hover:underline">info@jaymusicacademy.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Harmony Ave, Music City, USA</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Follow</h4>
            <div className="mt-3 flex items-center gap-4">
              <Link href="https://x.com/jaymusicacademy" className="inline-flex items-center gap-2 text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
                X / Twitter
              </Link>
              <Link href="https://instagram.com/jaymusicacademy" className="inline-flex items-center gap-2 text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
                Instagram
              </Link>
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-neutral-600 dark:text-neutral-400">
              <Link href="/keyboards" className="hover:underline">Keyboards</Link>
              <Link href="/piano" className="hover:underline">Piano</Link>
              <Link href="/vocals" className="hover:underline">Vocals</Link>
              <Link href="/drums" className="hover:underline">Drums</Link>
              <Link href="/bharatnatyam" className="hover:underline">Bharatnatyam</Link>
              <Link href="/flute" className="hover:underline">Flute</Link>
              <Link href="/trumpet" className="hover:underline">Trumpet</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-neutral-500 dark:text-neutral-500">© {new Date().getFullYear()} JayMusic Academy. All rights reserved.</div>
      </div>
    </footer>
  );
}