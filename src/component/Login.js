import React from 'react';

function LoginModal () {

    const login = () => {
        const payload = {
            client_id: clientID,
            client_secret: clientSecret,
            code: code
        }
        axiosApi.post(AUTH.oauth, payload).then(resp=>{
            console.log(resp);
        })
      }

    return (
      <div>
        <Button className="test" >
          Get Started
          <i class="fa-solid fa-right-long"></i>
        </Button>

        <Modal show={show} >
          <Modal.Header closeButton>
            <Modal.Title>Enter your credentials</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Client ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter client id"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Client Secret</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter client secret"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter code"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" >
              Close
            </Button>
            <Button variant="primary">
              <Nav.Link
                className="navitem"
                href="/profile"
              >
                {" "}
                Sign In
              </Nav.Link>
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
}export default LoginModal;