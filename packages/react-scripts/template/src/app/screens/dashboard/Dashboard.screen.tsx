import React, { Component, ComponentClass, StatelessComponent } from 'react';

import DashboardSidebar from './components/sidebar/DashboardSidebar.component';
import DashboardContent from './components/content/DashboardContent.component';

import DumbComponentScreen from './screens/dumbComponent/DumbComponent.screen';
import ComponentWithStateScreen from './screens/ComponentWithState.screen';
import ScreenWithParam from './screens/screenWithParam/ScreenWithParam.screen';
import ScrollRestoration from './screens/scrollRestoration/ScrollRestoration.screen';
import ContainerComponentScreen from './screens/containerComponent/ContainerComponent.screen';

import styles from './dashboard.scss';
import FetchingDataScreen from './screens/fetchingData/FetchingData.screen';

export type DashboardRouteType = {
    path: string;
    link?: string;
    label: string;
    component?: ComponentClass | StatelessComponent;
};

const DASHBOARD_ROUTES: Array<DashboardRouteType> = [
    {
        path: '/dashboard/dumbComponent',
        label: 'Dumb presentational component',
        component: DumbComponentScreen
    },
    {
        path: '/dashboard/componentWithState',
        label: 'Component with local state',
        component: ComponentWithStateScreen
    },
    {
        path: '/dashboard/containerComponent',
        label: 'Container component (connected to redux)',
        component: ContainerComponentScreen
    },
    {
        path: '/dashboard/screenWithParams/:myNumber',
        link: '/dashboard/screenWithParams/1237',
        label: 'Screen with dynamic URL parameter',
        component: ScreenWithParam
    },
    {
        path: '/dashboard/scrollRestoration',
        label: 'Scroll position restoration',
        component: ScrollRestoration
    },
    {
        path: '/dashboard/fetchingData',
        label: 'Fetching data from API into redux',
        component: FetchingDataScreen
    },
    {
        path: '/dashboard/formValidation',
        label: 'Form validation'
    }

];

class DashboardScreen extends Component {
    render() {
        return <div className={styles.dashboard}>
            <DashboardSidebar routes={DASHBOARD_ROUTES}/>
            <DashboardContent routes={DASHBOARD_ROUTES}/>
        </div>;
    }
}

export default DashboardScreen;