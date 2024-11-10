package com.flightstatusbackend.service;

import com.flightstatusbackend.entity.FlightStatus;

import java.util.List;

public interface FlightStatusService {
    List<FlightStatus> getAllStatuses();
    FlightStatus getStatusById(Long id);
    FlightStatus saveStatus(FlightStatus status);
    void deleteStatus(Long id);

    List<FlightStatus> getFlightStatusesByFlightId(Long flightId);

}
