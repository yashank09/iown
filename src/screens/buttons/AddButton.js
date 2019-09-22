import React, { useState } from "react";
import "./AddButton.css";

import { useTheme, IconButton, Button } from "@material-ui/core";
import AddRoundedIcon from "@material-ui/icons/AddRounded";

export default props => {
  const [showOptions, toggleOptions] = useState(false);

  const theme = useTheme();
  const styles = {
    addIcon: {
      margin: 32,
      marginTop: 48,
      backgroundColor: theme.palette.secondary.main,
      color: "white"
    }
  };

  return !showOptions ? (
    <IconButton
      aria-label="Add IOWN"
      style={styles.addIcon}
      className="buttonShake"
      onClick={() => toggleOptions(true)}
    >
      <AddRoundedIcon fontSize="large" />
    </IconButton>
  ) : (
    <>
      <div>
        <Button
          variant="contained"
          color="primary"
          className="topButton"
          onClick={props.addCrypto}
        >
          Add Crypto
        </Button>
      </div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          className="middleButton"
          onClick={props.addStock}
        >
          Add Stock
        </Button>
      </div>
      <div>
        <Button
          variant="contained"
          className="bottomButton"
          onClick={props.addEstate}
        >
          Add Estate
        </Button>
      </div>
    </>
  );
};
