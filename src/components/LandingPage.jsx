// src/components/LandingPage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <Box className="landing-page">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Our SFC MES SYSTEM
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Discover amazing content here
      </motion.p>
      <motion.img
        src="/S__18087951_0.jpg"
        alt="Decorative Image"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      <Box className="button-container">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button variant="contained" color="primary" className="button">
            Login
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button variant="contained" color="primary" className="button">
            Enter Site
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default LandingPage;
