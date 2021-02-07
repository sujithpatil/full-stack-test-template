import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchComments, deleteComments } from "../../reducers/actionCreator";

import './index.css';

const Datafetcher = ( props ) => {

    const { type, label, fetchData, showInput, deleteData , comment: { comments } } = props;

    const [ deleteId, setDeleteId ] = useState(  );

    const handleChange = ( event ) => {
        setDeleteId( event.target.value );
    }

    const deleteDataHandler = () => {
        comments.length > 0 && deleteData( deleteId );
    }

    const callback = type === 'fetch' ? fetchData : deleteDataHandler;

    return <div className='data-cnt'>
        { showInput && <input type='text' onChange={ handleChange } className='input' name='email-id' />}
        <button onClick={ callback } className='btn data-btn'>
            { label }
        </button>
    </div>
};

const mapStateToProps = ( state ) => {
    return state;
};

const mapDispatchToProps = dispatch => {
     return {
         fetchData: () => dispatch( fetchComments() ),
         deleteData: (id) => dispatch( deleteComments(id) )
     }
};

export default connect( mapStateToProps, mapDispatchToProps ) ( Datafetcher );