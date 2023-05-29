import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import userContext from '../Context';
import { data } from '../data/data';
import { Box } from '@mui/material';

export default function TableList() {
  const { colorBlack } = React.useContext(userContext);
  const [rows, setRows] = React.useState([]);
  const [selectedValue, setSelectedValue] = React.useState('');

  let resultData1 = data.filter((item) => {
    return item.region === 'Northern America';
  });

  let resultData2 = data.filter((item) => {
    return item.region === 'Southern Asia';
  });
  let resultData3 = data.filter((item) => {
    return item.region === 'Eastern Europe';
  });

  let finalData = resultData1.concat(resultData2, resultData3);

  function createData() {
    let arr = [{ insight: '', region: '', country: '' }];
    for (let j = 0; j < finalData.length; j++) {
      arr[j] = {
        insight: finalData[j].insight,
        region: finalData[j].region,
        country: finalData[j].country,
      };
    }
    // console.log(arr);
    setRows(arr);
  }

  function northernAmericaHandler() {
    console.log(resultData1);
    let arr = [{ insight: '', region: '', country: '' }];
    for (let j = 0; j < resultData1.length; j++) {
      arr[j] = {
        insight: resultData1[j].insight,
        region: resultData1[j].region,
        country: resultData1[j].country,
      };
    }
    // console.log(arr);
    setRows(arr);
  }

  function southernAsiaHandler() {
    console.log(resultData2);
    let arr = [{ insight: '', region: '', country: '' }];
    for (let j = 0; j < resultData2.length; j++) {
      arr[j] = {
        insight: resultData2[j].insight,
        region: resultData2[j].region,
        country: resultData2[j].country,
      };
    }
    // console.log(arr);
    setRows(arr);
  }

  function easternEuropeHandler() {
    console.log(resultData3);
    let arr = [{ insight: '', region: '', country: '' }];
    for (let j = 0; j < resultData3.length; j++) {
      arr[j] = {
        insight: resultData3[j].insight,
        region: resultData3[j].region,
        country: resultData3[j].country,
      };
    }
    // console.log(arr);
    setRows(arr);
  }

  function USAHandler() {
    let usa = resultData1.filter((item) => {
      return item.country === 'United States of America';
    });
    // console.log(usa);
    let arr = [{ insight: '', region: '', country: '' }];
    for (let j = 0; j < usa.length; j++) {
      arr[j] = {
        insight: usa[j].insight,
        region: usa[j].region,
        country: usa[j].country,
      };
    }
    // console.log(arr);
    setRows(arr);
  }

  function CanadaHandler() {
    let canada = resultData1.filter((item) => {
      return item.country === 'Canada';
    });
    // console.log(usa);
    let arr = [{ insight: '', region: '', country: '' }];
    for (let j = 0; j < canada.length; j++) {
      arr[j] = {
        insight: canada[j].insight,
        region: canada[j].region,
        country: canada[j].country,
      };
    }
    // console.log(arr);
    setRows(arr);
  }

  function IndiaHandler() {
    let india = resultData2.filter((item) => {
      return item.country === 'India';
    });
    // console.log(usa);
    let arr = [{ insight: '', region: '', country: '' }];
    for (let j = 0; j < india.length; j++) {
      arr[j] = {
        insight: india[j].insight,
        region: india[j].region,
        country: india[j].country,
      };
    }
    // console.log(arr);
    setRows(arr);
  }

  function IranHandler() {
    let iran = resultData2.filter((item) => {
      return item.country === 'Iran';
    });
    // console.log(usa);
    let arr = [{ insight: '', region: '', country: '' }];
    for (let j = 0; j < iran.length; j++) {
      arr[j] = {
        insight: iran[j].insight,
        region: iran[j].region,
        country: iran[j].country,
      };
    }
    // console.log(arr);
    setRows(arr);
  }

  function BrazilHandler() {
    let brazil = resultData3.filter((item) => {
      return item.country === 'Brazil';
    });
    // console.log(usa);
    let arr = [{ insight: '', region: '', country: '' }];
    for (let j = 0; j < brazil.length; j++) {
      arr[j] = {
        insight: brazil[j].insight,
        region: brazil[j].region,
        country: brazil[j].country,
      };
    }
    // console.log(arr);
    setRows(arr);
  }

  function UkraineHandler() {
    let ukraine = resultData3.filter((item) => {
      return item.country === 'Ukraine';
    });
    // console.log(usa);
    let arr = [{ insight: '', region: '', country: '' }];
    for (let j = 0; j < ukraine.length; j++) {
      arr[j] = {
        insight: ukraine[j].insight,
        region: ukraine[j].region,
        country: ukraine[j].country,
      };
    }
    console.log(arr);
    setRows(arr);
  }

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  React.useEffect(() => {
    createData();
  }, []);

  return (
    <Box>
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: 440,
          color: colorBlack === false ? '#36454F' : 'white',
          backgroundColor: colorBlack === false ? 'white' : '#36454F',
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: colorBlack === false ? '#36454F' : 'white',
                  fontFamily: 'Cursive',
                  fontWeight: '700',
                  fontSize: '20px',
                }}
                align="center"
              >
                Insights
              </TableCell>
              <TableCell
                sx={{
                  color: colorBlack === false ? '#36454F' : 'white',
                  fontFamily: 'Cursive',
                  fontWeight: '700',
                  fontSize: '20px',
                }}
                align="center"
              >
                Region
              </TableCell>
              <TableCell
                sx={{
                  color: colorBlack === false ? '#36454F' : 'white',
                  fontFamily: 'Cursive',
                  fontWeight: '700',
                  fontSize: '20px',
                }}
                align="center"
              >
                Country
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  sx={{
                    color: colorBlack === false ? '#36454F' : 'white',
                    fontFamily: 'Cursive',
                    fontWeight: '500',
                    fontSize: '15px',
                  }}
                >
                  {row.insight}
                </TableCell>
                <TableCell
                  sx={{
                    color: colorBlack === false ? '#36454F' : 'white',
                    fontFamily: 'Cursive',
                    fontWeight: '500',
                    fontSize: '15px',
                  }}
                  align="center"
                >
                  {row.region}
                </TableCell>
                <TableCell
                  sx={{
                    color: colorBlack === false ? '#36454F' : 'white',
                    fontFamily: 'Cursive',
                    fontWeight: '500',
                    fontSize: '15px',
                  }}
                  align="center"
                >
                  {row.country}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          columnGap: '30%',
          marginTop: '25px',
        }}
      >
        <FormControl sx={{ width: '20%' }}>
          <InputLabel
            id="dropdown-label"
            sx={{ color: colorBlack === false ? '#36454F' : 'white' }}
          >
            Region
          </InputLabel>
          <Select
            labelId="dropdown-label"
            id="dropdown"
            value={selectedValue}
            onChange={handleChange}
          >
            <MenuItem onClick={createData}>All</MenuItem>
            <MenuItem value="Northern America" onClick={northernAmericaHandler}>
              Northern America
            </MenuItem>
            <MenuItem value="Southern Asia" onClick={southernAsiaHandler}>
              Southern Asia
            </MenuItem>
            <MenuItem value="Eastern Europe" onClick={easternEuropeHandler}>
              Eastern Europe
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: '20%' }}>
          <InputLabel
            id="dropdown-label"
            sx={{ color: colorBlack === false ? '#36454F' : 'white' }}
          >
            Country
          </InputLabel>
          <Select labelId="dropdown-label" id="dropdown">
            {selectedValue === 'Northern America' ? (
              <>
                <MenuItem onClick={USAHandler}>USA</MenuItem>
                <MenuItem onClick={CanadaHandler}>Canada</MenuItem>
              </>
            ) : selectedValue === 'Southern Asia' ? (
              <>
                <MenuItem onClick={IndiaHandler}>India</MenuItem>
                <MenuItem onClick={IranHandler}>Iran</MenuItem>
              </>
            ) : selectedValue === 'Eastern Europe' ? (
              <>
                <MenuItem onClick={BrazilHandler}>Brazil</MenuItem>
                <MenuItem onClick={UkraineHandler}>Ukraine</MenuItem>
              </>
            ) : (
              <MenuItem>Please select the region</MenuItem>
            )}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
