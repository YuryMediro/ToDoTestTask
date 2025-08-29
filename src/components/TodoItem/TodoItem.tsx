import type { Task } from '@/types/task'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { Edit, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { Input } from '../ui/input'

interface TodoItemProps {
	task: Task
	CompleteTask: (id: string) => void
	RemoveTask: (id: string) => void
	EditTask: (id: string, newText: string) => void
}

export const TodoItem = ({
	task,
	CompleteTask,
	RemoveTask,
	EditTask,
}: TodoItemProps) => {
	const [isEditing, setIsEditing] = useState(false)
	const [editText, setEditText] = useState(task.text)

	const handleEdit = () => {
		if (editText.trim() && editText !== task.text) {
			EditTask(task.id, editText)
		}
		setIsEditing(false)
	}
	return (
		<div className='flex items-center justify-between p-3 sm:p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow'>
			<div className='flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0'>
				<Checkbox
					checked={task.completed}
					onCheckedChange={() => CompleteTask(task.id)}
					className='h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0'
				/>

				{isEditing ? (
					<Input
						value={editText}
						onChange={e => setEditText(e.target.value)}
						onBlur={handleEdit}
						onKeyDown={e => e.key === 'Enter' && handleEdit()}
						autoFocus={true}
						className='flex-1 text-sm sm:text-base'
					/>
				) : (
					<span
						className={`flex-1 text-sm sm:text-base md:text-lg truncate ${
							task.completed ? 'line-through text-gray-500' : 'text-gray-900'
						}`}
					>
						{task.text}
					</span>
				)}
			</div>
			<div className='flex space-x-1 sm:space-x-2 ml-2 sm:ml-4 flex-shrink-0'>
				<Button
					variant='outline'
					size='icon'
					onClick={() => setIsEditing(true)}
					className='h-7 w-7 sm:h-8 sm:w-8'
				>
					<Edit className='h-3 w-3 sm:h-4 sm:w-4' />
				</Button>
				<Button
					variant='destructive'
					size='icon'
					onClick={() => RemoveTask(task.id)}
					className='h-7 w-7 sm:h-8 sm:w-8'
				>
					<Trash2 className='h-3 w-3 sm:h-4 sm:w-4' />
				</Button>
			</div>
		</div>
	)
}
