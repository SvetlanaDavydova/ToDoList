import React, { useEffect, useState } from 'react';
import TodoItem, { Todo } from './TodoItem/TodoItem';
import './todo-list.css';

type TodoListProps = {
	filterValue?: string;
};

const TodoList:React.FC<TodoListProps> = ({ filterValue }) => {
	const [list, setList] = useState<Todo[]>([]);

	useEffect(() => {
		const url = '/api/todo';
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
			<div className="todo-list">
				{filterValue && list.filter(todo => todo.title.indexOf(filterValue) > -1).map(todo => <TodoItem todo={todo} key={todo.id}/> )}
				{!filterValue && list.map(todo => <TodoItem todo={todo} key={todo.id}/> )}
			</div>
		}
    </div>
  );
}

export default TodoList;
