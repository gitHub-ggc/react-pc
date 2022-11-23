import React from "react";
// import MyRouter from "../router/router";

import { Layout } from 'antd';

import Sider from "../componets/layout/sider";
import Header from "../componets/layout/head";
import Content from "../componets/layout/content";
import Footer from "../componets/layout/footer";

import "../css/layout/layout.css"

class MyLayout extends React.Component {
    render() {
        return <div id="layout">
            <Layout>
                <Sider />
                <Layout>
                    <Header/>
                    <Content>
                            {/* <MyRouter></MyRouter> */}
                    </Content>
                    <Footer />
                </Layout>
            </Layout>
        </div>
    }
}

export default MyLayout