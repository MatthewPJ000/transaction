// src/InstrumentTable.js
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material';
import WatchListItem from '../WatchListItem';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './WatchList.css';
import axios from 'axios';

const WatchList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [instruments, setInstruments] = useState([]);
  const [forexData, setForexData] = useState(["EURUSD", "USDJPY", "GBPUSD", "AUDUSD", "USDCAD", "USDCHF", "NZDUSD"]);

  useEffect(() => {
    getRealtimeData()
  }, []);

  const getRealtimeData = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/realtimedata', forexData);
      // const realData = response.data.quotes.map(item => ({
      //   name: item.base_currency + item.quote_currency,
      //   bid: item.bid,
      //   ask: item.ask,
      //   base_currency: item.base_currency,
      //   quote_currency: item.quote_currency,
      // }));
      console.log(response.data)
      // setInstruments(realData);
    } catch (error) {
      console.error('Error fetching real-time data:', error);
    }
  };

  // const instruments = [
  //   { name: 'US30.PRO', bid: 39168.42, ask: 39170.42, spread: 200, leverage: 200, dayHigh: 39296.42, dayLow: 39296.42 },
  //   { name: 'DAX', bid: 18171.22, ask: 18172.48, spread: 200, leverage: 200, dayHigh: 18261.45, dayLow: 39296.42 },
  //   { name: 'DOLLAR', bid: 105.454, ask: 105.486, spread: 200, leverage: 200, dayHigh: 105.571, dayLow: 39296.42 },
  //   { name: 'ESP35', bid: 11038.00, ask: 11044.00, spread: 600, leverage: 200, dayHigh: 11195.00, dayLow: 39296.42 },
  //   { name: 'EUSTX50', bid: 4910.87, ask: 4912.53, spread: 166, leverage: 200, dayHigh: 4950.13, dayLow: 39296.42 },
  //   { name: 'FRA40', bid: 7629.60, ask: 7630.20, spread: 200, leverage: 200, dayHigh: 7685.90, dayLow: 39296.42 },
  //   { name: 'JPN225', bid: 38601.00, ask: 38609.00, spread: 800, leverage: 200, dayHigh: 38659.00, dayLow: 39296.42 },
  //   { name: 'NAS100', bid: 19779.95, ask: 19781.05, spread: 200, leverage: 200, dayHigh: 19830.55, dayLow: 39296.42 },
  //   { name: 'SPX500', bid: 5476.95, ask: 5477.55, spread: 200, leverage: 200, dayHigh: 5487.75, dayLow: 39296.42 },
  //   { name: 'UK100', bid: 8231.60, ask: 8233.30, spread: 200, leverage: 200, dayHigh: 8233.30, dayLow: 39296.42 },
  //   { name: 'UK100', bid: 8231.60, ask: 8233.30, spread: 200, leverage: 200, dayHigh: 8233.30, dayLow: 39296.42 },
  // ];

  // const filteredInstruments = instruments.filter(instrument =>
  //   instrument.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );


  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&.MuiTableRow-root': {
      cursor: "pointer",
      height: '36px'
    },
    '&:hover': {
      backgroundColor: 'black',
      opacity: 1,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      border: 0,
      color: "#89898b",
      fontSize: '10.5px'
    },
    [`&.${tableCellClasses.body}`]: {
      border: 0,
      color: "#89898b",
      fontSize: 10.5,
    },
  }));

  const TableBuyCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      border: 0,
      color: "#54c88c",
      fontSize: 10.5,
    }
  }));

  const TableSellCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      border: 0,
      color: "#ff6f6f",
      fontSize: 10.5,
    }
  }));

  const SearchInput = styled(OutlinedInput)(({ theme }) => ({
    '&.MuiOutlinedInput-root': {
      height: 28,
      border: '1px solid #434346',
      borderRadius: 5,
      color: 'white',
      backgroundColor: 'none',
      fontSize: 13
    },
    '&.MuiOutlinedInput-input': {
      padding: '5px !important',
      backgroundColor: 'none'
    },
    '&:hover': {
      border: '1px solid #89898b',
      opacity: 1,
    },

  }));

  return (
    <div className='watchlist-container'>
      <div className='watchlist-topbar'>
        <SearchInput
          id="outlined-adornment-weight"
          startAdornment={
            <SearchOutlinedIcon sx={{ color: 'grey' }} />
          }
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
          }}
          sx={{ paddingLeft: 0.5 }}
          placeholder='Search...'
        />
        {/* <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Age</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Age"
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl> */}
      </div>
      <TableContainer sx={{ fontWeight: 600 }}>
        <Table sx={{ maxWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Instrument</StyledTableCell>
              <StyledTableCell>Bid</StyledTableCell>
              <StyledTableCell>Ask</StyledTableCell>
              <StyledTableCell>Spread</StyledTableCell>
              <StyledTableCell>Leverage</StyledTableCell>
              <StyledTableCell>Day High</StyledTableCell>
              <StyledTableCell>Day Low</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ maxHeight: 400, overflow: "scroll" }}>
            {instruments.map((row) => (
              <StyledTableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => setSelectedCategory(row.name)}
              >
                <StyledTableCell component="th" scope="row">
                  <WatchListItem fromCurrency={row.base_currency} toCurrency={row.quote_currency} />
                </StyledTableCell>
                <TableBuyCell>{row.bid}</TableBuyCell>
                <TableSellCell>{row.ask}</TableSellCell>
                {/* <StyledTableCell>{row.spread}</StyledTableCell>
                <StyledTableCell>{row.leverage}</StyledTableCell>
                <StyledTableCell>{row.dayHigh}</StyledTableCell>
                <StyledTableCell>{row.dayLow}</StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default WatchList;
