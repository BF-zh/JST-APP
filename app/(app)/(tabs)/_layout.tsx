import { Icon } from '@rneui/base'
import { useTheme } from '@rneui/themed'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  const theme = useTheme()
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.theme.colors.primary,
        headerShown: false,
        freezeOnBlur: true,
        tabBarHideOnKeyboard: true, // 隐藏键盘时隐藏tabbar
        tabBarInactiveTintColor: '#8e8e8e',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '工具',
          tabBarIcon: ({ color, focused }) => (
            <Icon type="ionicon" name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: '我的',
          tabBarIcon: ({ color, focused }) => (
            <Icon type="font-awesome" name={focused ? 'user' : 'user-o'} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
