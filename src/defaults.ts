import { TaskItemInterface } from './types/Todos';

export const ACTIONS = {
	ADD_TASK: 'add-task',
	DELETE_TASK: 'delete-task',
	TOGGLE_TASK: 'toggle-task',
};

export const defaultItems: TaskItemInterface[] = [
	{ id: 1, title: 'Buy milk', isCompleted: false },
	{ id: 2, title: 'Walk the dog', isCompleted: false },
	{ id: 3, title: 'Do the laundry', isCompleted: false },
	{ id: 4, title: 'Wash the car', isCompleted: false },
];
