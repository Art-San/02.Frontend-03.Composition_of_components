import React, { useState } from 'react'
import Counter from './Counter'

const CountersList = () => {
	const [couunters, setCounters] = useState([
		{ id: 0, value: 0, name: 'Ненужная вещь', price: '200' },
		{ id: 1, value: 4, name: 'Ложка' },
		{ id: 2, value: 0, name: 'Вилка' },
		{ id: 3, value: 0, name: 'Тарелка' },
		{ id: 4, value: 0, name: 'Набор минималиста' }
	])

	const handleDelete = (id) => {
		// setCounters((prevState) => prevState.filter((c) => c.id !== id))
		const newCounters = couunters.filter((c) => c.id !== id)
		setCounters(newCounters)
	}
	return (
		<>
			{couunters.map((count) => (
				<Counter key={count.id} onDelete={handleDelete} {...count} />
			))}
		</>
	)
}

export default CountersList
