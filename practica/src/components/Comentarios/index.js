import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as comentariosActions from '../../actions/comentariosActions';
import { Button, Icon, Modal } from 'react-materialize';
import Cargando from '../General/Cargando';
import Fatal from '../General/Fatal';
import Tabla from './Tabla';
import Guardar from './Guardar';

class index extends Component {
	componentDidMount() {
		if (!this.props.comentarios.length)
			this.props.traerComentarios();
	}

	desplegar = () => (
		this.props.comentarios.map((comentario, key) => (
			<tr key={ key }>
			  <td>{ comentario.email }</td>
			  <td>{ comentario.body }</td>
			  <td>
			  		<Modal
			  			header='Modal Header'
			  			fixedFooter
			  			trigger={
			  				<a className='manita'>
			  					<Icon>edit</Icon>
			  				</a>
			  			}
			  		>
			  			hola
			  		</Modal>
			  </td>
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
				<div className='flex align_center'>
					<h2>Comentarios</h2>
					<Link icon="add" to="/comentarios/guardar" class="btn waves-effect waves-light btn-large btn-floating red space"
					>
						<i class="material-icons">add</i>
					</Link>
				</div>

				{ this.ponerContenido() }
			</div>
		);
	}
}

const mapStateToProps = (todosLosReducers) => {
	return todosLosReducers.comentariosReducer;
}

export default connect(mapStateToProps, comentariosActions)(index);