import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';

interface Props {

}

type ScreenProps = Props & RouteComponentProps<{ myNumber: number }>;

class ScreenWithParam extends Component<ScreenProps> {
    render() {
        return <div>
            URL Parameter: <strong>{this.props.match.params.myNumber}</strong>
        </div>;
    }
}

export default ScreenWithParam;