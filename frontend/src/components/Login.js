import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './Login.css';


class Login extends React.Component {

  render() {

    return (
      <div>
      <Form>
        <FormGroup>
          <Label className='label' for="exampleEmail">Email</Label>
          <Input className='input center' type="email" name="email" id="exampleEmail" placeholder="enter email" />
        </FormGroup>
        <FormGroup>
          <Label className='label' for="examplePassword">Password</Label>
          <Input className='input center' type="password" name="password" id="examplePassword" placeholder="enter password" />
        </FormGroup>
        <Button className='button'>Submit</Button>
      </Form>
      </div>
    );
  }
}


export default Login;