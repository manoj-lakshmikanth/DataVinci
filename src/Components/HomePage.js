import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Box from '@mui/material/Box';
import '../index.css';
import Dashboard from './Dashboard';

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Sidebar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Topbar />
        <Dashboard />
      </Box>
    </Box>
  );
};

export default HomePage;
