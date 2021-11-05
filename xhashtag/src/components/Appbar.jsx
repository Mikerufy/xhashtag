import React from "react";
import Grid from "@mui/material/Grid";
import './Appbar.css'

const Appbar = () => {
  return (
    <Grid container md={12} className = "app-container">
      <Grid item md={1} className = "app-img"></Grid>

      <Grid item md={6}>
          <a className = "app-links">Hello</a>
          <a className = "app-links">Hello</a>
          <a className = "app-links">Hello</a>
          <a className = "app-links">Hello</a>
      </Grid>
      <Grid item container md={5}>
        <Grid item md={6} className = "app-btn">
          Contact US
        </Grid>
        <Grid item md={6} className = "app-btn">
          #Selena NFTs
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Appbar;
