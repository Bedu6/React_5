import {
	TRAER_COMENTARIOS, ERROR, CARGANDO, CAMBIO_TITULO, CAMBIO_CONTENIDO, AGREGADO
} from '../types/comentariosTypes';

const INITIAL_STATE = {
	comentarios: [],
	cargando: false,
	error: '',
	titulo: '',
	contenido: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {

		case TRAER_COMENTARIOS:
			return { ...state, comentarios: action.payload, cargando: false };

		case ERROR:
			return { ...state, error: action.payload, cargando: false };

		case CARGANDO:
			return { ...state, cargando: true };

		case CAMBIO_TITULO:
			return { ...state, titulo: action.payload };

		case CAMBIO_CONTENIDO:
			return { ...state, contenido: action.payload };

		case AGREGADO:
			return { ...state, titulo: '', contenido: '', cargando: false, comentarios: [] };

		default: return state;
	}
};