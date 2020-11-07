import React, { useEffect } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { ListGroup } from "react-bootstrap";

interface Props {

}

function TicketSummaryList({}: Props) {
    const { queryResults } = useSelector((state: RootStateOrAny) => state.query);

    useEffect(() => {
        console.log(queryResults);
    }, [queryResults]);

    return (
        <ListGroup horizontal="md">
            <ListGroup.Item>

            </ListGroup.Item>
        </ListGroup>
    );
}

export default TicketSummaryList
