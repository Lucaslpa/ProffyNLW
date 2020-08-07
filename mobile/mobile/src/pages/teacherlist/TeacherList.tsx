import React, { useState, useEffect } from 'react'
import { View , ScrollView, Text , TextInput } from 'react-native'
import styles from './style'
import Pageheader from '../../components/pageHeader'
import { useNavigation } from '@react-navigation/native'
import Teacheritem from '../../components/teacher'
import {BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import api from '../../services/api'
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

function Teacherlist() {
    const { navigate} = useNavigation()

    const [isvisible, setisvisible] = useState(false)
    const [teachers , setTeachers] = useState([])
    const [subject , setSubject] = useState('')
    const [time, setTime] = useState('')
    const [week_day, setWeek_day ] = useState('')
    const [number, setNumber] = useState(0)
    const [favorites, setfavorites] = useState<number[]>([])

    function loadfavorites() { 
        asyncstorage.getItem('favorites').then(res => {
            if(res) { 
                const favoritedteachers =JSON.parse(res)
                const id = favoritedteachers.map((item: teacherss) => item.id)
                setfavorites(id)
            }
       })
    }
    useFocusEffect(()=> { 
               loadfavorites()
    })

    function handletogglefiltervisible() { 
         setisvisible(!isvisible)
    }
    

    async  function handleSearchTeachers () { 
        loadfavorites()
    
    const response  =  await  api.get('classes',{ 
              params: { 
                    subject,
                    week_day, 
                    time
              }
        })
      console.log(response.data)
     setTeachers(response.data)
     return setNumber(number + 1)   

  }
     return (
          <View style={styles.container} >

              <Pageheader  title='Proffys disponíveis '  headerbutton={(
                     <BorderlessButton onPress={handletogglefiltervisible} >
                      <Feather name='filter' size={20} color='#fff'/>  
                      </BorderlessButton>
              )} >
                 {isvisible && (  <View style={styles.searchform} >
                         <Text style={styles.label} > Matéria</Text>
                          <TextInput value={subject} onChangeText={text => setSubject(text)} style={styles.input} />

                          <View  style={styles.inputgroup} >
                              <View style={styles.inputblock} >
                              <Text style={styles.label} > Dia da semana </Text>
                               <TextInput value={week_day} onChangeText={text=> setWeek_day(text)} style={styles.input} />

                              </View>
                              <View style={styles.inputblock} >
                              <Text style={styles.label} > Horário </Text>
                               <TextInput value={time} onChangeText={text=> setTime(text)} style={styles.input} />

                              </View>
                              

                          </View>
                            <RectButton onPress={handleSearchTeachers} style={styles.submitbutton} >
                                   <Text style={styles.submitbuttontext}>Filtrar</Text>
                              </RectButton>
                   </View>)}
              </Pageheader>
              <ScrollView  style={styles.teacherlist}
              contentContainerStyle={{
                  paddingHorizontal: 16, 
                  paddingBottom: 23,
              }} >
              {teachers.map((item: teacherss) => <Teacheritem  key={item.id} favorited={favorites.includes(item.id)}  teacher={item}  /> )}
              </ScrollView>
          </View>

     )
}

export default Teacherlist