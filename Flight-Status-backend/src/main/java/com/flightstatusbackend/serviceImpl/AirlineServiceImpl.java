package com.flightstatusbackend.serviceImpl;

import com.flightstatusbackend.entity.Airline;
import com.flightstatusbackend.repository.AirlineRepository;
import com.flightstatusbackend.service.AirlineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AirlineServiceImpl implements AirlineService {

    @Autowired
    private AirlineRepository airlineRepository;

    @Override
    public List<Airline> getAllAirlines() {
        return airlineRepository.findAll();
    }

    @Override
    public Airline getAirlineById(Long id) {
        return airlineRepository.findById(id).orElse(null);
    }

    @Override
    public Airline saveAirline(Airline airline) {
        return airlineRepository.save(airline);
    }

    @Override
    public void deleteAirline(Long id) {
        airlineRepository.deleteById(id);
    }
}
