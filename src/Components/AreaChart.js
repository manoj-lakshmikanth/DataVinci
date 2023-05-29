import { Box, Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import userContext from '../Context';
import { data } from '../data/data';

const AreaChart = () => {
  const { colorBlack } = useContext(userContext);

  const [graphData, setGraphData] = useState({
    intensity: [],
    likelihood: [],
    relevance: [],
  });

  const [areaData, setAreaData] = useState({
    intensity: [],
    likelihood: [],
    relevance: [],
  });

  const [clicked, setClicked] = useState({
    inClick: true,
    liClick: false,
    reClick: false,
  });

  const [options, setOptions] = useState({
    chart: {
      type: 'area',
      backgroundColor: colorBlack === true ? '#36454F' : 'white',
    },
    title: {
      text: 'AREA CHART FOR PESTLE PROPERTY',
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
    plotOptions: {
      area: {
        pointStart: 0,
        series: {
          smooth: true, // Enable smooth curves
        },
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true,
            },
          },
        },
      },
    },
    series: [
      {
        name: 'Political',
        data: [2, 5, 3, 5, 3, 2, 6, 4, 6, 3], // Replace with your data points
      },
      {
        name: 'Technological',
        data: [1, 5, 3, 4, 2, 6, 5, 4],
      },
    ],
  });

  async function getAllPolitical() {
    let abc = data.filter((item, id) => {
      return item.pestle === 'Political';
    });
    let EnergyArr = abc;
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i < 30; i++) {
      arr[i] = EnergyArr[i].intensity;
      arr2[i] = EnergyArr[i].likelihood;
      arr3[i] = EnergyArr[i].relevance;
    }
    setGraphData({
      intensity: arr,
      likelihood: arr2,
      relevance: arr3,
    });
  }

  async function getAllTechnological() {
    let abc = data.filter((item, id) => {
      return item.pestle === 'Technological';
    });
    let EnergyArr = abc;
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i < EnergyArr.length; i++) {
      arr[i] = EnergyArr[i].intensity;
      arr2[i] = EnergyArr[i].likelihood;
      arr3[i] = EnergyArr[i].relevance;
    }
    setAreaData({
      intensity: arr,
      likelihood: arr2,
      relevance: arr3,
    });
  }

  const intensityClick = () => {
    const newOptions = {
      ...options,
      series: [
        {
          name: 'Political',
          data: graphData.intensity, // Replace with your data points
        },
        {
          name: 'Technological',
          data: areaData.intensity,
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
          name: 'Political',
          data: graphData.likelihood, // Replace with your data points
        },
        {
          name: 'Technological',
          data: areaData.likelihood,
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
          name: 'Political',
          data: graphData.relevance, // Replace with your data points
        },
        {
          name: 'Technological',
          data: areaData.relevance,
        },
      ],
    };
    setOptions(newOptions);
    setClicked({ ...clicked, inClick: false, liClick: false, reClick: true });
  };

  useEffect(() => {
    getAllPolitical();
    getAllTechnological();
  }, []);

  return (
    <Box
      sx={{
        dsplay: 'flex',
        flexDirection: 'column',
        width: '40%',
        height: '500px',
        border: colorBlack === false ? '2px solid #36454F' : '2px solid white',
        borderRadius: '10px',
        paddingTop: '50px',
        // rowGap: '50px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '20%',
          justifyContent: 'center',
          // margin: '25px',
        }}
      >
        <Button
          sx={{
            border:
              colorBlack === false ? '2px solid #36454F' : '2px solid white',
            width: '15%',
            height: '30px',
            background: clicked.inClick ? 'rgb(0, 150, 255)' : 'none',
            color: colorBlack === false ? '#36454F' : 'white',
            borderRadius: '7.5px',
            '&:hover': {
              cursor: 'pointer',
            },
            fontSize: '12px',
          }}
          onClick={intensityClick}
        >
          Intensity
        </Button>
        <Button
          sx={{
            border:
              colorBlack === false ? '2px solid #36454F' : '2px solid white',
            width: '15%',
            height: '30px',
            background: clicked.liClick ? 'rgb(0, 150, 255)' : 'none',
            color: colorBlack === false ? '#36454F' : 'white',
            borderRadius: '7.5px',
            '&:hover': {
              cursor: 'pointer',
            },
            fontSize: '12px',
          }}
          onClick={likelyClick}
        >
          Likelyhood
        </Button>
        <Button
          sx={{
            border:
              colorBlack === false ? '2px solid #36454F' : '2px solid white',
            width: '15%',
            height: '30px',
            background: clicked.reClick ? 'rgb(0, 150, 255)' : 'none',
            color: colorBlack === false ? '#36454F' : 'white',
            borderRadius: '7.5px',
            '&:hover': {
              cursor: 'pointer',
            },
            fontSize: '12px',
          }}
          onClick={relevantClick}
        >
          Relevance
        </Button>
      </Box>
      <Box sx={{ paddingTop: '50px' }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Box>
    </Box>
  );
};

export default AreaChart;
