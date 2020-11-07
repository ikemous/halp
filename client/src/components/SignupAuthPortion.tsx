/* eslint-disable implicit-arrow-linebreak */
import React from "react";
import { updateAuthUsername, updateAuthVerifyPassword } from "../utils/actions";
import { Form, Button } from "react-bootstrap";

interface Errors {
  verifyError: boolean;
  passError: boolean;
  usernameError: boolean;
  emailError: boolean;
}

interface Props {
  loginPage: Boolean | undefined;
  errors: Errors;
  dispatch: any;
}

function SignupAuthPortion({ loginPage, errors, dispatch }: Props) {
  return (
    <>
      <Form.Group>
        <Form.Label>Verify Password</Form.Label>
        <Form.Control
          onChange={({ target }: any) =>
            dispatch(updateAuthVerifyPassword(target.value))
          }
          isInvalid={errors.verifyError}
          type="password"
          placeholder="Confirm Password"
        />
        <Form.Control.Feedback type="invalid">
          {!loginPage && errors.verifyError
            ? "Passwords Don't Match or Not Long Enough"
            : ""}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          onChange={({ target }: any) =>
            dispatch(updateAuthUsername(target.value))
          }
          isInvalid={errors.usernameError}
          type="text"
          placeholder="Username"
        />
        <Form.Control.Feedback type="invalid">
          {errors.usernameError ? "Please Enter A Username" : ""}
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" data-testid="signup-button">
        Signup
      </Button>
    </>
  );
}

export default SignupAuthPortion;
