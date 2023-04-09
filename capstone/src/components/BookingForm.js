import { useState } from 'react';
import FormField from './FormField';

const BookingForm = ({
  availableTimes,
  dispatchOnDateChange,
  submitData
}) => {
  const minimumDate = new Date().toISOString().split('T')[0];
  const defaultTime = availableTimes[0];
  const occasions = ['Birthday', 'Anniversary'];

  const [date, setDate] = useState(minimumDate);
  const [time, setTime] = useState(defaultTime);
  const [
    numberOfGuests, 
    setNumberGuests
  ] = useState(1);
  const [occasion, setOccasion] = useState(occasions[0]);

  const isDateValid = () => date !== '';
  const isTimeValid = () => time !== '';
  const isNumberOfGuestsValid = () => numberOfGuests !== '';
  const isOccasionValid = () => occasion !== '';

  const areAllFieldsValid = () => 
    isDateValid() 
    && isTimeValid() 
    && isNumberOfGuestsValid() 
    && isOccasionValid();
  
  const handleDateChange = e => {
    setDate(e.target.value);
    // dispatchOnDateChange(e.target.value);
  };

  const handleTimeChange = e => setTime(e.target.value);

  const handleFormSubmit = e => {
    e.preventDefault();
    submitData({ date, time, numberOfGuests, occasion, });
  };

  return (
    <form 
    className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
    onSubmit={handleFormSubmit}>
      <div className="md:flex md:items-center mb-6">

        <div class="md:w-1/3">

          <FormField
            className='block text-gray-700 text-sm font-bold mb-2' 
            label="Date" 
            htmlFor="booking-date" 
            hasError={!isDateValid()} 
            errorMessage='Please choose a valid date'
          />
        </div>
      
        <div class="md:w-2/3">
        
          <input 
            type="date" 
            id="booking-date" 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            name="booking-date" 
            min={minimumDate} 
            value={date} 
            required={true} 
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">

        <div class="md:w-1/3">

          <FormField 
            label="Time" 
            htmlFor="booking-time" 
            hasError={!isTimeValid()} 
            errorMessage='Please choose a valid time'
            />
        </div>
        <div class="md:w-2/3">
          <select 
            id="booking-time" 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            name="booking-time" 
            value={time} 
            required={true} 
            onChange={handleTimeChange}
          >
            {availableTimes.map(times => 
              <option data-testid="booking-time-option" key={times}>
                {times}
              </option>
            )}
          </select>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">

        <div class="md:w-1/3">
          <FormField 
            label="Number of guests" 
            htmlFor="booking-number-guests" 
            hasError={!isNumberOfGuestsValid()} 
            errorMessage='Please enter a number between 1 and 10'
          />
        </div>
        <div class="md:w-2/3">

          <input 
              type="number" 
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id="booking-number-guests" 
              name="booking-number-guests" 
              value={numberOfGuests} 
              min="1" 
              max="10" 
              required={true} 
              onChange={e => setNumberGuests(e.target.value)}
              />
            
          </div>
      </div>
      <div className="md:flex md:items-center mb-6">

        <div class="md:w-1/3">

          <FormField 
            label="Occasion" 
            htmlFor="booking-occasion" 
            hasError={!isOccasionValid()} 
            errorMessage='Please choose a valid occasion'
          />
          
        </div>
        <div class="md:w-2/3">
          <select 
            id="booking-occasion" 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            name="booking-occasion" 
            value={occasion} 
            required={true} 
            onChange={e => setOccasion(e.target.value)}
          >
            {occasions.map(occasion => 
              <option data-testid="booking-occasion-option" key={occasion}>
                {occasion}
              </option>
            )}
          </select>
        </div>
      </div>

      <div class="flex justify-center">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="submit" 
          disabled={!areAllFieldsValid()}
        >
          Make your reservation
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
