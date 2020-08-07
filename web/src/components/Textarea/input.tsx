import React , {TextareaHTMLAttributes} from 'react'
import './style.css'
interface Textareaprops  extends TextareaHTMLAttributes<HTMLTextAreaElement> { 
     data: string ; 
       
}
const Textarea: React.FC<Textareaprops> = ({data , ...rest } ) => { 
     return( 
          <div className="textarea-block">
          <label htmlFor={data}> {data} </label>
           <textarea id="text" {...rest} />
          </div>
     )
}

export default  Textarea 