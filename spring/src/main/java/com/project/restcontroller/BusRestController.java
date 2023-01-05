package com.project.restcontroller;

import java.util.ArrayList;


import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.bean.Bus;
import com.project.repo.BusRepo;







@RestController
@RequestMapping("/PROJECT")
@CrossOrigin(origins="http://localhost:4200")
public class BusRestController {
	
	@Autowired
	BusRepo repo;
	
	@PostMapping("/CreateBusBooking")
	public Bus addBusBooking(@RequestBody Bus bus) {
		return repo.save(bus);
	}
	
	@PutMapping(path="/UpdateBusSeatBooking")
	public void updateBusSeatBooking(@RequestBody Bus bus) {
		repo.changeBusSeatBooking(bus.getEmail(),bus.getSeatno(),bus.getNoofseats(),bus.getCost());
	}
	
	@PutMapping(path="/UpdateBusPaymentBooking")
	public void updateBusPaymentBooking(@RequestBody Bus bus) {
		repo.changeBusPaymentBooking(bus.getEmail(),bus.getPaid());
	}
	
	
	
	@GetMapping(path="/FindBusBooking/{email}")
	public Bus findBusBooking(@PathVariable String email) {
		Bus b=repo.findById(email).get();
		return b;
	}
	
	@DeleteMapping(path="/DeleteBusBooking/{email}")
	public void deleteBusBooking(@PathVariable String email) {
		 repo.deleteById(email);
	}

	@GetMapping(path="/FindAllBusBooking")
	public ArrayList<Bus> findAllBusBooking(){
		ArrayList<Bus> list=(ArrayList<Bus>) repo.findAll();
		return list;
	}
}
