import React from "react";
import style from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href={'#'}>Главная</a>
            <a href={'#'}>Скилы</a>
            <a href={'#'}>Проэкты</a>
            <a href={'#'}>Контакты</a>
        </div>
    )
}