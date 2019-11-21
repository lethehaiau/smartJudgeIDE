import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import BuildIcon from "@material-ui/icons/Build";
import Snackbar from "@material-ui/core/Snackbar";
import "./SimpleSnackbar.css";

const SimpleSnackbar = ({ open, onClose, message }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    onClose();
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      open={open && !!message}
      // autoHideDuration={6000}
      onClose={handleClose}
      ContentProps={{
        "aria-describedby": "message-id"
      }}
      className="snack-bar"
      message={
        <span id="message-id" className="snack-bar-message">
          <BuildIcon color="secondary" />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      ]}
    />
  );
};

export default SimpleSnackbar;
