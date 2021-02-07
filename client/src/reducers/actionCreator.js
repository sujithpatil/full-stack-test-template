import * as actions from './actions';

export const fetchComments = () => {
    return ( dispatch ) => {
        const url = 'http://localhost:3001/get/comments';
        dispatch({
            type: actions.IS_LOADING,
            data: true
        })
        fetch( url )
            .then( response => response.json())
            .then( data => {
                dispatch({
                    type: actions.FETCH_COMMENTS,
                    data
                });
                dispatch({
                    type: actions.IS_LOADING,
                    data: false
                })
            } );
    }
}

export const deleteComments = ( id ) => {
    return ( dispatch ) => {
        const url = `http://localhost:3001/comments/${id}`;
        dispatch({
            type: actions.IS_LOADING,
            data: true
        })
        fetch( url, {
            method: 'DELETE'
        } )
            .then( response => response.json())
            .then( data => {
                dispatch({
                    type: actions.FETCH_COMMENTS,
                    data
                });
                dispatch({
                    type: actions.IS_LOADING,
                    data: false
                })
            } );
    }
}