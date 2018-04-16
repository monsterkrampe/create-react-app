import React from 'react';
import { Route } from 'react-router-dom';

import { DashboardRouteType } from '../../Dashboard.screen';

import styles from './dashboardContent.scss';

interface Props {
    routes: Array<DashboardRouteType>;
}

const DashboardContent: React.SFC<Props> = (props) => {
    return <div className={styles.content}>
        {props.routes.map((r, index) => {
            return <Route
                key={index}
                path={r.path}
                component={r.component ? r.component : undefined}
            />;
        })}
    </div>;
};

export default DashboardContent;