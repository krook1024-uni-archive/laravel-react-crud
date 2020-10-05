import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Table, Spinner } from "react-bootstrap";
import EditIcons from "./EditIcons";

const SharkList = () => {
    const [loading, setLoading] = useState(true);
    const [sharks, setSharks] = useState([]);

    useEffect(() => {
        axios.get("/api/sharks").then((data) => {
            setSharks(data.data.data);
            setLoading(false);
        });
    }, [setSharks]);

    if (loading) {
        return <Spinner animation="border" role="status" />;
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sharks.map((shark) => (
                        <tr key={shark.id}>
                            <td>{shark.id}</td>
                            <td>{shark.name}</td>
                            <td>{shark.email}</td>
                            <td>
                                <EditIcons object={shark} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default SharkList;
