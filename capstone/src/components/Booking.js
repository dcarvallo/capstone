import React from "react";
import BookingForm from "./BookingForm";

const availableTimes = ["08:00","10:00", "15:00"]

const Booking = () => {

  return (
    <>

      <div className="bookings">
        <h2>Table Booking</h2>
        <BookingForm 
          availableTimes={availableTimes} 
          dispatchOnDateChange={6} 
          // submitData={submitData} 
        />
      </div>
    </>
  );
};

export default Booking;