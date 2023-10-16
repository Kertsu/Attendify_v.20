import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Gatherings, Announcements, Profile} from '../index'

import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/theme';


const Tab = createBottomTabNavigator();

const TabGroup = () => {
  return (
  <Tab.Navigator screenOptions={({route}) => ({
    tabBarIcon: ({focused, color}) => {
      let iconName;
      if (route.name == 'Gatherings'){
        iconName = focused ? 'home' : 'home-outline'
      } else if (route.name == 'Announcements'){
        iconName = focused ? 'newspaper' :  'newspaper-outline'
      }
      if (route.name !== 'Profile') {
        return <Ionicons name={iconName} size={24} color={COLORS.textSecondary}/>
      } else{
        return <View style={styles.imageContainer({focused})}><Image style={styles.image} source={require('../../../assets/images/kurtd.jpg')}/></View>
      }
    },tabBarShowLabel:false, tabBarStyle:{ elevation: 0, shadowOpacity: 0}, headerTitleAlign:'center'
  })}>
    <Tab.Screen name='Gatherings' component={Gatherings}/>
    <Tab.Screen name='Announcements' component={Announcements}/>
    <Tab.Screen name='Profile' options={{title:'My Profile'}} component={Profile}/>
  </Tab.Navigator>)
}

const Home = () => {
  return(
    <TabGroup/>
  )
}

export default Home

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    aspectRatio: 1 / 1,
    borderRadius: 1000,
  },
  imageContainer: ({focused}) => ({
    height: '63%',
    width: '63%',
    borderRadius: 1000,
    backgroundColor: focused ? COLORS.textPrimary : '',
    aspectRatio:1/1,
    padding:2
  })
});