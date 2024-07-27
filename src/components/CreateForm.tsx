import { FormEvent, useState } from 'react';
import { TaskItemProps } from '../types/Todos';
import { ACTIONS } from '../defaults';

const CreateForm = ({ dispatch }: TaskItemProps) => {
	const [title, setTitle] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		// add todo
		if (title) {
			dispatch({ type: ACTIONS.ADD_TASK, payload: { title } });
		}
	};

	return (
		<div className="form-wrapper">
			<h2>Add an Item</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label className="form-label" htmlFor="title">
						<input
							className="form-input"
							type="text"
							id="title"
							name="title"
							placeholder="The todo"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</label>
				</div>
				<div className="form-group">
					<button className="form-button" type="submit">
						Create
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateForm;
