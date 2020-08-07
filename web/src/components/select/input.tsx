import React , {SelectHTMLAttributes} from 'react'
import './style.css'
interface Selectprops  extends SelectHTMLAttributes<HTMLSelectElement> { 
     data: string ; 
     options: Array<{
          value: string , 
          label: string 
     }>
       
}
const Select: React.FC<Selectprops> = ({data ,  options ,...rest } ) => { 
     return( 
          <div className="select-block">
          <label htmlFor={data}> {data} </label>
           <select  defaultValue='' id={data}  {...rest} >
                <option value="" disabled  hidden > Selecione uma opção </option>
                 {options.map(option => { 
                       return ( 
                             <option key={option.value} value={option.value} > { option.label} </option>
                       )
                 })}
           </select>
          </div>
     )
}

export default  Select 