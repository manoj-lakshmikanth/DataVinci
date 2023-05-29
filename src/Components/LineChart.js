import React, { useContext, useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import userContext from '../Context';
import { Box, Button } from '@mui/material';

import { data } from '../data/data';

const LineChart = () => {
  const { colorBlack } = useContext(userContext);
  const [clicked, setClicked] = useState({
    inClick: true,
    liClick: false,
    reClick: false,
  });

  const [graphData, setGraphData] = useState({
    intensity: [],
    likelihood: [],
    relevance: [],
  });

  async function getallData() {
    let energyArr = data;
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i < 50; i++) {
      arr[i] = energyArr[i].intensity;
      arr2[i] = energyArr[i].likelihood;
      arr3[i] = energyArr[i].relevance;
    }

    setGraphData({
      intensity: arr,
      likelihood: arr2,
      relevance: arr3,
    });
    setOptions({
      ...options,
      series: [
        {
          name: 'Intensity',
          data: arr,
        },
      ],
    });
  }

  useEffect(() => {
    getallData();
  }, []);

  const [options, setOptions] = useState({
    chart: {
      type: 'spline',
      backgroundColor: colorBlack === true ? '#36454F' : 'white',
    },
    title: {
      text: 'AVERAGE VALUES',
      style: {
        color: colorBlack === false ? '#36454F' : 'white', // Set the font color
        // marginBottom: '100px',
        fontFamily: 'Raleway',
        fontWeight: '700',
      },
    },
    xAxis: {
      title: {
        text: 'Number of Datapoints -->',
        style: {
          color: colorBlack === false ? '#36454F' : 'white', // Set the font color
          fontSize: '15px',
          fontWeight: '500',
          fontFamily: 'Raleway',
          marginTop: '100px',
        },
      },
      labels: {
        style: {
          color: colorBlack === false ? '#36454F' : 'white', // Set the font color
        },
      },
    },
    yAxis: {
      title: {
        text: 'Intensity/ Likelihood/ Relevance -->',
        style: {
          color: colorBlack === false ? '#36454F' : 'white', // Set the font color
          fontSize: '15px',
          fontWeight: '500',
          fontFamily: 'Raleway',
        },
      },
      labels: {
        style: {
          color: colorBlack === false ? '#36454F' : 'white', // Set the font color
        },
      },
    },
    series: [
      {
        name: 'Intensity',
        data: graphData.intensity,
        labels: {
          style: {
            color: 'red', // Set the font color of data point names
          },
        },
      },
    ],
  });

  const intensityClick = () => {
    const newOptions = {
      ...options,
      series: [
        {
          name: 'Intensity',
          data: graphData.intensity,
          labels: {
            style: {
              color: '#000000', // Set the font color of data point names
            },
          },
        },
      ],
    };
    setOptions(newOptions);
    setClicked({ ...clicked, inClick: true, liClick: false, reClick: false });
  };

  const likelyClick = () => {
    const newOptions = {
      ...options,
      series: [
        {
          name: 'Likelyhood',
          data: graphData.likelihood,
          labels: {
            style: {
              color: 'red', // Set the font color of data point names
            },
          },
        },
      ],
    };
    setOptions(newOptions);
    setClicked({ ...clicked, inClick: false, liClick: true, reClick: false });
  };

  const relevantClick = () => {
    const newOptions = {
      ...options,
      series: [
        {
          name: 'Relevant',
          data: graphData.relevance,
          labels: {
            style: {
              color: 'red', // Set the font color of data point names
            },
          },
        },
      ],
    };
    setOptions(newOptions);
    setClicked({ ...clicked, inClick: false, liClick: false, reClick: true });
  };

  return (
    <Box
      sx={{
        width: '58%',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        border: colorBlack === false ? '2px solid #36454F' : '2px solid white',
        borderRadius: '10px',
        rowGap: '50px',
        paddingTop: '50px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '20%',
          justifyContent: 'center',
        }}
      >
        <Button
          sx={{
            border:
              colorBlack === false ? '2px solid #36454F' : '2px solid white',
            width: '10%',
            height: '30px',
            background: clicked.inClick ? 'rgb(0, 150, 255)' : 'none',
            color: colorBlack === false ? '#36454F' : 'white',
            borderRadius: '7.5px',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={intensityClick}
        >
          Intensity
        </Button>
        <Button
          sx={{
            border:
              colorBlack === false ? '2px solid #36454F' : '2px solid white',
            width: '10%',
            height: '30px',
            background: clicked.liClick ? 'rgb(0, 150, 255)' : 'none',
            color: colorBlack === false ? '#36454F' : 'white',
            borderRadius: '7.5px',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={likelyClick}
        >
          Likelyhood
        </Button>
        <Button
          sx={{
            border:
              colorBlack === false ? '2px solid #36454F' : '2px solid white',
            width: '10%',
            height: '30px',
            background: clicked.reClick ? 'rgb(0, 150, 255)' : 'none',
            color: colorBlack === false ? '#36454F' : 'white',
            borderRadius: '7.5px',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={relevantClick}
        >
          Relevance
        </Button>
      </Box>
      <Box>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Box>

      <Box
        sx={{
          width: '100%',
          marginBottom: '50px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          columnGap: '20px',
          color: 'red',
        }}
      ></Box>
    </Box>
  );
};

export default LineChart;
