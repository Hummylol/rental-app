import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { APARTMENTS } from '@/data/apartments';
import ApartmentCard from '@/components/ApartmentCard';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.header}
      >
        <Text style={styles.greeting}>Find Your Dream Home</Text>
        <Text style={styles.subGreeting}>Premium apartments for rent</Text>
      </LinearGradient>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Featured Properties</Text>
        
        {APARTMENTS.map((apartment) => (
          <ApartmentCard
            key={apartment.id}
            apartment={apartment}
            onPress={() => {
              // Handle apartment selection
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
    padding: 20,
    paddingTop: 60,
    paddingBottom: 30,
  },
  greeting: {
    fontSize: 28,
    fontFamily: 'Inter_700Bold',
    color: '#ffffff',
  },
  subGreeting: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#ffffff',
    opacity: 0.8,
    marginTop: 5,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter_600SemiBold',
    color: '#192f6a',
    marginBottom: 15,
  },
});