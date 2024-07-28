const ACTIONS = {
	ADD_TASK: "add-task",
	DELETE_TASK: "delete-task",
	TOGGLE_TASK: "toggle-task",
};

export const addTask = (title: string) => ({
	type: ACTIONS.ADD_TASK,
	payload: { title },
});

export const deleteTask = (id: string) => ({
	type: ACTIONS.DELETE_TASK,
	payload: { id },
});

export const toggleTask = (id: string, isCompleted: boolean) => ({
	type: ACTIONS.TOGGLE_TASK,
	payload: { id, isCompleted },
});

export default ACTIONS;
