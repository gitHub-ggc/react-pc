import React from "react";
import {HashRouter,Switch,BrowserRouter,Route,Redirect} from "react-router-dom"

import Disboard from "../views/disboard";
import Introduce from "../views/introduce";
import Swiper from "../views/swiper";
class myRouter extends React.Component{
    render(){
        return <HashRouter>
            <Switch>
                <Redirect path="/" exact to="/introduce"></Redirect>
                <Route path="/disboard" component={Disboard}></Route>
                <Route path="/introduce" component={Introduce}></Route>
                <Route path="/swiper" component={Swiper}></Route>
                <Redirect path="/*" to="/404"></Redirect>
            </Switch>
        </HashRouter>
    }
}
export default myRouter