import "./styles/App.css";
import { useReducer } from "react";
import CreateForm from "./components/CreateForm";
import { TaskItemInterface } from "./types/Todos";
import TaskCard from "./components/TaskCard";
import { Divider } from "@mui/material";
import { ACTIONS, defaultItems } from "./utils/defaults";

const reducer = (tasks: any, action?: any) => {
	const { type, payload } = action;

	switch (type) {
		case ACTIONS.ADD_TASK:
			return [...tasks, newTask(payload.title)];
		case ACTIONS.TOGGLE_TASK:
			if (tasks.id !== payload.id) {
				return tasks;
			}
			return { ...tasks, isCompleted: !tasks.isCompleted };
		case ACTIONS.DELETE_TASK:
			return tasks.filter(
				(task: TaskItemInterface) => task.id !== payload.id
			);
		default:
			return tasks;
	}
};

const newTask = (title: string) => {
	return { id: crypto.randomUUID(), title: title, isCompleted: false };
};

function App() {
	const [tasks, dispatch] = useReducer(reducer, [...defaultItems]);

	return (
		<>
			<section className="card">
				<div className="container">
					<h1 className="text-5xl text-slate-50 font-bold">
						Task Manager
					</h1>
					<Divider
						sx={{ background: "white", margin: "1.5rem 0" }}
						aria-hidden="true"
					/>
				</div>
				<div className="container">
					<h2>Items</h2>
					<TaskCard tasks={tasks} dispatch={dispatch} />
				</div>
				<div className="container">
					<CreateForm dispatch={dispatch} />
				</div>
			</section>
		</>
	);
}

export default App;
