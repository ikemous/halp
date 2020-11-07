import React, { useState } from "react";
import API from "../utils/API";
import {
  updateQueryBy,
  updateQueryText,
  updateQueryResults,
  updateQueryError,
} from "../utils/actions";
import { v4 as uuidv4 } from "uuid";
import { Form, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useEffect } from "react";

interface Option {
  key: string;
  text: string;
  value: string;
}

const options: Array<Option> = [
  { key: "0", text: "Show All", value: "" },
  { key: "2", text: "Status", value: "status" },
  { key: "4", text: "Priority Level", value: "priorityLevel" },
];

function TicketQueryFrom() {
  const [error, setError] = useState(false);
  const disptach = useDispatch();
  const { queryBy, queryText } = useSelector(
    (state: RootStateOrAny) => state.query
  );

  useEffect(() => {
    API.getAllTickets({})
      .then((results) => disptach(updateQueryResults(results.data)))
      .catch((error) => console.log(error));
  }, []);

  const handleQuery = (event: any) => {
    event.preventDefault();
    let query = {};
    queryBy !== ""? query = { [queryBy]: queryText }: query = {};
    if(queryText === "" && queryBy !== "") {
      return disptach(updateQueryError(true));
    }
    API.getAllTickets(query)
      .then((results) => disptach(updateQueryResults(results.data)))
      .catch((error) => console.log(error));

    return disptach(updateQueryError(false));
  };

  return (
    <Form>
      <Form.Row>
        <Col>
          <Form.Control
            onChange={({ target }) => disptach(updateQueryBy(target.value))}
            as="select"
            custom
          >
            {options.map((option: Option) => {
              return (
                <option key={option.key} value={option.value}>
                  {option.text}
                </option>
              );
            })}
          </Form.Control>
        </Col>
        <Col>
          <Form.Control
            disabled={queryBy===""? true: false}
            onChange={({ target }) => disptach(updateQueryText(target.value))}
          />
        </Col>
        <Col>
          <Button onClick={handleQuery}>Query</Button>
        </Col>
      </Form.Row>
    </Form>
  );
}

export default TicketQueryFrom;
