import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material';
import Paper from '@mui/material/Paper';
import WatchListItem from '../../../components/WatchListItem';

function createData(name, calories, size, carbs, protein) {
  return { name, calories, size, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&.MuiTableRow-root': {
    cursor: "pointer"
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

export default function PositionsTable() {
  return (
    <TableContainer sx={{ fontWeight: 600 }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Instrument</StyledTableCell>
            <StyledTableCell>Side</StyledTableCell>
            <StyledTableCell>Size</StyledTableCell>
            <StyledTableCell>Entry/Market</StyledTableCell>
            <StyledTableCell>Stop Loss</StyledTableCell>
            <StyledTableCell>Take Profit</StyledTableCell>
            <StyledTableCell>Margin</StyledTableCell>
            <StyledTableCell>Exposure</StyledTableCell>
            <StyledTableCell>Created At(EET)</StyledTableCell>
            <StyledTableCell>Fee</StyledTableCell>
            <StyledTableCell>Swaps</StyledTableCell>
            <StyledTableCell>Profit & Loss</StyledTableCell>
            <StyledTableCell>Position ID</StyledTableCell>
            <StyledTableCell>Profit & Loss</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                <WatchListItem fromCurrency="AUD" toCurrency="USD" />
              </StyledTableCell>
              <TableBuyCell>BUY</TableBuyCell>
              <StyledTableCell>{row.fat}</StyledTableCell>
              <StyledTableCell>{row.size}</StyledTableCell>
              <StyledTableCell>{row.protein}</StyledTableCell>
              <StyledTableCell>{row.protein}</StyledTableCell>
              <StyledTableCell>{row.protein}</StyledTableCell>
              <StyledTableCell>{row.protein}</StyledTableCell>
              <StyledTableCell>{row.protein}</StyledTableCell>
              <StyledTableCell>{row.protein}</StyledTableCell>
              <StyledTableCell>{row.protein}</StyledTableCell>
              <StyledTableCell>{row.protein}</StyledTableCell>
              <StyledTableCell>{row.protein}</StyledTableCell>
              <StyledTableCell>{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}