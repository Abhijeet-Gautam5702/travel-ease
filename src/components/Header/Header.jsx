import React from "react";
import searchIcon from "./searchWhite.png";
import "./style";
import headerStyles from "./style";
import { Autocomplete } from "@react-google-maps/api";

import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import { SearchIcon } from "@material-ui/icons/Search";

export default function Header() {
  return (
    <header style={headerStyles.header}>
      <div className="logo" style={headerStyles.logo}>
        <span style={headerStyles.logo.span}>Travel</span>
        Ease
      </div>
      <div className="searchPlaces" style={headerStyles.searchPlaces}>
        <span style={headerStyles.searchPlaces.span}>Explore</span>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          style={headerStyles.searchPlaces.searchInput}
        />
        {/* <div
          className="searchIconBox"
          style={headerStyles.searchPlaces.searchIconBox}
        >
          <img
            src={searchIcon}
            alt="searchIcon"
            style={headerStyles.searchPlaces.searchIconBox.img}
          />
        </div> */}
      </div>
    </header>
  );
}
/*
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Ease
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
*/
