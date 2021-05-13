import React from 'react';
import Header from './Header/Header';

import './layout.css';

const Layout: React.FC = ({ children }) => {

	return (
	<div className="page-layout">
		<Header />
		<div className="container content-container">
			{children}
		</div>
	</div>
	);
}

export default Layout;
