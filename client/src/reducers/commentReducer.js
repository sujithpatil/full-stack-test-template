import * as actionTypes from './actions';

const initialState = {
    comments: [],
    isLoading: false
}

const reducer = ( state = initialState, action ) => {
    
    switch ( action.type ) {
        case actionTypes.FETCH_COMMENTS:
            return {
                ...state,
                comments: action.data
            };
        case actionTypes.IS_LOADING:
            return {
                ...state,
                isLoading: action.data
            }
        default:
            return state;
    }
}

export default reducer;