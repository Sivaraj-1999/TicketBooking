package com.project.repo;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project.bean.Admin;

@Repository
public interface AdminRepo extends CrudRepository<Admin,String> {

    public Admin findByEmail(String email);

    
    @Transactional
	@Modifying
	@Query(value="update Admin_table set password= :password where email= :email",nativeQuery = true)
	public void changePassword(String email, String password);

}
