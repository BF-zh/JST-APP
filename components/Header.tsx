import type { PropsWithChildren } from 'react'
import { Header as HeaderElement, Icon } from '@rneui/themed'
import { router } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
  title: string
  showBackButton?: boolean
  leftComponent?: React.ReactNode
}

function LeftComponent({ showBackButton }: Omit<Props, 'title'>) {
  if (showBackButton) {
    return (
      <TouchableOpacity onPress={router.back}>
        <Icon name="arrow-back-ios" />
      </TouchableOpacity>
    )
  }
  return <View />
}

const style = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
export function Header({ title, ...prpos }: Props) {
  return (
    <HeaderElement
      leftComponent={<LeftComponent {...prpos} />}
      ViewComponent={View} // android
      centerComponent={(
        <Text style={style.title}>
          {title}
        </Text>
      )}
    >
    </HeaderElement>
  )
}
