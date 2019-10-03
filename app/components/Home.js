import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Home = () => {

  function goToGit() {
    window.open("https://github.com/Nikpds/", "_blank")
  }
  return (
    <Jumbotron style={{ background: '#ffdd965c' }}>
      <h1 className="display-3">Hello, Codehub !</h1>
      <p className="lead">This is a simple application with basic and advance react patterns. Routing and Context api is also used
      . A dummy login with authorize routing and jwt example</p>
      <hr className="my-2" />
      <p>Reactstrap has been used for styling the entire application</p>
      <p className="lead">
        <Button onClick={goToGit} color="primary">See Github for more Projects</Button>
      </p>
    </Jumbotron>
  );
};

export default Home;