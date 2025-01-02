import React from 'react';
import { motion } from 'framer-motion';

const BookingSummary = ({ bookingDetails }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    style={{ maxWidth: '500px', margin: '0 auto', padding: '1em', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}
  >
    <h3>Booking Confirmed</h3>
    <p><strong>Date:</strong> {bookingDetails.date}</p>
    <p><strong>Time:</strong> {bookingDetails.time}</p>
    <p><strong>Guests:</strong> {bookingDetails.guests}</p>
    <p><strong>Name:</strong> {bookingDetails.name}</p>
    <p><strong>Contact:</strong> {bookingDetails.contact}</p>
  </motion.div>
);

export default BookingSummary;
