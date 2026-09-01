import type { Metadata } from 'next';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { byDateDesc } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { ProjectBento } from '@/components/ProjectBento';

export const metadata: Metadata = {
  title: 'Programmes',
  description: `Every programme run by ${club.name}.`,
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  const entries = byDateDesc(projects);

  return (
    <>
      <PageMasthead
        kicker={`${entries.length} programmes`}
        title="What the club runs."
        standfirst="Larger cells are the long-running programmes. Those are the ones that define the club; the rest support them."
      />

      <div className="wrap band">
        <ProjectBento projects={entries} />
      </div>
    </>
  );
}
