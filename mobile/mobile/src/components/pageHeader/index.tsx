import React, { ReactNode } from 'react'
import { View , Text , Image} from 'react-native'
import styles from './style'
import {BorderlessButton } from 'react-native-gesture-handler'
import backIcon from '../../../assets/images/icons/back.png'
import logoimg from '../../../assets/images/logo.png'
import { useNavigation } from '@react-navigation/native'

interface pageheaderprops { 
    title: string ; 
    headerbutton?: ReactNode;
    
}

const  Pageheader: React.FC<pageheaderprops>  = ({title, headerbutton ,children}) =>  {
   const { navigate  } = useNavigation()
    function handlebacklanding() { 
        navigate('Landing')
    }
    return ( 
         <View  style={styles.container} >
         <View  style={styles.topBar} >
                 <BorderlessButton  onPress={handlebacklanding} >
                           <Image source={backIcon} resizeMode='contain' />                  
                  </BorderlessButton>

                  <Image  source={logoimg} resizeMode='contain'  />

         </View>
         <View style={styles.header} >
         <Text style={styles.title} >{ title }</Text>
          {headerbutton}
         </View>
         
                   {children}
         </View>
    )
}

export default Pageheader