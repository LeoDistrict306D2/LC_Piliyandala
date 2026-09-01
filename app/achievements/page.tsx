import type { Metadata } from 'next';
import { club } from '@/content/club';
import { achievements } from '@/content/achievements';
import { cn } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Awards',
  description: `Recognition earned by ${club.name}.`,
  alternates: { canonical: '/achievements' },
};

const levelLabel: Record<string, string> = {
  winner: 'Winner',
  'runner-up': 'Runner-up',
  merit: 'Merit',
  recognition: 'Recognition',
};

export default function AchievementsPage() {
  const awards = [...achievements].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <>
      <PageMasthead
        kicker={awards.length > 0 ? `${awards.length} recent awards` : 'Awards'}
        title="Recognition."
        standfirst="Nineteen district awards since charter. The five most recent are listed here; the full record is held in the club archive."
      />

      <div className="wrap band">
        {awards.length === 0 ? (
          <p className="measure text-ink-muted">No awards recorded yet.</p>
        ) : (
          <ul className="bento">
            {awards.map((award, index) => {
              const lead = index === 0;
              return (
                <li key={award.id} className={lead ? 'bento-4' : 'bento-2'}>
                  <Reveal delay={index * 50} className="h-full">
                    <div className={cn('cell h-full', lead && 'cell-fill')}>
                      <p
                        className={cn(
                          'font-heading font-extrabold tabular-nums',
                          lead ? 'text-5xl' : 'text-3xl text-ink',
                        )}
                      >
                        {award.year}
                      </p>
                      <h2
                        className={cn(
                          'mt-3 font-heading font-extrabold',
                          lead ? 'text-2xl' : 'text-lg text-ink',
                        )}
                      >
                        {award.title}
                      </h2>
                      {award.competition ? (
                        <p
                          className={cn(
                            'mt-1.5 text-xs',
                            lead ? 'text-on-inverse/60' : 'text-ink-faint',
                          )}
                        >
                          {award.competition}
                        </p>
                      ) : null}
                      {award.description ? (
                        <p
                          className={cn(
                            'mt-3 text-sm leading-relaxed',
                            lead ? 'text-on-inverse/80' : 'text-ink-muted',
                          )}
                        >
                          {award.description}
                        </p>
                      ) : null}
                      {award.level ? (
                        <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-gold uppercase">
                          {levelLabel[award.level] ?? award.level}
                        </p>
                      ) : null}
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
