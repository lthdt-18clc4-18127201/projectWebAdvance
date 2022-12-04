import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './app.css'
import Google from "../../img/google.png";
import Facebook from "../../img/facebook.png";
import Github from "../../img/github.png";

function Login() {
  const google = () => {
    window.open("http://localhost:5001/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5001/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5001/auth/facebook", "_self");
  };

  return (
    // <div>
    //  <div className="login">
    //   <h1 className="loginTitle">Choose a Login Method</h1>
    //   <div className="wrapper">
    //     <div className="left">
    //       <div className="loginButton google" onClick={google}>
    //         <img src={Google} alt="" className="icon" />
    //         Google
    //       </div>
    //       <div className="loginButton facebook" onClick={facebook}>
    //         <img src={Facebook} alt="" className="icon" />
    //         Facebook
    //       </div>
    //       <div className="loginButton github" onClick={github}>
    //         <img src={Github} alt="" className="icon" />
    //         Github
    //       </div>
    //     </div>
    //     <div className="center">
    //       <div className="line" />
    //       <div className="or">OR</div>
    //     </div>
    //     <div className="right">
    //       <input type="text" placeholder="Username" />
    //       <input type="text" placeholder="Password" />
    //       <button className="submit">Login</button>
    //     </div>
    //   </div>
    // </div>
     
    <div
    className="modal show"
    style={{ display: 'block', position: 'initial' }}
  >
    <Modal.Dialog>
      <Modal.Header >
        <Modal.Title>Login to Kahoot</Modal.Title>
      </Modal.Header>

      <Modal.Body>

      <Form>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-5" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Remember password" /> */}
      </Form.Group>
      <Button variant="primary" type="submit" onClick={google}>
        Login
      </Button>
    </Form>


      </Modal.Body>

      <Modal.Footer>
        <button className="loginButton google" type ="button"onClick={google} >
              <img src={Google} alt="" className="icon" />
              Google
        </button>
        <button className="loginButton facebook" type ="button"onClick={facebook} >
              <img src={Facebook} alt="" className="icon" />
              Facebook
        </button>
        <button className="loginButton google" type ="button"onClick={github} >
              <img src={Github} alt="" className="icon" />
              Github
        </button>
        {/* <div>Modal body text goes here.</div> */}
        {/* <Button variant="secondary">Close</Button> */}
        {/* <Button variant="primary">Save changes</Button> */}
      </Modal.Footer>
    </Modal.Dialog>
  </div>

 
  );
};

export default Login;
