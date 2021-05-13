import React, { useEffect, useState } from 'react';
import CategoryItem, { Category } from './CategoryItem/CategoryItem';
import './category-list.css';

type CategoryListProps = {
	filterValue?: string;
};

const CategoryList:React.FC<CategoryListProps> = ({ filterValue }) => {
	const [list, setList] = useState<Category[]>([]);

	useEffect(() => {
		const url = '/api/category';
		fetch(url)
            .then(result => result.json())
		    .then(result => {
			    setList(result)
		    });
	}, []);


  return (
    <div >
		{!list.length && <span>List is empty now</span>}
		{!!list.length && 
			<div className="category-list">
				{filterValue && list.filter(cat => cat.cat_name.indexOf(filterValue) > -1).map(todo => <CategoryItem category={todo} key={todo.id}/> )}
				{!filterValue && list.map(cat => <CategoryItem category={cat} key={cat.id}/> )}
			</div>
		}
    </div>
  );
}

export default CategoryList;
