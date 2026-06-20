export interface PricingTier {
  duration: string;
  price: string;
  highlight?: boolean;
  priceNote?: string;
}

export interface PricingCategory {
  id: string;
  name: string;
  tagline: string;
  ratePerHour: string;
  tiers: PricingTier[];
  features: string[];
  whatsappMessage: string;
  accent: 'purple' | 'blue' | 'pink';
}

// ───────────────────────────────────────────────────────────────────────────
// PRICING — single source of truth for the homepage Pricing section,
// the /pricing page, /pc-gaming and /console-gaming pages.
// Update prices here and they change everywhere.
// ───────────────────────────────────────────────────────────────────────────

export const categories: PricingCategory[] = [
  {
    id: 'standard-pc',
    name: 'Standard Room',
    tagline: 'Solid performance',
    ratePerHour: 'Rs 300 / hr',
    tiers: [
      { duration: '3 Hours',   price: 'Rs 800' },
      { duration: '5 Hours',   price: 'Rs 1,150' },
      { duration: '10 Hours',  price: 'Rs 1,850', highlight: true, priceNote: 'Best Value' },
      { duration: '20 Hours',  price: 'Rs 3,400' },
      { duration: '100 Hours', price: 'Rs 15,700' },
    ],
    features: [
      'Ryzen 5 5600 processor',
      'RTX 4060 graphics',
      '16GB RAM',
      '180Hz Asus display',
      '1st Player MK8 keyboard',
      'Logitech G402 mouse',
      'Bloody G575 headset',
    ],
    whatsappMessage: 'Hi! I want to book a Standard Room at Arcadium. Please confirm availability.',
    accent: 'blue',
  },
  {
    id: 'premium-pc',
    name: 'Premium Room',
    tagline: 'Top-tier hardware',
    ratePerHour: 'Rs 420 / hr',
    tiers: [
      { duration: '3 Hours',   price: 'Rs 1,000' },
      { duration: '5 Hours',   price: 'Rs 1,500' },
      { duration: '10 Hours',  price: 'Rs 2,550', highlight: true, priceNote: 'Best Value' },
      { duration: '20 Hours',  price: 'Rs 4,700' },
      { duration: '100 Hours', price: 'Rs 22,000' },
    ],
    features: [
      'Ryzen 5 9600X processor',
      'RTX 5060 graphics',
      '16GB DDR5 RAM',
      '360Hz Zowie display',
      'Razer BlackWidow V3 TKL',
      'Razer DeathAdder mouse',
      'HyperX Cloud II headset',
    ],
    whatsappMessage: 'Hi! I want to book a Premium Room at Arcadium. Please confirm availability.',
    accent: 'purple',
  },
  {
    id: 'ps5',
    name: 'PS5',
    tagline: 'Console experience',
    ratePerHour: 'From Rs 400 / hr',
    tiers: [
      { duration: '1 Controller', price: 'Rs 400 / hr' },
      { duration: '2 Controllers', price: 'Rs 700 / hr', highlight: true, priceNote: 'Popular' },
      { duration: '4 Controllers', price: 'Rs 1,000 / hr' },
    ],
    features: [
      'PlayStation 5 console',
      'Up to 4 players',
      'Full game library',
      'Large screen setup',
    ],
    whatsappMessage: 'Hi! I want to book a PS5 session at Arcadium. Please confirm availability.',
    accent: 'pink',
  },
];

// ───────────────────────────────────────────────────────────────────────────
// CONSOLE GAME LIBRARY — shown on /console-gaming. Add or remove titles freely.
// ───────────────────────────────────────────────────────────────────────────

export interface ConsoleGame {
  title: string;
  genre: string;
  players: string; // e.g. '1-2' | '1-4'
}

export const consoleGames: ConsoleGame[] = [
  { title: 'EA Sports FC 25',        genre: 'Football',     players: '1-2' },
  { title: 'Tekken 8',               genre: 'Fighting',     players: '1-2' },
  { title: 'Mortal Kombat 1',        genre: 'Fighting',     players: '1-2' },
  { title: "Marvel's Spider-Man 2",  genre: 'Action',       players: '1' },
  { title: 'Call of Duty: BO6',      genre: 'Shooter',      players: '1-4' },
  { title: 'God of War Ragnarök',    genre: 'Action RPG',   players: '1' },
  { title: 'Gran Turismo 7',         genre: 'Racing',       players: '1-2' },
  { title: 'WWE 2K25',               genre: 'Sports',       players: '1-4' },
  { title: 'UFC 5',                  genre: 'Fighting',     players: '1-2' },
  { title: 'NBA 2K25',               genre: 'Sports',       players: '1-4' },
];

import type { PricingPackage } from '../types';
export const packages: PricingPackage[] = [];
