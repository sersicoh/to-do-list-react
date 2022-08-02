import { ActionButtons, ActionButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, setAllDone, toggleHideDone } from "../tasksSlice";

const Buttons = () => {

  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <ActionButtons>
      {tasks.length > 0 && (
        <>
          <ActionButton
            onClick={() => dispatch(toggleHideDone())}
          >
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </ActionButton>
          <ActionButton
            disabled={tasks.every(({ done }) => done)}
            onClick={() => dispatch(setAllDone())}
          >Ukończ wszystkie
          </ActionButton>
        </>
      )}
    </ActionButtons>
  )
};

export default Buttons;