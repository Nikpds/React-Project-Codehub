import React from 'react'
import { Jumbotron, Button } from 'reactstrap'
const Index = () => {
  return (
    <Jumbotron style={{ background: '#ff00005e' }}>
      <h1 className="display-3">This is SUPER SECRET PAGE</h1>
      <p className="lead">
       Authorized personal ONLY !!!
      </p>
      <hr className="my-2" />
      <p>If you hacked this please contact us !!!!</p>
    </Jumbotron>
  )
}

export default Index
