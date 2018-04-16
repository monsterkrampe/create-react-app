import React, { SyntheticEvent } from 'react';
import classNames from 'classnames';

import styles from './myButton.scss';

interface Props {
    label?: string;
    type?: 'primary' | 'danger';
    onClick?: (e: SyntheticEvent<HTMLAnchorElement>) => void;
}

const MyButton: React.SFC<Props> = (props) => {
    return <a
        className={classNames(
            styles.button,
            props.type === 'primary' && styles.buttonPrimary,
            props.type === 'danger' && styles.buttonDanger
        )}
        onClick={props.onClick}
    >
        {props.label}
    </a>;
};

MyButton.defaultProps = {
    type: 'primary'
};

export default MyButton;