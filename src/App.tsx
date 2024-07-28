import "./styles/App.css";
import CreateForm from "./components/CreateForm";
import TaskCard from "./components/TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store/store";

function App() {
	const tasks = useSelector((state: RootState) => state.tasksReducer);
	const dispatch = useDispatch<AppDispatch>();

	return (
		<>
			<section className="card flex flex-col gap-2 mb-6">
				<div className="container">
					<h1 className="text-5xl text-slate-50 font-bold">
						Task Manager
					</h1>
					<hr className="bg-slate-300 my-3" aria-hidden="true" />
				</div>
				<div className="container">
					<h2>Items</h2>
					<TaskCard tasks={tasks} dispatch={dispatch} />
				</div>
			</section>
			<section className="flex flex-col gap-5">
				<div className="container">
					<CreateForm dispatch={dispatch} />
				</div>
			</section>
		</>
	);
}

export default App;
