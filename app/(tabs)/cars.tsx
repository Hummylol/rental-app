import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { CARS } from '@/data/cars';
import VehicleCard from '@/components/VehicleCard';

export default function CarsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Rent a Car</Text>
        <Text style={styles.subtitle}>Premium Indian cars for your journey</Text>
      </View>

      <View style={styles.content}>
        {CARS.map((car) => (
          <VehicleCard
            key={car.id}
            vehicle={car}
            onPress={() => {
              // Handle car selection
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