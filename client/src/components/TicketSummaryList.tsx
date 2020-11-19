import React, { useEffect } from "react";
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

    useEffect(() => {
        console.log(queryResults);
    }, [queryResults]);

    return (
        <div 
            style={{
                overflow: "scroll",
                maxHeight: "80vh",
                overflowX: "hidden",
            }}
        >
            {
                queryResults?
                    queryResults.map(({status, description, assignedTo, _id}: Query) => 
                        <ListGroup 
                            as={Row}
                            key={uuidv4()}
                            horizontal
                        >
                            <Col sm="12" md="3">
                                <h4>Ticket</h4>
                                <Link style={{wordWrap: "break-word"}} to={`view/${_id}`}>{_id}</Link>
                            </Col>
                            <Col sm="12" md="3">
                                <h4>Status</h4>
                                <p>{status}</p>
                            </Col>
                            <Col sm="12" md="3">
                                <h4>Description</h4>
                                <p>{description}</p>
                            </Col>
                            <Col sm="12" md="3">
                                <h4>Assigned To</h4>
                                <p style={{wordWrap: "break-word"}} >{assignedTo.email}</p>
                            </Col>                          
                        </ListGroup>
                    )
                    :
                    <></>
            }
        </div>
    );
}

export default TicketSummaryList
