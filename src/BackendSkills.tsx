import { SiPython, SiFlask, SiSqlalchemy, SiPostgresql, SiNodedotjs, SiExpress } from "react-icons/si";

import './BackendSkills.scss';

function BackendSkills() {


    return (
        <section className='BackendSkills-Container'>
            <h1 className='BackendSkills-Header'>
                Backend
            </h1>
            <div className='BackendSkills'>
                <div className='BackendSkills-List'>
                    <div className='BackendSkills-Skill'><SiPython size='s' /></div>
                    <div className='BackendSkills-Skill'><SiFlask size='s' /></div>
                    <div className='BackendSkills-Skill'><SiSqlalchemy size='s' /></div>
                    <div className='BackendSkills-Skill'><SiPostgresql size='s' /></div>
                    <div className='BackendSkills-Skill'><SiNodedotjs size='s' /></div>
                    <div className='BackendSkills-Skill'><SiExpress size='s' /></div>
                </div>
            </div>
        </section>
    );
}

export default BackendSkills;
