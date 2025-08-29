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
		<div className='flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 border-t'>
			<span className='text-xs sm:text-sm text-gray-600 whitespace-nowrap'>
				{activeCount} items left
			</span>

			<div className='flex space-x-1 sm:space-x-2'>
				<Button
					variant={filter === 'all' ? 'default' : 'ghost'}
					size='sm'
					onClick={() => onFilterChange('all')}
					className='text-xs sm:text-sm h-7 sm:h-8 px-2 sm:px-3'
				>
					All
				</Button>
				<Button
					variant={filter === 'active' ? 'default' : 'ghost'}
					size='sm'
					onClick={() => onFilterChange('active')}
					className='text-xs sm:text-sm h-7 sm:h-8 px-2 sm:px-3'
				>
					Active
				</Button>
				<Button
					variant={filter === 'completed' ? 'default' : 'ghost'}
					size='sm'
					onClick={() => onFilterChange('completed')}
					className='text-xs sm:text-sm h-7 sm:h-8 px-2 sm:px-3'
				>
					Completed
				</Button>
			</div>
			{hasCompletedTasks && (
				<Button
					variant='destructive'
					size='sm'
					onClick={ClearCompletedTasks}
					className='text-xs sm:text-sm h-7 sm:h-8 px-2 sm:px-3'
				>
					Clear completed
				</Button>
			)}
		</div>
	)
}
