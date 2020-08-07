import React , { useState, FormEvent, useEffect } from 'react'
import Header from '../../components/page-header/header'
import './style.css'
import Input from '../../components/input/input'
import WarningIcon from '../../assets/assetsUm/images/icons/warning.svg'
import Textarea from '../../components/Textarea/input'
import Select from '../../components/select/input'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'


function TeacherForm () { 
    
    const history = useHistory()
    
    const [time , newTime ] = useState([
            {week_day: '' , from: '00:00' , to: '00:00'  }
            
       ])
    const [Name, setName] = useState('') 
    const [Whatsapp, setWhatsapp] = useState('') 
    const[Avatar, setAvatar] = useState('')
    const [Bio, setBio] = useState('') 
    const [Subject , setSubject] = useState('')
    const [Custo, setCusto] = useState(0)
    const [availableTime, setAavailableTime ] = useState('')
    const [number,  setnumber] = useState(0)

      
      
      
      
      
       function handleNewHourClick() { 
        
           
             newTime([
               ...time,   {week_day: '' , from: '00:00' , to: '00:00'  } 
                
            ])
            setnumber(number + 1)
       }
      
      function HandleSubmitForm(e: FormEvent) {
          e.preventDefault()


       return    api.post('classes', {
            name: Name, 
            whatsapp: Whatsapp, 
            bio: Bio, 
            cost: Custo,
            avatar: Avatar ,
            subject: Subject , 
            schedule: time 
          }).then(() => { 
               alert('Cadastro Realizado')
               history.push('/')
          }).catch(() => alert('erro no cadastro'))

      }

      
      useEffect(() => { 
           console.log(time)
      }, [time])

      function handleChangeDay(position: number , value: string  ) {               
            time[position].week_day=value                        
         
             newTime(time)  
            return             setnumber(number + 1 )
        }
      
      function handleChangeTime(position: number , valueDas?: string ,  valueAté?: string  ) {                       
         if(valueDas) { time[position].from=valueDas 
          newTime(time)
        return setnumber(number + 1 )
        }
        
         if(valueDas === '' ) {time[position].to=valueAté as string 
                 newTime(time) 
                 console.log(time)
           return  setnumber(number + 1 )
                }                   
  }
    
    
    return ( 
        <div id="page-teacher-form" className="container">
            <Header  title='Que bom que você quer dar aulas!'  
             description='O primeiro passo é você preencher este formulário de inscrição.'
            />
               <main>
                   <form  onSubmit={HandleSubmitForm} > 
                 <fieldset>
                  <legend> Seus dados  </legend> 
                  <Input data='Nome' value={Name}  onChange={(e) => setName(e.target.value) } />
                  <Input data='Avatar' value={Avatar} onChange={(e) => setAvatar(e.target.value)} />    
                  <Input data='Whatsapp'  value={Whatsapp} onChange={(e) => setWhatsapp(e.target.value) } /> 
                  <Textarea data='Biográfia' value={Bio} onChange={(e) => setBio(e.target.value) } /> 
                     
                     
                 </fieldset>  
                 <fieldset>
                  <legend> Sobre a aula </legend> 
                  <Select data='Matéria' 
                    
                    onChange={(e) => setSubject(e.target.value)}  
                  
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
                   }
                  />
                  <Input data='Custo da hora por aula' value={Custo} onChange={(e) => setCusto(Number(e.target.value)) } />    
                 
                     
                     
                 </fieldset>  

                 <fieldset>
                     <legend>Horários disponiveis<button type='button'  onClick={ handleNewHourClick } > + novo horário</button></legend> 
                     
                      { time.map( (item , index )=> { 
                           return ( 
                            <div className="schedule-item"> 
                            <Select key={item.week_day} data='Dia da semana'

                             value={item.week_day}
                            
                             onChange={ (e) => handleChangeDay(index , e.target.value ) }
                          
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
                            <Input data='from' value={item.from}  type='time'  onChange={ (e) => handleChangeTime(index , e.target.value ) } />
                            <Input data='to' type='time' value={item.to} onChange={ (e) => handleChangeTime(index , '' , e.target.value ) } />
                              
                              </div> 
                           )
                      }) 
                       }
                 </fieldset>
                 
              <footer>
                   <p>
                       <img src={WarningIcon} alt="Aviso importante"/>
                       Importante <br/>
                       Preencha todos os dados 
                   </p>
                   <button type='button' onClick={HandleSubmitForm} >
                    Salvar cadastro 
                   </button>
              </footer>
              </form>
               </main> 


        </div>
     )
}

export default TeacherForm