import type { Spec } from '../types';

export const specs: Spec[] = [
  {
    id: 'monitor',
    label: 'Refresh Rate',
    value: '360',
    unit: 'Hz',
    highlight: true,
    description:
      "Pakistan's first 360Hz gaming monitors. Every frame rendered, zero compromise on competitive play.",
  },
  {
    id: 'gpu',
    label: 'Graphics Card',
    value: 'RTX 5060',
    unit: '',
    description:
      'NVIDIA GeForce RTX 5060 in every Premium room. Next-gen rendering power for any title you throw at it.',
  },
  {
    id: 'cpu',
    label: 'Processor',
    value: 'Ryzen 5 9600X',
    unit: '',
    description:
      'AMD Ryzen 5 9600X. Six cores of pure speed built for low-latency, high-framerate competitive gaming.',
  },
  {
    id: 'ram',
    label: 'Memory',
    value: '16',
    unit: 'GB DDR5',
    description: '16GB DDR5 RAM. Fast and responsive, no stutters, no bottlenecks mid-session.',
  },
];
