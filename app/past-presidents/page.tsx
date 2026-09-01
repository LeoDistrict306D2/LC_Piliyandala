import type { Metadata } from 'next';
import { club } from '@/content/club';
import { pastPresidents } from '@/content/past-presidents';
import { PageMasthead } from '@/components/PageMasthead';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Past Presidents',
  description: `Every president of ${club.name} since charter in 2003.`,
  alternates: { canonical: '/past-presidents' },
};

export default function PastPresidentsPage() {
  const years = [...pastPresidents].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <>
      <PageMasthead
        kicker={`${years.length} terms since 2003`}
        title="The succession."
        standfirst="Published in full rather than in summary. Institutional memory is this club's stated asset, and this list is the evidence for it."
      />

      <div className="wrap band">
        <ol className="border-t-2 border-accent">
          {years.map((president, index) => (
            <li key={president.year} className="border-b border-rule">
              <Reveal delay={Math.min(index, 8) * 30}>
                <div className="grid gap-3 py-5 md:grid-cols-12 md:gap-8">
                  <p className="font-heading text-lg font-extrabold text-accent tabular-nums md:col-span-2">
                    {president.year}
                  </p>
                  <p className="font-heading text-lg font-bold text-ink md:col-span-4">
                    {president.name}
                  </p>
                  <p className="text-sm text-ink-muted md:col-span-2">{president.theme ?? '—'}</p>
                  <div className="md:col-span-4">
                    {president.highlights && president.highlights.length > 0 ? (
                      <ul className="space-y-1">
                        {president.highlights.map((highlight) => (
                          <li key={highlight} className="text-sm leading-relaxed text-ink-muted">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-ink-faint">—</p>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
