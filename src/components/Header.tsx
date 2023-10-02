// Header.tsx

import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

interface HeaderProps {
  toggleDrawer: (
    open: boolean,
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  classes: any;
  searchValue: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderProps> = ({
  toggleDrawer,
  classes,
  searchValue,
  handleSearchChange,
}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.grow}>
          Kendra Connector Management
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            value={searchValue}
            onChange={handleSearchChange}
            onKeyPress={(event: any) => {
              if (event.key === "Enter") {
                return null;
              }
            }}
          />
        </div>
        <div className={classes.grow} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
