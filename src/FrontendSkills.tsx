import { SiTypescript, SiJquery, SiReact, SiJavascript, SiHtml5, SiCss3, SiSass, SiBootstrap } from "react-icons/si";




import './FrontendSkills.scss';

function FrontendSkills() {


    return (
        <section className='FrontendSkills-Container'>
            <h1 className='FrontendSkills-Header'>
                Frontend
            </h1>
            <div className='FrontendSkills'>
                <div className='FrontendSkills-List'>
                    <div className='FrontendSkills-Skill'><SiTypescript size='s' /></div>
                    <div className='FrontendSkills-Skill'><SiJavascript size='s' /></div>
                    <div className='FrontendSkills-Skill'><SiReact size='s' /></div>
                    <div className='FrontendSkills-Skill'><SiJquery size='s' /></div>
                    <div className='FrontendSkills-Skill'><SiHtml5 size='s' /></div>
                    <div className='FrontendSkills-Skill'><SiCss3 size='s' /></div>
                    <div className='FrontendSkills-Skill'><SiSass size='s' /></div>
                    <div className='FrontendSkills-Skill'><SiBootstrap size='s' /></div>
                </div>
            </div>
        </section>
    );
}

export default FrontendSkills;