import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/theme'

const Separator = () => {
  return (
    <View style={styles.separator}></View>
  )
}

export default Separator

const styles = StyleSheet.create({
    separator: {
        width: "100%",
        borderColor: COLORS.outlineGray,
        borderWidth: 1,
        marginTop: SIZES.small,
      },
    
});
