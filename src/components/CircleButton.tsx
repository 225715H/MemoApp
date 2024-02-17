import { View, Text, StyleSheet } from 'react-native'

interface Props {
  children: string
}

const circleButton = (props: Props): JSX.Element => {
  const { children } = props
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLabel}>{ children }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#46b',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000',
    // iOS用Shadow
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 8,
    // Android用Shadow
    elevation: 8
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default circleButton
