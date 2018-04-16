import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { ScrollContext } from 'react-router-scroll-4';

import { rootReducer, RootState } from './app/redux/root.reducer';
import rootSaga from './app/redux/root.sagas';

import App from './app/App';

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
    collapsed: true
});

const store = createStore(
    combineReducers<RootState>({
        ...rootReducer,
        router: routerReducer,
    }),
    applyMiddleware(sagaMiddleware, logger, routerMiddleware(history))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ScrollContext>
                <App/>
            </ScrollContext>
        </ConnectedRouter>
    </Provider>
    ,
    document.getElementById('root') as HTMLElement
);
