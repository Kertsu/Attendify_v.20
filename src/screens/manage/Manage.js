import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme'
import NoData from '../../components/NoData'
import UserCard from '../../components/UserCard'

const Manage = () => {
  return (
   <>
   {/* <NoData screen="manage"/> */}
   
   <UserCard/>
   </>
  )
}

export default Manage