import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { AsyncModel } from 'shared/interfaces/interfaces';
import { fetchRandomDogPicture } from './dog.actions';

export type DogState = {
    picture?: AsyncModel<string>;
};

const INITIAL_STATE: DogState = {
};

const dogReducer = reducerWithInitialState(INITIAL_STATE)
    .case(fetchRandomDogPicture.started, (state): DogState => {
        return {
            ...state,
            picture: {
                ...state.picture,
                isFetching: true
            }
        };
    })
    .case(fetchRandomDogPicture.done, (state, payload): DogState => {
        return {
            ...state,
            picture: {
                ...state.picture,
                isFetching: false,
                payload: payload.result
            }
        };
    });

export default dogReducer;