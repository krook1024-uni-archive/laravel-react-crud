import React, { useState } from "react";
import useInput from "react-use-input";
import { Form, Button, Spinner } from "react-bootstrap";
import { Redirect } from "react-router";

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

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={setName}
                    isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.name}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={setEmail}
                    isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.email}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Shark Level</Form.Label>
                <Form.Control
                    as="select"
                    value={sharkLevel}
                    onChange={setSharkLevel}
                    isInvalid={!!errors.shark_level}
                >
                    <option value={1}>Hangaround</option>
                    <option value={2}>Member</option>
                    <option value={3}>Kingpin</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                    {errors.shark_level}
                </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default SharkCreate;
