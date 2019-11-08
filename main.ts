import * as Log from './logger'
//import * as Event from '../commons/event'

var logger = new Log.Logger()
//var events = new Event.Event()

try{
  logger.info("Player Paused",{"hit_pause":[10]} )
}catch(err){
  console.error(err)
}
