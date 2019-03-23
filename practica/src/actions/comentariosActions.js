import axios from 'axios';
import {
	TRAER_COMENTARIOS, ERROR, CARGANDO, AGREGADO, CAMBIO_TITULO, CAMBIO_CONTENIDO, EDITADO
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

export const cambioInput = (caso, texto) => (dispatch) => {
	dispatch({
		type: caso,
		payload: texto
	});
};

export const agregar = (cuerpo) => async (dispatch) => {
	dispatch({ type: CARGANDO });

	try {
		await axios.post('https://jsonplaceholder.typicode.com/comments', cuerpo);
		
		window.Materialize.toast(
			'¡Comentario agregado exitosamente!',
			5 * 1000
		);

		dispatch({ type: AGREGADO });
	}
	catch (error) {
		window.Materialize.toast(
			'Algo falló, intente despúes.',
			5 * 1000
		);
		dispatch({ type: ERROR });
	}
};

export const editar = (cuerpo, id) => async (dispatch) => {
	dispatch({ type: CARGANDO });

	try {
		await axios.put(`https://jsonplaceholder.typicode.com/comments/${id}`, cuerpo);
		
		window.Materialize.toast(
			'¡Comentario editado exitosamente!',
			5 * 1000
		);

		dispatch({ type: EDITADO });
	}
	catch (error) {
		window.Materialize.toast(
			'Algo falló, intente despúes.',
			5 * 1000
		);
		dispatch({ type: ERROR });
	}
};

export const traerUnComentario = (id) => async (dispatch) => {
	dispatch({ type: CARGANDO });

	try {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`);

		dispatch({
			type: CAMBIO_TITULO,
			payload: response.data.email
		});

		dispatch({
			type: CAMBIO_CONTENIDO,
			payload: response.data.body
		})
	}
	catch(error) {
		dispatch({
			type: ERROR,
			payload: error.message
		});
	}
};