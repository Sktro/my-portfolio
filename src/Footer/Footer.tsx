import React from "react";
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {SocialNetwork} from "./SocialNetworks/SocialNetwork";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h1 className={style.title}>Artem Petrov</h1>
                <div className={style.socialNetwork}>
                    <SocialNetwork/>
                    <SocialNetwork/>
                    <SocialNetwork/>
                    <SocialNetwork/>
                </div>
<h3>© 2022 Все права защищены</h3>
            </div>

        </div>
    )

}