import { View, Text, StyleSheet, ScrollView } from 'react-native'
// import { Feather } from '@expo/vector-icons'

import { router } from 'expo-router'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const handlePress = (): void => {
  router.push('/memo/edit')
}

const Detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2024/02/17</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>Detail</Text>
      </ScrollView>
      <CircleButton onPress={handlePress} style={{ top: 60, bottom: 'auto' }}>
        {/* <Feather name="edit-2" size={24} color="#ffffff" /> */}
        <Icon name='pencil' size={40} color='#ffffff'/>
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  memoHeader: {
    backgroundColor: '#46b',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold'
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16
  },
  memoBody: {
    paddingHorizontal: 27,
    paddingVertical: 32
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24
  }
})

export default Detail
