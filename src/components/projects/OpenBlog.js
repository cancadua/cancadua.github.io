import {Arrow} from "../Arrow";
import {useState} from "react";

export const OpenBlog = () => {
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)

    return (
        <div className='project-container'>
            <h3>open-blog</h3>
            <a className={'img-container'} href={'https://github.com/cancadua/open-blog-mern-client'}>
                <img className={isDescriptionOpen ? "img" : "img-blurred"} src={process.env.PUBLIC_URL + '/open-blog.png'} alt={''}/>
            </a>
            {isDescriptionOpen ?
                <div className='description-container'>
                    <div className='description'>
                        Open-blog is big project containing three applications in three different technology stacks: WAMPython, RoRPostgreSQL, MERN. Applications have same functionality (blog without user recognition) and style. The final point will be comparison of web tech stacks.
                    </div>
                    <div className='tags'>
                        <div className='tag'>
                            React
                        </div>
                        <div className='tag'>
                            Express
                        </div>
                        <div className='tag'>
                            Django
                        </div>
                        <div className='tag'>
                            Ruby on Rails
                        </div>
                        <div className='tag'>
                            SSR
                        </div>
                        <div className='tag'>
                            CSR
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