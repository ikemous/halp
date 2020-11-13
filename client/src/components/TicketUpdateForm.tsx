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
import { useParams } from "react-router-dom";
import {
    STATUS_OPTIONS,
    TYPE_OPTIONS,
    PRIORITY_OPTIONS,
} from "../utils/options";
import {
    updateTicketCreatedBy,
    updateTicketPriority,
    updateTicketAssignedTo,
    updateTicketStatus,
    updateTicketSubject,
    updateTicketType,
    updateTicketUpdatedBy,
    updateTicket,
} from "../utils/actions";

interface Query {
    updatedDate?: Date;
    createdDate?: Date;
    _id: string;
    subject: string;
    createdBy: {
      _id: string;
      email: string;
    };
    updatedBy: {
      _id: string;
      email: string;
    };
    description: string;
    priorityLevel: Number;
    status: string;
    type: string;
    assignedTo: {
      _id: string;
      email: string;
    };
}

function TicketUpdateForm() {
    const history = useHistory();
    const dispatch = useDispatch();
    const ticket = useSelector((state: RootStateOrAny) => state.ticket);
    const { email, _id } = useSelector((state: RootStateOrAny) => state.user);
    const { id }: {id: string} = useParams();

    useEffect(() => {
        console.log(id);
        API.findOne(id)
        .then(({ data }) => {
            console.log(data);
            dispatch(updateTicket(data));
        })
        .catch((error) => console.log(error));
    }, [id]);
    return (
        <Form>
            <Form.Row>
                <Col xs={12} sm={6}>
                    <Form.Label>Created By:</Form.Label>
                    <Form.Control 
                        value={ticket.createdBy.email}
                        disabled={true}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Label>Updated By:</Form.Label>
                    <Form.Control 
                        value={ticket.updatedBy.email}
                        disabled={true}
                    />
                </Col>
            </Form.Row>
            <Form.Row>
                <Col xs={12} sm={6}>
                    <Form.Label>Created Date:</Form.Label>
                    <Form.Control 
                        value={ticket.createdDate}
                        disabled={true}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Label>Updated Date:</Form.Label>
                    <Form.Control 
                        value={ticket.updatedDate}
                        disabled={true}
                    />
                </Col>
            </Form.Row>
            <Form.Row>
                <UserSearchInput />
                <Col xs={12} sm={6}>
                    <DescriptionModal />
                </Col>
            </Form.Row>
            <Form.Row>
                <Col xs={12} sm={6}>
                    <Form.Label>Type:</Form.Label>
                    <Form.Control 
                        onChange={({ target }) => dispatch(updateTicketType(target.value))}
                        as="select"
                    >
                        <option disabled selected={true}>Please Select Type...</option>
                        {
                            TYPE_OPTIONS.map((option: DropdownsOptions) => <option key={uuidv4()} value={option.value}>{option.text}</option>)
                        }
                    </Form.Control>
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Label>Priority Level:</Form.Label>
                    <Form.Control onChange={({ target }) => dispatch(updateTicketPriority(parseInt(target.value)))} as="select" placeholder="3 - Moderate">
                        <option disabled selected={true}>Please Select Priority...</option>
                        {
                            PRIORITY_OPTIONS.map((option: DropdownsOptions) => <option key={uuidv4()} value={option.value} selected={option.value===3?true:false}>{option.text}</option>)
                        }
                    </Form.Control>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col xs={12} sm={6}>
                    <Form.Label>Status:</Form.Label>
                    <Form.Control 
                        onChange={({ target }) => dispatch(updateTicketStatus(target.value))} 
                        as="select"
                    >
                        {
                            STATUS_OPTIONS.map((option: DropdownsOptions) => <option key={uuidv4()} value={option.value}>{option.text}</option>)
                        }
                    </Form.Control>
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Label>Subject:</Form.Label>
                    <Form.Control 
                        onChange={({ target }) => dispatch(updateTicketSubject(target.value))} 
                        placeholder="Technical Support" 
                    />
                </Col>
            </Form.Row>
            <Form.Row>
                <Col xs={12} sm={6}>
                    <CancelModal />
                </Col>
                <Col xs={12} sm={6}>
                    <Button>Update</Button>
                </Col>
            </Form.Row>
        </Form>
    )
}

export default TicketUpdateForm;