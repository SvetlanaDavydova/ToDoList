import { useState } from 'react';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import './home.css';

function Home() {
	const [isSearch, toggleSearch] = useState(false);
	const [filterValue, setFilterValue] = useState('');


	return (
		<div className="page-home">
			<header className="page-header">
				<div className="container">
					<nav>
						<b onClick={() => toggleSearch(false)}>create</b>
						<b onClick={() => toggleSearch(true)}>search</b>
					</nav>
				</div>
			</header>
			<div className="container content-container">
				{!isSearch && <TodoForm/>}
				{isSearch && 
				<input 
					value={filterValue}
					onChange={e => setFilterValue(e.target.value)}
					placeholder={'type to search'}
				/>}
				
				<TodoList filterValue={filterValue} />
			</div>
		</div>
	);
}

export default Home;
