import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

const newDogWanted = actionCreator('NEW_DOG_WANTED');
const fetchRandomDogPicture = actionCreator.async<{}, string>('FETCH_RANDOM_DOG_PICTURE');

export {
    newDogWanted,
    fetchRandomDogPicture
};