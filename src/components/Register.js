import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import { useState } from "react"


const Register = () => {

    const [validated, setValidated] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastFourDigits, setLastFourDigits] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        console.log("in handlesubmit: " + form.checkValidity())
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
        console.log("in handlesubmit: " + validated)
      };

    console.log('First Name: ' + firstName);
    console.log('Last Name: ' + lastName);

    return (
        <div>
            <h1>Registration page</h1>
            <Form validated={validated} onSubmit={handleSubmit} style={{textAlign:'left'}}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridLastFourDigits">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    )
}

export default Register

