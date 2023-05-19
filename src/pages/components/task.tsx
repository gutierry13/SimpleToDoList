import { TbListDetails } from 'react-icons/tb'
import { TaskContainer } from '../styles/task'
export function Task() {
  return (
    <TaskContainer>
      <input type="checkbox" />
      <p>Task name</p>
      <TbListDetails size={20} />
    </TaskContainer>
  )
}
