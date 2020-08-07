import React, { useState } from 'react'
import{ View , Image , Text , Linking, AsyncStorage} from 'react-native'
import styles from './style'
import { RectButton } from 'react-native-gesture-handler'
import heartIcon from '../../../assets/images/icons/heart-outline.png'
import unfavoriteicon  from '../../../assets/images/icons/unfavorite.png'
import whatsappicon from '../../../assets/images/icons/whatsapp.png'
import asyncstorage from '@react-native-community/async-storage'
import api from '../../services/api'
interface teacherprops  { 
    teacher: { 
        id: number 
         avatar: string,
         bio: string , 
         cost: number,
         name: string , 
         subject: string , 
         whatsapp: string 
     },
     favorited: boolean
}

interface teacher{
     
        id: number 
         avatar: string,
         bio: string , 
         cost: number,
         name: string , 
         subject: string , 
         whatsapp: string 
     
}

const  Teacheritem: React.FC<teacherprops> = ({ teacher , favorited }) => { 



 function handlelinkwhatsapp() { 

    console.log(teacher.id)
     api.post('connections', { 
          user_id: teacher.id
     }) 
    Linking.openURL(`whatsapp://send?text=Hello World!&phone=${teacher.whatsapp}`)
 }
 const [isfavorited, setisfavorited] = useState(favorited)

async  function handletogglefavorite() { 
    const favorites = await AsyncStorage.getItem('favorites' )
             let favoritesarray = []
             if(favorites) { 
                 favoritesarray = JSON.parse(favorites)
             }
       
        if(isfavorited) { 
            const favoriteindex = favoritesarray.findIndex((teacherItem: teacher) => { 
                 return teacherItem.id === teacher.id
            }
            
            )
            
            favoritesarray.splice(favoriteindex , 1 )
            setisfavorited(false)
            
        } else { 
             

              favoritesarray.push(teacher)
                setisfavorited(true)
             
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesarray))
}

     return (  
          <View  style={styles.container} >
                 <View  style={styles.profile} >
                      <Image style={styles.avatar}  source={{uri: teacher.avatar }} />
                      <View style={styles.profileinfo} >
                             <Text  style={styles.name} > {teacher.name} </Text>
                             <Text> {teacher.subject} </Text>
                      </View>
                 </View>
                 <Text style={styles.bio}>
                    {teacher.bio} 

                 </Text>
                 <View style={styles.footer}>
                    <Text style={styles.price} >
                            Preço/hora {'  '}
     <Text  style={styles.priceValue} >R$ {teacher.cost}</Text>
                    </Text>
                     <View  style={styles.buttoncontainer} >
                         <RectButton  onPress={handletogglefavorite}  style={[styles.favoritebutton, isfavorited? styles.favorited : {}]} >
                             {isfavorited? <Image source={unfavoriteicon}/> : <Image source={heartIcon} /> }
                               
                         </RectButton>
                         <RectButton onPress={handlelinkwhatsapp}  style={styles.contactbutton} >
                               <Image source={whatsappicon} />
                               <Text style={styles.contactbuttontext}> Entrar em contato </Text>
                         </RectButton>

                     </View>
                 </View>
          </View>
     )
}

export default Teacheritem

