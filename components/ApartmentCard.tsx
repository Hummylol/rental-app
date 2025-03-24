import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Apartment } from '@/types/rental';
import { Chrome as Home, Bath, Maximize, MapPin } from 'lucide-react-native';

interface ApartmentCardProps {
  apartment: Apartment;
  onPress?: () => void;
}

export default function ApartmentCard({ apartment, onPress }: ApartmentCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: apartment.image }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{apartment.name}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>₹{apartment.price}</Text>
            <Text style={styles.perMonth}>/month</Text>
          </View>
        </View>

        <View style={styles.location}>
          <MapPin size={16} color="#666666" />
          <Text style={styles.locationText}>{apartment.location}</Text>
        </View>

        <View style={styles.features}>
          <View style={styles.feature}>
            <Home size={16} color="#192f6a" />
            <Text style={styles.featureText}>{apartment.bedrooms} Beds</Text>
          </View>
          <View style={styles.feature}>
            <Bath size={16} color="#192f6a" />
            <Text style={styles.featureText}>{apartment.bathrooms} Baths</Text>
          </View>
          <View style={styles.feature}>
            <Maximize size={16} color="#192f6a" />
            <Text style={styles.featureText}>{apartment.sqft} sq.ft</Text>
          </View>
        </View>

        <Text style={styles.description} numberOfLines={2}>
          {apartment.description}
        </Text>

        <View style={styles.amenities}>
          {apartment.amenities.slice(0, 3).map((amenity, index) => (
            <View key={index} style={styles.amenityTag}>
              <Text style={styles.amenityText}>{amenity}</Text>
            </View>
          ))}
          {apartment.amenities.length > 3 && (
            <View style={styles.amenityTag}>
              <Text style={styles.amenityText}>+{apartment.amenities.length - 3} more</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontFamily: 'Inter_600SemiBold',
    color: '#192f6a',
    flex: 1,
    marginRight: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  price: {
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
    color: '#192f6a',
  },
  perMonth: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#666666',
    marginLeft: 4,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationText: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#666666',
    marginLeft: 4,
  },
  features: {
    flexDirection: 'row',
    marginBottom: 12,
    gap: 16,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureText: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#192f6a',
    marginLeft: 4,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#666666',
    marginBottom: 12,
  },
  amenities: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  amenityTag: {
    backgroundColor: '#f0f2f5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  amenityText: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    color: '#192f6a',
  },
});