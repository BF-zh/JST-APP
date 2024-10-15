import { Header } from '@/components/Header'
import { m, mt, p } from '@/constants/style'
import { Avatar, Button, Icon, ListItem } from '@rneui/themed'
import { Text, View } from 'react-native'

const style = {
  container: {
    ...p.md,
  },
}

const menu = [
  {
    title: '账号管理',
    icon: 'user',
    iconType: 'feather',
    onPress: () => {
      console.log('设置')
    },
  },
  {
    title: '我的订单',
    icon: 'shopping-bag',
    iconType: 'feather',
    onPress: () => {
      console.log('我的订单')
    },
  },
  {
    title: '关于',
    icon: 'info',
    iconType: 'octicon',
    onPress: () => {
      console.log('关于')
    },
  },
] as const

export default function User() {
  return (
    <>
      <Header title="个人中心" />
      <View style={style.container}>
        {
          menu.map((item, index) => (
            <ListItem
              key={index}
              bottomDivider
              onPress={item.onPress}
            >
              <Icon name={item.icon} type={item.iconType} color="grey" />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron Component={Text} />
            </ListItem>
          ))
        }
      </View>
    </>
  )
}
