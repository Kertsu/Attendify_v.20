import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { SignUpContext } from './SignUp';
import { COLORS, SIZES } from '../../constants/theme';

const renderField = (label, value) => (
  <View style={{marginBottom:SIZES.xxxSmall, paddingVertical: SIZES.xSmall, paddingHorizontal: SIZES.small, backgroundColor: '#efefef', borderRadius:SIZES.xxxSmall }}>
    <Text style={{color:COLORS.bgPrimary, fontWeight: 'bold', fontSize:SIZES.small}}>{label}</Text>
    <Text style={{}}>{value ? value : `No ${label.toLowerCase()}`}</Text>
  </View>
);

const StepFour = ({ logo }) => {
  const { state } = useContext(SignUpContext);

  return (
    <View style={{ width: '100%', flex: 1 }}>
      {logo}

      {renderField('First Name', state.firstName)}
      {renderField('Last Name', state.lastName)}
      {renderField('Church ID', state.churchId)}
      {renderField('Type', state.selectedType)}
      {renderField('District', state.selectedDistrict)}
      {renderField('Locale', state.selectedLocale)}
      {renderField('Address', state.address)}
      {renderField('Region', state.selectedRegion)}
      {renderField('Province', state.selectedProvince)}
      {renderField('Municipality', state.selectedMunicipality)}
      {renderField('Barangay', state.selectedBarangay)}
    </View>
  );
};

export default StepFour;
