package com.project.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Train_table")
public class Train {
	

	  @Column(name="username")
	private String username;
	  @Id
	  @Column(name="email")
	private String email;
	  @Column(name="type")
	private String type;
	  @Column(name="onboard")
	private String onboard;
	  @Column(name="destination")
		private String destination;
	  @Column(name="date")
		private String date;
	  @Column(name="time")
		private String time;
	  @Column(name="adults")
		private String adults;
	  @Column(name="children")
		private String children;
	  @Column(name="travel")
		private String travel;
	  @Column(name="quota")
		private String quota;
	  @Column(name="seatno")
		private String seatno;
	  @Column(name="noofseats")
		private String noofseats;
	  @Column(name="cost")
		private String cost;
	  @Column(name="paid")
		private String paid;
	  
	  Train(){
		  
	  }

	public Train(String username, String email, String type, String onboard, String destination, String date,
			String time, String adults, String children, String travel, String quota, String seatno, String noofseats,
			String cost, String paid) {
		super();
		this.username = username;
		this.email = email;
		this.type = type;
		this.onboard = onboard;
		this.destination = destination;
		this.date = date;
		this.time = time;
		this.adults = adults;
		this.children = children;
		this.travel = travel;
		this.quota = quota;
		this.seatno = seatno;
		this.noofseats = noofseats;
		this.cost = cost;
		this.paid = paid;
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

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getOnboard() {
		return onboard;
	}

	public void setOnboard(String onboard) {
		this.onboard = onboard;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getAdults() {
		return adults;
	}

	public void setAdults(String adults) {
		this.adults = adults;
	}

	public String getChildren() {
		return children;
	}

	public void setChildren(String children) {
		this.children = children;
	}

	public String getTravel() {
		return travel;
	}

	public void setTravel(String travel) {
		this.travel = travel;
	}

	public String getQuota() {
		return quota;
	}

	public void setQuota(String quota) {
		this.quota = quota;
	}

	public String getSeatno() {
		return seatno;
	}

	public void setSeatno(String seatno) {
		this.seatno = seatno;
	}

	public String getNoofseats() {
		return noofseats;
	}

	public void setNoofseats(String noofseats) {
		this.noofseats = noofseats;
	}

	public String getCost() {
		return cost;
	}

	public void setCost(String cost) {
		this.cost = cost;
	}

	public String getPaid() {
		return paid;
	}

	public void setPaid(String paid) {
		this.paid = paid;
	}
      
}
