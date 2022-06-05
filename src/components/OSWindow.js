import * as React from 'react'
import OSWindowHeader from "./OSWindowHeader";
import OSWindowNavbar from "./OSWindowNavbar";
import Draggable from "react-draggable";

const OSWindow = (props) => {

    const handleClick = (e) => {
        let elements = document.getElementsByClassName("OSWindow");
        const el = document.getElementById(props.id);

        for (let i = 0; i < elements.length; i++) {
            if (elements[i].dataset.show === "true")
                elements[i].style.zIndex = "1";
            else
                elements[i].style.zIndex = "-1";
        }

        el.style.zIndex = "10";
    }

    return (<Draggable handle={".OSWindowHeader"} onDrag={(e) => handleClick(e)}>
        <div data-show={false} id={props.id} className={"OSWindow"} >
            <OSWindowHeader id={props.id} />
            <OSWindowNavbar title={props.title}>
                {props.navbar}
            </OSWindowNavbar>
            <div className={"OSWindowContent"}>
                {props.children}
            </div>
        </div>
    </Draggable>)
}

export default OSWindow
