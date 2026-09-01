import Link from 'next/link';

/**
 * Page heading: gold seal rule, kicker, title, standfirst. The seal is the
 * club's one ornament and appears above every section heading on the site.
 */
export function PageMasthead({
  kicker,
  title,
  standfirst,
  breadcrumb,
}: {
  kicker: string;
  title: string;
  standfirst?: string;
  breadcrumb?: { href: '/projects'; label: string };
}) {
  return (
    <div className="border-b border-rule bg-panel">
      <div className="wrap grid gap-6 pt-12 pb-10 md:grid-cols-12 md:gap-10 md:pt-16 md:pb-14">
        <div className="md:col-span-7">
          {breadcrumb ? (
            <nav aria-label="Breadcrumb" className="mb-5">
              <Link
                href={breadcrumb.href}
                className="text-sm font-semibold text-accent hover:text-gold"
              >
                ← {breadcrumb.label}
              </Link>
            </nav>
          ) : null}

          <div className="seal" aria-hidden />

          <p className="mt-5 text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
            {kicker}
          </p>

          <h1 className="mt-3 font-heading text-4xl leading-[1.04] font-extrabold text-ink md:text-civic">
            {title}
          </h1>
        </div>

        {standfirst ? (
          <p className="self-end text-lg leading-relaxed text-ink-muted md:col-span-4 md:col-start-9">
            {standfirst}
          </p>
        ) : null}
      </div>
    </div>
  );
}
