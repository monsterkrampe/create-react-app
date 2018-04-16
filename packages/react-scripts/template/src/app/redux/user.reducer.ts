import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { dummyLogin, dummyLogout } from './user.actions';

export type UserType = {
    name1: string;
    name2: string;
    age: number;
    address?: string;
};

export type UserState = {
    isLoggedIn: boolean;
    data?: UserType;
};

const INITIAL_STATE: UserState = {
    isLoggedIn: false
};

const userReducer = reducerWithInitialState(INITIAL_STATE)
    .case(dummyLogin, (state): UserState => {
        return {
            ...state,
            isLoggedIn: true,
            data: {
                name1: 'Sergey',
                name2: 'Rizovs',
                age: 33,
                address: 'Somewhere in Kreischa'
            }
        };
    })
    .case(dummyLogout, (state): UserState => {
        return {
            ...state,
            isLoggedIn: false,
            data: undefined
        };
    });

export default userReducer;