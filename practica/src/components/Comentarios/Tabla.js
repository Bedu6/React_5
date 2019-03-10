import React from 'react';
import { Table } from 'react-materialize';

const Tabla = (props) => (
	<Table hoverable>
	  <thead>
	    <tr>
	      <th>Email</th>
	      <th>Contenido</th>
	      <th>Acciones</th>
	    </tr>
	  </thead>

	  <tbody>
	    { props.desplegar() }
	  </tbody>
	</Table>
);

export default Tabla;