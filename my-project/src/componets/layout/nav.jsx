import React from "react";
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import routerList from '../../router/routerList';
let MenuItemFun = (arr = []) => {
    return arr.map((v => {
        let Icon = v.icon;
        if (!v.children) {
            return <Menu.Item key={v.key} icon={Icon ? <Icon /> : <></>}>
                <Link className="link-name" to={v.path}>{v.title}</Link>
            </Menu.Item>
        } else {
            return <Menu.SubMenu key={v.key} title={v.title} icon={Icon ? <Icon /> : <></>}>
                {MenuItemFun(v.children)} 
            </Menu.SubMenu>
        }
    }))
}

class Nav extends React.Component {
    render() {
        return <div className="nav">
            <Menu mode="inline" defaultSelectedKeys={['1']}>
                {MenuItemFun(routerList)}
            </Menu>
        </div>
    }
}
export default Nav