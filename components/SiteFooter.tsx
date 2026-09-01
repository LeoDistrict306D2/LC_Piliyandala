import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { club } from '@/content/club';

/**
 * Footer. Navy, structured, with full contact details — a club of this age is
 * expected to be reachable, so the footer publishes the address and phone
 * rather than hiding both behind a contact page.
 *
 * A server component: no state, and the year resolves at build time.
 */
const columns = [
  {
    heading: 'The club',
    links: [
      { href: '/about', label: 'About' },
      { href: '/board', label: 'Board' },
      { href: '/past-presidents', label: 'Past Presidents' },
      { href: '/achievements', label: 'Awards' },
    ],
  },
  {
    heading: 'Programmes',
    links: [
      { href: '/projects', label: 'All programmes' },
      { href: '/gallery', label: 'Gallery' },
    ],
  },
  {
    heading: 'Take part',
    links: [
      { href: '/join', label: 'Join the club' },
      { href: '/contact', label: 'Contact' },
    ],
  },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-inverse text-on-inverse">
      <div aria-hidden className="h-1 bg-gold" />
      <div className="wrap py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-heading text-2xl font-extrabold">{club.name}</p>
            <p className="mt-2 text-sm text-on-inverse/55">
              {club.motto} · Chartered 2003
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-on-inverse/80">
              {club.description}
            </p>

            <ul className="mt-6 space-y-2.5 text-sm text-on-inverse/75">
              {club.contact.address ? (
                <li className="flex items-start gap-2.5">
                  <MapPin aria-hidden size={16} className="mt-0.5 shrink-0 text-gold" />
                  {club.contact.address}
                </li>
              ) : null}
              {club.contact.phone ? (
                <li className="flex items-start gap-2.5">
                  <Phone aria-hidden size={16} className="mt-0.5 shrink-0 text-gold" />
                  <a href={`tel:${club.contact.phone}`} className="hover:text-gold">
                    {club.contact.phone}
                  </a>
                </li>
              ) : null}
              {club.contact.email ? (
                <li className="flex items-start gap-2.5">
                  <Mail aria-hidden size={16} className="mt-0.5 shrink-0 text-gold" />
                  <a href={`mailto:${club.contact.email}`} className="break-all hover:text-gold">
                    {club.contact.email}
                  </a>
                </li>
              ) : null}
            </ul>

            <ul className="mt-6 flex gap-3">
              {club.socials.facebook ? (
                <li>
                  <a
                    href={club.socials.facebook}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Facebook"
                    className="inline-flex h-10 w-10 items-center justify-center border border-white/25 transition-colors hover:border-gold hover:bg-gold hover:text-ink"
                  >
                    <Facebook aria-hidden size={17} />
                  </a>
                </li>
              ) : null}
              {club.socials.instagram ? (
                <li>
                  <a
                    href={club.socials.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Instagram"
                    className="inline-flex h-10 w-10 items-center justify-center border border-white/25 transition-colors hover:border-gold hover:bg-gold hover:text-ink"
                  >
                    <Instagram aria-hidden size={17} />
                  </a>
                </li>
              ) : null}
              {club.socials.linkedin ? (
                <li>
                  <a
                    href={club.socials.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn"
                    className="inline-flex h-10 w-10 items-center justify-center border border-white/25 transition-colors hover:border-gold hover:bg-gold hover:text-ink"
                  >
                    <Linkedin aria-hidden size={17} />
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 md:col-span-6 md:col-start-7">
            {columns.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <h2 className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
                  {column.heading}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-on-inverse/85 transition-colors hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <p className="mt-14 border-t border-white/15 pt-6 text-xs leading-relaxed text-on-inverse/55">
          {club.name} is a member club of{' '}
          <a
            href={club.districtUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="underline underline-offset-2 hover:text-gold"
          >
            {club.district}
          </a>
          , part of{' '}
          <a
            href={club.multipleDistrictUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="underline underline-offset-2 hover:text-gold"
          >
            {club.multipleDistrict}
          </a>
          , within Lions Clubs International.
          {club.sponsoringLionsClub ? ` Sponsored by the ${club.sponsoringLionsClub}.` : ''}
        </p>

        <p className="mt-3 text-xs text-on-inverse/40">
          © {year} {club.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
