import React from 'react'
import {  NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/landing/landing'
import giveClass from '../pages/giveclasses/giveClasses'
import studyTabs from './StudyTabs'

const {Navigator , Screen} = createStackNavigator()

function Appstack() { 
     
    return ( 
         <NavigationContainer>
             <Navigator screenOptions={ { headerShown: false }}  >
                  <Screen name='Landing' component={Landing} />
                  <Screen name='GiveClasses' component={giveClass}/> 
                  <Screen name='StudyTabs' component={studyTabs} />                             
             </Navigator>
         </NavigationContainer>
    )
}

export default Appstack