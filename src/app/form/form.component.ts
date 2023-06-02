import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
    
    getdata:any;
    id:any;
    username:any='';
    roles:any='';
    gender:any='';
    location:any='';
    invisible:any=false;

    constructor(public service:ServiceService, public router:Router, public actroute:ActivatedRoute){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.invisible=this.actroute.snapshot.paramMap.get('invisible');
    let id=this.actroute.snapshot.paramMap.get('id')
    this.service.edit(id).subscribe((data:any)=>{
       console.log(data);
       this.id=data[0].id,
       this.username=data[0].username,
       this.roles=data[0].roles,
       this.gender=data[0].gender,
       this.location=data[0].location
       
    })
  }
    
    add(){
     let insertbody:any={
         username:this.username,
         roles:this.roles,
         gender:this.gender,
         location:this.location
      }
      this.service.insert(insertbody).subscribe((data)=>{
        console.log(data);
        
      })
      this.list();
    }
    update(){
      let updatebody={
        id:this.id,
        username:this.username,
        roles:this.roles,
        gender:this.gender,
        location:this.location
      }
      console.log(updatebody);
      
      this.service.update(updatebody).subscribe((data)=>{
        console.log(data);
        // this.add();
        
        this.list();
      })
    }

    list(){
      this.router.navigate(['table']);
    }

  

    // get(){
    //   this.service.get().subscribe((data)=>{
    //     this.getdata=data;
    //   })
    // }

}
