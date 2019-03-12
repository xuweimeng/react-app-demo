import React from 'react';
import {
	Menu, Icon
} from 'antd';
import MenuConfig from '../../router.config.js'
import './menu-sider.scss';
import { NavLink } from 'react-router-dom';

const SubMenu = Menu.SubMenu;

class MenuSider extends React.Component {
	componentWillMount() {
		 const menuTreeNode = this.renderMenu(MenuConfig);

      this.setState({
          menuTreeNode
      })
	}

	renderMenu =(data)=>{
    return data.map((item)=>{
      if(item.children){
        return (
          <SubMenu title={item.name} key={item.path}>
            { this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item key={item.path}>
        <Icon  type="pie-chart" />
        <span><NavLink to={item.path} replace>{item.name}</NavLink></span>
      </Menu.Item>
    })
  }
	render() {
		return (
			<div className="menu-sider">
				<Menu mode="inline">
					{ this.state.menuTreeNode }
				</Menu>
			</div>
		)
	}
}

export default MenuSider;