export const getExampleTasks = async () => {
    const response = await fetch("/to-do-list-react/assets/exampleTasks.json");

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
}