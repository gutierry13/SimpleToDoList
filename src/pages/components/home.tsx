import { HomeContainer } from "../styles/home";
import {RiArrowDropDownLine,RiArrowDropRightLine} from "react-icons/ri";
import {IoAddCircleOutline} from "react-icons/io5";
export function Home () {
  return (
    
    <HomeContainer>
      <nav>
      <div className="title">
       <h1>New project</h1>
       <IoAddCircleOutline size={30}/>
      </div>
        <div className="projects">
        <h2>Projects</h2>
       <RiArrowDropRightLine size={40}/>
        </div>
        <div className="tasks">
        <h2>Tasks</h2>
       <RiArrowDropDownLine size={40}/>
        </div>
      </nav>
      <footer>
        <input type="checkbox" name="theme" id="theme" />
        <label htmlFor="theme">Toggle</label>
      </footer>
    </HomeContainer>
  )
}
