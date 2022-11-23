import React from "react";
import Rout from "../../router/router";
import { Layout } from 'antd';
const {  Content } = Layout;

class Contents extends React.Component{
    state = {

    }
    render(){
        return <Content>
          <Rout />  
        </Content>
    }
}
export default Contents