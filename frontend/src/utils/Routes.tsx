import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import { Create } from '../components/Create';
import { List } from '../components/List';

export const Routes = () => (
    <Switch>
        <Route exact path="/">
            <List />
        </Route>
        <Route path="/create">
            <Create />
        </Route>
    </Switch>
);