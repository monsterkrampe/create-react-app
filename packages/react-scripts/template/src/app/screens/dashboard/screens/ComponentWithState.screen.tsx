import React, { Component } from 'react';

import MyButton from 'shared/components/myButton/MyButton.component';

interface Props {

}

interface State {
    isAdditionalInfoVisible: boolean;
}

class ComponentWithStateScreen extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            isAdditionalInfoVisible: false
        };
    }

    render() {
        return <div>
            <MyButton
                label="Show/Hide additional information"
                onClick={() => this.setState({
                    // toggle between true and false
                    isAdditionalInfoVisible: !this.state.isAdditionalInfoVisible
                })}
            />

            {this.renderAdditionalInfo()}
        </div>;
    }

    renderAdditionalInfo() {
        if (this.state.isAdditionalInfoVisible) {
            return <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae corporis ducimus esse iste molestiae natus quia suscipit? Aperiam, commodi recusandae.
            </p>;
        } else {
            return null;
        }
    }
}

export default ComponentWithStateScreen;