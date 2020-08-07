import COLLECTION_DATA from './collection.data'

const INITIAL_STATE = {
  collections: COLLECTION_DATA
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default collectionReducer;