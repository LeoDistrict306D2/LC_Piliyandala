import type { Achievement } from '@/lib/types';

/** TODO(content): confirm against the club's award records. */
export const achievements: Achievement[] = [
  {
    id: 'club-2025',
    title: 'Leo Club of the Year',
    competition: 'Leo District 306 D2 Convention',
    year: '2025',
    level: 'winner',
    description:
      'The club’s fourth. Cited for the standing donor register and sixteen unbroken years of Town Service Day.',
  },
  {
    id: 'service-2024',
    title: 'Sustained Service Award',
    competition: 'Leo District 306 D2 Convention',
    year: '2024',
    level: 'winner',
  },
  {
    id: 'education-2023',
    title: 'Education Project of the Year',
    competition: 'Leo District 306 D2 Convention',
    year: '2023',
    level: 'winner',
    description: 'For the Scholarship, and specifically for the alumni funding model.',
  },
  {
    id: 'md-2022',
    title: 'Outstanding Club Programme',
    competition: 'Leo Multiple District 306',
    year: '2022',
    level: 'runner-up',
  },
  {
    id: 'bulletin-2019',
    title: 'Best Club Bulletin',
    competition: 'Leo District 306 D2 Convention',
    year: '2019',
    level: 'winner',
  },
];
