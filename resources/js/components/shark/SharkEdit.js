import React, { useEffect, useState } from "react";
import SharkForm from "./SharkForm";
import useInput from "react-use-input";
import { Spinner } from "react-bootstrap";

const SharkEdit = (props) => {
    // shark props
    const [name, setName, setNameManual] = useInput("");
    const [email, setEmail, setEmailManual] = useInput("");
    const [sharkLevel, setSharkLevel, setSharkLevelManual] = useInput(0);

    // edited shark
    const [editedShark, setEditedShark] = useState({});

    // misc vars
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const [redirect, setRedirect] = useState("");
    const id = props.match.params.id;

    useEffect(() => {
        setNameManual(editedShark.name);
        setEmailManual(editedShark.email);
        setSharkLevelManual(editedShark.shark_level);
    }, [editedShark]);

    function fetchShark() {
        axios.get(`/api/sharks/${id}`).then((data) => {
            setEditedShark(data.data.data);
            setLoading(false);
        });
    }

    useEffect(() => {
        setLoading(true);
        fetchShark();
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        axios
            .patch(`/api/sharks/${id}`, {
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
                fetchShark();
            });
    };

    const propsToForm = {
        name,
        setName,
        email,
        setEmail,
        sharkLevel,
        setSharkLevel,
        errors,
    };

    if (loading) {
        return <Spinner animation="border" role="status" />;
    }

    return (
        <>
            <h1>Edit shark</h1>
            <SharkForm handleSubmit={(e) => handleSubmit(e)} {...propsToForm} />
        </>
    );
};

export default SharkEdit;
