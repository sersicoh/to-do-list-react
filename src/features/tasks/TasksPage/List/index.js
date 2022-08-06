
import { TaskList, Item, Content, Button } from "./styled"
import { useSelector } from "react-redux";
import { removeTask, selectHideDone, selectTaskByQuery, toggleTasksDone } from "../../tasksSlice";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const List = () => {

   const location = useLocation();
   const query = (new URLSearchParams(location.search)).get("searchQueryParamName");

   const tasks = useSelector(state => selectTaskByQuery(state, query));
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
                  <Link to={`/zadania/${task.id}`}>{task.content}</Link>
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