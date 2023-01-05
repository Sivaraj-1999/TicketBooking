package com.project.repo;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

import com.project.bean.User;

@Repository
public interface UserRepo extends CrudRepository<User,String> {
	

	public User findByEmail(String email);

	
	@Transactional
	@Modifying
	@Query(value="update User_table set password= :password,confirmpassword= :confirmpassword where email= :email",nativeQuery = true)
	public void changePassword(String email, String password, String confirmpassword);

}
