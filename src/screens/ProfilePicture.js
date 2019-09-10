import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

export default props => (
  <IconButton aria-label="user profile and settings">
    {props.url ? (
      <Avatar
        alt="User Profile and Settings"
        style={{ width: 84, height: 84 }}
        src={props.url + "?height=500"}
      />
    ) : (
      <Skeleton variant="circle" width={90} height={90} />
    )}
  </IconButton>
);
