import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import reducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MainComponent from './components/mainComponent';

const store = createStore( reducer , applyMiddleware( thunk ) );

const App = _ => {
  return (
    <Provider store={ store } >
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </Provider>
  )
}

export default App
