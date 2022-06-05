import * as React from 'react';

const OSTab = (props) => {
    return (<div id={props.id} className={"OSWindowTab"} data-show={"true"}>
        {props.children}
    </div>);
}

export default OSTab;
