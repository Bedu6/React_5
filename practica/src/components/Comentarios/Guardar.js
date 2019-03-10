import React from 'react';
import { connect } from 'react-redux';
import { Input, Icon, Button, Row } from 'react-materialize';
import * as comentariosActions from '../../actions/comentariosActions';
import { CAMBIO_TITULO, CAMBIO_CONTENIDO } from '../../types/comentariosTypes';
import Cargando from '../General/Cargando';

const Guardar = (props) => {

	const localCambioInput = (event, caso) => {
		props.cambioInput(caso, event.target.value);
	};

	const localGuardar = (event) => {
		const cuerpo = {
			title: props.titulo,
			body: props.contenido
		}

		props.agregar(cuerpo);
	};

	return (
		<div>
			<br />
			<div className='row'>
				<Input
					s={12}
					label="Título"
					value={ props.titulo }
					onChange={
						(event) => localCambioInput(event, CAMBIO_TITULO)
					}
				>
					<Icon>input</Icon>
				</Input>

				<Input
					s={12}
					label="Contenido"
					type='textarea'
					value={ props.contenido }
					onChange={
						(event) => localCambioInput(event, CAMBIO_CONTENIDO)
					}
				>
					<Icon>account_circle</Icon>
				</Input>
			</div>
			
			{ props.mensaje }
			<div className='center-align'>
				<Button
					className={
						(props.cargando) ? 'disabled' : ''
					}
					waves='light'
					onClick={ localGuardar }
				>
					Guardar
					<Icon left>save</Icon>
				</Button>
			</div>

			{ (props.cargando) ? <Cargando /> : '' }
		</div>
	)
};

const mapStateToProps = ({ comentariosReducer }) => comentariosReducer;

export default connect(mapStateToProps, comentariosActions)(Guardar);