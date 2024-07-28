import { TaskItemInterface } from "../types/Todos";
import defaultItems from "../utils/defaults";
import ACTIONS from "./actions";
import type { PayloadAction } from "@reduxjs/toolkit";

const tasksReducer = (
	state = defaultItems,
	action: PayloadAction<TaskItemInterface>
) => {
	const { type, payload } = action;

	switch (type) {
		case ACTIONS.ADD_TASK:
			console.log(state);
			return [
				...state,
				{
					id: crypto.randomUUID(),
					title: payload.title,
					isCompleted: false,
				},
			];
		case ACTIONS.TOGGLE_TASK:
			return state.filter((state) => {
				if (state.id === payload.id) {
					return { ...state, isCompleted: !payload.isCompleted };
				}
				return state;
			});
		case ACTIONS.DELETE_TASK:
			return state.filter((state) => state.id !== payload.id);
		default:
			return state;
	}
};

export default tasksReducer;
