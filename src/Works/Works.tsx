import React from "react";
import styleContainer from './../../src/common/styles/Container.module.css'
import style from "./Works.module.css";
import {Work} from "./Work/Work";
export const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h1 className={style.title}>My Works</h1>
                <div className={style.works}>
                    <Work/>
                    <Work/>
                </div>

            </div>
        </div>

    )
}