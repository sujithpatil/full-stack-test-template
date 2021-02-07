import React from 'react';

const Comment = ( props ) => {
    const { id, email } = props;
    return <div className='comment'>
        <span className='id'> { id } </span>
        <span>:</span>
        <span className='email'> { email } </span>
    </div>
}

export default Comment;