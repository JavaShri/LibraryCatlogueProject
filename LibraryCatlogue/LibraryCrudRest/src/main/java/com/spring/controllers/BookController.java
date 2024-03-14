package com.spring.controllers;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.spring.models.Book;
import com.spring.service.BookService;

@RestController
@RequestMapping("books")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class BookController {
	
	@Autowired
	BookService bookserv;
	
	@GetMapping("listbook")
	@CrossOrigin(origins="http:/localhost:4200/")
	public ResponseEntity<List<Book>> getAllBooks()
	{		
		return ResponseEntity.ok(bookserv.bookList());
	}
	
	
	
	@PostMapping("addbooks")
	@CrossOrigin(origins="http:/localhost:4200/")
	public String add(@RequestPart("data") Book bt,@RequestPart("pic")  MultipartFile pic)	
	{		
		try {				
			bt.setPic(pic.getBytes());					
		} 
		catch (IOException e) {			
			e.printStackTrace();
		}
		
		bookserv.addBooks(bt);
		
		
		return "Record is added !";
		
	}
	
	@DeleteMapping("delprdt/{id}")
	@CrossOrigin(origins="http:/localhost:4200/")
	public Boolean deleteById(@PathVariable("id")int id)
	{
		return bookserv.deleteById(id);
	}
	
	
	@PutMapping("updateprdt")
	@CrossOrigin(origins="http:/localhost:4200/")
	public Book updateproduct(@RequestBody Book b)
	{	
		return bookserv.updateBook(b);
	}
	
	


}
