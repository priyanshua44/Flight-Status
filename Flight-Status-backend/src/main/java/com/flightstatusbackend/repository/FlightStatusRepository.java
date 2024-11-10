package com.flightstatusbackend.repository;

import com.flightstatusbackend.entity.Flight;
import com.flightstatusbackend.entity.FlightStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FlightStatusRepository extends JpaRepository<FlightStatus, Long> {
    List<FlightStatus> findByFlightId(Long flightId);

    List<FlightStatus> findByFlight(Flight flight);
}
