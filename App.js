import Navigation from './src/navigation/Navigation';
import Toast from 'react-native-toast-message';
import { View } from 'react-native';
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Navigation />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View> 
    );
}

