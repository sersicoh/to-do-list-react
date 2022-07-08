import "./style.css";
const List = ({ tasks, hideDone, removeTask, togeleTaskDone }) => (
   <ul className="list">
      {tasks.map(task => (
         <li key={task.id} className={`list__newTask ${task.done && hideDone ? "list__newTask--hidden" : ""}`}>
            <button className="list__buttons list__buttons--done" onClick={() => togeleTaskDone(task.id)}>
               {task.done ? "✔" : ""}
            </button>
            <span className={`list__content ${task.done ? "list__content--done" : ""}`}>
               {task.content}
            </span>
            <button className="list__buttons list__buttons--remove" onClick={() => removeTask(task.id)}>
               🗑
            </button>
         </li>
      ))}
   </ul >
);
export default List;