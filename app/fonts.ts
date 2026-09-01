import { Manrope, Source_Sans_3 } from 'next/font/google';

/**
 * Manrope for headings, Source Sans 3 for text.
 *
 * Manrope's slightly condensed, semi-geometric construction reads as modern
 * institutional rather than either startup or municipal — the register this
 * club needs. Source Sans 3 is a workhorse with good numerals for the bento
 * statistics.
 *
 * Loaded via next/font, which self-hosts the files and removes the
 * render-blocking request to fonts.googleapis.com.
 */
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

export const fontVariables = `${manrope.variable} ${sourceSans.variable}`;
