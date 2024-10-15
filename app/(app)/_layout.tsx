import { useAuth } from '@/hooks/useAuth'
import { Redirect, Slot, Stack } from 'expo-router'
import { ActivityIndicator, Text, View } from 'react-native'

export default function AppLayout() {
  const { isAuthenticated, loading } = useAuth()

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="gray" />
      </View>
    )
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!isAuthenticated)
    return <Redirect href="/login" />

  // This layout can be deferred because it's not the root layout.
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}
