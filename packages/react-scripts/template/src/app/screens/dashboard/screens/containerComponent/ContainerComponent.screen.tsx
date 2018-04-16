import React, { Component } from 'react';
import { connect } from 'react-redux';

import { RootState } from 'app/redux/root.reducer';
import { UserType } from 'app/redux/user.reducer';
import { dummyLogin, dummyLogout } from 'app/redux/user.actions';

import MyButton from 'shared/components/myButton/MyButton.component';
import UserCard from 'shared/components/userCard/UserCard.component';

interface ContainerStateProps {
    isUserLoggedIn: boolean;
    userData?: UserType;
}

interface ContainerDispatchProps {
    onLoginClicked: () => void;
    onLogoutClicked: () => void;
}

type ContainerProps = ContainerStateProps & ContainerDispatchProps;

const ContainerComponentScreen = connect<ContainerStateProps, ContainerDispatchProps>(
    (state: RootState): ContainerStateProps => ({
        isUserLoggedIn: state.user.isLoggedIn,
        userData: state.user.data
    }),
    (dispatch): ContainerDispatchProps => ({
        onLoginClicked: () => dispatch(dummyLogin()),
        onLogoutClicked: () => dispatch(dummyLogout()),
    })
)(class extends Component<ContainerProps> {
    render() {
        return <>
            {!this.props.isUserLoggedIn
                ? <MyButton
                    label="Dummy Login"
                    onClick={this.props.onLoginClicked}
                />
                : <MyButton
                    label="Dummy logout"
                    type="danger"
                    onClick={this.props.onLogoutClicked}
                />
            }

            <br/><br/>
            <hr/>
            <br/>

            User status: {this.props.isUserLoggedIn
                ? <strong>Logged in</strong>
                : 'Logged out'
            }

            {this.props.userData && <UserCard user={this.props.userData}/>}
        </>;
    }
});

export default ContainerComponentScreen;