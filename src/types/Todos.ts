export interface TaskItemInterface {
	id: number;
	title: string;
	isCompleted: boolean;
}

export interface TaskItemProps {
	tasks?: TaskItemInterface[];
	task?: TaskItemInterface;
	dispatch: React.Dispatch<any>;
}
