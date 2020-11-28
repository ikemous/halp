import React, { useEffect } from "react";
import {
    updatePaginationCurrentCount,
    updatePaginationPageCount
} from "../utils/actions";
import { v4 as uuidv4 } from "uuid";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { Pagination } from "react-bootstrap"

function TicketPagination() {
    const dispatch = useDispatch();
    const { queryResults } = useSelector((state: RootStateOrAny) => state.query);
    const { currentPage, pageCount } = useSelector((state: RootStateOrAny) => state.ticketPagination)

    useEffect(() => {
        (queryResults.length / 10) % 1 === 0 ? dispatch(updatePaginationPageCount(1)): dispatch(updatePaginationPageCount(Math.floor(queryResults.length / 10) + 1));
    }, [queryResults]);
    
    const renderPaginations = () => {
        const paginations:Array<any> = [];
        for(let i = 1; i <= pageCount; i++ ) {
            paginations.push(
                <Pagination.Item 
                    key={uuidv4()} 
                    active={currentPage === i}
                    onClick={() => dispatch(updatePaginationCurrentCount(i))}
                >
                    {i}
                </Pagination.Item>
            )
        }
        return paginations;
    };
    
    const handleNextClick = () => {
        if(currentPage < pageCount) {
            dispatch(updatePaginationCurrentCount(currentPage + 1));
        }
    }
    
    const handlePrevClick = () => {
        if(currentPage > 1) {
            dispatch(updatePaginationCurrentCount(currentPage - 1));
        }
    }

    return (
        <Pagination style={{justifyContent: "center"}}>
            <Pagination.First onClick={() => dispatch(updatePaginationCurrentCount(1))} />
            <Pagination.Prev onClick={handlePrevClick} />
            {renderPaginations()}
            <Pagination.Next onClick={handleNextClick} />
            <Pagination.Last onClick={() => dispatch(updatePaginationCurrentCount(pageCount))} />
        </Pagination>
    )
}

export default TicketPagination;