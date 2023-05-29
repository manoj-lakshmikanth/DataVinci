import React, { useContext } from 'react';
import userContext from '../Context';
import '../index.css';
import { Box, Button } from '@mui/material';
import { ImSearch } from 'react-icons/im';
import styled from '@emotion/styled';

const Topbar = () => {
  const { colorBlack, setColorBlack } = useContext(userContext);
  const Topbar = styled('Card')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    columnGap: '55%',
    width: '90%',
    height: '60px',
    marginTop: '20px',
    borderRadius: '10px',
    border: colorBlack === false ? '2px solid #36454F' : '2px solid white',
  });

  return (
    <Topbar>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: '10%',
          width: '25%',
        }}
      >
        <ImSearch />
        <input
          type="text"
          style={{
            height: '30px',
            fontFamily: 'Raleway',
            fontWeight: '700',
            fontSize: '15px',
            color: colorBlack === false ? '#36454F' : 'white',
            border:
              colorBlack === false ? '2px solid #36454F' : '2px solid white',
            background: 'none',
            borderRadius: '5px',
          }}
        />
      </Box>
      <Button
        variant="outlined"
        onClick={() => setColorBlack(!colorBlack)}
        sx={{
          color: colorBlack === false ? '#36454F' : 'white',
        }}
      >
        Theme
      </Button>
    </Topbar>
  );
};

export default Topbar;
