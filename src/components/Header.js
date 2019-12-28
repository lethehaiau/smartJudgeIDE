import React from "react";
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./Header.css";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };
  return (
    <div className="Header">
      <Appbar position="static" color="inherit">
        <Toolbar>
          <IconButton
            edge="start"
            className="Header-menu-button"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className="Header-title"
            onClick={handleClick}
          >
            Smart Judge
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </Appbar>
    </div>
  );
};

export default Header;
