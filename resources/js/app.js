import React from "react";
import ReactDOM from "react-dom";
import { Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    return (
        <>
            <Header />
            <Container>hello world!</Container>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
