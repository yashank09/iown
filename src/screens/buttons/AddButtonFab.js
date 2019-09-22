import React, { useState } from "react";

import { Fab, Menu, MenuItem } from "@material-ui/core";
import AddRoundedIcon from "@material-ui/icons/AddRounded";

export default props => {
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const styles = {
    addIcon: {
      position: "fixed",
      top: "86%",
      left: "80%",
      zIndex: 1001,
      color: "white",
      width: 68,
      height: 68
    }
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="Add IOWN"
        style={styles.addIcon}
        onClick={handleClick}
      >
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
