import React, { useState, useEffect} from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import {
    updateTicketDescription
} from "../utils/actions"

function DescriptionModal() {
    const dispatch = useDispatch();
    const { description } = useSelector((state: RootStateOrAny) => state.ticket)
    const [modalDescription, setModalDescription] = useState("");
    const [showDescription, setShowDescription] = useState(false);

    useEffect(() => setModalDescription(description), [description]);

    const handleUpdate = (event: any) => {
        dispatch(updateTicketDescription(modalDescription));
        setShowDescription(false);
    }

    return (
        <>
            <Button style={{ width: "100%"}} onClick={() => setShowDescription(true)}>Description</Button>
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
                        value={modalDescription}
                        placeholder="HALP I've Fallen and Can't Get Up!"
                        onChange={({ target }) => setModalDescription(target.value)}
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
