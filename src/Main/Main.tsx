import React from "react";
import style from './Main.module.css'
import styleContainer from './../../src/common/styles/Container.module.css'
export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi there</span>
                    <h1>Artem Petrov</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}>
                </div>
            </div>
        </div>
    )
}