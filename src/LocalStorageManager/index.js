import { useState, useEffect } from "react";

const useLocalStorageManager = () => {

    const getLocalStorage = () =>
        JSON.parse(localStorage.getItem("tasks")) || [];

    const [tasks, setTasks] = useState(getLocalStorage);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return [tasks, setTasks];
};

export default useLocalStorageManager;