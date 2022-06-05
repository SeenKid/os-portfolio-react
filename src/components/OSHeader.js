import * as React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBatteryThreeQuarters, faVolumeUp, faWifi} from "@fortawesome/free-solid-svg-icons";
import {useEffect} from "react";

const OSHeader = () => {
    const dateOptions = {
        hour: '2-digit',
        minute: '2-digit'
    };
    const [time, setTime] = React.useState(new Date().toLocaleTimeString('fr-FR', dateOptions));

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString('fr-FR', dateOptions));
        }, 1000);
    }, []);

    return (<header id={"OSHeader"}>
        <div id={"time"}>
            {time}
        </div>
        <div className={"contentIcons"}>
            <FontAwesomeIcon icon={faWifi} />
            <FontAwesomeIcon icon={faVolumeUp} />
            <FontAwesomeIcon icon={faBatteryThreeQuarters} />
        </div>
    </header>)
}

export default OSHeader;
