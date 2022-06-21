import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
  <div className="actionButtons">
    {tasks.length > 0 && (
      <>
        <button
          className="actionButton"> {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className="actionButton actionButton--disabled"
          disabled={tasks.every(({ done }) => done)}> Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Buttons;