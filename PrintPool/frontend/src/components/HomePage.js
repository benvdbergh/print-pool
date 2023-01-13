import React, { Component } from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Container from '@mui/material/Container';
import MapView from "./MapView";

export default class HomePage extends Component{
    viewState = {
        lat: 50,
        lng: 4.5,
        zoom: 6,
        width: 500,
        height: 500
      };
    

    render(){
        return <Container disableGutters={true} maxWidth='sx' sx={{height: '100vh'}}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/'>
                            <MapView viewState={this.viewState} vehicles={this.vehicles}/>
			                
                        </Route>
                        {/* <Route path='/profile' component={Profile}></Route> */}
                    </Switch>
                </BrowserRouter>
            </Container>
    }
}