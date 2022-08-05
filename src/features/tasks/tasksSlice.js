import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        toggleTasksDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks[index].done = !tasks[index].done;
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
        removeTask: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks.splice(index, 1);
        },
        fetchExampleTasks: () => {},
        setTasks: (state, {payload: tasks}) =>{
            state.tasks = tasks;
        },
    },
});

export const { addTask, toggleHideDone, toggleTasksDone, setAllDone, removeTask, fetchExampleTasks, setTasks } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;