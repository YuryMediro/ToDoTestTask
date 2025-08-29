import { ScrollArea } from '../ui/scroll-area'
import type { Task } from '@/types/task'
import { TodoItem } from '../TodoItem/TodoItem'
import { TodoInput } from '../TodoInput/TodoInput'

interface TodoListProps {
	tasks: Task[]
	AddTask: (task: string) => void
	ClearCompletedTasks: () => void
	CompleteTask: (id: string) => void
	RemoveTask: (id: string) => void
}

export const TodoList = ({
	AddTask,
	ClearCompletedTasks,
	CompleteTask,
	RemoveTask,
	tasks,
}: TodoListProps) => {
	return (
		<div className='w-full max-w-2xl mx-auto p-6'>
			<h1 className='text-3xl font-bold text-center mb-8 text-gray-900'>
				ToDo List
			</h1>

			<TodoInput AddTask={AddTask} />

			<ScrollArea className='h-[400px]'>
				<div>
					{tasks.length === 0 ? (
						<div>No tasks. Add first task!</div>
					) : (
						tasks.map(task => (
							<TodoItem
								key={task.id}
								task={task}
								CompleteTask={CompleteTask}
								RemoveTask={RemoveTask}
							/>
						))
					)}
				</div>
			</ScrollArea>
		</div>
	)
}
