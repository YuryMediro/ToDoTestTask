import { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import toast from 'react-hot-toast'

interface TodoInputProps {
	AddTask: (text: string) => void
}

export const TodoInput = ({ AddTask }: TodoInputProps) => {
	const [newTaskText, setNewTaskText] = useState('')

	const handleAddTask = () => {
		if (newTaskText.trim() === '') {
			toast.error('Please enter a task before adding!', {
				duration: 2000,
				position: 'top-center',
				style: {
					borderRadius: '10px',
					background: '#333',
					color: '#fff',
				},
			})
			return
		}
		AddTask(newTaskText)
		setNewTaskText('')
	}
	return (
		<div className='flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-6'>
			<Input
				placeholder='Add a new task...'
				value={newTaskText}
				onChange={e => setNewTaskText(e.target.value)}
				onKeyDown={e => e.key === 'Enter' && handleAddTask()}
				className='flex-1 text-sm sm:text-base'
			/>
			<Button className='px-3 sm:px-4 py-2 sm:py-2' onClick={handleAddTask}>
				<Plus className='h-3 w-3 sm:h-4 sm:w-4  ' />
				<span className='text-sm sm:text-base'> Add task</span>
			</Button>
		</div>
	)
}
