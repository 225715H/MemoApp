import { View, Text, StyleSheet } from 'react-native'

const Header = (): JSX.Element => {
  return (
    <View style={styles.header}>
      <View style={styles.headerInner}>
        <Text style={styles.headerTitle}>Memo App</Text>
        <Text style={styles.headerRight}>Logout</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#46b',
    height: 104,
    justifyContent: 'flex-end'
  },
  headerInner: {
    alignItems: 'center'
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 8
  },
  headerRight: {
    color: 'rgba(255, 255, 255, 0.7)',
    position: 'absolute',
    right: 16,
    bottom: 16
  }
})

export default Header
