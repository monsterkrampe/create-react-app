import React from 'react';
import { NavLink } from 'react-router-dom';

import { DashboardRouteType } from '../../Dashboard.screen';
import DashboardSidebarUserBar from './DashboardSidebarUserBar.container';

interface Props {
    routes: Array<DashboardRouteType>;
}

import styles from './dashboardSidebar.scss';

const DashboardSidebar: React.SFC<Props> = (props) => {
    return <div className={styles.sidebar}>
        <ul>
            {props.routes.map((r, index) => {
                return <li key={index} className={styles.item}>
                    <NavLink
                        to={r.link || r.path}
                        activeClassName={styles.linkActive}
                    >
                        {r.label}
                    </NavLink>
                </li>;
            })}
        </ul>
        <div className={styles.userBar}>
            <DashboardSidebarUserBar/>
        </div>
    </div>;
};

export default DashboardSidebar;