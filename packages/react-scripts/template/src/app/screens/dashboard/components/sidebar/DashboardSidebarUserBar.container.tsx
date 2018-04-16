import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UserType } from 'app/redux/user.reducer';
import { RootState } from 'app/redux/root.reducer';

interface ContainerStateProps {
    isUserLoggedIn: boolean;
    userData?: UserType;
}

type ContainerProps = ContainerStateProps;

const DashboardSidebarUserBar = connect<ContainerStateProps>(
    (state: RootState): ContainerStateProps => ({
        isUserLoggedIn: state.user.isLoggedIn,
        userData: state.user.data
    }),
)(class extends Component<ContainerProps> {
    render() {
        return <div>
            {!this.props.isUserLoggedIn
                ? 'Not logged in'
                : this.renderUser()}
        </div>;
    }

    renderUser() {
        if (!this.props.userData) {
            return;
        }

        const { userData } = this.props;

        return <strong>{userData.name1} {userData.name2}</strong>;
    }
});

export default DashboardSidebarUserBar;