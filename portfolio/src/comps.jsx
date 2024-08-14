import './index.css';

const name = "Ayush";
const full_name = "Ayush Patel"
const linkedin = "https://www.linkedin.com/in/ayush-patel-701205230/" ;
const github = "https://github.com/4yushP4tel" ;

// sections of the page
// this will be in the navigation bar
const sections = 
    [{id : "about" , section_name : "About"},
    {id : "education" , section_name : "Education"},
    {id : "skills" , section_name : "Skills"}, 
    {id : "projects" , section_name : "Projects"}];

const nav_bar = sections.map(section=>
    <li key={section.id}>{section.section_name}</li>
);

const intro_paragraph = `Hi, my Name is Ayush Patel. I am a 19 year old 
software engineering student at McGill University. I plan on graduating in 2028.

I am a full stack developper who loves to build projects that solve real world problems.
My curious nature and my love for discovery continuously push me to build new projects and to learn new technologies.
My main coding languages are Python and Javascript, with which I like build projects. In the past, I've built
full-stack web apps and games using different libraries and frameworks.

By connecting with me, we can collaborate and build amazing projects together!
`;

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

export function Title(){
    return(
        <div className= "intro">
            <div>
            <h1>Hello, I'm </h1>
            <span className='name_intro'><h1>{name}.</h1></span>
            </div>
            <ul className='links'>
                <li><a href={linkedin} target='_blank'><img className="linkedin_image" src="linkedin.jpg" alt="linkedin" /></a></li>
                <li><a href={github} target='_blank'><img className="github_image" src="darkmodegithub.jpg" alt="github" /></a></li>
                <li><a href= "mailto: ayush.patel@mail.mcgill.ca" target='_blank'><img className="email_image" src="email.jpg" alt="email" /></a></li>
            </ul>
            <img className="working" src="working.jpg" alt="working" 
            />
        </div>
    );
}

