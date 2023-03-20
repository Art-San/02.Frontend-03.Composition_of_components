import React, { useState } from 'react'

const Counter = () => {
	const [count, setCount] = useState(0)
	const [tags, setTegs] = useState(['tag1', 'teg2', 'teg3'])

	const formatCount = () => {
		return count === 0 ? 'empty' : count
	}

	const getBageClasses = () => {
		let classes = 'badge m-2 '
		classes += count === 0 ? 'bg-warning' : 'bg-primary'
		return classes
	}

	const handleIncrement = () => {
		setCount(prevState => prevState + 1)
	}

	const handleDecrement = () => {
		setCount(prevState => prevState - 1)
	}

	const handleTagChange = id => {
		setTegs(prevState => prevState.filter(t => t !== id))
	}

	// ПЕРВЫЙ ВАРИАНТ

	// const renderTags = () => {
	// 	if (tags.length === 0) return 'No Tegs'
	// 	return tags.map((tag, i) => (
	// 		<li
	// 			key={i}
	// 			className='btn btn-primary btn-sm m-2'
	// 			onClick={() => handleTagChange(tag)}
	// 		>
	// 			{tag}
	// 		</li>
	// 	))
	// }

	// ВТОРОЙ ВАРИАНТ

	// const renderTags = () => {
	// 	return tags.length !== 0
	// 		? tags.map((tag, i) => (
	// 				<li
	// 					key={i}
	// 					className='btn btn-primary btn-sm m-2'
	// 					onClick={() => handleTagChange(tag)}
	// 				>
	// 					{tag}
	// 				</li>
	// 		  ))
	// 		: 'No Tegs'
	// }

	// ТРЕТИЙ ВАРИАНТ

	const renderTags = () => {
		return (
			tags.length !== 0 &&
			tags.map((tag, i) => (
				<li
					key={i}
					className='btn btn-primary btn-sm m-2'
					onClick={() => handleTagChange(tag)}
				>
					{tag}
				</li>
			))
		)
	}
	// Четвертый вариант одно или другое
	if (tags.length !== 0) {
		return <ul>{renderTags()}</ul>
	}

	return (
		<>
			<span className={getBageClasses()}>{formatCount()}</span>
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
		</>
	)
}

export default Counter
