import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import useFetch from "../../services/hooks/useFetch";
import { api } from "../../services/apiRoutes";

const HeadFootContainer = (props) => {
  const { data: user } = useFetch(api.getUser, "GET");

  return (
    <Fragment>
      <Header user={user} />
      {props.children}
      <Footer user={user} />
    </Fragment>
  );
};
export default HeadFootContainer;
