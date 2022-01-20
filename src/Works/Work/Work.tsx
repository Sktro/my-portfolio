import React from "react";
import style from './Work.module.css'

export const Work = () => {
    return (
        <div className={style.workBlock}>
            <div className={style.img}><a href={'#'}>Смотреть</a></div>
            <div className={style.text}>
                <div>Название проэкта:</div>
                <div>Краткое описание:</div>
            </div>
        </div>
    )
}