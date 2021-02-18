import React from "react";
import { useHistory } from "react-router-dom";

import { PureNavigationBar } from "./PureNavigationBar";

const NavigationBar = () => {
  const history = useHistory();
  const onMenuButtonClick = (path: string) => {
    history.push(`/${path}`);
  };

  return (
    <PureNavigationBar
      onMenuButtonClick={onMenuButtonClick}
    ></PureNavigationBar>
  );
};

export default NavigationBar;
