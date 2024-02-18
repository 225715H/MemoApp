import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

import { Link, router } from 'expo-router'

import Header from '../../components/header'
import Button from '../../components/button'

const handlePress = (): void => {
  // ログイン
  router.push('/memo/list')
}

const Signup = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inner}>
          <Text style={styles.title}>Login</Text>
          <TextInput style={styles.input} value='Email Address'/>
          <TextInput style={styles.input} value='Password'/>
        <Button label='Submit' onPress={handlePress} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Link href='/auth/signup' asChild>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Sign up here!</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8'
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16
  },
  footer: {
    flexDirection: 'row'
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: '#000000'
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467fd3'
  }
})

export default Signup
