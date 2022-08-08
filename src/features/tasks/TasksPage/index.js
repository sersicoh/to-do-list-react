import Form from "./Form";
import List from "./List";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";
import Buttons from "../../Buttons";
import { ActionButtons } from "../../Buttons/styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectAreTaskEmpty, selectHideDone, selectIsEveryTaskDone, setAllDone, toggleHideDone } from "../tasksSlice";


function TasksPage() {

   const areTasksEmpty = useSelector(selectAreTaskEmpty);
   const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
   const hideDone = useSelector(selectHideDone);

   const dispatch = useDispatch();

   return (
      <Container>
         <Header title="Lista zadań" />
         <Section
            title="Dodaj nowe zadanie"
            body={<Form />}
            extraHeaderContent={
               <Buttons
                  query={"Pobierz przykładowe zadania"}
                  onClick={() => dispatch(fetchExampleTasks())}
               />
            }
         />
         <Section
            title="Wyszukaj zadanie"
            body={<Search />}
         />
         <Section
            title="Lista zadań"
            body={
               <List />}
            extraHeaderContent={
               !areTasksEmpty && (
                  <ActionButtons>
                     <Buttons
                        query={`${hideDone ? "Pokaż" : "Ukryj"} ukończone`}
                        onClick={() => dispatch(toggleHideDone())}
                     />
                     <Buttons
                        query={"Ukończ wszystkie"}
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                     />
                  </ActionButtons>
               )
            }
         />
      </Container>
   );
}

export default TasksPage;
