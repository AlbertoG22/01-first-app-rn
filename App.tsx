import { SafeAreaView, Text, View } from 'react-native';
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HelloWorldScreen name='Alberto García' />     
    </SafeAreaView>
  )
};