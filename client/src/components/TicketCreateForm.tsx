import React, { useEffect } from "react";
import { DropdownsOptions } from "../utils/types";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Col, Button } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import UserSearchInput from "./UserSearchInput";
import DescriptionModal from "./DescriptionModal";
import CancelModal from "./CancelModal";
import API from "../utils/API";
import {
    STATUS_OPTIONS,
    TYPE_OPTIONS,
    PRIORITY_OPTIONS,
} from "../utils/options";
import {
    updateTicketPriority,
    updateTicketStatus,
    updateTicketSubject,
    updateTicketType,
    updateTicket,
} from "../utils/actions";
  
interface Props {
    creatingPage: boolean;
}

function TicketCreateForm({ creatingPage }: Props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const ticket = useSelector((state: RootStateOrAny) => state.ticket);
    const { email, _id } = useSelector((state: RootStateOrAny) => state.user);
   
    useEffect(() =>{
        dispatch(updateTicket({
            subject: "Technical Support",
            createdBy: {"_id": _id, "email": email},
            updatedBy: {"_id": _id, "email": email},
            description: "HALP I've fallen and can't get up!",
            priorityLevel: 3,
            status: "New",
            type: "Hardware",
            assignedTo: {"_id": _id, "email": email},
          }));
    },[]);

    const handleSave = (event: any) => {
        event.preventDefault();
        API.createTicket(ticket)
        .then(({ data }) => {
            console.log("%c Ticket Creation Successful", "color:green;")
            history.push(`/view/${data._id}`);
        })
        .catch((error) => console.log(error));
    }

    return(
        <Form 
            style={{
                width: "95%",
                padding: "20px",
                marginBottom: "20px",
                background: "cadetblue",
                borderRadius: "10px",
            }}
        >
            <Form.Row>
                <Col xs={12} sm={6}>
                    <Form.Label>Created By:</Form.Label>
                    <Form.Control 
                        value={email} 
                        disabled={creatingPage}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Label>Updated By:</Form.Label>
                    <Form.Control 
                        value={email}
                        disabled={creatingPage}
                    />
                </Col>
            </Form.Row>
            <Form.Row>
                <UserSearchInput />
                <Col xs={12} sm={6}>
                    <Form.Label>Priority Level:</Form.Label>
                    <Form.Control 
                        onChange={({ target }) => dispatch(updateTicketPriority(parseInt(target.value)))} 
                        as="select"
                        value={ticket.priorityLevel}
                        custom
                    >
                        <option disabled>Please Select Priority...</option>
                        {
                            PRIORITY_OPTIONS.map((option: DropdownsOptions) => <option key={uuidv4()} value={option.value}>{option.text}</option>)
                        }
                    </Form.Control>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col xs={12} sm={6}>
                    <Form.Label>Type:</Form.Label>
                    <Form.Control 
                        onChange={({ target }) => dispatch(updateTicketType(target.value))}
                        as="select"
                        value={ticket.type}
                    >
                        <option disabled>Please Select Type...</option>
                        {
                            TYPE_OPTIONS.map((option: DropdownsOptions) => <option key={uuidv4()} value={option.value}>{option.text}</option>)
                        }
                    </Form.Control>
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Label>Status:</Form.Label>
                    <Form.Control 
                        onChange={({ target }) => dispatch(updateTicketStatus(target.value))} 
                        as="select"
                        value={ticket.status}
                    >
                        <option disabled>Please Select Status...</option>
                        {
                            STATUS_OPTIONS.map((option: DropdownsOptions) => <option key={uuidv4()} value={option.value}>{option.text}</option>)
                        }
                    </Form.Control>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col xs={12}>
                    <Form.Label>Subject:</Form.Label>
                    <Form.Control 
                        value={ticket.subject}
                        onChange={({ target }) => dispatch(updateTicketSubject(target.value))} 
                        placeholder="Technical Support" 
                    />
                </Col>
                <Col xs={12} style={{ paddingTop: "5px" }}>
                    <DescriptionModal />
                </Col>
            </Form.Row>
            <Form.Row style={{paddingTop: "5px"}}>
                <Col xs={12}>
                    <CancelModal />
                    <Button 
                        style={{position: "absolute", right: "5px"}} 
                        onClick={handleSave}
                        variant="success"
                    >
                        Create
                    </Button>
                </Col>
            </Form.Row>
        </Form>
    )
}

export default TicketCreateForm;
