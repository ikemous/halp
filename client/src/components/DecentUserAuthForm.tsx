import React from "react";
import API from "../utils/API";
import SignupAuthPortion from "./SignupAuthPortion";
import {
  loginUser,
  updateAuthEmail,
  updateAuthErrors,
  updateAuthPassword,
} from "../utils/actions";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

interface Props {
  loginPage?: Boolean;
}

function DecentUserAuthForm({ loginPage }: Props) {
  const { email, password, verifyPassword, errors, username } = useSelector(
    (state: RootStateOrAny) => state.authentication
  );
  const history = useHistory();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(errors);
  // }, [errors]);

  const login = (event: any) => {
    event.preventDefault();
    API.login({
      email: email,
      password: password,
    })
      .then(({ data }) => {
        const NOW = new Date();
        const EXPIRATION = new Date();
        const USER = {
          ...data,
          loggedIn: true,
          expire: EXPIRATION.setTime(NOW.getTime() + 30 * 60 * 1000),
        };
        localStorage.setItem("user", JSON.stringify(USER));
        dispatch(loginUser(USER));
        history.push("/search");
      })
      .catch(() => {
        dispatch(
          updateAuthErrors({ ...errors, passError: true, emailError: true })
        );
      });
  };

  const signup = (event: any) => {
    event.preventDefault();
    const tempErrors = {
      verifyError: false,
      passError: false,
      usernameError: false,
      emailError: false,
    };
    if (email === "") {
      tempErrors.emailError = true;
    }

    if (verifyPassword !== password || password === "") {
      tempErrors.verifyError = true;
      tempErrors.passError = true;
    }
    if (username === "") {
      console.log(errors);
      tempErrors.usernameError = true;
    }

    if (verifyPassword === password && password !== "" && username !== "") {
      return API.signup({
        email: email,
        password: password,
        username: username,
      })
        .then(({ data }: any) => {
          const NOW = new Date();
          const EXPIRATION = new Date();
          const USER = {
            ...data,
            loggedIn: true,
            expire: EXPIRATION.setTime(NOW.getTime() + 30 * 60 * 1000),
          };
          console.log(USER);
          localStorage.setItem("user", JSON.stringify(USER));
          dispatch(loginUser(USER));
          history.push("/ticket-summary");
        })
        .catch(({ response }: any) => {
          console.log(response);
          if (response.data.errors) {
            tempErrors.passError = true;
            tempErrors.verifyError = true;
          }
          if (response.data.code === 11000) {
            tempErrors.emailError = true;
          }
          dispatch(updateAuthErrors(tempErrors));
        });
    }
    dispatch(updateAuthErrors(tempErrors));
  };

  return (
    <Form 
      style={{
        width: "1000px",
        padding: "20px",
        background: "cadetblue",
        borderRadius: "10px",
        maxWidth: "80%",
        textAlign: "center"
      }}
      onSubmit={!loginPage ? signup : login}
    >
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={({ target }) => dispatch(updateAuthEmail(target.value))}
          isInvalid={errors.emailError}
          type="email"
          placeholder="Email"
        />
        <Form.Control.Feedback type="invalid">
          {!loginPage ? "Email Address Invalid or Already Taken" : ""}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={({ target }) => dispatch(updateAuthPassword(target.value))}
          isInvalid={errors.passError}
          type="password"
          placeholder="Password"
        />
        <Form.Control.Feedback type="invalid">
          {loginPage && errors.passError && !errors.verifyError
            ? "Email or Password Incorrect"
            : ""}
        </Form.Control.Feedback>
      </Form.Group>
      {!loginPage ? (
        <SignupAuthPortion
          loginPage={loginPage}
          errors={errors}
          dispatch={dispatch}
        />
      ) : (
        <Button type="submit" data-testid="login-button">
          Login
        </Button>
      )}
    </Form>
  );
}

export default DecentUserAuthForm;
