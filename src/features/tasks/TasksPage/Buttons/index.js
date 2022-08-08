import { ActionButtons, ActionButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { fetchExampleTasks, selectAreTaskEmpty, selectHideDone, selectIsEveryTaskDone, selectTasks, setAllDone, toggleHideDone } from "../../tasksSlice";

const Buttons = () => {

  const areTasksEmpty = useSelector(selectAreTaskEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);
  
  const dispatch = useDispatch();
  return (
    <ActionButtons>
      <ActionButton onClick={() => dispatch(fetchExampleTasks())}>
    Pobierz przykładowe zadania
      </ActionButton>
      {!areTasksEmpty && (
        <>
          <ActionButton
            onClick={() => dispatch(toggleHideDone())}
          >
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </ActionButton>
          <ActionButton
            disabled={isEveryTaskDone}
            onClick={() => dispatch(setAllDone())}
          >Ukończ wszystkie
          </ActionButton>
        </>
      )}
    </ActionButtons>
  )
};

export default Buttons;