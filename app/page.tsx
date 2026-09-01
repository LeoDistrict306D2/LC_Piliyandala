import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { board } from '@/content/board';
import { pastPresidents } from '@/content/past-presidents';
import { byDateDesc, sortExecutives } from '@/lib/utils';
import { Photo } from '@/components/Photo';
import { Reveal } from '@/components/Reveal';
import { StatBento } from '@/components/StatBento';
import { ProjectBento } from '@/components/ProjectBento';

/**
 * Home.
 *
 * Bento from top to bottom. The hero is itself a bento cell arrangement rather
 * than a banner, which sets the expectation for everything below it: this is a
 * site made of rectangles of different weights, and the weight is the
 * hierarchy.
 */
export default function HomePage() {
  const featured = byDateDesc(projects).slice(0, 5);
  const leadership = sortExecutives(board).slice(0, 4);
  const recentPresidents = [...pastPresidents]
    .sort((a, b) => b.year.localeCompare(a.year))
    .slice(0, 4);

  return (
    <>
      {/* Hero bento ----------------------------------------------------- */}
      <section className="wrap pt-10 pb-14 md:pt-14 md:pb-20">
        <div className="bento">
          <div className="bento-4 cell cell-fill flex flex-col justify-between">
            <div>
              <div className="seal" aria-hidden />
              <h1 className="mt-6 font-heading text-4xl leading-[1.04] font-extrabold md:text-civic">
                {club.tagline}
              </h1>
              <p className="mt-6 max-w-xl leading-relaxed text-on-inverse/80">
                {club.description}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 bg-gold px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-page"
              >
                Our programmes
                <ArrowRight
                  aria-hidden
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/join"
                className="inline-flex items-center border border-white/30 px-6 py-3.5 font-semibold transition-colors hover:bg-white/10"
              >
                Join the club
              </Link>
            </div>
          </div>

          <div className="bento-2 bento-tall min-w-0">
            <Photo
              image={club.heroImage}
              ratio="portrait"
              priority
              sizes="(min-width: 768px) 33vw, 100vw"
              className="h-full"
            />
          </div>

          <div className="bento-2 cell cell-quiet">
            <p className="font-heading text-4xl font-extrabold text-ink tabular-nums">2003</p>
            <p className="mt-2 text-xs font-semibold tracking-[0.14em] text-ink-faint uppercase">
              Chartered
            </p>
          </div>

          <div className="bento-2 cell cell-quiet">
            <p className="font-heading text-4xl font-extrabold text-ink tabular-nums">
              {pastPresidents.length}
            </p>
            <p className="mt-2 text-xs font-semibold tracking-[0.14em] text-ink-faint uppercase">
              Presidents
            </p>
          </div>
        </div>
      </section>

      {/* Figures -------------------------------------------------------- */}
      <section className="border-y border-rule bg-panel" aria-labelledby="figures">
        <div className="wrap band">
          <div className="seal" aria-hidden />
          <h2 id="figures" className="mt-5 font-heading text-3xl font-extrabold md:text-4xl">
            Since charter
          </h2>
          <div className="mt-10">
            <StatBento stats={club.stats} label="Club record since charter" />
          </div>
        </div>
      </section>

      {/* Method --------------------------------------------------------- */}
      <section className="wrap band" aria-labelledby="method">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="seal" aria-hidden />
            <h2 id="method" className="mt-5 font-heading text-3xl font-extrabold md:text-4xl">
              How a large club stays useful
            </h2>
            <p className="measure mt-4 text-ink-muted">
              Ninety-six members is enough that people can hide in the middle of it. These four
              rules are what stop that.
            </p>
          </div>

          <ol className="grid gap-4 md:col-span-7 md:col-start-6 sm:grid-cols-2">
            {club.about.values.map((value, index) => (
              <li key={value.title}>
                <Reveal delay={index * 60} className="h-full">
                  <div className="cell h-full">
                    <p className="font-heading text-sm font-extrabold text-gold tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 font-heading text-xl font-extrabold text-ink">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Programmes ----------------------------------------------------- */}
      <section className="border-t border-rule bg-panel band" aria-labelledby="programmes">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="seal" aria-hidden />
              <h2
                id="programmes"
                className="mt-5 font-heading text-3xl font-extrabold md:text-4xl"
              >
                Programmes
              </h2>
              <p className="measure mt-3 text-ink-muted">
                Larger cells are the long-running programmes — the ones that outlive committees.
              </p>
            </div>
            <Link href="/projects" className="text-sm font-semibold text-accent hover:text-gold">
              All {projects.length} programmes →
            </Link>
          </div>

          <div className="mt-10">
            <ProjectBento projects={featured} />
          </div>
        </div>
      </section>

      {/* Board and succession ------------------------------------------- */}
      <section className="wrap band" aria-labelledby="people">
        <div className="seal" aria-hidden />
        <h2 id="people" className="mt-5 font-heading text-3xl font-extrabold md:text-4xl">
          The people
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <h3 className="text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
              This year&rsquo;s board
            </h3>
            <ul className="mt-5">
              {leadership.map((member, index) => (
                <li
                  key={member.id}
                  className="flex flex-col gap-0.5 border-b border-rule py-4 first:border-t sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                >
                  <Reveal delay={index * 40} className="contents">
                    <span className="font-heading text-lg font-bold text-ink">{member.name}</span>
                    <span className="shrink-0 text-xs text-ink-faint">{member.position}</span>
                  </Reveal>
                </li>
              ))}
            </ul>
            <Link
              href="/board"
              className="mt-6 inline-block text-sm font-semibold text-accent hover:text-gold"
            >
              The full board →
            </Link>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <h3 className="text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
              Recent presidents
            </h3>
            <ul className="mt-5">
              {recentPresidents.map((president) => (
                <li
                  key={president.year}
                  className="flex items-baseline justify-between gap-4 border-b border-rule py-4 first:border-t"
                >
                  <span className="font-heading text-lg font-bold text-ink">{president.name}</span>
                  <span className="shrink-0 text-xs text-ink-faint tabular-nums">
                    {president.year}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/past-presidents"
              className="mt-6 inline-block text-sm font-semibold text-accent hover:text-gold"
            >
              All {pastPresidents.length} presidents →
            </Link>
          </div>
        </div>
      </section>

      {/* Close ---------------------------------------------------------- */}
      <section className="bg-inverse text-on-inverse">
        <div className="wrap band flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="seal" aria-hidden />
            <h2 className="mt-5 font-heading text-3xl font-extrabold md:text-4xl">
              Still taking members in our twenty-third year.
            </h2>
            <p className="measure mt-4 text-on-inverse/75">
              Open to anyone aged 12 to 30 in Piliyandala. Tell us which programme interests you and
              we will put you on that committee.
            </p>
          </div>
          <Link
            href="/join"
            className="group inline-flex shrink-0 items-center gap-2 bg-gold px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-page"
          >
            Join the club
            <ArrowRight
              aria-hidden
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
