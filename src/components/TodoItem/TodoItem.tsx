import type { Task } from '@/types/task'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { Trash2 } from 'lucide-react'

interface TodoItemProps {
	task: Task
	CompleteTask: (id: string) => void
	RemoveTask: (id: string) => void
}

export const TodoItem = ({ task, CompleteTask, RemoveTask }: TodoItemProps) => {
	return (
		<div className='flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow'>
			<div className='flex items-center space-x-3 flex-1'>
				<Checkbox
					checked={task.completed}
					onCheckedChange={() => CompleteTask(task.id)}
				/>
				<span
					className={`flex-1 text-lg ${
						task.completed ? 'line-through text-gray-500' : 'text-gray-900'
					}`}
				>
					{task.text}
				</span>
			</div>

			<Button
				variant='destructive'
				size='icon'
				onClick={() => RemoveTask(task.id)}
				className='h-8 w-8'
			>
				<Trash2 className='h-4 w-4' />
			</Button>
		</div>
	)
}
