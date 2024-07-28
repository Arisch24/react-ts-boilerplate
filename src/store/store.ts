import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./reducer";

const rootReducer = combineReducers({
	tasksReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export default store;
