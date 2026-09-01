import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/types';
import { cn, formatDate } from '@/lib/utils';
import { Photo } from './Photo';
import { Reveal } from './Reveal';

/**
 * Projects on a bento grid — this site's signature.
 *
 * Cell size carries meaning rather than decoration: a `featured` project takes
 * four columns and two rows, everything else takes two columns. On a
 * twenty-two-year-old club the long-running programmes are genuinely more
 * important than the one-year work, and the grid says so without needing a
 * "featured" badge.
 *
 * `grid-auto-flow: row dense` backfills the gaps left by the larger cells, so
 * the wall stays solid regardless of how many projects are featured.
 */
export function ProjectBento({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <ul className="bento">
      {projects.map((project, index) => {
        const large = Boolean(project.featured);

        return (
          <li
            key={project.id}
            className={cn(large ? 'bento-4 bento-tall' : 'bento-2', 'min-w-0')}
          >
            <Reveal delay={Math.min(index, 5) * 50} className="h-full">
              <Link
                href={`/projects/${project.slug}`}
                className={cn('group flex h-full flex-col', large ? 'cell p-0' : 'cell p-0')}
              >
                <Photo
                  image={project.heroImage}
                  ratio={large ? 'wide' : 'landscape'}
                  sizes={large ? '(min-width: 768px) 60vw, 100vw' : '(min-width: 768px) 30vw, 100vw'}
                />

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">
                    {formatDate(project.date, { year: 'numeric', month: 'short' })}
                    {project.location ? ` · ${project.location}` : ''}
                  </p>

                  <h3
                    className={cn(
                      'mt-2.5 font-heading font-extrabold text-ink',
                      large ? 'text-2xl md:text-3xl' : 'text-lg',
                    )}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={cn(
                      'mt-2 leading-relaxed text-ink-muted',
                      large ? 'text-base' : 'text-sm',
                    )}
                  >
                    {project.summary}
                  </p>

                  {large && project.impact && project.impact.length > 0 ? (
                    <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-t border-rule pt-4">
                      {project.impact.slice(0, 3).map((stat) => (
                        <div key={stat.id}>
                          <dd className="font-heading text-xl font-extrabold text-ink tabular-nums">
                            {stat.prefix}
                            {typeof stat.value === 'number'
                              ? stat.value.toLocaleString('en-LK')
                              : stat.value}
                            {stat.suffix}
                          </dd>
                          <dt className="mt-0.5 text-[0.65rem] tracking-[0.12em] text-ink-faint uppercase">
                            {stat.label}
                          </dt>
                        </div>
                      ))}
                    </dl>
                  ) : null}

                  <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-accent">
                    Read
                    <ArrowUpRight
                      aria-hidden
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
