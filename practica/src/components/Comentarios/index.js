import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as comentariosActions from '../../actions/comentariosActions';
import Cargando from '../General/Cargando';
import Fatal from '../General/Fatal';
import Tabla from './Tabla';

class index extends Component {
	componentDidMount() {
		this.props.traerComentarios();
	}

	desplegar = () => (
		this.props.comentarios.map((comentario, key) => (
			<tr key={ key }>
			  <td>{ comentario.email }</td>
			  <td>{ comentario.body }</td>
			</tr>
		))
	);

	ponerContenido = () => {
		if (this.props.cargando)
			return <Cargando />

		if (this.props.error)
			return <Fatal mensaje={ this.props.error } />

		return <Tabla desplegar={ this.desplegar } />
	};

	render() {
		return (
			<div>
				{ this.ponerContenido() }
			</div>
		);
	}
}

const mapStateToProps = (todosLosReducers) => {
	return todosLosReducers.comentariosReducer;
}

export default connect(mapStateToProps, comentariosActions)(index);