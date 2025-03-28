import { Apartment } from '@/types/rental';

export const APARTMENTS: Apartment[] = [
  {
    id: '1',
    name: 'Luxury Garden View',
    price: '35000',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500',
    location: 'Whitefield, Bangalore',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1450,
    amenities: [
      'Swimming Pool',
      'Gym',
      'Children\'s Play Area',
      'Covered Parking',
      '24/7 Security',
      'Power Backup',
    ],
    description: 'Modern apartment with spacious rooms and excellent ventilation. Part of a premium gated community with top-notch amenities.',
  },
  {
    id: '2',
    name: 'Urban Nest',
    price: '28000',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500',
    location: 'HSR Layout, Bangalore',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    amenities: [
      'Gym',
      'Rooftop Garden',
      'Visitor Parking',
      'Security',
      'Club House',
    ],
    description: 'Contemporary 2BHK apartment perfect for young professionals. Located close to tech parks and shopping centers.',
  },
  {
    id: '3',
    name: 'Green Valley Heights',
    price: '45000',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500',
    location: 'Indiranagar, Bangalore',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2100,
    amenities: [
      'Swimming Pool',
      'Tennis Court',
      'Gym',
      'Club House',
      'Children\'s Play Area',
      'Landscaped Gardens',
      '24/7 Security',
      'Power Backup',
    ],
    description: 'Luxurious 4BHK apartment with premium finishes. Situated in a prime location with easy access to restaurants and shopping areas.',
  },
];