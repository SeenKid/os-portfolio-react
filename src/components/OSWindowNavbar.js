import * as React from 'react'

const OSWindowNavbar = (props) => {
    return (<div className={"OSWindowNavbar"}>
        <h2 className={"OSWindowTitle"}>{props.title}</h2>
        <div className={"OSWindowLinks"}>
            {props.children}
        </div>
    </div>)
}

export default OSWindowNavbar;
