import React, {useState} from 'react';
import { Container ,Row,Col,Button,Form} from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import { useSignupUserMutation } from "../services/appApi";
import "./Signup.css";



function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [signupUser, { isLoading, error }] = useSignupUserMutation();
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();
    //signup the user 
    signupUser({ name, email, password }).then(({ data }) => {
      if (data) {
        console.log(data);
        navigate("/chat");
      }
    })
  }

  return (
    <>
      <Container>
        <Row>
          <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
            <Form style={{ width: '80%', maxwidth: 500 }} onSubmit={handleSignup}>

              <h1 className='text-center'>Create account</h1>

              <Form.Group className="mb-3" controlId="formBasicName">
                {error && <p className='alert alert-danger'>{error.data}</p>}
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} value={name} />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
              </Form.Group>
              <Button variant="primary" type="submit">
                {isLoading? "Signing you up..." : "Signup"}
              </Button>
              <div className="py-4">
                <p className='text-center'>
                  Already have an acount ? <Link to={"/login"}>Login</Link>
                </p>
              </div>
            </Form>
          </Col>
          <Col md={5} className='signup__bg'></Col>
        </Row>
      </Container>
    </>
  );
}
export default Signup;