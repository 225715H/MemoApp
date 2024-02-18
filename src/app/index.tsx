import { Redirect, router } from 'expo-router'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'

import { auth } from '../config'

const Index = (): JSX.Element => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        console.log('ログインしています')
        router.replace('/memo/list')
      } else {
        console.log('未ログインです')
      }
    })
  }, [])
  return <Redirect href="auth/login" />
}

export default Index
