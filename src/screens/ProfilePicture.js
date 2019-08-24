import React from "react";
import { Avatar, IconButton } from "@material-ui/core";

export default props => (
  <IconButton aria-label="user profile and settings">
    <Avatar
      alt="User Profile and Settings"
      style={{ width: 86, height: 86 }}
      src={props.url}
    />
  </IconButton>
);
