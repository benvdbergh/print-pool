import React, { Component } from "react";
import Profile from './Profile';
import AccountSettings from "./AccountSettings";
import { BrowserRouter as BRouter, Switch, Route, Link, Redirect} from 'react-router-dom';

export default class HomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <BRouter>
                <Switch>
                    <Route exact path='/'><p>This is  the HomePage</p></Route>
                    <Route path='/profile' component={Profile}></Route>
                </Switch>
            </BRouter>
            
        );
    }
}