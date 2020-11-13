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

        </Form>
    )
}

export default TicketUpdateForm;