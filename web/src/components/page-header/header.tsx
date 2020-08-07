import React from 'react'
import logoimg from '../../assets/assetsUm/images/logo.svg'
import backIcon from '../../assets/assetsUm/images/icons/back.svg';
import { Link } from 'react-router-dom'
import './style.css'

interface PageHeaderProps {
  title: string ; 
  description?: string; 
}

const Header: React.FC<PageHeaderProps>  =  (props) => { 
     return( 
        <header className="page-header">
        <div className="top-bar-container">
           <Link to='/'>
               <img src={backIcon} alt="backicons"/>
           </Link>
           <img src={logoimg} alt="proffy"/>

       
         </div>


       <div className="header-content">
         <strong>{props.title}</strong>
         <p>  { props.description} </p>
       </div>

       {props.children}
      </header> 
     )
}

export default Header