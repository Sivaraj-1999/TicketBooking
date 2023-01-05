package com.project.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.bean.User;
import com.project.repo.UserRepo;


@RestController
@RequestMapping("/PROJECT")
@CrossOrigin(origins="http://localhost:4200")
public class UserRestController {
	
	@Autowired
	UserRepo repo;
	
	@PostMapping("/CreateUser")
	public User addUser(@RequestBody User user) {
		return repo.save(user);
	}
	
	@PostMapping("/LoginUser")
	public ResponseEntity<?> login(@RequestBody User bean){
		User obj=repo.findByEmail(bean.getEmail());
		if(obj.getPassword().equals(bean.getPassword())) 
			return ResponseEntity.ok(obj);
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
				
	}
	
	@PutMapping("/ForgotPassword")
	public void forgotPassword (@RequestBody User user) {
		repo.changePassword(user.getEmail(),user.getPassword(),user.getConfirmpassword());
	}
	

}
