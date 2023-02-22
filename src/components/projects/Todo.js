import {Arrow} from "../Arrow";
import {useState} from "react";

export const Todo = () => {
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)

    return (
        <div className='project-container'>
            <h3
            >todo-app</h3>
            <a className='img-container' href='https://github.com/cancadua/todo-app'>
                <img className={isDescriptionOpen ? "img" : "img-blurred"} src={process.env.PUBLIC_URL + '/todo.png'} alt=''/>
            </a>
            {isDescriptionOpen ?
                <div className='description-container'>
                    <div className='description'>
                        Todo-app is todo tasks manager. Allows to create tasks, change their individual color theme. All tasks are held by Redux state manager and saved in local storage. User can set task finished or remove them by dragging tasks to delete area.
                    </div>
                    <div className='tags'>
                        <div className='tag'>
                            JavaScript
                        </div>
                        <div className='tag'>
                            React
                        </div>
                        <div className='tag'>
                            Redux
                        </div>
                        <div className='tag'>
                            TailwindCSS
                        </div>
                    </div>
                </div> :
                <></>
            }
            <div style={{display: "flex", justifyContent: "center"}}>
                <button style={ isDescriptionOpen ? {transform: 'rotate(180deg)',  transition: "all 0.1s ease-in-out"} : {transition: "all 0.1s ease-in-out"}} onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}>
                    <Arrow/>
                </button>
            </div>
        </div>
    )
}