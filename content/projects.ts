import type { Project } from '@/lib/types';

/**
 * Projects.
 *
 * A twenty-two-year-old club, so this list mixes long-running programmes with
 * single-year work. The bento grid gives `featured` projects the larger cells,
 * which is how the site signals which programmes are the club's spine.
 *
 * TODO(content): illustrative records in the club's format — replace with real
 * project data. `heroImage` points at the shared placeholder until real
 * photography exists.
 */
const placeholder = (alt: string) => ({
  src: '/images/projects/placeholder.png',
  alt,
  width: 1600,
  height: 1067,
});

export const projects: Project[] = [
  {
    id: 'town-service-day',
    slug: 'town-service-day',
    title: 'Town Service Day',
    summary:
      'The club’s annual February service day across Piliyandala — running for sixteen consecutive years.',
    category: 'community-service',
    year: '2025/26',
    date: '2026-02-07',
    location: 'Piliyandala',
    featured: true,
    heroImage: placeholder('Volunteers across the town on annual service day'),
    story: [
      'One day, the whole club, the whole town. Sixteen consecutive years, always the first Saturday in February.',
      'February matters. We tried April twice — in 2011 and again in 2014 — and both times lost half the student members to term dates and a third of the turnout to rain. The date is now written into the handover document with the reason attached, so nobody has to relearn it.',
      'The day covers eleven sites: two schools, the market, the bus stand, three temples, the clinic, and three residential lanes chosen by the residents’ associations each year.',
    ],
    objectives: [
      'Cover eleven sites in a single day with the full membership',
      'Keep the February date and the reasons for it documented',
      'Let residents’ associations choose the residential lanes',
    ],
    impact: [
      { id: 'years', value: 16, label: 'Consecutive years' },
      { id: 'volunteers', value: 210, label: 'Volunteers on the day' },
      { id: 'sites', value: 11, label: 'Sites covered' },
    ],
  },
  {
    id: 'scholarship',
    slug: 'scholarship',
    title: 'The Scholarship',
    summary:
      'A funded scholarship for A/L students in the town, awarded every year since 2011 and now part-funded by past recipients.',
    category: 'education',
    year: '2025/26',
    date: '2025-07-19',
    location: 'Piliyandala',
    featured: true,
    heroImage: placeholder('Scholarship recipients at the annual award evening'),
    story: [
      'Four students a year, funded through A/Ls, chosen by a panel that includes two people who are not club members.',
      'The part that makes it work is not the money. It is that fourteen years in, eleven former recipients now contribute to the fund, and three sit on the selection panel. The programme has started to run itself, which was always the point.',
    ],
    objectives: [
      'Fund four students a year through their A/Ls',
      'Keep external members on the selection panel',
      'Grow the alumni contribution until it covers half the fund',
    ],
    impact: [
      { id: 'recipients', value: 56, label: 'Students funded since 2011' },
      { id: 'alumni', value: 11, label: 'Alumni now contributing' },
      { id: 'fund', value: 2400000, prefix: 'Rs ', label: 'Annual fund' },
    ],
  },
  {
    id: 'blood-bank',
    slug: 'blood-bank',
    title: 'Standing Donor Register',
    summary:
      'A register of pre-screened donors the hospital can call directly in an emergency, maintained by the club.',
    category: 'health',
    year: '2024/25',
    date: '2025-03-15',
    location: 'Piliyandala',
    featured: true,
    heroImage: placeholder('A blood donation session at the community hall'),
    story: [
      'A camp collects blood on one day. A register lets the hospital find a matching donor at two in the morning in six weeks’ time.',
      'The club maintains it: contact details verified twice a year, blood groups on file with consent, and a rota of members who will make the calls. It is administration rather than service, and it has been more useful than any camp we have run.',
    ],
    impact: [
      { id: 'donors', value: 640, label: 'Donors on the register' },
      { id: 'callouts', value: 87, label: 'Emergency call-outs met' },
      { id: 'verified', value: 2, suffix: '/yr', label: 'Verification cycles' },
    ],
    partners: [{ name: 'National Blood Transfusion Service' }],
  },
  {
    id: 'youth-league',
    slug: 'youth-league',
    title: 'Youth League',
    summary: 'An inter-school sports league run across the town each September.',
    category: 'youth-development',
    year: '2024/25',
    date: '2024-09-21',
    location: 'Piliyandala',
    heroImage: placeholder('Students competing at the inter-school youth league'),
    impact: [
      { id: 'students', value: 480, label: 'Students competing' },
      { id: 'schools', value: 9, label: 'Schools' },
    ],
  },
  {
    id: 'elders-visit',
    slug: 'elders-visit',
    title: 'Elders Programme',
    summary: 'Fortnightly visits to the two elders’ homes in the town, running since 2016.',
    category: 'community-service',
    year: '2023/24',
    date: '2024-05-11',
    location: 'Piliyandala',
    heroImage: placeholder('Club members visiting an elders home'),
    impact: [
      { id: 'visits', value: 208, label: 'Visits since 2016' },
      { id: 'residents', value: 74, label: 'Residents' },
    ],
  },
  {
    id: 'charter',
    slug: 'charter',
    title: 'Charter Night, 2003',
    summary: 'The club’s charter, with twenty-three founding members.',
    category: 'leadership',
    year: '2003/04',
    date: '2003-10-04',
    location: 'Piliyandala',
    heroImage: placeholder('The charter night of the Leo Club of Piliyandala in 2003'),
    impact: [{ id: 'founding', value: 23, label: 'Founding members' }],
  },
];
