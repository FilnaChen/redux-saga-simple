import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas.js';

function reducer(state,action){
	switch(action.type){
		case 'change':
			return {
				res: action.value
			}
		case 'test-saga':
			return {
				res:action.value
			}	
	}
}
var sagaMiddleware=createSagaMiddleware();
var middlewares=[sagaMiddleware];
var store=createStore(reducer,
	applyMiddleware(...middlewares)
	);
sagaMiddleware.run(rootSaga);
export default store;