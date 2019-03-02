import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';

const Menu = (props) => (
	<div>
		<Navbar left>
		  <li>
		  	<Link to='/'>
		  		Comentarios
		  	</Link>
		  </li>
		  <li>
		  	<Link to='/fotos'>
		  		Fotos
		  	</Link>
		  </li>
		</Navbar>
	</div>
);

export default Menu;