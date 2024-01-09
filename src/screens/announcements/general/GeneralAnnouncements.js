import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../constants/theme'
import { groupAnnouncements } from '../../../../data'
import Announcement from '../../../components/Announcement'
import NoData from '../../../components/NoData'

const GeneralAnnouncements = () => {
  const announcements = groupAnnouncements.slice(7);

  return (
    <>
      {announcements.length !== 0 ? 
      <FlatList style={{backgroundColor:COLORS.white}}
      data={announcements}
      renderItem={
        ({item}) =>
        <Announcement profile={item.profile} author={item.author} timeAgo={item.timeAgo} announcementTitle={item.announcementTitle} dateTime={item.announcementDateAndTime} venue={item.venue} content={item.content}/>
      } keyExtractor={(item) => item.id.toString()}/>
      
       :<NoData screen="announcements"/>}

    </ >
  )
}

export default GeneralAnnouncements