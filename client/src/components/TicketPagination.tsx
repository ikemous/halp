import React, { useEffect } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { Pagination } from "react-bootstrap"

function TicketPagination() {
    const { queryResults } = useSelector((state: RootStateOrAny) => state.query);
    const { currentPage, pageCount } = useSelector((state: RootStateOrAny) => state.ticketPagination)

    useEffect(() => {
        console.log(queryResults.length)
    }, [queryResults]);

    return (
        <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            {
                queryResults?
                    <>
                        <Pagination.Item active>{1}</Pagination.Item>
                    </>
                    :
                    <>
                    <Pagination.Item active>{1}</Pagination.Item>
                    </>
            }   
            {/* <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{pageCount}</Pagination.Item> */}
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    )
}

export default TicketPagination;