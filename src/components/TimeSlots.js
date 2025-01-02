import React from 'react';
import { motion } from 'framer-motion';

const TimeSlots = ({ availableSlots, bookSlot }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    style={{ maxWidth: '500px', margin: '0 auto', padding: '1em', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
  >
    <h3 style={{ textAlign: 'center' }}>Available Time Slots</h3>
    {availableSlots.length > 0 ? (
      availableSlots.map((slot, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => bookSlot(slot)}
          style={{ margin: '5px', padding: '10px', cursor: 'pointer', backgroundColor: '#ff5733', color: '#fff', border: 'none', borderRadius: '5px' }}
        >
          {slot}
        </motion.button>
      ))
    ) : (
      <p style={{ textAlign: 'center' }}>No available slots. Try another date/time.</p>
    )}
  </motion.div>
);

export default TimeSlots;
