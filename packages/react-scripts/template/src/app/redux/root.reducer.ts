import userReducer, { UserState } from './user.reducer';
import dogReducer, { DogState } from '../screens/dashboard/screens/fetchingData/redux/dog.reducer';

export interface RootState {
    readonly user: UserState;
    readonly dog: DogState;
}

export const rootReducer = {
    user: userReducer,
    dog: dogReducer
};