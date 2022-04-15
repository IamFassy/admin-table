import React, { useState } from 'react';
import './custom-iframe.scss';

const CustomIframe = (props) => {
	return <iframe {...props} className='custom-iframe' src='./table'></iframe>;
};

export default CustomIframe;
