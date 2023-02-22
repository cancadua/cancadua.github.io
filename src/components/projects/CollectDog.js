import {Arrow} from "../Arrow";
import {useState} from "react";

export const CollectDog = () => {
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)

    return (
        <div className='project-container'>
            <h3>collect-dog</h3>
            <a className='img-container' href='https://github.com/cancadua/collect-dog'>
                <img className={isDescriptionOpen ? "img" : "img-blurred"} src={process.env.PUBLIC_URL + '/collectDog.png'} alt=''/>
            </a>
            {isDescriptionOpen ?
                <div className='description-container'>
                    <div className='description'>
                        Collect-dog is simple web app. Allows user to collect random dog pictures from open web api. Then user is able to watch all found pictures sorted by dog breed.
                    </div>
                    <div className='tags'>
                        <div className='tag'>
                            JavaScript
                        </div>
                        <div className='tag'>
                            React
                        </div>
                        <div className='tag'>
                            RWD
                        </div>
                    </div>
                </div> :
                <></>

            }
            <div style={{display: "flex", justifyContent: "center"}}>
                <button style={ isDescriptionOpen ? {transform: 'rotate(180deg)',  transition: "all 0.1s ease-in-out"} : {transition: "all 0.1s ease-in-out"}}
                        onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}>
                    <Arrow/>
                </button>
            </div>

        </div>
    )
}