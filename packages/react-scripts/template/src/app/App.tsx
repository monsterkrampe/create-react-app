import React, { Component } from 'react';
import { Route, RouteComponentProps, withRouter } from 'react-router';

import 'shared/styles/global.scss';

import HomepageScreen from './screens/homepage/Homepage.screen';
import DashboardScreen from './screens/dashboard/Dashboard.screen';

const App = withRouter(
    class extends Component<RouteComponentProps<{}>> {
        render() {
            return (
                <>
                    <Route exact={true} path="/" component={HomepageScreen}/>
                    <Route path="/dashboard" component={DashboardScreen}/>
                </>
            );
        }
    }
);

export default App;