import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useSelector, RootStateOrAny } from "react-redux";
import { ListGroup, Col, Row } from "react-bootstrap";

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
        for(let i = (currentPage - 1) * 8 ; i < queryResults.length && i < currentPage * 8; i++) {
            const ticket:Query = queryResults[i]; 
            const {_id, status, description, assignedTo: { email } } = queryResults[i];
            console.log(ticket)
            tickets.push(
                <ListGroup
                    as={Row}
                    key={uuidv4()}
                    horizontal
                    style={{
                        background: "cadetblue",
                        margin: "0px",
                        border: "1px solid black"
                    }}
                >
                    <Col sm="12" md="3">
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
                    </Col>
                    <Col sm="12" md="3">
                        <p>{status}</p>
                    </Col>
                    <Col sm="12" md="3">
                        <p>{description}</p>
                    </Col>
                    <Col sm="12" md="3">
                        <p style={{wordWrap: "break-word"}} >{email}</p>
                    </Col>  
                </ListGroup>
            )
        }
        return tickets;
    }


    return (
        <div >
            <ListGroup 
                as={Row}
                horizontal
                style={{
                    position: "sticky",
                    background: "cadetblue",
                    margin: "0px",
                    border: "1px solid black"
                }}
            >
                <Col sm={3} md="3">
                    <h4>Ticket</h4>
                </Col>
                <Col sm={3} md="3">
                    <h4>Status</h4>
                </Col>
                <Col sm={3} md="3">
                    <h4>Description</h4>
                </Col>
                <Col sm={3} md="3">
                    <h4>Assigned To</h4>
                </Col>                          
            </ListGroup>
            <div>
                {renderTickets()}
            </div>
        </div>
        
    );
}

export default TicketSummaryList
