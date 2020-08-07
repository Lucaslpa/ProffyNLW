import express from 'express'
import db from './database/connection'
import converHourToMinutes from './utils/converHoursToMinutes';
import classesController from './controllers/classesControllers'
import ConnectionsController from './controllers/ConnectionsController';

interface schedulesItems { 
      week_day : number , 
      from : string , 
      to: string 
}

const classes  = new classesController
const connections = new ConnectionsController

const routes = express.Router(); 

routes.post('/classes' , classes.Create  )
routes.get('/classes' , classes.Index )
routes.post('/connections' , connections.create )
routes.get('/connections' , connections.index)


export default routes