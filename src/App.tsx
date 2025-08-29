import './App.css'
import { TodoList } from './components/TodoList/TodoList'
import useTodo from './hooks/useTodo'

function App() {
	const { tasks, AddTask, ClearCompletedTasks, CompleteTask, RemoveTask } =
		useTodo()
	return (
		<div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12'>
			<TodoList
				tasks={tasks}
				AddTask={AddTask}
				ClearCompletedTasks={ClearCompletedTasks}
				CompleteTask={CompleteTask}
				RemoveTask={RemoveTask}
			/>
		</div>
	)
}

export default App
