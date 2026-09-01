import type { Metadata } from 'next';
import { club } from '@/content/club';
import { board } from '@/content/board';
import { getInitials, sortExecutives } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Board',
  description: `The executive board of ${club.name}.`,
  alternates: { canonical: '/board' },
};

export default function BoardPage() {
  const members = sortExecutives(board);
  const officers = members.slice(0, 4);
  const rest = members.slice(4);
  const term = members[0]?.term ?? '';

  return (
    <>
      <PageMasthead
        kicker={term ? `Board ${term}` : 'Board'}
        title="Sixteen office bearers."
        standfirst="A large club runs on small committees. Each director chairs a committee of six to eight rather than reporting to a plenary meeting."
      />

      <div className="wrap band">
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {officers.map((member, index) => (
            <li key={member.id}>
              <Reveal delay={index * 50}>
                <div className="cell h-full p-0">
                  {member.photo ? (
                    <Photo image={member.photo} ratio="portrait" sizes="(min-width: 1024px) 24vw, 45vw" />
                  ) : (
                    <div
                      aria-hidden
                      className="flex aspect-[3/4] items-center justify-center bg-inverse font-heading text-4xl font-extrabold text-gold"
                    >
                      {getInitials(member.name)}
                    </div>
                  )}
                  <div className="p-5">
                    <p className="font-heading text-base leading-tight font-extrabold">
                      {member.name}
                    </p>
                    <p className="mt-1.5 text-xs text-ink-faint">{member.position}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        {rest.length > 0 ? (
          <section className="mt-16" aria-labelledby="directors">
            <div className="seal" aria-hidden />
            <h2 id="directors" className="mt-4 font-heading text-2xl font-extrabold text-ink">
              Officers and directors
            </h2>
            <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
              {rest.map((member) => (
                <li
                  key={member.id}
                  className="flex flex-col gap-0.5 border-b border-rule py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                >
                  <span className="font-heading font-bold">{member.name}</span>
                  <span className="shrink-0 text-xs text-ink-faint">{member.position}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </>
  );
}
