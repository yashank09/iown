import React from "react";
import PropTypes from "prop-types";

import { Hidden, Tabs, Tab, Grid, Typography, Box } from "@material-ui/core";

import TotalIownComponent from "../dashboard/totalIown/TotalIownComponent";

import { connect } from "react-redux";

import Logo from "../../assets/images/iown_logo.png";
import CryptoIcon from "../../assets/images/crypto_tab_icon.png";
import StocksIcon from "../../assets/images/stocks_tab_icon.png";
import EstateIcon from "../../assets/images/estate_tab_icon.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const styles = {
  container: {
    marginTop: 12
  },
  tabBar: {
    paddingTop: 108
  },
  activeTab: {
    backgroundColor: "#14111a",
    borderRadius: 15,
    boxShadow: "3px 5px 8px #14111a"
  },
  notActiveTabs: {
    opacity: 0.5
  },
  tabContentContainer: {
    textAlign: "center"
  }
};

const TabComponent = props => {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const getStyle = isActive =>
    isActive ? styles.activeTab : styles.notActiveTabs;
  return (
    <Grid container style={styles.container}>
      <Hidden xsDown>
        <Grid item xs={12} sm={3}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Tab for IOWN. View All IOWN or Specific Type"
            style={styles.tabBar}
            indicatorColor="primary"
          >
            <Tab
              icon={<img src={Logo} width={58} height={58} />}
              aria-label="Total IOWN"
              {...a11yProps(0)}
              style={getStyle(value === 0)}
            />
            <Tab
              icon={<img src={CryptoIcon} width={58} height={58} />}
              aria-label="Crypto IOWN"
              {...a11yProps(1)}
              style={getStyle(value === 1)}
            />
            <Tab
              icon={<img src={StocksIcon} width={48} height={48} />}
              aria-label="Stocks IOWN"
              {...a11yProps(2)}
              style={getStyle(value === 2)}
            />
            <Tab
              icon={<img src={EstateIcon} width={52} height={52} />}
              aria-label="Estate IOWN"
              {...a11yProps(3)}
              style={getStyle(value === 3)}
            />
          </Tabs>
        </Grid>
      </Hidden>

      <Hidden smUp>
        <Grid item xs={12} sm={3}>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="Tab for IOWN. View All IOWN or Specific Type"
            indicatorColor="primary"
          >
            <Tab
              icon={<img src={Logo} width={58} height={58} />}
              aria-label="Total IOWN"
              {...a11yProps(0)}
            />
            <Tab
              icon={<img src={CryptoIcon} width={58} height={58} />}
              aria-label="Crypto IOWN"
              {...a11yProps(1)}
            />
            <Tab
              icon={<img src={StocksIcon} width={48} height={48} />}
              aria-label="Stocks IOWN"
              {...a11yProps(2)}
            />
            <Tab
              icon={<img src={EstateIcon} width={52} height={52} />}
              aria-label="Estate IOWN"
              {...a11yProps(3)}
              //style={getStyle(value === 3)}
            />
          </Tabs>
        </Grid>
      </Hidden>

      <Grid item xs={12} sm={9} style={styles.tabContentContainer}>
        <TabPanel value={value} index={0}>
          <TotalIownComponent
            cryptos={props.cryptos}
            stocks={props.stocks}
            currency={props.currency}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Coming Soon!
        </TabPanel>
        <TabPanel value={value} index={2}>
          Coming Soon!
        </TabPanel>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => {
  const { cryptos, stocks } = state;
  return {
    cryptos: cryptos.cryptos,
    stocks: stocks,
    currency: cryptos.currency
  };
};

export default connect(mapStateToProps)(TabComponent);
