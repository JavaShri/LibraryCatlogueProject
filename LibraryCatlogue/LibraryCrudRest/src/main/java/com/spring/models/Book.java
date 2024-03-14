package com.spring.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="book")
public class Book {
	
	@Id
	private int id;
	
	@Column(name="booknm")
	private String brnm;
	
	@Column(name="price")
	private int price;
	
	@Column(name="qty")
	private int qty;
	
	@Column(name="bpic")
	private byte[] pic;
	
	@Column(name="bookdescr")
	private String bdesc;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBrnm() {
		return brnm;
	}

	public void setBrnm(String brnm) {
		this.brnm = brnm;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public byte[] getPic() {
		return pic;
	}

	public void setPic(byte[] pic) {
		this.pic = pic;
	}

	public String getBdesc() {
		return bdesc;
	}

	public void setBdesc(String bdesc) {
		this.bdesc = bdesc;
	}
	
	

}
