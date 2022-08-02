import { ActionButtons, ActionButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <ActionButtons>
    {tasks.length > 0 && (
      <>
        <ActionButton
          onClick={toggleHideDone}
        >
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </ActionButton>
        <ActionButton
          disabled={tasks.every(({ done }) => done)}
          onClick={setAllDone}
        >Ukończ wszystkie
        </ActionButton>
      </>
    )}
  </ActionButtons>
);

export default Buttons;