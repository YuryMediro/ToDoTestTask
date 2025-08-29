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
		<div className='flex space-x-2 mb-6'>
			<Input
				placeholder='Add a new task...'
				value={newTaskText}
				onChange={e => setNewTaskText(e.target.value)}
				onKeyDown={e => e.key === 'Enter' && handleAddTask()}
			/>
			<Button className='px-4' onClick={handleAddTask}>
				<Plus className='h-4 w-4' /> Add task
			</Button>
		</div>
	)
}
