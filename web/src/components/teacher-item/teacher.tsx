import React from 'react'
import whatsappimg from '../../assets/assetsUm/images/icons/whatsapp.svg'
import './style.css'

interface teacherItemProps { 
     teacher: { 
        id: number 
         avatar: string,
         bio: string , 
         cost: number,
         name: string , 
         subject: string , 
         whatsapp: string 
     }
}

const TeacherItem: React.FC<teacherItemProps> = ({teacher}) => { 
    return ( 
        <article className="teacher-item">
        <header>
            <img src={teacher.avatar} alt={teacher.name}/>
              <div>
    <strong>{teacher.name}</strong>
    <span>{teacher.subject}</span>
              </div>

              

             
        </header>
              <p>
                  {teacher.bio}
              </p>
        <footer>
                   <p>
                       preço/hora 
    <strong>${teacher.cost}</strong>

                   </p>
                   <a href={`https://wa.me/${teacher.whatsapp}`} >
                       <img src={whatsappimg} alt="contact"/>
                         Entrar em contato 
                   </a>
               </footer>
    </article>
    )
}

export default TeacherItem