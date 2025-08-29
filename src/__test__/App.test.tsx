/**
 * @jest-environment jsdom
 */

import App from '../app/App'
import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { act } from 'react'

// 1. добавление новой задачи
test('add task', async () => {
	render(<App />)

	// Находим элементы
	const input = screen.getByPlaceholderText('Add a new task...')
	const addButton = screen.getByRole('button', { name: /add task/i })

	// Добавляем задачу
	act(() => {
		fireEvent.change(input, { target: { value: 'New Task' } })
		fireEvent.click(addButton)
	})

	// Ожидаем появления задачи в DOM
	await waitFor(() => {
		expect(screen.getByText('New Task')).toBeInTheDocument()
	})
})

