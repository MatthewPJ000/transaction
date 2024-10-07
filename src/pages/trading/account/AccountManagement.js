import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import StatusBar from './StatusBar';
import PositionsTable from './PositionsTable';
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
        </div>
    );
}

const AntTabs = styled(Tabs)({
    borderBottom: '1px solid #1b1b1f',
    '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '1px'
    },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
        minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightMedium,
    marginRight: theme.spacing(1),
    fontSize: '12px',
    color: '#89898b',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        color: 'white',
        opacity: 1,
    },
    '&.Mui-selected': {
        color: 'white',
        fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
        backgroundColor: '#101013',
    },
}));

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function AccountManagement() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box my={0} sx={{ width: '100%', marginBottom: '0px', bgcolor: '#101013', height: '100%', borderRadius:'10px' }}>
            <div style={{ display: 'flex' }}>
                <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                    <AntTab label="Positions" />
                    <AntTab label="Pending" />
                    <AntTab label="Closed Positions" />
                    <AntTab label="Blance" />
                    <AntTab label="Trades" />
                </AntTabs>
                <StatusBar />
            </div>
            <CustomTabPanel value={value} index={0}>
                <PositionsTable />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <div></div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
        </Box>
    );
}