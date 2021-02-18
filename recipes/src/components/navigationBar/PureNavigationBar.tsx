import { AppBar, Button, Toolbar } from "@material-ui/core";

import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Routes from "../../routes/routes";

type NavigationBarProps = {
  onMenuButtonClick: (path: string) => void;
};

export const PureNavigationBar = ({
  onMenuButtonClick,
}: NavigationBarProps) => {
  const buttons = Routes.map((route, idx) => {
    return (
      route.name && (
        <Button
          key={idx}
          name={route.path}
          startIcon={<route.icon />}
          color="inherit"
          onClick={() => onMenuButtonClick(route.path)}
        >
          {route.name}
        </Button>
      )
    );
  });
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>{buttons}</Toolbar>
      </AppBar>
      <main>
        <Switch>
          {Routes.map((route) => (
            <Route
              key={route.path}
              path={`/${route.path}`}
              component={route.component}
            />
          ))}
          <Route
            key="default"
            path="/"
            component={() => <Redirect to="/recipes" />}
          />
        </Switch>
      </main>
    </>
  );
};
