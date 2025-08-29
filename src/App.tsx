import './App.css'
import { TodoList } from './components/TodoList/TodoList'
import useTodo from './hooks/useTodo'

function App() {
	const { tasks, AddTask, ClearCompletedTasks, CompleteTask, RemoveTask } =
		useTodo()
	return (
		<TodoList
			tasks={tasks}
			AddTask={AddTask}
			ClearCompletedTasks={ClearCompletedTasks}
			CompleteTask={CompleteTask}
			RemoveTask={RemoveTask}
		/>
	)
}

export default App
