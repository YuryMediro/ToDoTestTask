import type { Task } from '@/types/task'
import { TodoItem } from '../TodoItem/TodoItem'
import { TodoInput } from '../TodoInput/TodoInput'
import { useState } from 'react'
import { FilterTask } from '../FilterTask/FilterTask'

interface TodoListProps {
	tasks: Task[]
	AddTask: (task: string) => void
	ClearCompletedTasks: () => void
	CompleteTask: (id: string) => void
	RemoveTask: (id: string) => void
	EditTask: (id: string, newText: string) => void
}

export const TodoList = ({
	AddTask,
	ClearCompletedTasks,
	CompleteTask,
	RemoveTask,
	EditTask,
	tasks,
}: TodoListProps) => {
	const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

	const filteredTasks = tasks.filter(task => {
		if (filter === 'active') return !task.completed
		if (filter === 'completed') return task.completed
		return true
	})
	return (
		<div className='w-full max-w-2xl mx-auto p-3 sm:p-4 md:p-6 flex flex-col min-h-[80vh]'>
			<h1 className='text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-gray-900'>
				ToDo List
			</h1>

			<TodoInput AddTask={AddTask} />

			<div className='space-y-2 sm:space-y-3 md:space-y-4 pr-2 sm:pr-3 md:pr-4 pl-2 sm:pl-3 md:pl-4'>
				{filteredTasks.length === 0 ? (
					<div className='text-center text-gray-500 py-4 sm:py-6 md:py-8 text-sm sm:text-base'>
						{tasks.length === 0
							? 'No tasks. Add first task!'
							: `No ${filter} tasks`}
					</div>
				) : (
					filteredTasks.map(task => (
						<TodoItem
							key={task.id}
							task={task}
							CompleteTask={CompleteTask}
							RemoveTask={RemoveTask}
							EditTask={EditTask}
						/>
					))
				)}
			</div>

			{tasks.length > 0 && (
				<FilterTask
					tasks={tasks}
					ClearCompletedTasks={ClearCompletedTasks}
					filter={filter}
					onFilterChange={setFilter}
				/>
			)}
		</div>
	)
}
