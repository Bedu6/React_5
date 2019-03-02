import axios from 'axios';
import {
	TRAER_COMENTARIOS, ERROR, CARGANDO
} from '../types/comentariosTypes';

export const traerComentarios = () => async (dispatch) => {
	dispatch({ type: CARGANDO });

	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
		
		dispatch({
			type: TRAER_COMENTARIOS,
			payload: response.data
		});
	}
	catch(error) {
		dispatch({
			type: ERROR,
			payload: error.message
		});
	}
};