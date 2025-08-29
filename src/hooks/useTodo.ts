import type { Task } from '@/types/task'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function useTodo() {
	const [tasks, setTasks] = useState<Task[]>(() => {
		const storedTasks = localStorage.getItem('tasks')
		return storedTasks ? JSON.parse(storedTasks) : []
	})

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	const AddTask = (text: string) => {
		const newTask: Task = {
			id: uuidv4(),
			text,
			completed: false,
		}

		setTasks(prev => [...prev, newTask])
	}

	const RemoveTask = (taskId: string) => {
		setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId))
	}

	const CompleteTask = (taskId: string) => {
		setTasks(prevTasks =>
			prevTasks.map(task =>
				task.id === taskId ? { ...task, completed: !task.completed } : task
			)
		)
	}

	const ClearCompletedTasks = () => {
		setTasks(prevTasks => prevTasks.filter(task => !task.completed))
	}

	const EditTask = (taskId: string, newText: string) => {
		setTasks(prevTasks =>
			prevTasks.map(task =>
				task.id === taskId ? { ...task, text: newText } : task
			)
		)
	}

	return {
		tasks,
		AddTask,
		RemoveTask,
		CompleteTask,
		ClearCompletedTasks,
		EditTask
	}
}
