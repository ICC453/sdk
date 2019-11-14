import * as Log from './logger'
import * as Event from './event'

var logger = new Log.Logger('cavmelo@icomp','session-01')
var econtrols = new Event.Event()
var emedia = new Event.Event()

try{
  econtrols.push('hit_pause',2.0)
  econtrols.push('hit_pause',30.0)

  econtrols.push('hit_play',0.0)
  econtrols.push('hit_play',3.0)
  econtrols.push('hit_play',30.0)

  logger.info("Viewer:player-controls", econtrols.dump() )
  logger.info("Media:tracking", emedia.dump() )
}catch(err){
  console.error(err)
}
