import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";
import useStyles from "./styles";
import auth from "../../auth";
import { withRouter } from "react-router";

const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/app" className={classes.linkStyle}>
              <MenuIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.linkStyle} to="/app/products">
              WalMart Products.
            </Link>
          </Typography>
          <Button color="inherit">
            <Link to="/app/contactUs" className={classes.linkStyle}>
              Contact Us
            </Link>
          </Button>
          <Button
            className={classes.linkStyle}
            onClick={() => {
              auth.logout(() => {
                props.history.push("/");
              });
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
