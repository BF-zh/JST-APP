import { Header } from '@/components/Header'
import { Icon } from '@rneui/themed'
import { router, type StaticRoutes } from 'expo-router'
import { Dimensions, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Toast from 'react-native-toast-message'

interface ICardItem {
  title: string
  path: StaticRoutes | ''
  icon: {
    name: string
    type: string
    color: string
  }
}

interface ICard {
  title: string
  items: ICardItem[]
}

const cards: ICard[] = [
  {
    title: '售后工具',
    items: [
      {
        title: '快递登记',
        path: '/courier',
        icon: {
          type: 'material-community',
          name: 'cube-scan',
          color: 'green',
        },
      },
      {
        title: '一件入库',
        path: '',
        icon: {
          name: 'truck-fast',
          type: 'material-community',
          color: '#009688',
        },
      },
      {
        title: '仓库备注',
        path: '',
        icon: {
          name: 'clipboard-edit-outline',
          type: 'material-community',
          color: '#3f51b5',
        },
      },
    ],
  },
  {
    title: '其他工具',
    items: [
      {
        title: '快递登记',
        path: '',
        icon: {
          type: 'material-community',
          name: 'cube-scan',
          color: 'green',
        },
      },
      {
        title: '一件入库',
        path: '',
        icon: {
          name: 'truck-fast',
          type: 'material-community',
          color: 'green',
        },
      },
      {
        title: '仓库备注',
        path: '',
        icon: {
          name: 'clipboard-edit-outline',
          type: 'material-community',
          color: 'green',
        },
      },
    ],
  },
]

const { width } = Dimensions.get('window')

const style = StyleSheet.create({
  header: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    padding: 16,
  },
})

const CardStyle = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 8,
    borderLeftColor: '#ccc',
    borderLeftWidth: 4,
    paddingLeft: 8,
  },
  container: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    gap: 8,
    borderTopRightRadius: 8,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
  },
  item: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    width: (width - 40 - 24) / 3,
    maxWidth: 300,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemDes: {
    fontSize: 12,
    color: '#666',
  },
})

function Card({ title, items }: ICard) {
  const handelClick = (item: ICardItem) => {
    if (!item.path)
      return Toast.show({ type: 'info', text1: '功能暂未开放' })
    router.push(item.path)
  }

  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={CardStyle.title}>{title}</Text>
      <View style={CardStyle.container}>
        {items.map((item, key) => (
          <TouchableOpacity activeOpacity={0.5} key={`${item.title}-${key}`} onPress={() => handelClick(item)}>
            <View style={CardStyle.item}>
              <Icon size={50} name={item.icon?.name || ''} type={item.icon?.type} color={item.icon?.color}></Icon>
              <Text style={CardStyle.itemDes}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default function Home() {
  return (
    <>
      <Header title="便捷工具箱" />
      <View style={style.container}>
        {cards.map(card => (
          <Card key={card.title} {...card} />
        ))}
      </View>
    </>
  )
}
