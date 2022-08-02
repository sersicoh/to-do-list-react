
import { TaskList, Item, Content, Button } from "./styled"
import { useSelector } from "react-redux";
import { removeTask, selectTasks, toggleTasksDone } from "../tasksSlice";
import { useDispatch } from "react-redux";

const List = () => {

   const { tasks, hideDone } = useSelector(selectTasks);
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
                  onClick={() => dispatch(removeTask())}>
                  🗑
               </Button>
            </Item>
         ))}
      </TaskList >
   )
};
export default List;