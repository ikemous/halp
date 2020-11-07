import React, { useState, useEffect } from "react";
import { Form, Col } from "react-bootstrap";
import API from "../utils/API";
import useDebouncer from "../utils/useDouncer";

function UserSearchInput() {
    const [userQuery, setUserQuery] = useState("");
    const [users, setUsers] = useState([]);

    const debouncedSearchTerm = useDebouncer(userQuery, 500);
    useEffect(() => {
        if(!userQuery) {
            return;
        }
        if(debouncedSearchTerm) {
            API.findUsersBy(["email", userQuery])
            .then(({ data }) => console.log(data))
            .catch((error) => console.log(error));
        }
    }, [userQuery]);

    return (
        <Col xs={12} sm={6}>
            <Form.Label>Assignee:</Form.Label>
            <Form.Control onChange={({ target }) => setUserQuery(target.value)} />
        </Col>
    );
}

export default UserSearchInput;