'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { club } from '@/content/club';
import { cn } from '@/lib/utils';

/**
 * Header. A navy bar with the club seal — institutional, fixed, unfussy. It
 * does not change on scroll; a body that has existed for twenty-two years does
 * not need to animate to seem substantial.
 *
 * Accessibility is structural: a real `aria-expanded`/`aria-controls`
 * disclosure, Escape closes and returns focus to the toggle, body scroll locks
 * while open, and the current route carries `aria-current`.
 */
const nav = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Programmes' },
  { href: '/board', label: 'Board' },
  { href: '/past-presidents', label: 'Presidents' },
  { href: '/achievements', label: 'Awards' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Reset on navigation by adjusting state during render — React's documented
  // pattern — rather than in an effect, which costs an extra render pass.
  const [menuPathname, setMenuPathname] = useState(pathname);
  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    panelRef.current?.querySelector<HTMLElement>('a')?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-inverse text-on-inverse">
        <div className="wrap flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3" aria-label={`${club.name} — home`}>
            <Image
              src={club.logo.src}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 object-contain"
              priority
            />
            <span className="flex flex-col leading-none">
              <span className="font-heading text-base font-extrabold tracking-tight">
                Leo Club of {club.shortName}
              </span>
              <span className="mt-1.5 text-[0.65rem] tracking-[0.16em] text-on-inverse/60 uppercase">
                Chartered 2003 · {club.district}
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {nav.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href + '/');
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'border-b-2 pb-1 text-sm font-semibold transition-colors',
                        active
                          ? 'border-gold text-on-inverse'
                          : 'border-transparent text-on-inverse/75 hover:border-on-inverse/30 hover:text-on-inverse',
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link
            href="/join"
            className="hidden shrink-0 bg-gold px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-page lg:inline-block"
          >
            Join
          </Link>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center lg:hidden"
          >
            {open ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
          </button>
        </div>
      </div>

      <div aria-hidden className="h-1 bg-gold" />

      <div
        id="site-menu"
        ref={panelRef}
        hidden={!open}
        className="border-b border-rule bg-page lg:hidden"
      >
        <nav aria-label="Primary" className="wrap py-2">
          <ul>
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <li key={item.href} className="border-b border-rule last:border-b-0">
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'block py-4 font-heading text-base font-bold',
                      active ? 'text-gold' : 'text-ink',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/join"
            className="mt-4 mb-4 block bg-accent px-4 py-3 text-center font-bold text-page"
          >
            Join the club
          </Link>
        </nav>
      </div>
    </header>
  );
}
