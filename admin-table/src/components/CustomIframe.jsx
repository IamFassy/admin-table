import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './custom-iframe.css';

const CustomIframe = ({ children, ...props }) => {
	const [contentRef, setContentRef] = useState(null);

	const mountNode = contentRef?.contentWindow?.document?.body;

	return (
		<iframe {...props} className='custom-iframe' ref={setContentRef}>
			{mountNode && createPortal(children, mountNode)}
		</iframe>
	);
};

export default CustomIframe;
