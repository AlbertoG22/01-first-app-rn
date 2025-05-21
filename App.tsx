import { SafeAreaView } from 'react-native';
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';
import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';
import Ionicon from '@react-native-vector-icons/ionicons';
import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <Ionicon { ...props } />
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreen name='Alberto García' /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        <BoxObjectModelScreen />
      </SafeAreaView>
    </PaperProvider>
  )
};