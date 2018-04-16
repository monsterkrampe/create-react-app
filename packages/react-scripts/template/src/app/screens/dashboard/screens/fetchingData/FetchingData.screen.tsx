import React, { Component } from 'react';
import { connect } from 'react-redux';

import { RootState } from 'app/redux/root.reducer';
import { newDogWanted } from './redux/dog.actions';

import MyButton from 'shared/components/myButton/MyButton.component';
import { AsyncModel } from 'shared/interfaces/interfaces';

interface ContainerStateProps {
    dogPicture?: AsyncModel<string>;
}

interface ContainerDispatchProps {
    onNewDogWantedClicked: () => void;
}

type FetchingDataScreenProps = ContainerDispatchProps & ContainerStateProps;

const FetchingDataScreen = connect<void, ContainerDispatchProps>(
    (state: RootState): ContainerStateProps => ({
        dogPicture: state.dog.picture
    }),
    (dispatch): ContainerDispatchProps => ({
        onNewDogWantedClicked: () => dispatch(newDogWanted())
    })
)(class extends Component<FetchingDataScreenProps> {
    render() {
        return <div>
            <div>
                <MyButton
                    label="I want new dog picture!"
                    onClick={this.props.onNewDogWantedClicked}
                />

                {this.props.dogPicture && this.props.dogPicture.isFetching && <>
                    loading...
                </>}
            </div>

            {this.props.dogPicture && <img src={this.props.dogPicture.payload} style={{ maxWidth: 400 }}/>}
        </div>;
    }
});

export default FetchingDataScreen;