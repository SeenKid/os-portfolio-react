import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavbarLink = (props) => {

    const handleClick = (e) => {
        let elements = document.querySelectorAll("#" + props.window + " .NavbarLink");
        let open = document.querySelectorAll("#" + props.window + " .OSWindowTab");
        let toOpen = document.getElementById("tab-" + props.toOpen);

        for (let i = 0; i < elements.length; i++) {
            if (elements[i].dataset.active === "true")
                elements[i].dataset.active = "false";
        }
        e.target.dataset.active = "true";

        for (let i = 0; i < open.length; i++) {
            if (open[i].dataset.show === "true")
                open[i].dataset.show = "false";
        }
        toOpen.dataset.show = "true";
    }

    return (<p className={"NavbarLink"} data-active={props.active} onClick={(e) => handleClick(e)}>
        <FontAwesomeIcon icon={props.icon} style={{marginRight: ".5rem"}} />
        {props.title}
    </p>);
}

export default NavbarLink;
