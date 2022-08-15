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
        fetchExampleTasks: state => {
            state.loading = true;
        },
        fetchExampleTasksSuccess: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.loading = false;
        },
        fetchExampleTasksError: (state) => {
            state.loading = false;
        },
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
    fetchExampleTasksSuccess,
    fetchExampleTasksError,
    setTasks
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectLoading = state => selectTasksState(state).loading;
export const selectAreTaskEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTaskByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    }

    return tasks.filter(({ content }) =>
        content.toUpperCase().includes(query.trim().toUpperCase()));
}


export default tasksSlice.reducer;