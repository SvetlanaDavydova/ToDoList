import React, { useState } from 'react';
import {FaCheck, FaEdit, FaTrashAlt} from 'react-icons/fa';
import './todo-item.css';

export type Todo = {
	id: number;
	title: string;
	todo_status: boolean;
};

type TodoItemProps = {
	todo: Todo;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
	const { id, title, todo_status } = todo;
	const textStyle =  todo_status ? 'line-through': 'none';

	function handleDelClick() {
		const url = `/api/todo/${id}`;
		fetch(url, { method: 'DELETE'})
			.then(result => result.json());
	}

	function handleEditClick() {
		const url = `/api/todo/${id}`;
		fetch(url, { method: 'PUT'})
			.then(result => result.json());
	}

	function handleCheckClick() {
		const url = `/api/todo/${id}`;
		const data = { title, status: !todo_status }
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
		<div className="todo-item">
			<div className="todo-item-id">
				#{id}
			</div>
			<div
				className="todo-item-title"
				style={{ textDecoration: textStyle }}
			>
				{title}
			</div>
			 
			<button onClick={handleCheckClick}><FaCheck /></button>
			<button onClick={handleEditClick}><FaEdit /></button>
			<button onClick={handleDelClick}><FaTrashAlt /></button>
		</div>
	);
}

export default TodoItem;
