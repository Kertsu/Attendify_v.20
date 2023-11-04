import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../constants/theme'
import Announcement from '../../../components/Announcement'
import { groupAnnouncements } from '../../../../data'
import NoData from '../../../components/NoData'
const GroupAnnouncements = () => {

  const announcements = groupAnnouncements;
  

  return (
    <>
      {announcements.length !== 0 ? 
      <FlatList style={{backgroundColor:COLORS.white}}
      data={announcements}
      renderItem={
        ({item}) =>
        <Announcement profile={item.profile} author={item.author} timeAgo={item.timeAgo} announcementTitle={item.announcementTitle} dateTime={item.announcementDateAndTime} venue={item.venue} content={item.content}/>
      } keyExtractor={(item) => item.id.toString()}/>
      
       :<NoData screen={"announcements"}/>}
    </ >
  )
}

export default GroupAnnouncements