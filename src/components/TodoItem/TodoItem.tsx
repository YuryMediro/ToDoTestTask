import type { Task } from '@/types/task'
import { Button } from '../ui/button'

interface TodoItemProps {
	task: Task
	CompleteTask: (id: string) => void
	RemoveTask: (id: string) => void
}

export const TodoItem = ({ task, CompleteTask, RemoveTask }: TodoItemProps) => {
	return (
		<div>
			<div>
				{task.text}

				<Button onClick={() => RemoveTask(task.id)}>Delete</Button>
			</div>
		</div>
	)
}
