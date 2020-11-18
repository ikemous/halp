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
        <>
            {
                queryResults?
                    queryResults.map(({status, description, assignedTo, _id}: Query) => 
                        <ListGroup key={uuidv4()} horizontal>
                            <Col sm="12" md="3">
                                <Link to={`view/${_id}`}>{_id}</Link>
                            </Col>
                            <Col sm="12" md="3">
                                <h2>Status</h2>
                                <p>{status}</p>
                            </Col>
                            <Col sm="12" md="3">
                                <h2>Description</h2>
                                <p>{description}</p>
                            </Col>
                            <Col sm="12" md="3">
                                <h2>Assigned To</h2>
                                <p>{assignedTo.email}</p>
                            </Col>                          
                        </ListGroup>
                    )
                    :
                    <></>
            }
        </>
    );
}

export default TicketSummaryList
