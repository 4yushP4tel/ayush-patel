import './index.css';
import { useState } from 'react';

const name = "Ayush";
const full_name = "Ayush Patel"
const linkedin = "https://www.linkedin.com/in/ayush-patel-701205230/" ;
const github = "https://github.com/4yushP4tel" ;

const scroll_to = (section_id) => {
    document.getElementById(section_id).scrollIntoView({behavior : "smooth"})
}


//navigation bar
export function Navigation(){
    
    return(
        <nav className = "navigation" value = "navigation">
            <div className= "left_side_nav">
                <img src="landscape.jpg" alt="nav_bar_photo" />
                <h2 onClick={()=>scroll_to("intro")}>{full_name}</h2>
            </div>
            <ul>
            <li onClick={()=>scroll_to("about_me")}>About</li>  
            <li onClick={()=>scroll_to("myeducation")}>Education</li>  
            <li onClick={()=>scroll_to("myprojects")}>Projects</li>  
            <li onClick={()=>scroll_to("myskills")}>Skills</li>    
            </ul>
        </nav>
    );
}


//title, welcome to my page
export function Title(){
    return(
        <header className= "intro" id="intro">
            <div>
            <h1>Hello, I'm </h1>
            <span className='name_intro'><h1>{name}.</h1></span>
            </div>

            <ul className='links'>
                <li><a href={linkedin} target='_blank'><img className="linkedin_image" src="linkedin.jpg" alt="linkedin" /></a></li>
                <li className='githubimg'><a href={github} target='_blank'><img className="github_image" src="darkmodegithub.jpg" alt="github" /></a></li>
                <li><a href= "resume.pdf" target='_blank'><img className="resume_image" src="resume.jpg" alt="email" /></a></li>
                <li><a href= "mailto: ayush.patel@mail.mcgill.ca" target='_blank'><img className="email_image" src="email.jpg" alt="email" /></a></li>
            </ul>
            <img className="working" src="working.jpg" alt="working" />
        </header>
    );
}

// short about me section
export function About(){
    return(
        <section className='aboutme' id='about_me'>
            <h2>About Me: </h2>
            <p>Hi, my Name is Ayush Patel. I am a 19 year old 
            software engineering student at McGill University. I plan on graduating in 2028.
            </p>
            <p>
            I am a full stack developper who loves to build projects that solve real world problems.
            My curious nature and my love for discovery continuously push me to build new projects and to learn new technologies.
            My main coding languages are Python and Javascript, with which I like to build diverse projects. In the past, I've built
            full-stack web apps and games using different libraries and frameworks.
            </p>
            <p>
            By connecting with me, we can collaborate and build amazing projects together!
            </p>
        </section>
    );
}

export function Education(){
    return(
        <section className="entire_education" id='myeducation'>
            <div className='education'>
                <h2>My Education:</h2>
                <div className='university'>
                    <div className='name_logo'>
                        <h3 className='mcgill'>McGill University</h3>
                        <a href="https://www.mcgill.ca/" target="_blank"> <img className="mcgill_icon" src="mcgill.jpg" alt="mcgill_icon" /></a>
                    </div>
                    <div className='mcgill_innerdiv'>
                        <h4>Bachelor of Software Engineering Co-Op <span className='study_period'>Expected 2028</span></h4>
                        <p><span>Relevant Course Work: </span>Software Development, Digital Logic</p>
                    </div>
                </div>

                <div className='cegep'>
                    <div className='name_logo'>
                        <h3 className='jac'>John Abbott College</h3>
                        <a href="https://johnabbott.qc.ca/" target='_blank'><img className='jac_icon' src="jac.jpg" alt="jac_icon" /></a>
                    </div>
                    <div className="jac_innerdiv">
                        <h4>Sciences <span className='study_period'>2022-2024</span></h4>
                        <p>Awards: Dean's List</p>
                    </div>
                </div>
                
            </div>

            <img className="education_hat_image" src="education.jpg" alt="education_hat_picture" />
           
        </section>
    );
}

export function Projects(){

    const [projectdisplay, setprojectdisplay] = useState("GetFitAIdisplay");

    const change_display = (e) => {
        setprojectdisplay(e.target.value);
    }

    return(
        <section className='projects' id='myprojects'>
            <h2>My Projects: </h2>
            <section className='project_selection'>
                <label className='project_select' style={{color: projectdisplay === "GetFitAIdisplay"? 'rgb(0, 166, 255)' : '#a2cffe'}}><input type="radio" className="radio_check" value="GetFitAIdisplay" name='project_display' onChange={change_display} checked={projectdisplay === "GetFitAIdisplay"}/>GetFitAI</label>
                <label className='project_select' style={{color: projectdisplay === "Snakedisplay"? 'rgb(0, 166, 255)' : '#a2cffe'}}><input type="radio" className="radio_check" value="Snakedisplay" name='project_display' onChange={change_display} checked={projectdisplay === "Snakedisplay"}/>Infinite Snake Game</label>
                <label className='project_select' style={{color: projectdisplay === "Portfoliodisplay"? 'rgb(0, 166, 255)' : '#a2cffe'}}><input type="radio" className="radio_check" value="Portfoliodisplay" name='project_display' onChange={change_display} checked={projectdisplay === "Portfoliodisplay"}/>Portfolio Website</label>
            </section>
            <section className='single_project' style={{display: projectdisplay === "GetFitAIdisplay"? 'block' : 'none'}} >
                <h3>GetFitAI</h3>
                <div className='project_content_images'>
                    <img src="workout.jpg" alt="getfitai_image" className='project_images'/>
                    <a href="https://github.com/4yushP4tel/GetFitAI" target='_blank'><img src="darkmodegithub.jpg" alt="githubincon" className='githubimg'/></a>
                </div>
                <p>GetFitAI is a fullstack web application that uses the OpenAI REST API to generate workout plans and diet outlines designed according to a user's needs.</p>
                <div className='project_skills'>
                    <ul>
                        <li><img src="python.jpg" alt="python" /></li>
                        <li><img src="flask.jpg" alt="flask" /></li>
                        <li><img src="html.jpg" alt="html" /></li>
                        <li><img src="css.jpg" alt="css" /></li>
                        <li><img src="js.jpg" alt="js" /></li>
                    </ul>
                </div>
            </section>

            <section className='single_project' style={{display: projectdisplay === "Snakedisplay"? 'block' : 'none'}}>
                <h3>Infinite Snake Game</h3>
                <div className='project_content_images'>
                    <img src="snakegame.jpg" alt="snakegame_image" className='project_images'/>
                    <a href="https://github.com/4yushP4tel/Snake_Game" target='_blank'><img src="darkmodegithub.jpg" alt="githubicon" className='githubimg'/></a>
                </div>
                <p>The Infinite Snake Game is a game created using the PyGame python library and the principles of object oriented programming. It allows a user to play the classic Snake Game for as long as they desire all while being able to track their score.</p>
                <div className='project_skills'>
                    <ul>
                        <li><img src="python.jpg" alt="python" /></li>
                        <li><img src="pygame.jpg" alt="pygame" /></li>
                    </ul>

                </div>
            </section>
            <section className='single_project' style={{display: projectdisplay === "Portfoliodisplay"? 'block' : 'none'}}>
                <h3>Portfolio Website</h3>
                <div className='project_content_images'>
                    <img src="portfolio.jpg" alt="portfolio_image" className='project_images'/>
                    <a href="https://github.com/4yushP4tel/ayush-patel" target='_blank'><img src="darkmodegithub.jpg" alt="githubicon" className='githubimg'/></a>
                </div>
                <p>My Personal Portfolio Website is a React app that is built completely from scratch. It is the website that you are currently on right now!</p>
                <div className='project_skills'>
                    <ul>
                        <li><img src="js.jpg" alt="js" /></li>
                        <li><img src="react.jpg" alt="react" /></li>
                        <li><img src="css.jpg" alt="css" /></li>

                    </ul>

                </div>


            </section>
    </section>
    );
}

export function Skills(){
    return(
        <section className='skills' id='myskills'>
            <h2>My Skills:</h2>
            <section className='languages'>
                <h3>Coding Languages</h3>
                <ul>
                    <li><img src="python.jpg" alt="python" /></li>
                    <li><img src="js.jpg" alt="js" /></li>
                    <li><img src="html.jpg" alt="html"/></li>
                    <li><img src="css.jpg" alt="css" /></li>
                </ul>

            </section>

            <section className='frameworks'>
                <h3>Frameworks/Libraries</h3>
                <ul>
                    <li><img src="react.jpg" alt="react" /></li>
                    <li><img src="flask.jpg" alt="flask"/></li>
                    <li><img src="pygame.jpg" alt="pygame" /></li>
                </ul>
            </section>

            <section className='technologies'>
                <h3>Technologies</h3>
                <ul>
                    <li><img src="git.jpg" alt="git"/></li>
                    <li><img src="nodejs.jpg" alt="nodejs"/></li>
                    <li><img src="restapi.jpg" alt="restapi"/></li>
                </ul>
                
            </section>


        </section>
    );
}



