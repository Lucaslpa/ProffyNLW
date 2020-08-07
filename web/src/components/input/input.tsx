import React , {InputHTMLAttributes} from 'react'
import './style.css'
interface inputprops  extends InputHTMLAttributes<HTMLInputElement> { 
     data: string ; 
       
}
const Input: React.FC<inputprops> = ({data , ...rest } ) => { 
     return( 
          <div className="input-block">
          <label htmlFor={data}> {data} </label>
           <input type="text" id={data}  {...rest} />
          </div>
     )
}

export default  Input 