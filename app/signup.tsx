import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Link, router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Join RentEase today</Text>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#666"
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#666"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#666"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#666"
              secureTextEntry
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push('/(tabs)')}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.links}>
              <Link href="/login" style={styles.link}>
                <Text style={styles.linkText}>Already have an account? Login</Text>
              </Link>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Inter_700Bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#ffffff',
    opacity: 0.8,
    marginBottom: 40,
  },
  form: {
    gap: 16,
  },
  input: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 30,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  button: {
    backgroundColor: '#192f6a',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  links: {
    alignItems: 'center',
    marginTop: 24,
  },
  link: {
    marginTop: 8,
  },
  linkText: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
});