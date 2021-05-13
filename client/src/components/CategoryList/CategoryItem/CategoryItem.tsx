import React, { useState } from 'react';
import { FaEdit, FaTrashAlt} from 'react-icons/fa';
import './category-item.css';

export type Category = {
	id: number;
	cat_name: string;
};

type CategoryItemProps = {
	category: Category;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ category: todo }) => {
	const { id, cat_name } = todo;

	function handleDelClick() {
		const url = `/api/category/${id}`;
		fetch(url, { method: 'DELETE'})
			.then(result => result.json());
	}

	function handleEditClick() {
		const data = { catName: 'edited from code' };
		const url = `/api/category/${id}`;

		fetch(url, { 
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data) 
		})
			.then(result => result.json());
	}



	return (
		<div className="category-item">
			<div className="category-item-id">
				#{id}
			</div>
			<div className="category-item-title" >
				{cat_name}
			</div>
			 
			<button onClick={handleEditClick}><FaEdit /></button>
			<button onClick={handleDelClick}><FaTrashAlt /></button>
		</div>
	);
}

export default CategoryItem;
