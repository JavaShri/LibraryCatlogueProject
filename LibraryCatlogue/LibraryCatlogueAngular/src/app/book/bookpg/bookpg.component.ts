import { Component,ElementRef,ViewChild } from '@angular/core';
import { BookCategory } from '../../../models/BookCategory';
import { CustomService } from '../../../services/custom.service';

@Component({
  selector: 'app-bookpg',
  templateUrl: './bookpg.component.html',
  styleUrl: './bookpg.component.css'
})
export class BookpgComponent {

  catobj:BookCategory[]=[];
  prdt:any

  @ViewChild("mod_1",{static:false}) mod_1?:ElementRef;

  selectedFile: File = null;

  booknm :''
  price:''
  qty:''
  bpic:BinaryType
  bookdescr:''
  bct:BookCategory[]


    constructor(private customserv:CustomService)
    {
      this.customserv.getallBookcategory().subscribe(res=>
        {
        this.catobj = res
        }
       ,
        error=>console.log(error)
      );

    this.customserv.getAllBooks().subscribe(
        response=>{
          this.prdt=response
        },
        error=>console.log(error)
        );

    }






    handleSelectChange(e:any)
    {
      var selectElement = e.target;
      var value = selectElement.value;
      this.bct =this.catobj.filter(m=>m.catid==value)

    }




addnewclose()
  {
    (this.mod_1?.nativeElement as HTMLElement).style.display="none";
    document.body.classList.remove('model-open');
  }


addnewsave()
{


  //save logic
  let data = {
    booknm :this.booknm,
    price:this.price,
    qty:this.qty,
    bookdescr:this.bookdescr,
    bct:{catid:this.bct[0].catid,bcatnm:this.bct[0].bcatnm}
  }

  const formData = new FormData();


      formData.append('data',new Blob([JSON.stringify(data)],{ type: "application/json"}));
      formData.append('pic', this.selectedFile);

  this.customserv.addbook(formData).subscribe(
    res=>{
      console.log(res)
    console.log(formData)
  },
    error=>console.log(error));


    (this.mod_1?.nativeElement as HTMLElement).style.display="none";
    document.body.classList.remove('model-open');

}


onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
}


}

