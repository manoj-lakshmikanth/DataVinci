import styled from '@emotion/styled';
import { Box, Card, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import '../index.css';
import { GiCampfire } from 'react-icons/gi';
import userContext from '../Context';
import { FaHamburger } from 'react-icons/fa';
import { RiDashboardFill } from 'react-icons/ri';
import { sidebarDetails } from '../data/sidebarDetails';

const Sidebar = () => {
  const { colorBlack } = useContext(userContext);
  const [isExtended, setIsExtended] = useState(false);
  const LeftComponent = styled('Box')({
    position: 'sticky',
    left: '0px',
    top: '0px',
    width: isExtended ? '17%' : '5%',
    borderRight: colorBlack === false ? '2px solid #36454F' : '2px solid white',
    height: '160vh',
  });

  const Hamburger = styled('Box')({
    position: 'absolute',
    left: isExtended ? '89%' : '65%',
    top: '5%',
    width: '50px',
    height: '50px',
    borderRadius: '90px',
    background: colorBlack === false ? '#36454F' : 'white',
    border: '2px solid',
    '&:hover': {
      cursor: 'pointer',
    },
  });

  const TitleCard = styled('Card')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '45px',
    width: '100%',
    columnGap: '18px',
    color: colorBlack === false ? '#36454F' : 'white',
    background: 'none',
  });

  const DashboardCard = styled('Card')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '20px',
    height: '45px',
    width: '100%',
    columnGap: '35px',
    border: 'none',
    color: colorBlack === false ? '#36454F' : 'white',
    background: 'none',
    marginTop: '100px',
  });

  const SidebarCard = styled('Card')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '20px',
    height: '45px',
    width: '100%',
    columnGap: '35px',
    border: 'none',
    color: colorBlack === false ? '#36454F' : 'white',
    background: 'none',
  });

  return (
    <LeftComponent>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '10px',
        }}
      >
        {isExtended ? (
          <Box>
            <TitleCard variant="outlined">
              <GiCampfire size={45} />
              <Typography
                sx={{
                  fontFamily: 'Raleway',
                  fontWeight: '900',
                  fontSize: '24px',
                }}
              >
                ENERGY REPORT
              </Typography>
            </TitleCard>
            <DashboardCard variant="outlined">
              <RiDashboardFill size={30} />
              <Typography
                sx={{
                  fontFamily: 'Raleway',
                  fontWeight: '700',
                  fontSize: '17px',
                }}
              >
                Dashboard
              </Typography>
            </DashboardCard>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '15px',
                marginTop: '35px',
              }}
            >
              {sidebarDetails.map((item, id) => {
                return (
                  <Box key={id}>
                    <SidebarCard variant="outlined">
                      {item.icon}
                      <Typography
                        sx={{
                          fontFamily: 'Raleway',
                          fontWeight: '700',
                          fontSize: '17px',
                        }}
                      >
                        {item.name}
                      </Typography>
                    </SidebarCard>
                  </Box>
                );
              })}
            </Box>
          </Box>
        ) : (
          <Box>
            <Box sx={{ paddingLeft: '10px' }}>
              <GiCampfire size={45} />
            </Box>
            <Box sx={{ paddingLeft: '20px', marginTop: '104px' }}>
              <RiDashboardFill size={30} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '15px',
                marginTop: '38px',
                paddingLeft: '20px',
              }}
            >
              {sidebarDetails.map((item, id) => {
                return (
                  <Box
                    key={id}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      height: '45px',
                    }}
                  >
                    {item.icon}
                  </Box>
                );
              })}
            </Box>
          </Box>
        )}
        <Hamburger
          onClick={() => {
            setIsExtended(!isExtended);
          }}
        >
          <FaHamburger
            size={20}
            color={colorBlack === false ? 'white' : '#36454F'}
            style={{ paddingLeft: '15px', paddingTop: '13px' }}
          />
        </Hamburger>
      </Box>
    </LeftComponent>
  );
};

export default Sidebar;
