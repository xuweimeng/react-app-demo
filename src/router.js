import React from 'react';
import {
	HashRouter as Router, Route, Switch
} from 'react-router-dom';
import App from './App.js';
import Layouts from './containers/layouts/index.js';
import Login from './containers/login/index.js';
import Dashboard from './containers/dashboard/index.js';
import BasicForm from './containers/form/basic-form.js';
import DdForm from './containers/form/dd-form.js';

class IRouter extends React.Component {
	render() {
		return (
			<div>
				<Router>
					<App>
						<Switch>
							<Route path="/login" component={Login} />
							<Route path = "/" render = {
								() => 
								<Layouts>
									<Switch>
										<Route path='/dashboard' component={Dashboard} />
										<Route path='/form/basic-form' component={BasicForm} />
										<Route path='/form/dd-form' component={DdForm} />
									</Switch>
								</Layouts>
							} />
						</Switch>
					</App>
				</Router>
			</div>
		)
	}
}

export default IRouter;