import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import { faPencilAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const ConfirmationModal = (props) => {
    return (
        <Modal {...props} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Please confirm that you want to delete {props.name}.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>No</Button>
                <Button color="danger" onClick={props.onAccept}>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

const EditIcons = ({ object }) => {
    const [modal, setModal] = useState(false);
    const togModal = () => setModal(!modal);
    const deleteItem = (id) => {
        axios.delete(`/api/sharks/${id}`);
    };

    return (
        <>
            {modal && (
                <ConfirmationModal
                    show={modal}
                    onHide={() => setModal(false)}
                    onAccept={() => {
                        deleteItem(object.id);
                        setModal(false);
                    }}
                    name={object.name}
                />
            )}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                <Link to={`edit/${object.id}`}>
                    <FontAwesomeIcon icon={faPencilAlt} />
                </Link>
                <a
                    href="#"
                    className="text-danger"
                    onClick={(e) => {
                        e.preventDefault();
                        togModal();
                    }}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </a>
            </div>
        </>
    );
};

export default EditIcons;
