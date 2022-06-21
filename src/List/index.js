import "./style.css";
const List = ({ tasks, hideDoneTasks }) => (
   <ul className="list">
      {tasks.map(task => (
         <li className={`list__newTask ${task.done && hideDoneTasks ? "list__newTask--hidden" : ""}`}>
            <button className="list__buttons list__buttons--done">
               {task.done ? "✔" : ""}
            </button>
            <span className={`list__content ${task.done ? "list__content--done" : ""}`}>
               {task.content}
            </span>
            <button className="list__buttons list__buttons--remove">
               🗑
            </button>
         </li>
      ))}
   </ul >
);
export default List;