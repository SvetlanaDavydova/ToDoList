import { useState } from 'react';
import { postData } from '../../services/api.service';

function CategoryForm() {
	const [categoryName, setCategoryName] = useState<string>('');
    
    const handleCreate = () => {
        const url = '/api/category';
        postData(url, { catName: categoryName });
    }

    return (
        <div className="category-form">
            <input
                type="text"
                onChange={e => setCategoryName(e.target.value)}
                value={categoryName}
            />
            <button onClick={handleCreate}>Create</button>
        </div>
    );
}

export default CategoryForm;
