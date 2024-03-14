import { Component } from '@angular/core';
import { Book } from '../../../models/Book';
import { BookCategory } from '../../../models/BookCategory';
import { CustomService } from '../../../services/custom.service';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrl: './customerhome.component.css'
})
export class CustomerhomeComponent {

  obj:Book []=[]
  catobj:BookCategory[]=[]
 catno:number=0

 prdt:Book []=[]




constructor(private customserv:CustomService){


   this.customserv.getAllBooks().subscribe(
     res=>{
       this.obj = res;
       this.customserv.filterobj=res;
     },
     err=>console.log(err)
     )


 this.customserv.getallBookcategory().subscribe(
     res=>{
       this.customserv.allcatobj = res
       this.catobj = res

     },
     err=>console.log(err)
     )
 }

 ngDoCheck()
   {
    this.customserv.filterobj=this.obj.filter(m=>m.bct["catid"]==this.catno)
   }

   catnovalue(val:any)
   {
    this.catno = val;
   }


   sendmail()
   {
    this.customserv.sendmail().subscribe(res=>console.log(res),error=>console.log(error));
   }

}
