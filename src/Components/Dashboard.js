import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Average from '../Images/DashboardImages/intensity.png';
import Relevance from '../Images/DashboardImages/relevance.png';
import Likelihood from '../Images/DashboardImages/likelihood.png';
import Dependency from '../Images/DashboardImages/dependency.png';

import styled from '@emotion/styled';
import userContext from '../Context';
import LineChart from './LineChart';
import AreaChart from './AreaChart';

import { data } from '../data/data';
import TableList from './TableList';

const Dashboard = () => {
  const { colorBlack } = useContext(userContext);

  const Dash = styled('Box')({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '50px',
    background: colorBlack === true ? '#36454F' : 'white',
    width: '90%',
    borderRadius: '5px',
    marginTop: '25px',
  });

  const CardStyle = styled('Card')({
    background: colorBlack === true ? '#36454F' : 'white',
    color: colorBlack === false ? '#36454F' : 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '17%',
    border: colorBlack === false ? '2px solid #36454F' : '2px solid white',
    borderRadius: '10px',
    padding: '10px',
  });

  const CardDesign = styled('Box')({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '15px',
  });

  const Typo = styled('Typography')({
    fontFamily: 'Raleway',
    fontSize: '20px',
    fontWeight: '800',
  });

  const FontTypo = styled('Typography')({
    fontSize: '25px',
    fontWeight: '700',
  });

  const [intensity, setIntensity] = useState('');
  const [likelihood, setLikelihood] = useState('');
  const [relevance, setRelevance] = useState('');

  async function getallData() {
    let energyArr = data;
    let intenseSum = 0;
    let likelySum = 0;
    let relevanceSum = 0;
    for (let i = 0; i < energyArr.length; i++) {
      intenseSum += Number(energyArr[i].intensity);
      likelySum += Number(energyArr[i].likelihood);
      relevanceSum += Number(energyArr[i].relevance);
    }
    let avg = intenseSum / energyArr.length;
    let likelyAvg = likelySum / energyArr.length;
    let relevanceAvg = relevanceSum / energyArr.length;
    setIntensity(avg);
    setLikelihood(likelyAvg);
    setRelevance(relevanceAvg);
    // }
  }

  useEffect(() => {
    getallData();
  }, []);

  return (
    <Dash>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          // columnGap: '2%',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '25px',
        }}
      >
        <CardStyle>
          <CardDesign>
            <Typo>AVERAGE INTENSITY</Typo>
            <FontTypo>{Math.round(intensity * 10) / 10}</FontTypo>
          </CardDesign>
          <img src={Average} alt="" />
        </CardStyle>
        <CardStyle>
          <CardDesign>
            <Typo>AVERAGE LIKELIHOOD</Typo>
            <FontTypo>{Math.round(likelihood * 10) / 10}</FontTypo>
          </CardDesign>
          <img src={Likelihood} alt="" />
        </CardStyle>
        <CardStyle>
          <CardDesign>
            <Typo>AVERAGE RELEVANCE</Typo>
            <FontTypo>{Math.round(relevance * 10) / 10}</FontTypo>
          </CardDesign>
          <img src={Relevance} alt="" />
        </CardStyle>
        <CardStyle>
          <CardDesign>
            <Typo>AVERAGE DEPENDENCY</Typo>
            <FontTypo>{Math.round(4.63 * 10) / 10}</FontTypo>
          </CardDesign>
          <img src={Dependency} alt="" />
        </CardStyle>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '25px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            columnGap: '2%',
          }}
        >
          <LineChart />
          <AreaChart />
        </Box>
        <Box
          sx={{
            width: '98.5%',
            marginTop: '25px',
            border:
              colorBlack === false ? '2px solid #36454F' : '2px solid white',
            borderRadius: '10px',
            padding: '10px',
          }}
        >
          <TableList />
        </Box>
      </Box>
    </Dash>
  );
};

export default Dashboard;
