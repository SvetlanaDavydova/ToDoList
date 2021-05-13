import  { useState } from 'react';
import CategoryForm from '../../components/CategoryForm/CategoryForm';
import CategoryList from '../../components/CategoryList/CategoryList';
import Layout from '../../components/Layout/Layout';
import './categories.css';

function Categories() {
	const [isSearch, toggleSearch] = useState(false);
	const [filterValue, setFilterValue] = useState('');

	return (
		<div className="page-categories">
			<Layout>
				{!isSearch && <CategoryForm/>}
				{isSearch && 
				<input 
					value={filterValue}
					onChange={e => setFilterValue(e.target.value)}
					placeholder={'type to search'}
				/>}
				<CategoryList filterValue={filterValue} />
			</Layout>
		</div>
	);
}

export default Categories;
