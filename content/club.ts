import type { Club } from '@/lib/types';

/**
 * Leo Club of Piliyandala — club record.
 *
 * The oldest and largest club in this set, and the voice reflects that: assured
 * and institutional without being pompous.
 *
 * TODO(content): charter date, roster, contact details and photography are
 * placeholders pending real values from the club.
 */
export const club: Club = {
  name: 'Leo Club of Piliyandala',
  shortName: 'Piliyandala',
  tagline: 'Twenty-two years in one town.',
  motto: 'Leadership · Experience · Opportunity',
  description:
    'The Leo Club of Piliyandala has served the same town since 2003. Long enough that the projects have a second generation running them, and long enough to have learned which ones were worth keeping.',
  charterDate: '2003-10-04',

  district: 'Leo District 306 D2',
  multipleDistrict: 'Leo Multiple District 306',
  sponsoringLionsClub: 'Lions Club of Piliyandala',
  districtUrl: 'https://leodistrict306d2.org/',
  multipleDistrictUrl: 'https://www.leomd306.org/',

  logo: {
    src: '/images/logo/logo.png',
    alt: 'Leo Club of Piliyandala emblem',
    width: 512,
    height: 512,
  },
  heroImage: {
    src: '/images/hero/hero.png',
    alt: 'Members of the Leo Club of Piliyandala at the annual town service day',
    width: 1200,
    height: 1600,
  },

  contact: {
    email: 'leoclubofpiliyandala@gmail.com',
    phone: '+94 11 261 4400',
    address: 'Piliyandala, Colombo District, Sri Lanka',
  },

  socials: {
    facebook: 'https://www.facebook.com/leoclubofpiliyandala',
    instagram: 'https://www.instagram.com/leopiliyandala',
    linkedin: 'https://www.linkedin.com/company/leo-club-of-piliyandala',
    email: 'leoclubofpiliyandala@gmail.com',
  },

  siteUrl: 'https://piliyandala.leo306d2.org',

  stats: [
    { id: 'years', value: 22, label: 'Years of service' },
    { id: 'members', value: 96, label: 'Active members' },
    { id: 'projects', value: 240, suffix: '+', label: 'Projects since charter' },
    { id: 'presidents', value: 22, label: 'Presidents' },
    { id: 'people', value: 41000, suffix: '+', label: 'People reached' },
    { id: 'awards', value: 19, label: 'District awards' },
  ],

  about: {
    story: [
      'The club was chartered in October 2003 with twenty-three members. Twenty-two presidents later it has ninety-six, which makes it one of the larger clubs in the district and, more usefully, one of the few with a genuine institutional memory.',
      'That memory is the club’s actual asset. We know which projects worked in 2009 and were quietly dropped in 2012, and why. We know which schools answer the phone. We know that the town service day works in February and does not work in April, because we tried April twice.',
      'Size brings its own problems. Ninety-six members is enough that people can hide in the middle of it, so the club runs on committees of six to eight rather than on plenary meetings — small enough that absence is noticed.',
      'The ambition is not to be the biggest club in 306 D2. It is to still be here in 2045, doing the same handful of things properly.',
    ],
    mission:
      'To serve Piliyandala continuously and competently, and to hand each programme on in better condition than it was received.',
    vision:
      'A club whose long-running programmes outlive every committee that runs them.',
    values: [
      {
        title: 'Continuity first',
        description:
          'Long-running programmes come before new ones. A project in its fourteenth year is worth more than three in their first.',
      },
      {
        title: 'Small committees',
        description:
          'Six to eight people per project. Large clubs fail by holding large meetings where nobody is individually responsible.',
      },
      {
        title: 'Write the handover',
        description:
          'Every programme has a handover document updated at the end of each term. It is the only reason anything survives a change of committee.',
      },
      {
        title: 'Keep the record',
        description:
          'Twenty-two years of minutes, accounts and project files, held properly. Institutional memory is a deliberate act, not an accident of age.',
      },
    ],
  },
};
