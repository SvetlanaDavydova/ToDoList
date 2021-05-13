import { Link } from 'react-router-dom';
import { BsListCheck } from 'react-icons/bs';
import { AiFillTags } from 'react-icons/ai';

import { useLocation } from 'react-router-dom';

import './navigation.css';

const Navigation: React.FC = () => {
	const { pathname } = useLocation();

	return (
		<nav>
			<Link to="/todos" className="nav-link"><BsListCheck /> ToDo</Link>
			<Link to="/categories" className="nav-link"><AiFillTags /> Categories</Link>
			{/* <b onClick={() => toggleSearch(false)}>create</b>
			<b onClick={() => toggleSearch(true)}>search</b>
			<b onClick={() => toggleSearch(true)}>categories</b> */}
		</nav>
	);
}

export default Navigation;
