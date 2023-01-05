package com.project.repo;

import javax.transaction.Transactional;



import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project.bean.Train;

@Repository
public interface TrainRepo extends CrudRepository<Train,String>{
  
	

	@Transactional
	@Modifying
	@Query(value="update Train_table set seatno= :seatno, noofseats= :noofseats, cost= :cost where email= :email",nativeQuery=true)
	public void changeTrainSeatBooking(String email,String seatno,String noofseats,String cost);
	
	
	@Transactional
	@Modifying
	@Query(value="update Train_table set paid= :paid where email= :email",nativeQuery=true)
	public void changeTrainPaymentBooking(String email,String paid);


}
