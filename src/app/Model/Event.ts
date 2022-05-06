export class Event{
    asObservable() {
      throw new Error('Method not implemented.');
    }
    id:number;
    eventTopic:string;
    description:string;
    date:Date;
    data:String;
}