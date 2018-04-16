import { all } from 'redux-saga/effects';
import { watchNewDogWantedSaga } from '../screens/dashboard/screens/fetchingData/redux/dog.sagas';

export default function* rootSaga() {
    yield all([
        watchNewDogWantedSaga(),
    ]);
}
