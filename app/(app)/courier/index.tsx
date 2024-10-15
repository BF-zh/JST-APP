import type { TextInput } from 'react-native'
import { courierApi } from '@/apis'
import { Header } from '@/components/Header'
import { Input, Text } from '@rneui/themed'
import { useEffect, useRef, useState } from 'react'
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import Toast from 'react-native-toast-message'

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
})

function CourierItem() {
  return (
    <View style={style.container}>
      <Text>快递</Text>
    </View>
  )
}

export default function Courier() {
  const [text, setText] = useState('')
  const [isExtended, setExtended] = useState(false)
  const inputRef = useRef<TextInput>(null)
  useEffect(() => {
    const focusInput = () => {
      inputRef.current?.focus()
    }

    focusInput() // 初始化时聚焦输入框

    const interval = setInterval(focusInput, 100) // 每100毫秒检查并聚焦输入框

    return () => clearInterval(interval) // 清理定时器
  })
  // 处理提交
  const handleSubmit = () => {
    if (!text) {
      return Toast.show({
        type: 'error',
        text1: '请输入快递单号',
        text2: '快递单号不能为空',
        swipeable: true,
      })
    }
    courierApi.get(text).then((v) => {
      console.log(v)
    })
    setText('')
  }

  // 隐藏键盘
  const dismissKeyboard = () => {
    Keyboard.dismiss()
    setExtended(false)
  }

  // 点击输入框时
  const handleFocus = () => {
    setExtended(true)
    inputRef.current?.focus() // 确保输入框获得焦点
  }

  return (
    <>
      <Header title="快递登记" showBackButton />
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={style.container}>
          <Input
            ref={inputRef}
            value={text}
            showSoftInputOnFocus={isExtended} // 当输入框获取焦点时，是否显示输入法
            onSubmitEditing={handleSubmit} // 当提交时，执行handleSubmit函数
            blurOnSubmit={false} // 当提交时，不失去焦点
            onFocus={handleFocus} // 当输入框获取焦点时，展开输入法
            onChangeText={setText} // 当输入框内容改变时，更新状态
            placeholder="请输入快递单号"
          />
          <CourierItem />
        </View>
      </TouchableWithoutFeedback>
    </>
  )
}
