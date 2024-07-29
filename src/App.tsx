import "./styles/App.css";
import CreateForm from "./components/CreateForm";
import TaskCard from "./components/TaskCard";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import Header from "./components/Header";

function App() {
	const dispatch = useDispatch<AppDispatch>();

	return (
		<>
			<main className="app">
				<Header />
				<TaskCard dispatch={dispatch} />
				<CreateForm dispatch={dispatch} />
			</main>
		</>
	);
}

export default App;
