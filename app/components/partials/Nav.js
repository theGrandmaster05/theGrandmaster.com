import React from 'react';

class Nav extends React.Component {
	render() {
		return(
			<nav>
 				<div className="menu-list">
					<svg className="menu">
						<g>
							<line x1="10" y1="2" x2="16" y2="2" stroke="black" strokeWidth="2" strokeLinecap="round" />
							<line x1="10" y1="8" x2="12" y2="8" stroke="black" strokeWidth="2" strokeLinecap="round" />
							<line x1="10" y1="14" x2="16" y2="14" stroke="black" strokeWidth="2" strokeLinecap="round" />
							<line x1="18" y1="8" x2="24" y2="8" stroke="black" strokeWidth="2" strokeLinecap="round" className="roll" />
							<line x1="22" y1="2" x2="24" y2="2" stroke="black" strokeWidth="2" strokeLinecap="round" className="roll" />
							<line x1="22" y1="14" x2="24" y2="14" stroke="black" strokeWidth="2" strokeLinecap="round" className="roll" />
						</g>
					</svg>
					<svg className="search-lens">
						<g>
							<circle cx="20" cy="10" r="6" stroke="black" fill="none" strokeWidth="1" />
							<line x1="26" y1="17" x2="30" y2="22" stroke="black" strokeWidth="2" strokeLinecap="round" />
						</g>
					</svg>
				</div>
			</nav>
		)
	}
}

export default Nav;