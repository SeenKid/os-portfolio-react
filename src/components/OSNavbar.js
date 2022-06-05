import * as React from 'react'
import NavbarIcon from "./NavbarIcon";
import {faAddressCard, faDiagramProject, faAddressBook, faBookSkull, faCode} from "@fortawesome/free-solid-svg-icons";

const OSNavbar = () => {
    return (<div id={"OSNavbar"}>
        <NavbarIcon icon={faAddressCard} title={"À propos"} toOpen={"about"}/>
        <NavbarIcon icon={faCode} title={"Compétences"} toOpen={"skills"}/>
        <NavbarIcon icon={faDiagramProject} title={"Projets"} toOpen={"projects"}/>
        <NavbarIcon icon={faBookSkull} title={"Expériences"} toOpen={"experiences"}/>
        <NavbarIcon icon={faAddressBook} title={"Contact"} toOpen={"contact"}/>
    </div>);
}

export default OSNavbar;
