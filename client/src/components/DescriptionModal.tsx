import React, { useState} from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
    updateTicketDescription
} from "../utils/actions"

function DescriptionModal() {
    const dispatch = useDispatch();
    const [description, setDescription] = useState("");
    const [showDescription, setShowDescription] = useState(false);

    const handleUpdate = (event: any) => {
        dispatch(updateTicketDescription(description));
        setShowDescription(false);
    }

    return (
        <>
            <Button onClick={() => setShowDescription(true)}>Description</Button>
            <Modal
                show={showDescription}
                onHide={() => setShowDescription(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Description</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        placeholder="HALP I've Fallen and Can't Get Up!"
                        onChange={({ target }) => setDescription(target.value)}
                        as="textarea"
                    ></Form.Control>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={() => setShowDescription(false)}>
                    Cancel
                </Button>
                <Button
                    onClick={handleUpdate}
                    variant="success"
                >Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DescriptionModal;
