import { useState } from 'react';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import Layout from '../../components/Layout/Layout';
import './home.css';

function Home() {
	const [isSearch, toggleSearch] = useState(false);
	const [filterValue, setFilterValue] = useState('');

	return (
		<div className="page-home">
			<Layout>
				{!isSearch && <TodoForm/>}
				{isSearch && 
				<input 
					value={filterValue}
					onChange={e => setFilterValue(e.target.value)}
					placeholder={'type to search'}
				/>}
				<TodoList filterValue={filterValue} />
			</Layout>
		</div>
	);
}

export default Home;
