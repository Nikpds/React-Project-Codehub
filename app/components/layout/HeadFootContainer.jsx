import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import useFetch from "../../services/hooks/useFetch";

const HeadFootContainer = (props) => {
  const { data: user } = useFetch("http://localhost:3001/user", "GET");

  return (
    <Fragment>
      <Header user={user} />
      {props.children}
      <Footer user={user} />
    </Fragment>
  );
};
export default HeadFootContainer;
