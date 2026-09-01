import type { Metadata } from 'next';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';
import { JoinForm } from '@/components/JoinForm';

export const metadata: Metadata = {
  title: 'Join',
  description: `Membership of ${club.name} is open to anyone aged 12 to 30 in Piliyandala.`,
  alternates: { canonical: '/join' },
};

const points = [
  {
    title: 'You join a committee',
    body: 'Not a mailing list. New members are placed on a programme committee of six to eight, where absence is noticed and contribution is visible.',
  },
  {
    title: 'You inherit something',
    body: 'Most of our programmes are older than most of our members. You will be handed a running thing with a handover document, not a blank page.',
  },
  {
    title: 'You will write the handover',
    body: 'At the end of your term you update the document for whoever comes next. It is the single reason anything here survives a change of committee.',
  },
  {
    title: 'Twenty-two years of contacts',
    body: 'Schools that answer the phone, a hospital that knows us, a district that has worked with us since 2003. That is what a long-established club actually offers you.',
  },
];

export default function JoinPage() {
  return (
    <>
      <PageMasthead
        kicker="Membership"
        title="Join a running club."
        standfirst="Open to anyone aged 12 to 30 in Piliyandala. No experience needed — you will be placed on a committee that already knows what it is doing."
      />

      <div className="wrap band grid gap-14 md:grid-cols-12">
        <section className="md:col-span-5" aria-labelledby="what">
          <div className="seal" aria-hidden />
          <h2 id="what" className="mt-4 font-heading text-2xl font-extrabold text-ink">
            What membership involves
          </h2>
          <ol className="mt-6 grid gap-4">
            {points.map((point, index) => (
              <li key={point.title} className="cell">
                <p className="font-heading text-sm font-extrabold text-gold tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2.5 font-heading text-lg font-extrabold text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{point.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="md:col-span-6 md:col-start-7" aria-labelledby="enquiry">
          <div className="seal" aria-hidden />
          <h2 id="enquiry" className="mt-4 font-heading text-2xl font-extrabold text-ink">
            Enquiry
          </h2>
          <p className="measure mt-4 mb-8 text-ink-muted">
            Tell us which programme interests you and this opens a pre-written email to the club
            secretary. We answer everything, usually within a week.
          </p>
          <JoinForm email={club.contact.email ?? ''} />
          {club.contact.email ? (
            <p className="mt-6 text-sm text-ink-faint">
              Or write directly to{' '}
              <a
                href={`mailto:${club.contact.email}`}
                className="font-semibold text-ink-muted underline underline-offset-2 hover:text-accent"
              >
                {club.contact.email}
              </a>
              .
            </p>
          ) : null}
        </section>
      </div>
    </>
  );
}
