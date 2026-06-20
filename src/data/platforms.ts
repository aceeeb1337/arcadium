import type { Platform } from '../types';

export const platforms: Platform[] = [
  {
    id: 'pc',
    name: 'Gaming PCs',
    description:
      'High-end custom rigs with 360Hz monitors, mechanical keyboards, and pro-grade peripherals. Premium and Standard rooms available.',
    icon: 'ph:desktop-tower-bold',
    available: true,
  },
  {
    id: 'ps5',
    name: 'PlayStation 5',
    description:
      "Sony's latest powerhouse. Exclusive titles, DualSense haptic feedback, and 4K gaming. 1 to 4 controllers supported.",
    icon: 'simple-icons:playstation',
    available: true,
  },
];
