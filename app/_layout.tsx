import { AuthProvider } from '@/components/AuthProvider'
import { fade, lighten } from '@jiaminghi/color'
import { Colors, createTheme, ThemeProvider } from '@rneui/themed'
import { Slot } from 'expo-router'
import { RootSiblingParent } from 'react-native-root-siblings'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'

const theme = createTheme({
  lightColors: {
    background: '#ffffff',
    primary: '#2089dc',
  },
  darkColors: {
    background: '#000000',
  },
  components: {
    Button(props, theme) {
      return {
        raised: true,
        containerStyle: {
          shadowColor: 'black',
          shadowOpacity: 0.01,
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 8,
          borderRadius: 10,
        },
        disabledStyle: {
          backgroundColor: fade(theme.colors.primary, 60),
          borderRadius: 10,
        },
        disabledTitleStyle: {
          color: fade(theme.colors.white, 80),
        },
      }
    },
    Input: {
      containerStyle: {
        backgroundColor: 'white',
        width: '90%',
        maxWidth: 400,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.01,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
        marginBottom: 20,
        padding: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        borderStyle: 'solid',
      },
      inputContainerStyle: {
        borderBottomWidth: 0,
      },
      errorStyle: {
        display: 'none',
      },
    },
    Header: {
      backgroundColor: 'transparent',
    },
  },
})

export default function Root() {
  return (
    <RootSiblingParent>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <Slot />
          </AuthProvider>
        </ThemeProvider>
      </SafeAreaProvider>
      <Toast />
    </RootSiblingParent>
  )
}
