import React, { useState } from 'react';

const BookingForm = ({ setBookingDetails, setAvailableSlots }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    name: '',
    contact: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.date || !formData.time || !formData.guests || !formData.name || !formData.contact) {
      alert('Please fill all fields.');
      return;
    }

    setLoading(true);

    fetch(`/api/available-slots?date=${formData.date}&time=${formData.time}`)
      .then((response) => response.json())
      .then((data) => {
        setAvailableSlots(data);
        setBookingDetails(formData);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />

        <label>Time:</label>
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />

        <label>Number of Guests:</label>
        <input type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" required />

        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Contact:</label>
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />

        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Check Availability'}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
