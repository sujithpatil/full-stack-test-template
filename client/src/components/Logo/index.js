import React from 'react';

import './index.css';

const Logo = ( props ) => {

    const { path } = props;

    return <div className='logo-holder'>
        <img src={ path } />
    </div>

}

export default Logo;