import React, { useRef, useEffect } from 'react';
import TradingViewChart from '../../components/TradingViewChart';
import WatchList from '../../components/WatchList';
import "./index.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AccountManagement from './account/AccountManagement';
import ModalExample from '../../components/modalButton';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#101013',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '10px',
}));
const Trading = () => {
    return (
        <div className='trading-page-container'>
            <div style={{ width: '40px' }}></div>
            <div className='tradingview-container'>
                <div className='chart-container'>
                    <Grid container spacing={2}>
                        <Grid item xs={9}>
                            <Item sx={{ height: '100%'}} p={5}>
                                <TradingViewChart />
                            </Item>
                        </Grid>
                        <Grid item xs={3} sx={{ display: 'flex', flexDirection: "column", flex: '' }}>
                            <Item>
                                <WatchList />
                            </Item>
                            <Box sx={{ p: 1 }}></Box>
                            <Item>
                            <ModalExample />
                            </Item>
                        </Grid>
                    </Grid>
                </div>
                <Box p={1}></Box>
                <Box
                    sx={{ borderRadius: '10px', marginBottom: '0px', flex: "33.01 1 0px" }}
                >
                    <AccountManagement />
                </Box>
                

            </div>
        </div>
    )
}

export default Trading;