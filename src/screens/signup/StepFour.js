import {View , Text} from 'react-native'
import {useContext} from 'react'
import {SignUpContext} from './SignUp'
const StepFour = () => {
  const {state} = useContext(SignUpContext)
    return (
      <View
        style={{ width: "100%", flex: 1, borderColor: "yellow", borderWidth: 1 }}
      >
          <Text>EMAIL: {state.email}</Text>
      <Text>FN: {state.firstName}</Text>
      <Text>LN: {state.lastName}</Text>
      <Text>Church ID: {state.churchId}</Text>
      <Text>Type: {state.selectedType}</Text>
      <Text>District: {state.selectedDistrict}</Text>
      <Text>Locale: {state.selectedLocale}</Text>
      <Text>Address: {state.address}</Text>
      <Text>Region: {state.selectedRegion}</Text>
      <Text>Province: {state.selectedProvince}</Text>
      <Text>Municipality: {state.selectedMunicipality}</Text>
      <Text>Barangay: {state.selectedBarangay}</Text>
      </View>
    );
  };

  export default StepFour