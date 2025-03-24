export interface Vehicle {
  id: string;
  name: string;
  price: string;
  image: string;
  type: string;
  specs?: {
    [key: string]: string;
  };
}

export interface Apartment {
  id: string;
  name: string;
  price: string;
  image: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  amenities: string[];
  description: string;
}