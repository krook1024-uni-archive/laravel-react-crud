import React from "react";
import ReactDOM from "react-dom";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import SharkList from "./shark/SharkList";
import "bootstrap/dist/css/bootstrap.min.css";
import SharkCreate from "./shark/SharkCreate";

function App() {
    return (
        <Router>
            <Header />
            <Container>
                <Switch>
                    <Route path="/" exact>
                        <SharkList />
                    </Route>
                    <Route path="/create">
                        <SharkCreate />
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
