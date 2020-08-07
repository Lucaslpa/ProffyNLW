import  {Request , Response } from 'express'

import db from '../database/connection'
import converHourToMinutes from '../utils/converHoursToMinutes';

interface schedulesItems { 
      week_day : number , 
      from : string , 
      to: string 
}

export default class ClassesController { 


     async Index(req: Request , res: Response) { 
          
         const filters = req.query
         console.log(filters)

         const subject = filters.subject as string 
         const week_day = filters.week_day as string 
         const time = filters.time as string 

         if(!filters.week_day || !filters.subject || !filters.time) { 
             return res.status(400).json('Error: missing filters')
         }

         
         const timeInMinutes = converHourToMinutes(filters.time as string )
     console.log(filters.subject)
         const classes = await db('classes')
         .whereExists(function() { 
                this.select('class_schedule.*')
                .from('class_schedule')
                .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)] )
                .whereRaw('`from` <= ??' , [timeInMinutes])
                .whereRaw('`to` > ??' , [timeInMinutes])

         })
         .where('subject', subject )
         .join('users' , 'classes.user_id' , '=' , 'users.id')
         .select(['classes.*' , 'users.*'])
       console.log(classes)

       return   res.json(classes)



     }


    async Create(req : Request , res: Response )  { 
         
    
          const  {name, avatar, whatsapp, bio , cost , subject , schedule}  =  req.body 

          const trx = await db.transaction()
         try { 
          const insertuser =  await trx('users').insert({name, avatar, whatsapp , bio }) 
          const user_id = insertuser[0]        
          const insertclasses =  await trx('classes').insert({cost, subject , user_id}) 
          const class_id = insertclasses[0]
          const classesschedule = schedule.map((scheduleItem: schedulesItems ) => { 
             return { 
                   class_id , 
                   week_day : scheduleItem.week_day, 
                   from : converHourToMinutes(scheduleItem.from), 
                   to : converHourToMinutes(scheduleItem.to)
             }
       } )
        await trx('class_schedule').insert(classesschedule)
        await trx.commit()
       return   res.status(201).json(name)    
         } catch(error) { 
              await trx.rollback()
    
               return  res.status(400).json('Error: some error')
         }
    
      
    }
}