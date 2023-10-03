import { useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";

const NameRequiered = () => {
  const inputNama = useRef(null);
  const NameRequiereds = useRef(null);
  const handleSetname = (e) => {
    e.preventDefault();
    if (!inputNama.current.value == "") {
      sessionStorage.setItem("name", inputNama.current.value);
      NameRequiereds.current.className += " d-none";
    } else {
      inputNama.current.className =
        "form-control border-danger border-1 bg-danger";
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("name")) {
      NameRequiereds.current.className += " d-none";
    }
  }, []);
  return (
    <>
      <div className="slide-input-name " ref={NameRequiereds}>
        <Form onSubmit={handleSetname}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>What is your name?</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              ref={inputNama}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
export default NameRequiered;
