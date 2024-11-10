package com.flightstatusbackend.service;

import com.flightstatusbackend.DTO.FlightDetailsResponse;
import com.flightstatusbackend.DTO.FlightRequestDTO;
import com.flightstatusbackend.entity.Flight;

import java.time.LocalDate;
import java.util.List;

public interface FlightService {

    Flight save(FlightRequestDTO flightRequestDTO);
    FlightDetailsResponse getFlightDetailsByFlightNumber(String flightNumber);

//    search by flight number and date
    List<Flight> getFlightsByNumberAndDate(String flightNumber, LocalDate scheduledDepartureDate);

//  search by route and date
    List<Flight> getFlightsByAirportAndDate(String departureAirportName, String arrivalAirportName, LocalDate scheduledDepartureDate);

//    search by airline and date
    List<Flight> getFlightsByAirlineNameAndDate(String airlineName, LocalDate scheduledDepartureDate);

//    search by airport code and date
    List<Flight> getFlightsByAirportCodeAndDate(String departureAirportCode, String arrivalAirportCode, LocalDate scheduledDepartureDate);

//    search available dates
    List<LocalDate> getDistinctScheduledDepartureDates();

    List<Flight> getAllFlights();
    Flight updateFlight(Flight flight);
    void deleteFlight(Long id);
    Flight getFlightById(Long id);


}
