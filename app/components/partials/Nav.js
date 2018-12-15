import React from 'react';

class Nav extends React.Component{
    render() {
        return (
            <nav>
                <div className="tgm-nav-container">
					<svg>
						<g>
							<polyline points="20,10 10,20 20,30" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.5"/>
						</g>
						<g>
							<line x1="36" y1="6" x2="24" y2="34" stroke="black" fill="none" strokeLinecap="round" strokeOpacity="0.5" strokeWidth="3"/>
						</g>
						<g>
							<polyline points="40,10 50,20 40,30" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.5" />
						</g>
					</svg>
					<svg className="tgm-search-lens">
						<g>
							<circle cx="300" cy="20" r="8" stroke="black" fill="none" stroke-width="3" stroke-opacity="0.5"/>
						</g>
						<g>
							<line x1="308" y1="27" x2="314" y2="32" stroke="black" stroke-width="3" stroke-opacity="0.5" />
						</g>
					</svg>
				</div>
            </nav>
        )
    }
}

export default Nav;