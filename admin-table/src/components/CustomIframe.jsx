import React from 'react';
import './custom-iframe.scss';

const CustomIframe = (props) => {
	return (
		<iframe
			title='Table'
			{...props}
			className='custom-iframe'
			src='./table'
		></iframe>
	);
};

export default CustomIframe;
