import React, { useEffect } from "react";
import { DropdownsOptions, Ticket } from "../utils/types";
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
import moment from "moment";
import {
    updateTicketPriority,
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
            dispatch(updateTicketUpdatedBy({
                "_id": _id,
                "email": email
            }));
        })
        .catch((error) => console.log(error));
    }, [id]);

    const handleUpdate = (event: any) => {
        event.preventDefault();
        API.updateOne({
            ...ticket,
            updatedDate: Date.now()
        })
        .then((result) => {
            const randomid = uuidv4();
            console.log(randomid)
            console.log(result)
            console.log("%c Ticket Creation Successful", "color:green;")
            history.push(`/view/${id}`);
        })
        .catch((error) => console.log(error));
    }
    
    return (
        <Form 
            style={{
                width: "95%",
                marginBottom: "10px",
                padding: "20px",
                background: "cadetblue",
                borderRadius: "10px"
            }}
        >
            <h2
                className="text-center"
                style={{
                    wordBreak: "break-word"
                }}
            >
                {ticket._id}
            </h2>
            <Form.Row>
                <Col xs={12} sm={6}>
                    <Form.Label>Created By:</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder={`${ticket.createdBy.email}`}
                        readOnly
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Label>Updated By:</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder={`${ticket.updatedBy.email}`}
                        readOnly
                    />
                </Col>
            </Form.Row>
            <Form.Row>
                <Col xs={12} sm={6}>
                    <Form.Label>Created Date:</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder={moment(ticket.createdDate).format("MMMM Do YYYY")}
                        readOnly
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Label>Updated Date:</Form.Label>
                    <Form.Control 
                        type="text"
                        value={moment(ticket.updatedDate).format("MMMM Do YYYY")}
                        readOnly
                    />
                </Col>
            </Form.Row>
            <Form.Row>
                <UserSearchInput />
                <Col xs={12} sm={6}>
                    <Form.Label>Status:</Form.Label>
                    <Form.Control 
                        value={ticket.status}
                        onChange={({ target }) => dispatch(updateTicketStatus(target.value))} 
                        as="select"
                    >
                        {
                            STATUS_OPTIONS.map((option: DropdownsOptions) => <option key={uuidv4()} value={option.value}>{option.text}</option>)
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
                    <Form.Label>Priority Level:</Form.Label>
                    <Form.Control 
                        onChange={({ target }) => dispatch(updateTicketPriority(parseInt(target.value)))}
                        as="select" 
                        value={ticket.priorityLevel}
                    >
                        <option disabled>Please Select Priority...</option>
                        {
                            PRIORITY_OPTIONS.map((option: DropdownsOptions) => <option key={uuidv4()} value={option.value}>{option.text}</option>)
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
                <Col style={{ paddingTop: "5px"}} xs={12}>
                    <DescriptionModal />
                </Col>
            </Form.Row>
            <Form.Row style={{ paddingTop: "5px" }}>
                <Col xs={12}>
                    <CancelModal />
                    <Button style={{position: "absolute", right: "5px"}} onClick={handleUpdate}>Update</Button>
                </Col>
            </Form.Row>
        </Form>
    )
}

export default TicketUpdateForm;