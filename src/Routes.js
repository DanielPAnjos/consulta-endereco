import React from "react";

import { BrowserRouter, Route, Switch} from 'react-router-dom';


import Login from './Pages/Login';
import Query from './Pages/Query';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/query' component={Query} />
            </Switch>
            
        </BrowserRouter>
    );
}