import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom";

function CancelModal() {
    const [showCancel, setShowCancel] = useState(false);
    const history = useHistory();
    
    return (
        <>
            <Button variant="danger" onClick={() => setShowCancel(true)}>Cancel</Button>
            <Modal
                show={showCancel}
                onHide={() => setShowCancel(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Are You Sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    If you cancel you will have to restart
                </Modal.Body>
                <Modal.Footer>
                <Button variant="success" onClick={() => setShowCancel(false)}>
                    No
                </Button>
                <Button variant="danger" onClick={() => history.push("/ticket-summary")}>Yes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CancelModal;