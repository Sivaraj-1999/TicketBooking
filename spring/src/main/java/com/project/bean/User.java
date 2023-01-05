package com.project.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="User_table")
public class User {
	 @Column(name = "username")
	private String username;
	@Id 
	   @Column(name = "email")
	private String email;
	 @Column(name = "dob")
	private String dob;
	 @Column(name = "mobile")
	private String mobile;
	 @Column(name = "password")
	private String password;
	 @Column(name = "confirmpassword")
	private String confirmpassword;
	 User(){
		 
	 }
	public User(String username, String email, String dob, String mobile, String password, String confirmpassword) {
		super();
		this.username = username;
		this.email = email;
		this.dob = dob;
		this.mobile = mobile;
		this.password = password;
		this.confirmpassword = confirmpassword;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getConfirmpassword() {
		return confirmpassword;
	}
	public void setConfirmpassword(String confirmpassword) {
		this.confirmpassword = confirmpassword;
	}
	
}
