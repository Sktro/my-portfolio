import React from "react";
import styleContainer from './../../src/common/styles/Container.module.css'
import style from './RemoteWork.module.css'
export const RemoteWork = () => {
    return (
        <div className={style.RemoteWorksBlock}>
            <div className={`${styleContainer.container} ${style.RemoteWorksContainer}`}>
                <h1>Рассматриваю вариант удаленной работы</h1>
                <button>Нанять меня</button>
            </div>
        </div>

    )
}