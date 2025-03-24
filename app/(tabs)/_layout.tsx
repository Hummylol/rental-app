import { Tabs } from 'expo-router';
import { Home, Car, Bike } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          height: 60,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: '#192f6a',
        tabBarInactiveTintColor: '#666666',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="cars"
        options={{
          title: 'Cars',
          tabBarIcon: ({ color, size }) => <Car size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="bikes"
        options={{
          title: 'Bikes',
          tabBarIcon: ({ color, size }) => <Bike size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}