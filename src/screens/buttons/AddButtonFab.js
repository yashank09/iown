import React, { useState } from "react";

import { useTheme, Fab, Menu, MenuItem } from "@material-ui/core";
import AddRoundedIcon from "@material-ui/icons/AddRounded";

export default props => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const theme = useTheme();
  const styles = {
    addIcon: {
      left: "50%",
      marginTop: "68%",
      backgroundColor: theme.palette.secondary.main,
      color: "white",
      width: 68,
      height: 68
    }
  };

  return (
    <>
      <Fab aria-label="Add IOWN" style={styles.addIcon} onClick={handleClick}>
        <AddRoundedIcon fontSize="large" />
      </Fab>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={props.addCrypto}>Add Crypto</MenuItem>
        <MenuItem onClick={handleClose}>Add Stock</MenuItem>
        <MenuItem onClick={handleClose}>Add Estate</MenuItem>
      </Menu>
    </>
  );
};
