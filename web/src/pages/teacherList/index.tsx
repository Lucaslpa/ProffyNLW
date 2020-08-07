import React, { useState, FormEvent } from 'react'
import logoimg from '../../assets/assetsUm/images/logo.svg'
import backIcon from '../../assets/assetsUm/images/icons/back.svg';
import whatsappimg from '../../assets/assetsUm/images/icons/whatsapp.svg'
import { Link } from 'react-router-dom';
import './style.css'
import Header from '../../components/page-header/header';
import Teacher from '../../components/teacher-item/teacher'
import Input from '../../components/input/input'
import Select from '../../components/select/input'
import api from '../../services/api';

function TeacherList () { 
   const [teachers , setTeachers] = useState([])
   const [subject , setSubject] = useState('')
   const [time, setTime] = useState('')
   const [week_day, setWeek_day ] = useState('')
   const [number, setNumber] = useState(0)

   
   interface  teacherss { 
        id: number 
         avatar: string,
         bio: string , 
         cost: number,
         name: string , 
         subject: string , 
         whatsapp: string 
     }


  async  function handleSearchTeachers (e: FormEvent) { 
         e.preventDefault()
     const response  =  await  api.get('classes',{ 
               params: { 
                     subject,
                     week_day, 
                     time
               }
         })

      setTeachers(response.data)
      return setNumber(number + 1)   

   }


     return ( 
              <div id="page-teacher-list" className="container">

                   <Header title='Estes são os proffys disponiveis.'>
                       <form action="" id="search-teacher"   onSubmit={handleSearchTeachers} >

                       <Select data='Matéria'   
                       value={subject}
                       
                       onChange={ e => setSubject(e.target.value) }
                   options={
                       [
                           {value: 'Artes' , label: 'Artes'},
                           {value: 'Matemática' , label: 'Matemática'},
                           {value: 'Português' , label: 'Português'},
                           {value: 'inglês' , label: 'inglês'},
                           {value: 'Geográfia' , label: 'Geográfia'},
                           {value: 'História' , label: 'História'},
                           {value: 'Química' , label: 'Química'},
                           {value: 'Física' , label: 'Física'},
                           {value: 'Filosofia' , label: 'Filosofia'},
                           {value: 'Sociologia' , label: 'Sociologia'},
                          
                       ]
                   } />
                         <Select data='Dia da semana'   
                         value={week_day}
                     onChange={ e => setWeek_day(e.target.value) }

                   options={
                       [
                           {value: '0' , label: 'Segunda'},
                           {value: '1' , label: 'Terça'},
                           {value: '2' , label: 'Quarta'},
                           {value: '3' , label: 'Quinta'},
                           {value: '4' , label: 'Sexta'},
                           {value: '5' , label: 'Sabado'},
                           {value: '6' , label: 'Domingo'},
                          
                          
                       ]
                   } />
           <Input data='Hora' type='time' value={time}  onChange={ e => setTime(e.target.value) }/>

               <button type='submit' >
                   Buscar 
               </button>


                          </form>
                   </Header>


                   <main>

                        {teachers.map((teacher: teacherss) => <Teacher key={teacher.id} teacher={teacher} />)}
                        

                   </main>



              </div>          
     )
}

export default TeacherList