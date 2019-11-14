interface iEvent{
  set(key:string,[number])
  get(key:string):[number]
  dump():Object
}

export class Event implements iEvent{
  private logs:Object
  constructor(){
//    this.logs = new Map([])
    this.logs = new Object()
  }
  set(key:string, records:[number]){
    this.logs[key]=records
  }
  get(key:string){
    return this.logs[key]
  }
  
  push(key:string, value:number){
    let isExist = key in this.logs
    if (isExist){
      this.logs[key].push(value)
    }else{
      this.logs[key] = [value]
    }
  }
  dump(){
    return this.logs;
  }
}
