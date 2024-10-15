import { Link, Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View>
        <Text>Sorry, this page doesn’t exist.</Text>
      </View>
    </>
  )
}
