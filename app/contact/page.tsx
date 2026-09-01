import type { Metadata } from 'next';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';

export const metadata: Metadata = {
  title: 'Contact',
  description: `How to reach ${club.name}.`,
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageMasthead
        kicker="Contact"
        title="Get in touch."
        standfirst="Partnerships, sponsorship, programme requests, or anything the club can help a Piliyandala organisation with."
      />

      <div className="wrap band">
        <div className="bento">
          <div className="bento-4 cell cell-fill">
            <h2 className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
              The club office
            </h2>
            <dl className="mt-6 space-y-5">
              {club.contact.email ? (
                <div className="flex items-start gap-4">
                  <Mail aria-hidden size={18} className="mt-1.5 shrink-0 text-gold" />
                  <div>
                    <dt className="text-xs tracking-[0.12em] text-on-inverse/60 uppercase">
                      Email
                    </dt>
                    <dd className="mt-1.5">
                      <a
                        href={`mailto:${club.contact.email}`}
                        className="font-heading text-xl font-extrabold break-all underline underline-offset-4 hover:text-gold"
                      >
                        {club.contact.email}
                      </a>
                    </dd>
                  </div>
                </div>
              ) : null}

              {club.contact.phone ? (
                <div className="flex items-start gap-4">
                  <Phone aria-hidden size={18} className="mt-1.5 shrink-0 text-gold" />
                  <div>
                    <dt className="text-xs tracking-[0.12em] text-on-inverse/60 uppercase">
                      Phone
                    </dt>
                    <dd className="mt-1.5">
                      <a
                        href={`tel:${club.contact.phone}`}
                        className="font-heading text-xl font-extrabold hover:text-gold"
                      >
                        {club.contact.phone}
                      </a>
                    </dd>
                  </div>
                </div>
              ) : null}

              {club.contact.address ? (
                <div className="flex items-start gap-4">
                  <MapPin aria-hidden size={18} className="mt-1.5 shrink-0 text-gold" />
                  <div>
                    <dt className="text-xs tracking-[0.12em] text-on-inverse/60 uppercase">
                      Address
                    </dt>
                    <dd className="mt-1.5 font-heading text-xl leading-snug font-extrabold">
                      {club.contact.address}
                    </dd>
                  </div>
                </div>
              ) : null}
            </dl>
          </div>

          <div className="bento-2 cell cell-quiet">
            <h2 className="text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
              Elsewhere
            </h2>
            <ul className="mt-5 space-y-1">
              {club.socials.facebook ? (
                <li className="border-b border-rule">
                  <a
                    href={club.socials.facebook}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-3 py-3.5 font-semibold text-ink-muted transition-colors hover:text-accent"
                  >
                    <Facebook aria-hidden size={17} />
                    Facebook
                  </a>
                </li>
              ) : null}
              {club.socials.instagram ? (
                <li className="border-b border-rule">
                  <a
                    href={club.socials.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-3 py-3.5 font-semibold text-ink-muted transition-colors hover:text-accent"
                  >
                    <Instagram aria-hidden size={17} />
                    Instagram
                  </a>
                </li>
              ) : null}
              {club.socials.linkedin ? (
                <li>
                  <a
                    href={club.socials.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-3 py-3.5 font-semibold text-ink-muted transition-colors hover:text-accent"
                  >
                    <Linkedin aria-hidden size={17} />
                    LinkedIn
                  </a>
                </li>
              ) : null}
            </ul>

            <p className="mt-6 text-sm leading-relaxed text-ink-faint">
              Looking to join rather than get in touch? The membership page has a form that reaches
              the secretary directly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
