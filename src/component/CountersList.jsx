import React, { useState } from 'react'
import Counter from './Counter'

const CountersList = () => {
	const initialState = [
		{ id: 0, value: 0, name: 'Ненужная вещь', price: '200' },
		{ id: 1, value: 4, name: 'Ложка' },
		{ id: 2, value: 0, name: 'Вилка' },
		{ id: 3, value: 0, name: 'Тарелка' },
		{ id: 4, value: 0, name: 'Набор минималиста' }
	]

	const [couunters, setCounters] = useState(initialState)

	const handleDelete = (id) => {
		// setCounters((prevState) => prevState.filter((c) => c.id !== id))
		const newCounters = couunters.filter((c) => c.id !== id)
		setCounters(newCounters)
	}
	const handleReset = () => {
		setCounters(initialState)
	}

	const handleUpdate = () => {
		const updatedState = [
			{ id: 0, value: 1, name: 'Ненужная вещь', price: '200' },
			{ id: 1, value: 2, name: 'Ложка' },
			{ id: 2, value: 3, name: 'Вилка' },
			{ id: 3, value: 4, name: 'Тарелка' },
			{ id: 4, value: 0, name: 'Набор минималиста' }
		]
		setCounters(updatedState)
	}
	return (
		<>
			{couunters.map((count) => (
				<Counter key={count.id} onDelete={handleDelete} {...count} />
			))}
			<button
				onClick={handleReset}
				className='btn btn-primary btn-sm m-2'
			>
				Сброс
			</button>
			<button
				onClick={handleUpdate}
				className='btn btn-primary btn-sm m-2'
			>
				Обновить состояние
			</button>
		</>
	)
}

export default CountersList
