import React from 'react'

const Counter = (props) => {
	const { value } = props

	const formatValue = () => {
		return value === 0 ? 'empty' : value
	}

	const getBageClasses = () => {
		let classes = 'badge m-2 '
		classes += value === 0 ? 'bg-warning' : 'bg-primary'
		return classes
	}

	const handleIncrement = () => {
		console.log('Increment')
		// setValue((prevState) => prevState + 1)
	}

	const handleDecrement = () => {
		console.log('Decrement')
		// setValue((prevState) => prevState - 1)
	}

	return (
		<div>
			<span>{props.name}</span>
			<span className={getBageClasses()}>{formatValue()}</span>
			<button
				className='btn btn-primary btn-sm m-2'
				onClick={handleIncrement}
			>
				+
			</button>
			<button
				className='btn btn-primary btn-sm'
				onClick={handleDecrement}
			>
				-
			</button>
			<button
				onClick={() => props.onDelete(props.id)}
				className='btn btn-danger btn-sm m-2'
			>
				Delete
			</button>
			<button
				onClick={() => props.onDelete(props.id)}
				className='btn btn-danger btn-sm m-2'
			>
				Delete
			</button>
		</div>
	)
}

export default Counter
