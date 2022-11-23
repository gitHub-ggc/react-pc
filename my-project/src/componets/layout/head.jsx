import React from "react";

import '../../css/layout/header.css'

import { Layout } from 'antd';
const { Header } = Layout;

class Headers extends React.Component {
    state = {

    }
    render() {
        return <div id="header">
            <Header>
                自己设置的头部
            </Header>
        </div>
    }
}
export default Headers