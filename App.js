import Navigation from './src/navigation/Navigation';
import Toast from 'react-native-toast-message';
import { View } from 'react-native';
import {useRef} from 'react'
import { AuthService } from './src/web/AuthService';
export default function App() {

  const toastRef = useRef(Toast)

  return (
    <AuthService>
      <View style={{ flex: 1 }}>
        <Navigation />
        <Toast ref={(ref) => toastRef.current = ref} />
      </View>
    </AuthService>
    );
}

