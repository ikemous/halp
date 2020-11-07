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
    updateTicketCreatedBy,
    updateTicketPriority,
    updateTicketAssignedTo,
    updateTicketStatus,
    updateTicketSubject,
    updateTicketType,
    updateTicketUpdatedBy,
} from "../utils/actions";


export const STATUS_OPTIONS:Array<DropdownsOptions> = [
    { text: "New", value: "New" },
    { text: "In Progress", value: "In Progress" },
    { text: "Waiting for Customer", value: "Waiting for Customer" },
    { text: "Completed", value: "Completed" },
];
export const TYPE_OPTIONS:Array<DropdownsOptions> = [
    { text: "Hardware", value: "Hardware" },
    { text: "Software", value: "Software" },
    { text: "Inquiry", value: "Inquiry" },
    { text: "Misc.", value: "Misc." },
];

export const PRIORITY_OPTIONS:Array<DropdownsOptions> = [
    { text: "1 - Critical", value: 1 },
    { text: "2", value: 2 },
    { text: "3 - Moderate", value: 3 },
    { text: "4", value: 4 },
    { text: "5 - Very Low", value: 5 },
];
  
interface Props {
    creatingPage: boolean;
}

function TicketCreateOrUpdateForm({ creatingPage }: Props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const ticket = useSelector((state: RootStateOrAny) => state.ticket);
    const { email, _id } = useSelector((state: RootStateOrAny) => state.user);
   
    useEffect(() =>{
        dispatch(updateTicketUpdatedBy(_id));
        dispatch(updateTicketCreatedBy(_id));
        dispatch(updateTicketAssignedTo(_id));
    },[]);

    useEffect(() => {
        console.log(ticket);
    }, [ticket]);

    const handleSave = (event: any) => {
        event.preventDefault();
        API.createTicket(ticket)
        .then((result) => {
            console.log("%c Ticket Creation Successful", "color:green;")
            history.push("/ticket-summary");
        })
        .catch((error) => console.log(error));
    }

    return(
        <Form>
            <Form.Row>
                <Col xs={12} sm={6}>
                    <Form.Label>Created By:</Form.Label>
                    <Form.Control 
                        value={creatingPage?email:""} 
                        disabled={creatingPage}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Label>Updated By:</Form.Label>
                    <Form.Control 
                        value={creatingPage?email:""} 
                        disabled={creatingPage}
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
                        <option disabled>Please Select Type...</option>
                        {
                            TYPE_OPTIONS.map((option: DropdownsOptions) => <option key={uuidv4()} value={option.value}>{option.text}</option>)
                        }
                    </Form.Control>
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Label>Priority Level:</Form.Label>
                    <Form.Control onChange={({ target }) => dispatch(updateTicketPriority(parseInt(target.value)))} as="select" placeholder="3 - Moderate">
                        <option disabled>Please Select Priority...</option>
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
                    <Button onClick={handleSave}>Create</Button>
                </Col>
            </Form.Row>
        </Form>
    )
}

export default TicketCreateOrUpdateForm;
