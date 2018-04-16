import { SagaIterator, delay } from 'redux-saga';
import { call, takeLatest } from 'redux-saga/effects';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';

import { fetchRandomDogPicture, newDogWanted } from './dog.actions';

const API = {
    fetchRandomDogPicture: () => {
        return fetch('https://random.dog/woof.json').then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                throw response;
            }
        });
    }
};

const fetchRandomDogPictureWorker = bindAsyncAction(fetchRandomDogPicture)(
    function* (): SagaIterator {
        const response = yield call(API.fetchRandomDogPicture);
        return response.url;
    }
);

export function* watchNewDogWantedSaga() {
    yield takeLatest(
        newDogWanted.type,
        fetchRandomDogPictureWorker
    );
}