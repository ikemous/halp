import React from "react";
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
    updateTicketCreatedBy,
    updateTicketPriority,
    updateTicketAssignedTo,
    updateTicketStatus,
    updateTicketSubject,
    updateTicketType,
    updateTicketUpdatedBy,
} from "../utils/actions";

function TicketUpdateForm() {
    return (
        <Form>
        </Form>
    )
}

export default TicketUpdateForm;