import React, { useState } from "react";
import useInput from "react-use-input";
import { Form, Button, Spinner } from "react-bootstrap";
import { Redirect } from "react-router";
import SharkForm from "./SharkForm";

const SharkCreate = () => {
    const [name, setName] = useInput("");
    const [email, setEmail] = useInput("");
    const [sharkLevel, setSharkLevel] = useInput(0);
    const [loading, setLoading] = useState(false);
    const [redirect, setRedirect] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        axios
            .post("/api/sharks", {
                name,
                email,
                shark_level: sharkLevel,
            })
            .then((data) => {
                if (!data.data.errors) {
                    setRedirect("/");
                } else {
                    setErrors(data.data.errors);
                }
                setLoading(false);
            });
    };

    if (redirect.length > 0) {
        return <Redirect to={redirect} />;
    }

    if (loading) {
        return <Spinner animation="border" role="status" />;
    }

    const props = {
        name,
        setName,
        email,
        setEmail,
        sharkLevel,
        setSharkLevel,
        errors,
    };

    return <SharkForm handleSubmit={(e) => handleSubmit(e)} {...props} />;
};

export default SharkCreate;
