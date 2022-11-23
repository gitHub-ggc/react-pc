import React from "react";
import {HashRouter,Switch,Route} from "react-router-dom"

import Layout from "../views/layout";
import Login from "../views/login";
import Wrins from "../views/wrin";
// let Layout = React.lazy(() => {import("../views/layout")});
// let Login = React.lazy(() => {import("../views/login")});
class Router extends React.Component{
    render(){
        return <HashRouter>
            {/* <NavLink to="/login">login</NavLink>
            <NavLink to="/layout">layout</NavLink> */}
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/404" component={Wrins}></Route>
                <Route path="/" component={Layout}></Route>
            </Switch>
        </HashRouter>
    }
}

export default Router