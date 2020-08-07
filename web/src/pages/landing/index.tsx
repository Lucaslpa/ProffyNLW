import React, { useState, useEffect } from 'react'
import logo from '../../assets/assetsUm/images/logo.svg'
import landingImg from '../../assets/assetsUm/images/landing.svg'
import studyimg from '../../assets/assetsUm/images/icons/study.svg'
import giveClassesImg from '../../assets/assetsUm/images/icons/give-classes.svg'
import PurpleHeartIcons from '../../assets/assetsUm/images/icons/purple-heart.svg'
import './style.css'
import { Link } from 'react-router-dom'
import api from '../../services/api'


function Landing() { 
      const [connections , setConnection] = useState(0)


      useEffect(  () =>  { 
          api.get('connections').then(res => { 
               const total  = res.data.total 
                 setConnection(total)
            })  
            
      } , [ ])

      return ( 
           
           <div id="landing-page">

                   <div id="landing-page-content" className="Container">
                       <div className="logo-containe">
                           <img src={logo} alt="logo-landing"/>
                           <h1>Sua plataform de estudos online </h1>
                       </div>
                       <img src={landingImg} alt="landingIMG" className="hero-image"/>

                      <div className="buttons-container">
                          <Link to='/study' className='study' >
                                 <img src={studyimg} alt="studyimg"/>
                                 Estudar 

                          </Link>

                          <Link to='/give-classes' className='give-classes' >
                                 <img src={giveClassesImg} alt="studyimg"/>
                              Dar aulas 

                          </Link>
                       
                      </div>
 

                     <span className="total-connections">
                         Total de {connections} conexões já realizadas <img src={PurpleHeartIcons} alt="PurpleHeartIcons"/>
                     </span>

                   </div>

           </div>

      ) 



}

export default Landing 