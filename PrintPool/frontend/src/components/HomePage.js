import React, { Component } from "react";
import { BrowserRouter as BRouter, Switch, Route} from 'react-router-dom';
// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from "@mui/material/FormControl";
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import { FormControlLabel } from "@mui/material";
import Container from '@mui/material/Container';
import AppBar from './AppBar';
import MapView from "./MapView";

export default class HomePage extends Component{
    viewState = {
        lat: 37,
        lng: -12.4376,
        zoom: 8,
        width: 500,
        height: 500
      };
    

    render(){
        return <Container disableGutters={true} maxWidth='sx'>
                <AppBar/>
                <BRouter>
                    <Switch>
                        <Route exact path='/'>
                            <div>
                              <MapView viewState={this.viewState} vehicles={this.vehicles} />
                            </div>
                        </Route>
                        {/* <Route path='/profile' component={Profile}></Route> */}
                    </Switch>
                </BRouter>
            </Container>
                


            {/* <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography component='h4' variant='h4'>
                        Home Page mfof
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl component="fieldset">

                    </FormControl>
                </Grid>
            </Grid>; */}
        // return (
            
        // );
    }
}