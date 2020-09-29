import React from "react";
import ReactDOM from "react-dom";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import SharkList from "./shark/SharkList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Router>
            <Header />
            <Container>
                <Switch>
                    <Route path="/" exact>
                        <SharkList />
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
