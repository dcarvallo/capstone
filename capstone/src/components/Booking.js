import React,{useReducer, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import BookingForm from "./BookingForm";
import { submitAPI, fetchAPI } from '../MetaAPI';

// const availableTimes = ["08:00","10:00", "15:00"]

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes; 
};

const initializeTimes = initialAvailableTimes => 
  [...initialAvailableTimes, ...fetchAPI(new Date())];

const Booking = () => {

  const [
    availableTimes, 
    dispatchOnDateChange
  ] = useReducer(updateTimes, [], initializeTimes);
   
  const navigate = useNavigate();
  const submitData = formData => {
    const response = submitAPI(formData);
    if (response) navigate('/confirmedBooking');
  }; 

  return (
    <>
      <div className="bookings">
        <h2 className="text-2xl my-8 text-center">Table Booking</h2>
        <BookingForm 
          availableTimes={availableTimes} 
          dispatchOnDateChange={6} 
          submitData={submitData} 
        />
      </div>
    </>
  );
};

export default Booking;