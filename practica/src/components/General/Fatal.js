import React from 'react';
import { Icon } from 'react-materialize';

const Fatal = (props) => (
	<div className='center-align'>
		<br />
		<Icon className='red-text' large>error</Icon>
		<h2 className='red-text'>
			{ props.mensaje }
		</h2>
	</div>
);

export default Fatal;