import { useAuth } from '@/hooks/useAuth'
import { Button, Icon, Image, Input, Text } from '@rneui/themed'
import { Redirect } from 'expo-router'
import { useState } from 'react'
import { Dimensions, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

const { height } = Dimensions.get('window')
const copyrightHeight = 100
const style = StyleSheet.create({
  container: {
    height: '100%',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: height - copyrightHeight,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  input: {
    userSelect: 'none',
  },
  button: {
    alignContent: 'center',
    paddingVertical: 15,
  },
  buttonContainer: {
    width: '90%',
    maxWidth: 400,
    borderRadius: 10,
  },
  copyright: {
    width: '100%',
    display: 'flex',
    height: copyrightHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function SignIn() {
  const { login, loading, isAuthenticated } = useAuth()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [account, setAccount] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  if (isAuthenticated) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/" />
  }
  const handleSignIn = async () => {
    login(account, password)
  }
  return (
    <View style={style.container}>
      <View style={style.formContainer}>
        <Image
          style={style.avatar}
          source={{
            uri: 'http://q1.qlogo.cn/g?b=qq&nk=2581807417&s=100',
          }}
        />
        <Input
          inputStyle={style.input}
          errorStyle={{ display: 'none' }}
          underlineColorAndroid="transparent"
          placeholderTextColor="#ccc"
          inputMode="text"
          placeholder="请输入账号"
          textContentType="username"
          value={account}
          keyboardType="email-address"
          onChangeText={setAccount}
        />
        <Input
          inputStyle={style.input}
          errorStyle={{ display: 'none' }}
          underlineColorAndroid="transparent"
          placeholderTextColor="#ccc"
          value={password}
          onChangeText={setPassword}
          rightIcon={(
            <TouchableWithoutFeedback onPress={() => setShowPassword(!showPassword)}>
              <View>
                <Icon color="#ccc" name={showPassword ? 'visibility' : 'visibility-off'} size={30} />
              </View>
            </TouchableWithoutFeedback>
          )}
          secureTextEntry={!showPassword}
          autoComplete="password"
          textContentType="password"
          key="password"
          placeholder="请输入密码"
        />
        <Button
          title="登录"
          titleStyle={{ fontSize: 18 }}
          disabled={!(account && password && account.length > 5 && password.length > 5)}
          containerStyle={style.buttonContainer}
          buttonStyle={style.button}
          style={{ borderRadius: 10 }}
          loading={loading}
          onPress={handleSignIn}
        />
      </View>
      <View style={style.copyright}>
        <Text>Copyright© 2024 北风</Text>
      </View>

    </View>
  )
}
