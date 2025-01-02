import React, { useState } from 'react';
import BookingForm from './components/BookingForm';
import TimeSlots from './components/TimeSlots';
import BookingSummary from './components/BookingSummary';
import './App.css';

function App() {
  const [bookingDetails, setBookingDetails] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [confirmedSlot, setConfirmedSlot] = useState(null);

  const fetchAvailableSlots = (date, time) => {
    const mockSlots = ['6:00 PM', '7:00 PM', '8:00 PM'];
    setAvailableSlots(mockSlots);
  };

  const bookSlot = (slot) => {
    setConfirmedSlot(slot);
    setBookingDetails({ ...bookingDetails, time: slot });
  };

  return (
    <div className="container">
      <h1>Restaurant Table Booking</h1>
      {!confirmedSlot ? (
        <>
          <BookingForm setBookingDetails={setBookingDetails} setAvailableSlots={setAvailableSlots} />
          {availableSlots.length > 0 && <TimeSlots availableSlots={availableSlots} bookSlot={bookSlot} />}
        </>
      ) : (
        <BookingSummary bookingDetails={bookingDetails} />
      )}
    </div>
  );
}

export default App;
