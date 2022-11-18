import React from "react";
import {HashRouter,Switch,BrowserRouter,Route,NavLink,Link} from "react-router-dom"

import Layout from "../views/layout";
import Login from "../views/login";
// let Layout = React.lazy(() => {import("../views/layout")});
// let Login = React.lazy(() => {import("../views/login")});
class Router extends React.Component{
    render(){
        return <HashRouter>
            {/* <NavLink to="/login">login</NavLink>
            <NavLink to="/layout">layout</NavLink> */}
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/" component={Layout}></Route>
                <Route path="/404" render={() => {<div>404</div>}}></Route>
            </Switch>
        </HashRouter>
    }
}

export default Router