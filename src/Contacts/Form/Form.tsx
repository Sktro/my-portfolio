import React from "react";
import style from './Form.module.css'
export const Form = () => {
    return (
        <div className={style.formContainer}>
            <form action="" className={style.form}>
                <input/>
                <input/>
                <textarea/>
            </form>
            <button>Отправить</button>
        </div>

    )
}