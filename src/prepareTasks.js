import useLocalStorageManager from "./LocalStorageManager"

export const usePrepareTasks = () => {

    const [tasks, setTasks] = useLocalStorageManager();

    const togeleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            return task;
        }));
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })))
    };

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
                content,
                done: false,
            },
        ]);
    };

    return {
        tasks,
        togeleTaskDone,
        removeTask,
        setAllDone,
        addNewTask
    };
}