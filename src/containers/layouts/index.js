import React from 'react';
import { Layout } from 'antd';
import './index.scss';
import MenuSider from './menu-sider.js';

const {
	Header, Footer, Sider, Content
} = Layout;

class Layouts extends React.Component {
	render() {
		return (
			<Layout>
				<Sider><MenuSider /></Sider>
				<Layout>
					<Header>Header</Header>
	        <Content>{this.props.children}</Content>
	        <Footer>Footer</Footer>
				</Layout>
			</Layout>
		)
	}
}

export default Layouts;