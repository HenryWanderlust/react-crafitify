import React from 'react';

export const CloseIcon = (props) => {

	return (
		<svg
		width={ props.size }
		height={ props.size }
		viewBox="0 0 1240 1240"
		xmlns="http://www.w3.org/2000/svg" >
		    <g id="Artboard" stroke="none" strokeWidth="1" fill={ props.color } fillRule="evenodd">
					<path d="M567.962078,620.099332 L289.797979,341.935233 C275.400674,327.537928 275.400674,304.195284 289.797979,289.797979 C304.195284,275.400674 327.537928,275.400674 341.935233,289.797979 L620.099332,567.962078 L898.263431,289.797979 C912.660737,275.400674 936.00338,275.400674 950.400685,289.797979 C964.797991,304.195284 964.797991,327.537928 950.400685,341.935233 L672.236586,620.099332 L950.400685,898.263431 C964.797991,912.660737 964.797991,936.00338 950.400685,950.400685 C936.00338,964.797991 912.660737,964.797991 898.263431,950.400685 L620.099332,672.236586 L341.935233,950.400685 C327.537928,964.797991 304.195284,964.797991 289.797979,950.400685 C275.400674,936.00338 275.400674,912.660737 289.797979,898.263431 L567.962078,620.099332 Z" id="Combined-Shape"></path>
		    </g>
		</svg>
	)
}

export default CloseIcon;