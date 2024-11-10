package com.flightstatusbackend.controller;

import com.flightstatusbackend.entity.Flight;
import com.flightstatusbackend.service.FlightService;
import com.flightstatusbackend.service.FlightStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/flights")
public class FlightStatusController {

    @Autowired
    private FlightStatusService flightStatusService;

    @Autowired
    private FlightService flightService;

    @GetMapping("/status/{id}")
    public String getStatus(@PathVariable Long id) {
        Flight flight = flightService.getFlightById(id);
        String desc = flight.getFlightStatus().getDescription();
        System.out.println(flight.getFlightStatus().getStatus());
        System.out.println(flight.getFlightStatus().getDescription());
        return desc;
    }

}
