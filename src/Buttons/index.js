import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <div className="actionButtons">
    {tasks.length > 0 && (
      <>
        <button
          onClick={toggleHideDone}
          className="actionButton"> {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className="actionButton actionButton--disabled"
          disabled={tasks.every(({ done }) => done)}
          onClick={setAllDone}
        >Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Buttons;