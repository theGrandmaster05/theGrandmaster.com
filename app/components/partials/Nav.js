import React from 'react';

class Nav extends React.Component{
    render() {
        return (
            <nav>
                <svg>
		            <g>
			            <polyline points="20,10 10,20 20,30" fill="none" stroke="black" stroke-width="3" stroke-linecap="round" stroke-opacity="0.2"/>
		            </g>
		            <g>
		            	<line x1="36" y1="6" x2="24" y2="34" stroke="black" fill="none" stroke-linecap="round" stroke-opacity="0.2" stroke-width="3"/>
		            </g>
		            <g>
			            <polyline points="40,10 50,20 40,30" fill="none" stroke="black" stroke-width="3" stroke-linecap="round" stroke-opacity="0.2" />
		            </g>
	            </svg>
            </nav>
        )
    }
}

export default Nav;