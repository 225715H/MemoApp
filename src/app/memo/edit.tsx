import {
  View,
  TextInput,
  StyleSheet,
  Alert
} from 'react-native'
// import { Feather } from '@expo/vector-icons'

import { router, useLocalSearchParams } from 'expo-router'
import { useState, useEffect } from 'react'
import { doc, setDoc, getDoc, Timestamp } from 'firebase/firestore'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { db, auth } from '../../config'
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'

const handlePress = (id: string, bodyText: string): void => {
  if (auth.currentUser === null) { return }
  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
  setDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
    .then(() => {
      router.back()
    })
    .catch((error) => {
      console.error(error)
      Alert.alert('Error adding document')
    })
}

const Edit = (): JSX.Element => {
  const id = String(useLocalSearchParams().id)
  const [bodyText, setBodyText] = useState('')
  useEffect(() => {
    if (auth.currentUser === null) { return }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    getDoc(ref)
      .then((docRef) => {
        const RemoteBodyText: string = docRef?.data()?.bodyText
        setBodyText(RemoteBodyText)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
        multiline
        style={styles.input}
        value={bodyText}
        onChangeText={(text) => { setBodyText(text) }}
        autoFocus
        />
      </View>
      <CircleButton onPress={() => { handlePress(id, bodyText) }} >
        <Icon name='check' size={40} color='#ffffff' />
      </CircleButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  inputContainer: {
    flex: 1
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    textAlignVertical: 'top',
    paddingHorizontal: 27,
    paddingVertical: 32
  }
})

export default Edit
