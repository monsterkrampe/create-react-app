import React from 'react';

import { UserType } from 'app/redux/user.reducer';

interface Props {
    user?: UserType;
}

const UserCard: React.SFC<Props> = (props) => {
    const { user } = props;

    if (!user) {
        return null;
    }

    return <div>
        <ul>
            <li>Name1: {user.name1}</li>
            <li>Name2: {user.name2}</li>
            <li>Age: {user.age}</li>
            <li>Address: {user.address}</li>
        </ul>
    </div>;
};

export default UserCard;