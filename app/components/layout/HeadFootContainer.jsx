import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import useFetch from "../../hooks/useFetch";
import { api } from "../../services/apiRoutes";

const HeadFootContainer = (props) => {
  const { data: user } = useFetch(api.getUser, "GET");

  return (
    <Fragment>
    
      {props.children}
    
    </Fragment>
  );
};
export default HeadFootContainer;
