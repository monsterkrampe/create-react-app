import React, { Component } from 'react';

import MyButton from 'shared/components/myButton/MyButton.component';

class DumbComponentScreen extends Component {
    render() {
        return <div>
            <MyButton label="Primary button"/>
            <br/><br/>
            <MyButton label="Danger button" type="danger" />
        </div>;
    }
}

export default DumbComponentScreen;