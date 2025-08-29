import type { Task } from '@/types/task'
import { Button } from '../ui/button'

interface FilterTaskProps {
	tasks: Task[]
	ClearCompletedTasks: () => void
	filter: 'all' | 'active' | 'completed'
	onFilterChange: (filter: 'all' | 'active' | 'completed') => void
}

export const FilterTask = ({
	ClearCompletedTasks,
	tasks,
	filter,
	onFilterChange,
}: FilterTaskProps) => {
	const activeCount = tasks.filter(task => !task.completed).length
	const hasCompletedTasks = tasks.some(task => task.completed)

	return (
		<div className='flex items-center justify-between p-4 border-t'>
			<span className='text-sm text-gray-600'>{activeCount} items left</span>

			<div className='flex space-x-2'>
				<Button
					variant={filter === 'all' ? 'default' : 'ghost'}
					size='sm'
					onClick={() => onFilterChange('all')}
				>
					All
				</Button>
				<Button
					variant={filter === 'active' ? 'default' : 'ghost'}
					size='sm'
					onClick={() => onFilterChange('active')}
				>
					Active
				</Button>
				<Button
					variant={filter === 'completed' ? 'default' : 'ghost'}
					size='sm'
					onClick={() => onFilterChange('completed')}
				>
					Completed
				</Button>
			</div>
			{hasCompletedTasks && (
				<Button variant='destructive' size='sm' onClick={ClearCompletedTasks}>
					Clear completed
				</Button>
			)}
		</div>
	)
}
