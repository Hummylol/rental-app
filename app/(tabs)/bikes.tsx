import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { BIKES } from '@/data/bikes';
import VehicleCard from '@/components/VehicleCard';

export default function BikesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Rent a Bike</Text>
        <Text style={styles.subtitle}>Premium motorcycles for your ride</Text>
      </View>

      <View style={styles.content}>
        {BIKES.map((bike) => (
          <VehicleCard
            key={bike.id}
            vehicle={bike}
            onPress={() => {
              // Handle bike selection
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#192f6a',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter_700Bold',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#ffffff',
    opacity: 0.8,
    marginTop: 5,
  },
  content: {
    padding: 20,
  },
});