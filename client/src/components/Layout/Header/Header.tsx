import React from 'react';
import Navigation from '../../Navigation/Navigation';

import './header.css';

const Header: React.FC = ({ children }) => {
	return (
		<header className="page-header">
			<div className="container">
				<Navigation />
			</div>
		</header>
	);
}

export default Header;
