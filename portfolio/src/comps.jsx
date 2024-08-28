import './index.css';

const name = "Ayush";
const full_name = "Ayush Patel"
const linkedin = "https://www.linkedin.com/in/ayush-patel-701205230/" ;
const github = "https://github.com/4yushP4tel" ;

// sections of the page
// this will be in the navigation bar
const pages = 
    [{id : "about" , section_name : "About", destination_id : "aboutme"},
    {id : "education" , section_name : "Education", destination_id : "myeducation"},
    {id : "skills" , section_name : "Skills", destination_id: "myskills"}, 
    {id : "projects" , section_name : "Projects", destination_id: "myprojects"}];

    const nav_bar = pages.map(page=>
        <li key={page.id}>{page.section_name}</li>
    );

//about me section paragraph


//navigation bar
export function Navigation(){
    return(
        <nav className = "navigation">
            <div className= "right_side_nav">
                <img src="landscape.jpg" alt="nav_bar_photo" />
                <h2>{full_name}</h2>
            </div>
            <ul>
                {nav_bar}
            </ul>
        </nav>
    );
}


//title, welcome to my page
export function Title(){
    return(
        <header className= "intro">
            <div>
            <h1>Hello, I'm </h1>
            <span className='name_intro'><h1>{name}.</h1></span>
            </div>

            <ul className='links'>
                <li><a href={linkedin} target='_blank'><img className="linkedin_image" src="linkedin.jpg" alt="linkedin" /></a></li>
                <li><a href={github} target='_blank'><img className="github_image" src="darkmodegithub.jpg" alt="github" /></a></li>
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
                        <a href="https://www.mcgill.ca/"> <img className="mcgill_icon" src="mcgill.jpg" alt="mcgill_icon" /></a>
                    </div>
                    <div className='mcgill_innerdiv'>
                        <h4>Bachelor of Software Engineering Co-Op <span className='study_period'>Expected 2028</span></h4>
                        <p><span>Relevant Course Work: </span>Software Development, Digital Logic</p>
                    </div>
                </div>

                <div className='cegep'>
                    <div className='name_logo'>
                        <h3 className='jac'>John Abbott College</h3>
                        <a href="https://johnabbott.qc.ca/"><img className='jac_icon' src="jac.jpg" alt="jac_icon" /></a>
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
    return(
        <section className='projects' id='myprojects'>
        <h2>My Projects: </h2>
        <section className='getfitai'>
            <h3>GetFitAI</h3>
            <p>GetFitAI is a fullstack web application that uses the OpenAI REST API to generate workout plans and diet outlines designed according to a user's needs.</p>
            <a href="https://github.com/4yushP4tel/GetFitAI"><img src="darkmodegithub.jpg" alt="githubincon" /></a>
            <div className='project_skills'>
                <ul>
                    <li>python</li>
                    <li>flask</li>
                    <li>html</li>
                    <li>css</li>
                    <li>js</li>
                </ul>
            </div>

        </section>
        <section className='snake'>
            <h3>Infinite Snake Game</h3>
            <p>The Infinite Snake Game is a game created using the PyGame python library and the principles of object oriented programming. It allows a user to play the classic Snake Game for as long as they desire all while being able to track their score.</p>
            <a href="https://github.com/4yushP4tel/Snake_Game"><img src="darkmodegithub.jpg" alt="githubicon" /></a>
            <div className='project_skills'>
                <ul>
                    <li>python</li>
                    <li>pygame</li>
                </ul>

            </div>
        </section>
    </section>
    );
}

