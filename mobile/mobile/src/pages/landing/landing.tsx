import { StatusBar } from 'expo-status-bar';
import React,{ useState , useEffect} from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import styles from  './style'
import sutudyIcon from '../../../assets/images/icons/study.png'
import giveClassesIcon from ' ../../../assets/images/icons/give-classes.png' 
import landing from ' ../../../assets/images/landing.png'
import HeartIcon from '../../../assets/images/icons/heart.png'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import api from '../../services/api'

 function App() {

   const [connections , setConnection] = useState(0)


   useEffect(  () =>  { 
       api.get('connections').then(res => { 
            const total  = res.data.total 
              setConnection(total)
         })  
         
   } , [ ])

  const navigation = useNavigation()

 function handleNavigateTogiveClassesPage() { 
    navigation.navigate('GiveClasses')
 }

 function handleNavigateTogiveStudyPage() { 
    navigation.navigate('StudyTabs')
 }

  return (
    <View style={styles.container}>
           <Image source={landing} />
           <Text style={styles.title}> Seja bem vindo {'\n'}
              <Text style={styles.titleBold} > O que deseja fazer ? </Text>
           </Text>
     <View  style={styles.buttonsContainer} >
             <RectButton onPress={handleNavigateTogiveStudyPage} style={[styles.button, styles.buttonPrimary]} >                   
                    <Image source={sutudyIcon}   ></Image>
                    <Text   style={styles.buttonText} > Estudar  </Text>
             </RectButton>
             <RectButton  onPress={handleNavigateTogiveClassesPage}
               style={[styles.button, styles.buttonSecondary]} >                   
                    <Image source={giveClassesIcon}   ></Image>
                    <Text   style={styles.buttonText} > Dar aulas  </Text>
             </RectButton>
     </View>
             <Text style={styles.totalConnections}> 
             Total de {connections} conexões já realizadas! {'  '}
             <Image  source={HeartIcon} ></Image>
             </Text>
      </View>
  );
}

export default App
