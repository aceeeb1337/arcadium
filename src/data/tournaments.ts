// ───────────────────────────────────────────────────────────────────────────
// TOURNAMENTS DATA
// Edit this file to add / update / remove tournaments. The Tournaments page
// (src/pages/tournaments.astro) renders straight from this array.
//
// status:  'open'    -> registration open (green)
//          'closing' -> closing soon       (amber)
//          'full'    -> slots filled        (muted)
//          'past'    -> already happened    (hidden from "upcoming", shown in archive)
// accent:  'purple' | 'blue' | 'pink'  (card border / glow tint)
// ───────────────────────────────────────────────────────────────────────────

export interface Tournament {
  id: string;
  game: string;
  title: string;
  date: string;        // human readable, e.g. 'Sat 12 Jul 2026'
  time: string;        // e.g. '6:00 PM'
  format: string;      // e.g. '1v1 Double Elimination'
  platform: 'PC' | 'PS5';
  teamSize: string;    // e.g. 'Solo' | '5v5 Teams'
  entryFee: string;    // e.g. 'Rs 500'
  prizePool: string;   // e.g. 'Rs 25,000'
  slots: string;       // e.g. '32 players'
  status: 'open' | 'closing' | 'full' | 'past';
  accent: 'purple' | 'blue' | 'pink';
  whatsappMessage: string;
}

export const tournaments: Tournament[] = [
  {
    id: 'tekken-iron-fist',
    game: 'Tekken 8',
    title: 'Iron Fist Cup',
    date: 'Sat 11 Jul 2026',
    time: '6:00 PM',
    format: '1v1 Double Elimination',
    platform: 'PS5',
    teamSize: 'Solo',
    entryFee: 'Rs 500',
    prizePool: 'Rs 25,000',
    slots: '32 players',
    status: 'open',
    accent: 'pink',
    whatsappMessage: 'Hi! I want to register for the Tekken 8 Iron Fist Cup at Arcadium.',
  },
  {
    id: 'fc25-karachi-cup',
    game: 'EA Sports FC 25',
    title: 'Karachi Cup',
    date: 'Sun 19 Jul 2026',
    time: '5:00 PM',
    format: '1v1 Group Stage + Knockouts',
    platform: 'PS5',
    teamSize: 'Solo',
    entryFee: 'Rs 500',
    prizePool: 'Rs 20,000',
    slots: '24 players',
    status: 'closing',
    accent: 'blue',
    whatsappMessage: 'Hi! I want to register for the EA FC 25 Karachi Cup at Arcadium.',
  },
  {
    id: 'valorant-clash',
    game: 'Valorant',
    title: 'Arcadium Clash',
    date: 'Sat 26 Jul 2026',
    time: '4:00 PM',
    format: '5v5 Single Elimination',
    platform: 'PC',
    teamSize: '5v5 Teams',
    entryFee: 'Rs 2,500 / team',
    prizePool: 'Rs 60,000',
    slots: '16 teams',
    status: 'open',
    accent: 'purple',
    whatsappMessage: 'Hi! My team wants to register for the Valorant Arcadium Clash at Arcadium.',
  },
  {
    id: 'cs2-frag-night',
    game: 'Counter-Strike 2',
    title: 'Frag Night',
    date: 'Sat 02 Aug 2026',
    time: '7:00 PM',
    format: '5v5 Best of 3',
    platform: 'PC',
    teamSize: '5v5 Teams',
    entryFee: 'Rs 2,000 / team',
    prizePool: 'Rs 40,000',
    slots: '12 teams',
    status: 'open',
    accent: 'purple',
    whatsappMessage: 'Hi! My team wants to register for the CS2 Frag Night at Arcadium.',
  },
];
