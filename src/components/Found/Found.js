import React from 'react';

import './Found.scss';

const Found = () => (
	<div>
		<input 
			disabled
			type="checkbox"
			id="found"
			value="found"
			name="foundDonate"
		/>
		<label forHtml="foundDonate">Found</label>
		<input 
		disabled
			type="checkbox"
			id="donated"
			value="donated"
			name="foundDonate"
		/>
		<label forHtml="foundDonate">Donated</label>
	</div>
)

export default Found;