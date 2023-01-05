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

import com.project.bean.Train;
import com.project.repo.TrainRepo;










@RestController
@RequestMapping("/PROJECT")
@CrossOrigin(origins="http://localhost:4200")
public class TrainRestController {
	
	@Autowired
	TrainRepo repo;
	
	@PostMapping("/CreateTrainBooking")
	public Train addTrainBooking(@RequestBody Train train) {
		return repo.save(train);
	}
	
	@PutMapping(path="/UpdateTrainSeatBooking")
	public void updateTrainSeatBooking(@RequestBody Train train) {
		repo.changeTrainSeatBooking(train.getEmail(),train.getSeatno(),train.getNoofseats(),train.getCost());
	}
	
	@PutMapping(path="/UpdateTrainPaymentBooking")
	public void updateTrainPaymentBooking(@RequestBody Train train) {
		repo.changeTrainPaymentBooking(train.getEmail(),train.getPaid());
	}
	
	@GetMapping(path="/FindTrainBooking/{email}")
	public Train findTrainBooking(@PathVariable String email) {
		Train t=repo.findById(email).get();
		return t;
	}
	
	@DeleteMapping(path="/DeleteTrainBooking/{email}")
	public void deleteTrainBooking(@PathVariable String email) {
		 repo.deleteById(email);
	}
	
	@GetMapping(path="/FindAllTrainBooking")
	public ArrayList<Train> findAllTrainBooking(){
		ArrayList<Train> list=(ArrayList<Train>) repo.findAll();
		return list;
	}
	

}
