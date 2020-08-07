import React from 'react'
import { View , ImageBackground, Text} from 'react-native'
import styles from './style'
import  giveClassesBgimage from '../../../assets/images/give-classes-background.png'
import { RectButton } from 'react-native-gesture-handler'
import {  useNavigation } from '@react-navigation/native'

function giveClass() { 

    const {goBack} = useNavigation()
    
    function handllepressOkButtontogiveMainpage() {
         goBack()
    } 
   
   
   
    return (
         <View  style={styles.container} >
          <ImageBackground resizeMode='contain' source={giveClassesBgimage}  style={styles.content} >
             
            <Text style={styles.title} >Quer ser um proffy?</Text>
            <Text style={styles.description} >Para começar, você deve inscrever-se como
             professor na nossa plataforma web.
             </Text>
             </ImageBackground>  
             <RectButton onPress={handllepressOkButtontogiveMainpage} style={styles.okButton} >
                 <Text style={styles.okButtonText} > Tudo bem </Text>
                  
             </RectButton>
 
          </View>
     ) }

export default giveClass