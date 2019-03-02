import React from 'react';
import { Table } from 'react-materialize';

const Tabla = (props) => (
	<Table hoverable>
	  <thead>
	    <tr>
	      <th>Email</th>
	      <th>Contenido</th>
	    </tr>
	  </thead>

	  <tbody>
	    { props.desplegar() }
	  </tbody>
	</Table>
);

export default Tabla;