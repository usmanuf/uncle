import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
    primary: {
        light: '#5aa42c',
        main: '#59b53f',
        dark: '#008416',
        contrastText: '#fff',
    },
    secondary: {
        light: '#52a923',
        main: '#36f44f',
        dark: '#44ae0c',
        contrastText: '#000',
    },
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div >
            <AppBar position="static" color="default">
                <Tabs
                    className={'tabs'}
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Our Mission" {...a11yProps(0)} />
                    <Tab label="Our Values" {...a11yProps(1)} />

                </Tabs>
            </AppBar>
            <div className={'TabsText'}>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel className={'outTextpanel'} value={value} index={0} dir={theme.direction}>
                        Uncle Fixer is always eager to go above and beyond to provide customers and fixers with what they desire and deserve. Uncle fixer is committed to its objectives. Uncle Fixer was established with the goal of alleviating poverty and encouraging honesty and kindness. Our goal is to provide the most dependable and trustworthy  <b className={'bold'}>home maintenance services.</b> Uncle Fixer will satisfy the customers as well as provide an unforgettable experience with us. Uncle Fixer's other objective is to hire experienced fixers and putting their abilities to serve customers.
                    </TabPanel>
                    <TabPanel className={'outTextpanel'} value={value} index={1} dir={theme.direction}>
                        In Pakistan, finding a technician who is professional, affordable, and punctual might be tricky. It is difficult to seek the assistance of a plumber, an electrician, or a fumigation service. Uncle Fixer provides answers to your home, business, commercial, and official difficulties in the shortest amount of time. Currently, Uncle Fixer provides 50+ services to our residential and business clients. Soon increase our services by 100+ to your better support. Uncle Fixer's goal is to provide services to our customers. Fixers also get paid from the <b className={'bold'}> freelancing platform </b> and ensuring that everyone has an equal opportunity.
                    </TabPanel>

                </SwipeableViews>
            </div>

        </div>
    );
}
