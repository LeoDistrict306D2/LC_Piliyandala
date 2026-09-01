import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="wrap flex min-h-[60vh] flex-col justify-center py-24">
      <div className="seal" aria-hidden />
      <p className="mt-5 text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
        Error 404
      </p>
      <h1 className="mt-4 font-heading text-4xl font-extrabold text-ink md:text-civic">
        Page not found.
      </h1>
      <p className="measure mt-5 text-lg text-ink-muted">
        The page you asked for does not exist. It may have been renamed or moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="bg-accent px-6 py-3.5 font-semibold text-page hover:bg-accent-strong">
          Home
        </Link>
        <Link
          href="/projects"
          className="border border-rule-strong px-6 py-3.5 font-semibold text-ink hover:border-ink"
        >
          Programmes
        </Link>
      </div>
    </div>
  );
}
