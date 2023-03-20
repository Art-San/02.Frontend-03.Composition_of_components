import React from 'react'
import Counter from './Counter'

const CountersList = () => {
	const couunters = [
		{ id: 0, value: 0 },
		{ id: 1, value: 4 },
		{ id: 2, value: 0 }
	]
	return (
		<>
			{couunters.map(count => (
				<Counter key={count.id} value={count.value} />
			))}
		</>
	)
}

export default CountersList
