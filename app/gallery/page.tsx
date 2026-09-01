import type { Metadata } from 'next';
import Link from 'next/link';
import { club } from '@/content/club';
import { gallery } from '@/content/gallery';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';

export const metadata: Metadata = {
  title: 'Gallery',
  description: `Photographs from the programmes of ${club.name}.`,
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      <PageMasthead
        kicker="Photographs"
        title="From the archive."
        standfirst="Pictures from twenty-two years of programmes, filed against the programme they belong to."
      />

      <div className="wrap band">
        {gallery.length === 0 ? (
          <div className="measure">
            <p className="text-ink-muted">
              The gallery is empty while the club archive is being digitised. Photographs from each
              programme are already on its own page.
            </p>
            <Link
              href="/projects"
              className="mt-6 inline-block text-sm font-semibold text-accent hover:text-gold"
            >
              Go to the programmes →
            </Link>
          </div>
        ) : (
          <div className="bento">
            {gallery.map((item, index) => (
              <div key={item.id} className={index % 5 === 0 ? 'bento-4' : 'bento-2'}>
                <Photo image={item} ratio="landscape" sizes="(min-width: 768px) 40vw, 100vw" />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
