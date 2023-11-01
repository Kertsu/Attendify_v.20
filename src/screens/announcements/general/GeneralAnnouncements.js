import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/theme'
import { groupAnnouncements } from '../../../../data'
import Announcement from '../../../components/Announcement'

const GeneralAnnouncements = () => {
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
      
       :<Text style={{textAlign: 'center'}}>No data to show</Text>}

    </ >
  )
}

export default GeneralAnnouncements