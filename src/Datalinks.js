import tour1 from './images/tour-1.jpg';
import tour2 from './images/tour-2.jpg';
import tour3 from './images/tour-3.jpg';
import tour4 from './images/tour-4.jpeg';
import tour5 from './images/tour-5.jpg';
import tour6 from './images/tour-6.jpg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const ourServices = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    service: 'saving money',
    description: 'Unforgettable experiences at pocket-friendly prices!',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    service: 'endless hiking',
    description: 'Get lost in the beauty of the great outdoors!',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    service: 'amazing comfort',
    description: 'Unwind and explore in style and comfort.',
  },
];

export const featuredTours = [
  {
    id: 1,
    img: tour1,
    date: 'May 2023',
    title: 'Bicol',
    details:
      'Discover the magic of Philippine oceans: vibrant coral gardens, graceful sea turtles, and stunning underwater caves. Dive into an unforgettable adventure and witness the breathtaking beauty beneath the surface.',
    location: 'Philippines',
    duration: '10 days',
    price: '10,000',
  },
  {
    id: 2,
    img: tour2,
    date: 'December 2022',
    title: 'Bukidnon',
    details:
      'Uncover the natural wonders of Bukidnon, where lush green landscapes and cascading waterfalls await. Immerse yourself in its beauty, trek through misty mountains, and experience the vibrant culture of the highlands.',
    location: 'Mindanao',
    duration: '2 days',
    price: '5,000',
  },
  {
    id: 3,
    img: tour3,
    date: 'October 2022',
    title: 'Boracay',
    details:
      'Indulge in the pristine beauty of white beaches in the Philippines. Sink your toes into soft, powdery sand, soak up the sun, and let the turquoise waters wash your worries away. Paradise awaits!',
    location: 'Kalibo, Aklan',
    duration: '3 days',
    price: '6,000',
  },
  {
    id: 4,
    img: tour4,
    date: 'July 2022',
    title: 'Zoobic Safari',
    details:
      'Embark on a remarkable journey to encounter majestic elephants in the Philippines. Witness their gentle grace, observe their natural behaviors, and create unforgettable memories with these magnificent creatures.',
    location: 'Subic',
    duration: '1 days',
    price: '2,000',
  },
  {
    id: 5,
    img: tour5,
    date: 'June 2022',
    title: 'Talim Beach',
    details:
      'Indulge in a romantic escape and create cherished memories in the Philippines. From sunset strolls on pristine beaches to candlelit dinners under starry skies, let love bloom in paradise.',
    location: 'Batangas',
    duration: '3 days',
    price: '5,000',
  },
  {
    id: 6,
    img: tour6,
    date: 'January 2022',
    title: 'Camiguin',
    details:
      'Unveil the enchanting beauty of Camiguin Island, a hidden gem in the Philippines. From majestic waterfalls to volcanic springs, immerse yourself in its natural wonders and discover a paradise like no other.',
    location: 'Mindanao',
    duration: '2 days',
    price: '4,000',
  },
];
