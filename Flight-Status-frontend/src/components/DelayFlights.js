import React, { useEffect, useState } from "react";
import "../components/delayFlights.css";
import { calculateFlightDelay, getAllFlights } from "../service/FlightService";
import { Link } from "react-router-dom";

export default function DelayFlights({ onItemClick }) {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    const getFlights = async () => {
      try {
        const res = await getAllFlights();
        const allFlights = res.data;
        setFlights(allFlights);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.log(error);
        setLoading(false); // Set loading to false even in case of an error
      }
    };

    getFlights();
  }, []);

  // Filter delayed flights
  const delayedFlights = flights.filter(
    (flight) =>
      flight.flightStatus.status === "Delayed" ||
      flight.flightStatus.status === "Cancelled"
  );

  return (
    <div className="col-9 col-md-6 col-lg-3 delay-wrapper mt-5 m-3">
      <div className="card-container">
        <div className="card">
          <div className="d-flex align-content-center justify-content-center">
            <span className="fs-4 fw-bold">Delay in Flights</span>
            <span className="ms-2 d bg-warning text-white live px-2 pt-2">
              LIVE
            </span>
          </div>

          {/* Display loading message if data is still being fetched */}
          {loading ? (
            <div className="loading-container">
              <span className="fw-bold text-white">
                Please wait, loading...
              </span>
            </div>
          ) : delayedFlights.length > 0 ? (
            delayedFlights.map((flight) => (
              <div className="item-list" key={flight.id}>
                <div
                  className="item"
                  onClick={() => onItemClick(flight)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="row">
                    <div className="col fw-bold fs-5 text-start">
                      {flight.flightNumber}
                    </div>
                    {flight.flightStatus.status === "Delayed" && (
                      <div className="col text-end fw-bold text-warning">
                        {" "}
                        {flight.flightStatus.status}{" "}
                      </div>
                    )}
                    {flight.flightStatus.status === "Cancelled" && (
                      <div className="col text-end fw-bold text-danger">
                        {" "}
                        {flight.flightStatus.status}{" "}
                      </div>
                    )}
                  </div>
                  <div className="row">
                    <div className="col fw-bold text-start">
                      {" "}
                      {flight.departureAirport.code} -{" "}
                      {flight.arrivalAirport.code}{" "}
                    </div>
                    {flight.flightStatus.status === "Delayed" && (
                      <div className="col text-end fw-bold text-success">
                        {calculateFlightDelay(
                          flight.scheduledDepartureTime,
                          flight.actualDepartureTime
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-data">
              No delayed or cancelled flights found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
