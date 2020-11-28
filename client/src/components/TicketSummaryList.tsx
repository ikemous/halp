import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useSelector, RootStateOrAny } from "react-redux";
import { ListGroup, Col, Row } from "react-bootstrap";
import "./ticketSummary.css";

interface Props {

}

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

function TicketSummaryList({}: Props) {
    const { queryResults } = useSelector((state: RootStateOrAny) => state.query);
    const { currentPage, pageCount } = useSelector((state: RootStateOrAny) => state.ticketPagination);

    const renderTickets = () => {
        const tickets:Array<any> = [];
        for(let i = (currentPage - 1) * 10 ; i < queryResults.length && i < currentPage * 10; i++) {
            const {_id, status, description, assignedTo: { email } } = queryResults[i];
            tickets.push(
                <ListGroup
                    as={Row}
                    key={uuidv4()}
                    horizontal
                    style={{
                        background: "cadetblue",
                        margin: "0px",
                        border: "1px solid black",
                    }}
                >
                    <ListGroup.Item style={{background: "cadetblue", border: "none", display:"inline"}} as={Col} sm="12" md="3">
                        <h4 className="ticket-indicator">Ticket: </h4>
                        <Link 
                            style={{
                                wordWrap: "break-word",
                                color: "darkBlue",
                                fontWeight: 600
                            }} 
                            to={`view/${_id}`}
                        >
                            {_id}
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item style={{background: "cadetblue", border: "none"}} as={Col} sm="12" md="3">
                        <h4 className="ticket-indicator">Status: </h4>
                        <p className="ticket-item">{status}</p>
                    </ListGroup.Item>
                    <ListGroup.Item style={{background: "cadetblue", border: "none"}} as={Col} sm="12" md="3">
                        <h4 className="ticket-indicator">Description: </h4>
                        <p className="ticket-item">{description}</p>
                    </ListGroup.Item>
                    <ListGroup.Item style={{background: "cadetblue", border: "none"}} as={Col} sm="12" md="3">
                        <h4 className="ticket-indicator">Ticket: </h4>
                        <p className="ticket-item" style={{wordWrap: "break-word"}} >{email}</p>
                    </ListGroup.Item>  
                </ListGroup>
            )
        }
        return tickets;
    }


    return (
        <div style={{minHeight: "75vh"}}>
            <ListGroup 
                className="header-list"
                as={Row}
                horizontal
                style={{
                    background: "cadetblue",
                    margin: "0px",
                    marginTop: "5px",
                    border: "1px solid black"
                }}
            >
                <ListGroup.Item style={{background: "cadetblue", border: "none"}} as={Col} sm={3} md="3">
                    <h4>Ticket</h4>
                </ListGroup.Item >
                <ListGroup.Item style={{background: "cadetblue", border: "none"}} as={Col} sm={3} md="3">
                    <h4>Status</h4>
                </ListGroup.Item>
                <ListGroup.Item style={{background: "cadetblue", border: "none"}} as={Col} sm={3} md="3">
                    <h4>Description</h4>
                </ListGroup.Item>
                <ListGroup.Item style={{background: "cadetblue", border: "none"}} as={Col} sm={3} md="3">
                    <h4>Assigned To</h4>
                </ListGroup.Item>                          
            </ListGroup>
            {renderTickets()}
        </div>
        
    );
}

export default TicketSummaryList
