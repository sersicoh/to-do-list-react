import { createSlice } from "@reduxjs/toolkit";
import { getTasksFormLocalStorage } from "./tasksLocalStorege";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFormLocalStorage(),
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTasksDone: ({ tasks }, { payload: taksId }) => {
            const index = tasks.findIndex(({ id }) => id === taksId);
            tasks[index].done = !tasks[index].done;
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
        removeTask: ({ tasks }, { payload: taksId }) => {
            const index = tasks.findIndex(({ id }) => id === taksId);
            tasks.splice(index, 1);
        },
        fetchExampleTasks: () => { },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTasksDone,
    setAllDone,
    removeTask,
    fetchExampleTasks,
    setTasks
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAreTaskEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);

export default tasksSlice.reducer;