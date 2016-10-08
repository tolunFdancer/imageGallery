import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import Gallery from './Gallery';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redun-sage';
import reducer from './reducer';
import { Provider } from 'react-redux';
import { watchForLoadImages } from './saga';


/*const store = createStore(reducer);*/
const store = createStore(
    reducer,
    applyMiddleware(createSagaMiddleware(watchForLoadImages))
);

ReactDom.render(
    <Provider store={store} >
        <Gallery />
    </Provider>,
    document.getElementById("root")
);