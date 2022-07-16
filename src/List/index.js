
import { TaskList, Item, Content, Button } from "./styled"

const List = ({ tasks, hideDone, removeTask, togeleTaskDone }) => (
   <TaskList>
      {tasks.map(task => (
         <Item
            key={task.id}
            hidden={task.done && hideDone}
         >
            <Button
               done
               onClick={() => togeleTaskDone(task.id)}
            >
               {task.done ? "✔" : ""}
            </Button>
            <Content done={task.done}>
               {task.content}
            </Content>
            <Button
               remove
               onClick={() => removeTask(task.id)}>
               🗑
            </Button>
         </Item>
      ))}
   </TaskList >
);
export default List;