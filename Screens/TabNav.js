import { View, Text, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Delivery from './Delivery';
import Events from './Events';
import Dinning from './Dinning';


const TabNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer
    independent={true}
    >
      <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
            headerShown:false,
            tabBarActiveTintColor:'red',
            tabBarInactiveTintColor:'grey',tabBarShowLabel:false,
            tabBarLabelPosition:'below-icon',
            tabBarHideOnKeyboard:false,
            tabBarStyle:{position:'absolute',
                    bottom:0.1,
                    borderRadius:4,
                    elevation:10,
                    height:'8%',
                    left:3,
                    right:3}
                  }}>
        <Tab.Screen name="Delivery" component={Delivery} options={{
          tabBarIcon: ({focused})=> (
            <View style={{alignItems:'center'}}>
              <Image
              source={{uri:'https://cdn-icons-png.flaticon.com/512/3063/3063822.png'}}
              style={{height:25,width:25,tintColor: focused ? 'red':'grey'}}
              />
              <Text style={{fontWeight:'400',color: focused ? 'red':'grey'}}>Delivery</Text>
            </View>
          )
        }} />
        <Tab.Screen name="Dinning" component={Dinning}  options={{
          tabBarIcon: ({focused})=> (
            <View style={{alignItems:'center'}}>
              <Image
              source={{uri:'https://cdn-icons-png.flaticon.com/512/9704/9704939.png'}}
              style={{height:25,width:25,tintColor: focused ? 'red':'grey'}}
              />
              <Text style={{fontWeight:'400',color: focused ? 'red':'grey'}}>Dinning</Text>
            </View>
          ) 
        }}/> 
        <Tab.Screen name="Events" component={Events} options={{
          tabBarIcon: ({focused})=> (
            <View  style={{alignItems:'center'}}>
              <Image
              source={{uri:'https://cdn-icons-png.flaticon.com/512/48/48732.png'}}
              style={{height:25,width:25,tintColor: focused ? 'red':'grey'}}
              />
              <Text style={{fontWeight:'400',color: focused ? 'red':'grey'}}>Events</Text>
            </View>
          ) 
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNav