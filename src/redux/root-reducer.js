import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import directoryReducer from './directory/directory.reducer';
import collectionReducer from './collection/collection.reducer';
import infoReducer from './info/info.reducer';
import inputReducer from './input/input.reducer';

export default combineReducers({
  user: userReducer,
  directory: directoryReducer,
  collections: collectionReducer,
  info: infoReducer,
  input: inputReducer
})