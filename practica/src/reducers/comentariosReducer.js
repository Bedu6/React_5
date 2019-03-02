import {
	TRAER_COMENTARIOS, ERROR, CARGANDO
} from '../types/comentariosTypes';

const INITIAL_STATE = {
	comentarios: [],
	cargando: false,
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TRAER_COMENTARIOS:
			return { ...state, comentarios: action.payload, cargando: false };
		case ERROR:
			return { ...state, error: action.payload, cargando: false };
		case CARGANDO:
			return { ...state, cargando: true };
		default: return state;
	}
};