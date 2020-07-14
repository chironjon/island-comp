import React from 'react';

import './Found.css';

const Found = () => (
	<div>
		<input 
			disabled
			type="checkbox"
			id="found"
			value="found"
			name="foundDonate"
		/>
		<label>Found</label>
		<input 
		disabled
			type="checkbox"
			id="donated"
			value="donated"
			name="foundDonate"
		/>
		<label>Donated</label>
	</div>
)

export default Found;