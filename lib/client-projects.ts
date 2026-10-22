export type ClientProject = {
  id: string;
  name: string;
  /** Public link to the live project, when there is one. */
  url?: string;
  displayUrl?: string;
  sector: string;
  location?: string;
  type: string;
  /** Only set when the project is not yet live. */
  status?: 'In development';
  description: string;
  /** One short line for cards; the full description serves summaries for agents. */
  summary: string;
  tags: string[];
  image: {
    src: string;
    alt: string;
    device: 'desktop' | 'mobile';
  };
};

// Client work Orbitra can publicly reference. Keep descriptions factual:
// only what the client relationship and the live product can support.
export const CLIENT_PROJECTS: ClientProject[] = [
  {
    id: 'event-hero',
    name: 'Event Hero',
    url: 'https://www.event-hero.com.au',
    displayUrl: 'event-hero.com.au',
    sector: 'Events',
    location: 'Australia',
    type: 'Events and booking platform',
    description:
      'An occasion, booking, and events platform developed for an Australian startup, supporting digital event and booking experiences. Organisers can find and book caterers, venues, photographers, florists, and other vendors in one place.',
    summary: 'Book caterers, venues, photographers and florists in one place.',
    tags: ['Platform development', 'Bookings', 'Web app'],
    image: {
      src: '/work/event-hero.webp',
      alt: 'Event Hero homepage: “Book the people who actually show up on the day”, with vendor cards for caterers, venues, photographers, and florists',
      device: 'desktop',
    },
  },
  {
    id: 'oncscare',
    name: 'OncsCare',
    sector: 'Healthcare',
    location: 'United Kingdom',
    type: 'Web and mobile healthcare platform',
    description:
      'A platform for cancer patients and clinicians, focused on patient monitoring, clinical triaging, and care coordination. Patients complete daily symptom check-ins that their care team can review. The project is associated with NHS-backed initiatives in the UK.',
    summary: 'Daily symptom check-ins that a cancer care team can review.',
    tags: ['Mobile app', 'Web app', 'Clinical workflows'],
    image: {
      src: '/work/oncscare.jpg',
      alt: 'OncsCare mobile app home screen with a completed daily check-in and recent fever, energy, and pain status, shown with a test account',
      device: 'mobile',
    },
  },
  {
    id: 'nethmi-gem-jewellery',
    name: 'Nethmi Gem & Jewellery',
    url: 'https://nethmi.netlify.app/',
    displayUrl: 'nethmi.netlify.app',
    sector: 'Jewellery',
    location: 'Aluthgama, Sri Lanka',
    type: 'Business website',
    description:
      'A web presence for a gem and jewellery business in Aluthgama, designed to showcase its Ceylon gemstones, jewellery, and services online and bring visitors to the store.',
    summary: 'Shows Ceylon gemstones and jewellery online and brings visitors to the store.',
    tags: ['Website', 'Product showcase'],
    image: {
      src: '/work/nethmi-gem-jewellery.webp',
      alt: 'Nethmi Gem & Jewellery homepage: “Authentic Sri Lankan Gems & Fine Jewellery” over a blue sapphire',
      device: 'desktop',
    },
  },
  {
    id: 'al-muallah-travels',
    name: 'Al-Muallah Travels',
    url: 'https://al-muallah-travels.vercel.app/',
    displayUrl: 'al-muallah-travels.vercel.app',
    sector: 'Travel',
    type: 'Travel web platform',
    status: 'In development',
    description:
      'A travel-sector web platform covering Hajj and Umrah, Ziyarah, tours, visa services, and flight tickets. Currently in development.',
    summary: 'Hajj and Umrah, tours, visas and flights in one site.',
    tags: ['Web platform', 'Travel services'],
    image: {
      src: '/work/al-muallah-travels.webp',
      alt: 'Al-Muallah Travels homepage: “Your Journey. Our Guidance.” over a photo of the Kaaba at dusk',
      device: 'desktop',
    },
  },
  {
    id: 'rabeeyunil-awwal-mango-garden',
    name: 'Rabeeyunil Awwal Mango Garden',
    url: 'https://rabeeyunil-awwal-mango-garden.netlify.app/',
    displayUrl: 'rabeeyunil-awwal-mango-garden.netlify.app',
    sector: 'Agriculture',
    location: 'Hambantota, Sri Lanka',
    type: 'Business website',
    description:
      'A website for a mango garden business, providing an online presence for its brand and offerings, including a garden map and a catalogue of its trees.',
    summary: 'The garden’s story, a garden map and a catalogue of its trees.',
    tags: ['Website', 'Garden map'],
    image: {
      src: '/work/rabeeyunil-awwal-mango-garden.webp',
      alt: 'Rabeeyunil Awwal Mango Garden homepage with the garden logo and name on a deep green background',
      device: 'desktop',
    },
  },
  {
    id: 'hey-gems-international',
    name: 'Hey Gems International',
    url: 'https://heygemsinternational.com/',
    displayUrl: 'heygemsinternational.com',
    sector: 'Gemstones',
    location: 'Sri Lanka',
    type: 'Digital platform',
    description:
      'A digital platform for an international gemstone business, presenting its heritage and making it easy for buyers to get in touch.',
    summary: 'Presents the company’s heritage and makes it easy for buyers to get in touch.',
    tags: ['Website', 'Brand presence'],
    image: {
      src: '/work/hey-gems-international.webp',
      alt: 'Hey Gems International homepage with the company name in serif type over a dark sapphire background',
      device: 'desktop',
    },
  },
];

export const CLIENT_PROJECT_BY_ID = Object.fromEntries(
  CLIENT_PROJECTS.map((project) => [project.id, project]),
) as Record<string, ClientProject>;
