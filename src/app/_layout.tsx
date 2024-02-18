import { Stack } from 'expo-router'

const Layout = (): JSX.Element => {
  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: '#46b'
    },
    headerTintColor: '#ffffff',
    headerTitle: 'Memo App',
    headerBackTitle: 'Back',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 22
    }
  }} />
}

export default Layout
