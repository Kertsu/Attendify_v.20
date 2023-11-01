import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/theme'

const GeneralAnnouncements = () => {
  return (
    <ScrollView contentContainerStyle={{ backgroundColor: COLORS.white }}>
      <Text>GeneralAnnouncements</Text>
    </ScrollView>
  )
}

export default GeneralAnnouncements