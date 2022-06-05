import * as React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavbarIcon = (props) => {
    const openPopup = () => {
        const el = document.getElementById(props.toOpen);
        let elements = document.getElementsByClassName("OSWindow");

        for (let i = 0; i < elements.length; i++) {
            if (elements[i].dataset.show === "true")
                elements[i].style.zIndex = "1";
            else
                elements[i].style.zIndex = "-1";
        }
        el.dataset.show = "true";
        el.style.zIndex = "10";
    }

    return (<div className={"NavbarIcon"} onClick={() => openPopup()}>
        <div className={"NavbarIconTitle"}>
            <p>{props.title}</p>
            <div className={"TitleCarpet"}></div>
        </div>
        <FontAwesomeIcon icon={props.icon}/>
    </div>);
}

export default NavbarIcon;
