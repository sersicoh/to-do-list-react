
import { TaskList, Item, Content, Button } from "./styled"
import { useSelector } from "react-redux";
import { removeTask, selectHideDone, selectTasks, toggleTasksDone } from "../tasksSlice";
import { useDispatch } from "react-redux";

const List = () => {

   const tasks = useSelector(selectTasks);
   const hideDone = useSelector(selectHideDone);

   const dispatch = useDispatch();
   return (
      <TaskList>
         {tasks.map(task => (
            <Item
               key={task.id}
               hidden={task.done && hideDone}
            >
               <Button
                  done
                  onClick={() => dispatch(toggleTasksDone(task.id))}
               >
                  {task.done ? "✔" : ""}
               </Button>
               <Content done={task.done}>
                  {task.content}
               </Content>
               <Button
                  remove
                  onClick={() => dispatch(removeTask(task.id))}>
                  🗑
               </Button>
            </Item>
         ))}
      </TaskList >
   )
};
export default List;