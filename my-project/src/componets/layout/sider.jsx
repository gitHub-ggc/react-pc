import React from "react";
import '../../css/layout/sildess.css'
import { Layout } from 'antd';
import Nav from "./nav";
const { Sider } = Layout;
class Siders extends React.Component {

    render() {
        return <div className="sidesId">
            <Sider>
                <h1>侧边导航</h1>
                <Nav/>
            </Sider>
        </div>
    }
}
export default Siders