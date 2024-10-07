import React,{useState, useEffect} from 'react'
import AccountStatus from '../../../components/AccountStatus'
import { Hidden } from '@mui/material'
const StatusBar = (props) => {
    const styles = {
        container: {
            width: '-webkit-fill-available',
            display: 'flex',
            height: '48px',
            borderBottom: '1px solid #1b1b1f',
            justifyContent: 'right'
        }
    }
    return (
        <div style={styles.container}>
            <AccountStatus title="BALANCE" value="$99,992.72"/>
            <AccountStatus title="PROFIT & LOSS" value="$12.72"/>
            <AccountStatus title="EQUITY" value="$99,992.72"/>
            <AccountStatus title="MARGIN USED" value="$352.72"/>
            <AccountStatus title="MARGIN AVAILABLE" value="$99,992.72"/>
            <AccountStatus title="MARGIN LEVEL" value="0.35%"/>
            <AccountStatus title="CREDIT" value="$0.00"/>
        </div>
    )
}

export default StatusBar;