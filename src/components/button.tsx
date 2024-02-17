import { View, Text, StyleSheet } from 'react-native'

interface Props {
  label: string
}

const Button = (props: Props): JSX.Element => {
  const { label } = props
  return (
    <View style={styles.button}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#467fd3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 32,
    paddingHorizontal: 24,
    paddingVertical: 8
  }
})

export default Button
