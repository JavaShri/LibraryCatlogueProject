import { BookCategory } from "./BookCategory";

export class Book
{
id:number=0;
booknm:string='';
price:number=0;
qty:number=0;
bpic:Blob=new Blob();

bookdescr:string='';

bct?:BookCategory[];
}