import React from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input, Card, CardBody, CardImg } from 'reactstrap';

const imageUrl = "https://www.codehub.gr/wp-content/uploads/2018/01/cropped-CodeHub-logo_320x132.png"
const LoginForm = ({ login, handleSubmit, loginHandler }) => {

  return (
    <Row className="h-100">
      <Col sm="12" md={{ size: 4, offset: 4 }} style={{ alignSelf: 'center' }}>
        <Card>
          <CardImg top width="100%" style={{ padding: '0 20px' }}
            src={imageUrl}
            alt="Card image cap" />
          <CardBody>
            <Form>
              <FormGroup>
                <Label className="text-info">Username</Label>
                <Input onChange={loginHandler}
                  value={login.username}
                  type="username"
                  name="username"
                  placeholder="insert your username" />
              </FormGroup>
              <FormGroup>
                <Label className="text-info" >Password</Label>
                <Input
                  onChange={loginHandler}
                  value={login.password}
                  type="password" name="password" placeholder="insert your password" />
              </FormGroup>
            </Form>
            <Button outline onClick={handleSubmit} color="info" block>Submit</Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default LoginForm;