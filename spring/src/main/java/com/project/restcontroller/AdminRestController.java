package com.project.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.bean.Admin;
import com.project.repo.AdminRepo;

@RestController
@RequestMapping("/PROJECT")
@CrossOrigin(origins="http://localhost:4200")
public class AdminRestController {
	
	@Autowired
	AdminRepo repo;
	
	@PostMapping("/LoginAdmin")
	public ResponseEntity<?> login(@RequestBody Admin bean){
		Admin obj=repo.findByEmail(bean.getEmail());
		if(obj.getPassword().equals(bean.getPassword())) 
			return ResponseEntity.ok(obj);
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
				
	}
	
	@PutMapping("/AdminForgotPassword")
	public void forgotPassword (@RequestBody Admin admin) {
		repo.changePassword(admin.getEmail(),admin.getPassword());
	}

}
