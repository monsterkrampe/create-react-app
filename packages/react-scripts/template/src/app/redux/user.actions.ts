import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

const dummyLogin = actionCreator('DUMMY_LOGIN');
const dummyLogout = actionCreator('DUMMY_LOGOUT');

export {
    dummyLogin,
    dummyLogout
};