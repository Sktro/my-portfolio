import React from "react";
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Form} from "./Form/Form";


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h1>Контакты</h1>
                <Form/>
                </div>
        </div>
    )
}