import React from 'react'
import {  createBottomTabNavigator  } from '@react-navigation/bottom-tabs'
import Teacherlist from '../pages/teacherlist/TeacherList'
import Favorites from '../pages/favorites/index'
import { Ionicons } from '@expo/vector-icons'




const { Navigator , Screen } = createBottomTabNavigator()


 function studyTabs() { 
      return( 
        <Navigator  tabBarOptions={{
            style: { 
                 elevation:0 , 
                 shadowOpacity: 0 , 
                 height: 64, 
            }, 
            tabStyle: { 
                 flexDirection: 'row' , 
                 alignItems:'center' , 
                 justifyContent: 'center', 
            } , 
             iconStyle:  { 
                 flex:0 , 
                 width:20 , 
                 height: 20 , 

            } , 
            labelStyle: { 
                 fontFamily: 'Archivo_700Bold' ,
                 fontSize: 13, 
                 marginLeft: 16,

            }  , 
            inactiveBackgroundColor: '#fafafc' , 
             activeBackgroundColor: '#ebebf5',  
             inactiveTintColor: '#c1bccc' , 
             activeTintColor: '#8257e5' , 
             
        }}  >
             <Screen options={{tabBarLabel: 'Proffys' ,
                 tabBarIcon: ( { color , size, focused }) => { 
                     return ( 
                         <Ionicons name='ios-easel' size={size} color={ focused? '#8257e5' : color}  />
                     )
                 }
             }} name='Teacherlist' component={Teacherlist} />
             <Screen options={{tabBarLabel: 'Favoritos' ,
                 tabBarIcon: ( { color , size , focused}) => { 
                     return ( 
                         <Ionicons name='ios-heart' size={size} color={ focused ? '#8257e5' : color}  />
                     )
                 }
             }} name='Favorite' component={Favorites} />
        </Navigator>
      )
 }

 export default studyTabs