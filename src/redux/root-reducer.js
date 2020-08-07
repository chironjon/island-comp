import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import directoryReducer from './directory/directory.reducer';
import collectionReducer from './collection/collection.reducer';

export default combineReducers({
  user: userReducer,
  directory: directoryReducer,
  collection: collectionReducer
})