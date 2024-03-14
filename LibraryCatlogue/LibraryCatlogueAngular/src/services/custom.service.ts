import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/Users';
import { Observable } from 'rxjs';
;
import { BookCategory } from '../models/BookCategory';
import { Book } from '../models/Book';

@Injectable({
    providedIn: 'root'
  })

export class CustomService {

    public  filterobj:Book[]=[]
    public allcatobj:BookCategory[]=[]

    constructor(private http:HttpClient) { }

    userexists(data:Users)
    {
      return this.http.post("http://localhost:8080/user/checkuser",data)
    }

    getAllBooks():Observable<Book[]>
    {
        return this.http.get<Book[]>("http://localhost:8080/books/listbook")
    }

    getallBookcategory():Observable<BookCategory[]>
    {
      return this.http.get<BookCategory[]>("http://localhost:8080/Bcategory/bookcatlist")
    }

    deletebook(id:number)
    {
     return this.http.delete("http://localhost:8080/books/delbooks/"+id)
    }

    updatebook(a:Book)
    {
      return this.http.put("http://localhost:8080/books/updatebooks",a);
    }
    
    addbook(formdata:any)
  {
    return this.http.post("http://localhost:8080/books/addbooks",formdata,{ observe: 'response' });
  }

  createTransaction(amount:any)
{
  return this.http.get("http://localhost:8080/cart/getTransaction/"+amount);
}

sendmail()
{
  return this.http.get("http://localhost:8080/email/sendmail");
}






}