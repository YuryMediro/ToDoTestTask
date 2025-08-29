import { TodoList } from '../components/TodoList/TodoList'
import useTodo from '../hooks/useTodo'

function App() {
	const { tasks, AddTask, ClearCompletedTasks, CompleteTask, RemoveTask,EditTask } =
		useTodo()
	return (
		<div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-4 md:py-6 lg:py-8'>
			<TodoList
				tasks={tasks}
				AddTask={AddTask}
				ClearCompletedTasks={ClearCompletedTasks}
				CompleteTask={CompleteTask}
				RemoveTask={RemoveTask}
				EditTask={EditTask}
			/>
		</div>
	)
}

export default App
