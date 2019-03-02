import { combineReducers } from 'redux';
import comentariosReducer from './comentariosReducer';
import fotosReducer from './fotosReducer';

export default combineReducers({
	comentariosReducer,
	fotosReducer
});