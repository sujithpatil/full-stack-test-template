import React from 'react';

import Comments from '../comments';
import DataFetcher from '../dataFetcher';
import Logo from '../Logo';

import './index.css'

class MainComponent extends React.Component {
    render() {
        return <div className='main-comp'>
            <Logo path='/flipper.svg' />
            <Comments />
            <div className='container'>
                <DataFetcher type='fetch' label='Pull Data'/>
                <DataFetcher type='delete' label='Remove' showInput={ true } />
            </div>
        </div>
    }
}

export default MainComponent;