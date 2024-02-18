import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const LogoutButton = (): JSX.Element => {
  return (
    <TouchableOpacity>
      <Text style={styles.text} >Logout</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 32,
    paddingHorizontal: 24,
    paddingVertical: 8
  }
})

export default LogoutButton
