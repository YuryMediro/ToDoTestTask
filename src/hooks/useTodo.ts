import type { Task } from '@/types/task'
import { useEffect, useState } from 'react'

export default function useTodo() {
	const [tasks, setTasks] = useState<Task[]>(() => {
		const storedTasks = localStorage.getItem('tasks')
		return storedTasks ? JSON.parse(storedTasks) : []
	})

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	const handleAddTask = (text: string) => {
		const newTask: Task = {
			id: Date.now(),
			text,
			completed: false,
		}

		setTasks(prev => [...prev, newTask])
	}

	const handleRemoveTask = (taskId: number) => {
		setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId))
	}

	const handleCompleteTask = (taskId: number) => {
		setTasks(prevTasks =>
			prevTasks.map(task =>
				task.id === taskId ? { ...task, completed: !task.completed } : task
			)
		)
	}

	const handleClearCompletedTasks = () => {
		setTasks(prevTasks => prevTasks.filter(task => !task.completed))
	}

	return {
		tasks,
		handleAddTask,
		handleRemoveTask,
		handleCompleteTask,
		handleClearCompletedTasks,
	}
}
