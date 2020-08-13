import React from "react";
import { Redirect, Switch, SwitchProps } from "react-router-dom";
import { useSdk } from "../../service";
import { pathLogin } from "../paths";

export interface RedirectLocation {
  readonly redirectPathname: string;
  readonly redirectState: unknown;
}

function ProtectedSwitch({ children, location }: SwitchProps): JSX.Element {
  const { initialized } = useSdk();

  return initialized ? (
    <Switch location={location}>{children}</Switch>
  ) : (
    <Redirect
      to={{
        pathname: pathLogin,
        state: { redirectPathname: location.pathname, redirectState: location.state },
      }}
    />
  );
}

export default ProtectedSwitch;
