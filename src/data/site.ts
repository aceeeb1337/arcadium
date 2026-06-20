import type { SocialLink } from '../types';

export const SITE = {
  name: 'Arcadium',
  fullName: 'Arcadium by ViderGG',
  tagline: 'Where Gaming Meets Luxury',
  description:
    "Play on Pakistan's first & only 360Hz BenQ gaming cafe. RTX 5060, PS5, 7 private rooms, open 24/7 in Gulshan-e-Iqbal Karachi. Book via WhatsApp instantly.",
  url: 'https://arcadium.pk',
  whatsapp: '+923359557043',
  whatsappUrl: 'https://wa.me/923359557043',
  phone: '+92 335 9557043',
  email: 'info@arcadium.pk',
  address: {
    line1: 'Office #1, Mezzanine Floor, Farhan Tower',
    line2: 'Gulshan-e-Iqbal Block 10-A',
    city: 'Karachi',
    country: 'Pakistan',
    full: 'Office #1, Mezzanine Floor, Farhan Tower, Gulshan-e-Iqbal Block 10-A, Karachi, Pakistan',
  },
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.7225500768627!2d67.110612!3d24.907443799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3390007af204b%3A0x8121ada8d4c45269!2sArcadium!5e0!3m2!1sen!2s!4v1775160578696!5m2!1sen!2s',
  hours: [
    { days: 'Every Day', time: 'Open 24/7' },
  ],
} as const;

export const SOCIALS: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/arcadium_gg/',
    icon: 'ri:instagram-line',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/arcadiumbyvider/',
    icon: 'ri:facebook-line',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/arcadiumgg/',
    icon: 'ri:linkedin-line',
  },
];
