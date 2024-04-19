import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Hello, Framer Motion!</h1>
        </motion.div> 
      
    </AnimatePresence>
  );
};

export default MyComponent;
