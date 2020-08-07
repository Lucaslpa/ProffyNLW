import React,{ useState , useEffect } from 'react'
import styles from './style'
import Pageheader from '../../components/pageHeader/index'
import { View , ScrollView } from 'react-native'
import Teacheritem from '../../components/teacher'
import asyncstorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'
interface  teacherss { 
     id: number 
    avatar: string,
    bio: string , 
    cost: number,
    name: string , 
    subject: string , 
    whatsapp: string 
}
function Favorites() {
     const [favorites, setfavorites] = useState([])
     function loadfavorites() { 
          asyncstorage.getItem('favorites').then(res => {
              if(res) { 
                  const favoritedteachers =JSON.parse(res)
                 
                  setfavorites(favoritedteachers)
              }
         })
      }
 useFocusEffect(() => { 
          loadfavorites()
 })

     return (
          <View style={styles.container} >

          <Pageheader  title='Meus proffys ' />
          <ScrollView  style={styles.teacherlist}
          contentContainerStyle={{
              paddingHorizontal: 16, 
              paddingBottom: 23,
          }} >
           { 
             favorites.map((item: teacherss) => <Teacheritem key={item.id} favorited={true} teacher={item} /> )
            }
          </ScrollView>
      </View>
     )
}

export default Favorites