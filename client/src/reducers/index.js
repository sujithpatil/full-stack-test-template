import { combineReducers } from 'redux';

import comment from './commentReducer';

export const allReducer = combineReducers({
    comment
})

export default allReducer
