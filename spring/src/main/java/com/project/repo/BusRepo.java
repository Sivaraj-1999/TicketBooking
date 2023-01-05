package com.project.repo;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project.bean.Bus;


@Repository
public interface BusRepo extends CrudRepository<Bus,String>{
	
	
	@Transactional
	@Modifying
	@Query(value="update Bus_table set seatno= :seatno, noofseats= :noofseats, cost= :cost where email= :email",nativeQuery=true)
	public void changeBusSeatBooking(String email,String seatno,String noofseats,String cost);
	
	@Transactional
	@Modifying
	@Query(value="update Bus_table set paid= :paid where email= :email",nativeQuery=true)
	public void changeBusPaymentBooking(String email,String paid);

}
