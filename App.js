import Navigation from './src/navigation/Navigation';
import Toast from 'react-native-toast-message';
import { View } from 'react-native';
import {useRef} from 'react'
export default function App() {

  const toastRef = useRef(Toast)

  return (
    <View style={{ flex: 1 }}>
      <Navigation />
      <Toast ref={(ref) => toastRef.current = ref} />
    </View> 
    );
}

