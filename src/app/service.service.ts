import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url='http://localhost:3000';

  constructor(private http:HttpClient) { }

   insert(insertbody:any){
    return this.http.post(this.url+ '/insert', insertbody)
   }
  
  get(){
    return this.http.get(this.url+ '/getall')
  }

  edit(id:any){
    return this.http.get(this.url+ '/edit/' +id)
  }
  update(updatebody:any){
    return this.http.put(this.url+ '/update',updatebody)
  }
  delete(id:number){
    return this.http.put(this.url+ '/delete',{id:id})
  }

}
