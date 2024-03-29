import React from "react";
import style from './Skills.module.css'
import styleContainer from './../../src/common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'React'} description={'asdasd asdasf safdasfecewv sadfdsfaw asdfascvwf'}/>
                    <Skill title={'JS'} description={'asdasd asdasf safdasfecewv sadfdsfaw asdfascvwf'}/>
                    <Skill title={'HTML'} description={'asdasd asdasf safdasfecewv sadfdsfaw asdfascvwf'}/>
                </div>
            </div>
        </div>
    )
}