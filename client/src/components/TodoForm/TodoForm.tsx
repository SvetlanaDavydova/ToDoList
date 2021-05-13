import { useState } from 'react';
import { postData } from '../../services/api.service';

function TodoForm() {
	const [title, setTitle] = useState<string>('');
    
    const handleCreate = () => {
        const url = '/api/todo';
        postData(url, { title, status: false })
    }

    return (
        <div className="todo-form">
            <input
                type="text"
                onChange={e => setTitle(e.target.value)}
                value={title}
            />
            <button onClick={handleCreate}>Create</button>
        </div>
    );
}

export default TodoForm;
