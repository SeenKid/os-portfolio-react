import * as React from 'react'
import {Helmet} from "react-helmet";
import "../styles/style.scss";
import MainContainer from "../components/MainContainer";

const IndexPage = () => {
    return (
        <>
            <Helmet>
                <title>SeenKid - développeur</title>
            </Helmet>
            <MainContainer/>
        </>
    )
}

export default IndexPage
