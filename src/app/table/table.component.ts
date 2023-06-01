import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{

  getdatas:any;

  constructor(public service:ServiceService, public router:Router){}
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.get();

  }

  get(){
    this.service.get().subscribe((data)=>{
      this.getdatas=data;
    })
  }

  edit(id:number){
    this.service.edit(id).subscribe((data)=>{
            this.editlist(id);
    })
  }
  delete(id:number){
    this.service.delete(id).subscribe((data)=>{
      console.log(data);
      this.get();

    })
  }
  
  editlist(id:number){
    this.router.navigate(['editform',id])
  }


}
