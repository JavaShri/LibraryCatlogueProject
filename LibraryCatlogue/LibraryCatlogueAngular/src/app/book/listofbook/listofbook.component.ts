import { ViewChild,ElementRef,Input,Component } from '@angular/core';
import { Book } from '../../../models/Book';
import { CustomService } from '../../../services/custom.service';

@Component({
  selector: 'app-listofbook',
  templateUrl: './listofbook.component.html',
  styleUrl: './listofbook.component.css'
})
export class ListofbookComponent {

  @Input() prdt:any


  booknm:string='';
  price:number=0;
  qty:number=0;
  
  p: number = 1;
  count: number = 5;
  
  updaterec:Book | any
  
  
  constructor(private customserv:CustomService)
  {
  
  
  }
  
  
  @ViewChild("mod_2",{static:false}) mod_2?:ElementRef;
  
  updateclose()
    {
      (this.mod_2?.nativeElement as HTMLElement).style.display="none"
       document.body.classList.remove('model-open');
    }
  
  updatesave()
  {
    var result = window.confirm("Do you want to update the Book record: "); 
    if(result)
    {
      this.updaterec.price=this.price;
      this.updaterec.qty=this.qty;
      this.customserv.updatebook(this.updaterec).subscribe(res=>console.log(res),error=>console.log(error));  
    }
    else{
      alert("Book is not update ! ")
    }
  
    (this.mod_2?.nativeElement as HTMLElement).style.display="none";
    document.body.classList.remove('model-open');
  
  }
  
  deleteprdt(id:number)
  {
    var result = window.confirm("Do you want to delete the record: ");
    if(result)
    {
      this.customserv.deletebook(id).subscribe(response=>console.log(response),error=>console.log(error))
    }
    else{
      alert("Record is not deleted ! ")
    }
    
  }
  
  updateprdtid(a:Book)
  {
  
  this.booknm=a.booknm;
  this.price=a.price;
  this.qty=a.qty;
  
  
  this.updaterec=a;
  console.log(this.updaterec)
  }
  
  }
  


