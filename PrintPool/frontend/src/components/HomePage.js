import React, { Component } from "react";
import { BrowserRouter as BRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from "@mui/material/FormControl";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { FormControlLabel } from "@mui/material";
import Container from '@mui/material/Container';

import Profile from './Profile';
import AccountSettings from "./AccountSettings";
import AppBar from './AppBar';
import MainMap from "./MainMap";

export default class HomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <Container disableGutters={true} maxWidth='sx'>
                <AppBar/>
                <BRouter>
                    <Switch>
                        <Route exact path='/'>
                            <MainMap/>
                        </Route>
                        <Route path='/profile' component={Profile}></Route>
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