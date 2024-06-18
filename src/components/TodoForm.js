import React, { useState } from 'react'

export const TodoForm = ({ addTodo }) => {

	const [value, setvalue] = useState("")

	const handleSubmit = e => {
		e.preventDefault();

		addTodo(value)

		setvalue("")
	}

	return (
		<form className='TodoForm' onSubmit={handleSubmit}>
			<input type='text' className='todo-input' value={value} placeholder='What is the Task Today?' onChange={(e) => setvalue(e.target.value)}></input>
			<button type='submit' className='todo-btn'>Add Task</button>
		</form>
	)
}
