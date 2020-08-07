import React from 'react'
import { BrowserRouter , Route} from 'react-router-dom'
import TeacherForm from './pages/teacherForm/index'
import Landing from './pages/landing/index'
import TeacherList from './pages/teacherList/index'
function Routes() { 
     return ( 
          <BrowserRouter>
           <Route path='/' exact  component={Landing} />
           <Route path='/study' component={TeacherList}/> 
           <Route path='/give-classes' component={TeacherForm} />
          
          </BrowserRouter>
     )
}


export default Routes