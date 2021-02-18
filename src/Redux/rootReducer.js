import { combineReducers } from 'redux';

import toggleReducer from '../Toggle/reducer';
import moviesReducer from '../Movies/reducer';

const rootReducer = combineReducers({
  toggleReducer,
  moviesReducer
})

export default rootReducer