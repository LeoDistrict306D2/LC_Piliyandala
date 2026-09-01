'use client';

import type { Statistic } from '@/lib/types';
import { useCountUp } from '@/lib/hooks';
import { cn, formatStatValue } from '@/lib/utils';

/**
 * The club's figures, laid out on the same bento grid as everything else. The
 * first two take wider cells because "22 years" and "96 members" are the two
 * numbers this club is actually making an argument with.
 *
 * Module scope so the reference is stable and the count-up effect is not torn
 * down on every parent render.
 */
const formatNumber = (value: number) => value.toLocaleString('en-LK');

function Cell({ stat, large }: { stat: Statistic; large: boolean }) {
  const numeric = typeof stat.value === 'number';
  const ref = useCountUp(typeof stat.value === 'number' ? stat.value : 0, formatNumber, {
    enabled: numeric,
  });

  return (
    <div className={cn('cell h-full', large ? 'cell-fill' : 'cell-quiet')}>
      <dd
        className={cn(
          'font-heading font-extrabold tabular-nums',
          large ? 'text-5xl md:text-6xl' : 'text-3xl md:text-4xl',
        )}
      >
        {stat.prefix}
        {/* Final value is in the markup, so the served HTML is already correct;
            the hook only overwrites it while animating. */}
        <span ref={ref}>{formatStatValue(stat.value)}</span>
        {stat.suffix}
      </dd>
      <dt
        className={cn(
          'mt-2.5 text-xs font-semibold tracking-[0.14em] uppercase',
          large ? 'text-gold' : 'text-ink-faint',
        )}
      >
        {stat.label}
      </dt>
      {stat.note ? (
        <p className={cn('mt-2 text-xs', large ? 'text-on-inverse/60' : 'text-ink-faint')}>
          {stat.note}
        </p>
      ) : null}
    </div>
  );
}

export function StatBento({ stats, label }: { stats: Statistic[]; label: string }) {
  if (stats.length === 0) return null;

  return (
    <section aria-label={label}>
      <dl className="bento">
        {stats.map((stat, index) => (
          <div key={stat.id} className={index < 2 ? 'bento-3' : 'bento-2'}>
            <Cell stat={stat} large={index < 2} />
          </div>
        ))}
      </dl>
    </section>
  );
}
