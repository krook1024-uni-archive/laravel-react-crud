import React from "react";
import { Button, Form } from "react-bootstrap";

const SharkForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={props.name}
                    onChange={props.setName}
                    isInvalid={!!props.errors.name}
                />
                <Form.Control.Feedback type="invalid">
                    {props.errors.name}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={props.email}
                    onChange={props.setEmail}
                    isInvalid={!!props.errors.email}
                />
                <Form.Control.Feedback type="invalid">
                    {props.errors.email}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Shark Level</Form.Label>
                <Form.Control
                    as="select"
                    value={props.sharkLevel}
                    onChange={props.setSharkLevel}
                    isInvalid={!!props.errors.shark_level}
                >
                    <option value={1}>Hangaround</option>
                    <option value={2}>Member</option>
                    <option value={3}>Kingpin</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                    {props.errors.shark_level}
                </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default SharkForm;
