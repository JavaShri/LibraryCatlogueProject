package com.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.models.Book;
import com.spring.repositories.BookRepo;

@Service
public class BookService {
	
	@Autowired
	BookRepo bookrepo ;
	
	public List<Book> bookList()
	{
		return bookrepo.findAll();
	}
	
	public Book findById(int pid)
	{
		return bookrepo.findById(pid).get();		
	}
	
	public boolean deleteById(int pid)
	{
		bookrepo.deleteById(pid);
		 return true;
	}
	
	public Book addBooks (Book bk)
	{
		return bookrepo.saveAndFlush(bk);
	}
	
	public Book updateBook(Book bk)
	{
		return bookrepo.saveAndFlush(bk);
	}


}
