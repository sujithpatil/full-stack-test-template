import React from "react";
import { connect } from 'react-redux';
import { fetchComments } from "../../reducers/actionCreator";

import Comment from './comment';
import Loader from '../Loader';

import './index.css';

class Comments extends React.Component {

    render() {
        
        const { comment : {
            comments,
            isLoading
        } } = this.props;

        const markup = isLoading ? 
                        <Loader /> : 
                        (
                            comments.length === 0 ? 
                            <p>Data will appear here</p> : 
                            comments.map( comment => <Comment key={ comment.id } { ...comment } /> )
                        );

        return <div className='comments-container'>
            <div className='holder'>
                { markup }
            </div>
        </div>
    }

}

const mapStateToProps = ( state ) => {
    return state
};

const mapDispatchToProps = dispatch => {
    return {
        fetchComments: () => dispatch( fetchComments() )
    }
};

export default connect( mapStateToProps, mapDispatchToProps ) (Comments);