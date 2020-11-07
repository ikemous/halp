import React, { FunctionComponent } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Route, useLocation, Redirect } from "react-router-dom";

interface Props {
  ItemToRender: FunctionComponent;
  exact: boolean;
  path: string;
}

function ProtectedRoute({ ItemToRender, exact = true, path }: Props) {
  const location = useLocation();
  const { loggedIn } = useSelector((state: RootStateOrAny) => state.user);

  return (
    <Route exact={exact} path={path}>
      {loggedIn ? (
        <ItemToRender />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              from: location,
            },
          }}
        />
      )}
    </Route>
  );
}

export default ProtectedRoute;
