import { ScrollArea } from '../ui/scroll-area'
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
		<div className='w-full max-w-2xl mx-auto p-4'>
			<h1 className='text-3xl font-bold text-center mb-8 text-gray-900'>
				ToDo List
			</h1>

			<TodoInput AddTask={AddTask} />

			<ScrollArea className='h-150 '>
				<div className='space-y-4 pr-4 pl-4'>
					{filteredTasks.length === 0 ? (
						<div className='text-center text-gray-500 py-8'>
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
			</ScrollArea>
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
