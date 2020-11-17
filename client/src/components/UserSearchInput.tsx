import React, { useState, useEffect } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { Form, Col } from "react-bootstrap";
import API from "../utils/API";
import useDebouncer from "../utils/useDouncer";
import { updateTicketAssignedTo } from "../utils/actions";

function UserSearchInput() {
    const { assignedTo } = useSelector((state: RootStateOrAny) => state.ticket)
    const [userQuery, setUserQuery] = useState("");
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();

    const debouncedSearchTerm = useDebouncer(userQuery, 500);
    useEffect(() => {
        if(!userQuery) {
            return;
        }
        if(debouncedSearchTerm) {
            API.findUsersBy(["email", userQuery])
            .then(({ data }) => setUsers(data))
            .catch((error) => console.log(error));
        }
        console.log(userQuery)
    }, [userQuery]);

    return (
        <Col xs={12} sm={6}>
            <Form.Label>Assignee:</Form.Label>
            <Form.Control 
                as="input"
                list="userList"
                name="userList"
                placeholder={assignedTo.email}
                onKeyUp={({ target }: any) => {
                    setUserQuery(target.value)
                }}
                onSelect={({target}: any) => {
                    const list:any = document.querySelector("#userList")?.children;
                    console.log(list)  
                    for(let i = 0; i < list.length; i++) {
                        if (list[i].value === target.value) {
                            dispatch(updateTicketAssignedTo({
                                _id: list[i].innerHTML,
                                email: target.value
                            }));
                            break;
                        }
                    }
                }}
                autoComplete="off"
            />
            <datalist
                id="userList" 
            >
                {
                    users.map(
                        (user: {email: string, _id:string}) => 
                        <option 
                            key={uuidv4()} 
                            value={user.email}
                        >
                            {user._id}
                        </option>
                    )
                }
            </datalist>
        </Col>
    );
}

export default UserSearchInput;