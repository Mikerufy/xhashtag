import React from 'react'
import Grid from '@mui/material/Grid'
import './Part1.css'
import Appbar from '../Appbar';

const Part1 = () => {
    return ( 
        <Grid container md= {12} className = "p1">
            <Grid item md = {12}>
                <Appbar/>
            </Grid>
            <Grid item md={12} className = "p1-2">
            Hello
            </Grid>
        </Grid>
     );
}
 
export default Part1;