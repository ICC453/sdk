import {environment} from "./common/environment"
import fetch from 'node-fetch'

interface LogInterface{
  debug(primaryMessage:string, ...supportingData:any[]):void;
  warn(primaryMessage:string, ...supportingData:any[]):void;
  error(primaryMessage:string, ...supportingData:any[]):void;
  info(primaryMessage:string, ...supportingData:any[]):void;

}

export class Logger implements LogInterface{
  constructor(){

  }
  debug(primaryMessage:string, ...supportingData:any[]){
    this.emitLogMessage("debug",primaryMessage,supportingData)
  }
  warn(primaryMessage:string, ...supportingData:any[]){
    this.emitLogMessage("warn",primaryMessage,supportingData)

  }
  error(primaryMessage:string, ...supportingData:any[]){
    this.emitLogMessage("error",primaryMessage,supportingData)

  }
  info(primaryMessage:string, ...supportingData:any[]){
    this.emitLogMessage("info",primaryMessage,supportingData)

  }
  private emitLogMessage(msgType:"debug"|"info"|"error"|"warn", msg:string, supportingDetails:any[]){

    var body = {'msgType':msgType,
                'msg':msg,
                'events':supportingDetails[0]
              }
    fetch(environment.log.url+'/events', {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'POST',
      body: JSON.stringify(body)
    }).then(response=>response.json())
      .then(json=>console.log(json))
      .catch(error=>{
      })
  }
}
