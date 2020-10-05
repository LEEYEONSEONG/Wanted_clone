import { combineReducers } from 'redux';
import userLoggedReducer from './userLoggedReducer';
import userSearchInput from './userSearchInput';
import searchedDataReducer from './searchedData';
import recruitListReducer from './recruitList';

export default combineReducers({
  userLoggedReducer,
  userSearchInput,
  searchedDataReducer,
  recruitListReducer,
});
