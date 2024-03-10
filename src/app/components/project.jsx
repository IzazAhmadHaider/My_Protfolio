import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <button onClick={() => setIsVisible(false)}>Hide</button> 
          <h1>Hello, Framer Motion!</h1>
        </motion.div> 
      )}
    </AnimatePresence>
  );
};

export default MyComponent;
