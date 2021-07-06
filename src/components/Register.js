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
        console.log(validated)
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
        console.log("in handlesubmit second line: " + validated)
      };

    console.log('First Name: ' + firstName);
    console.log('Last Name: ' + lastName);

    return (
        <div className="register-form">
            <h1>Register a visitor</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit} style={{textAlign:'left'}}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control 
                    required 
                    type="text" 
                    placeholder="First name" 
                    defaultValue={firstName} 
                    onChange={(e) => setFirstName(e.target.value)}/>
                <Form.Control.Feedback type="invalid">Please provide a name</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control 
                    required type="text" 
                    placeholder="Last name" 
                    defaultValue={lastName} 
                    onChange={(e) => setLastName(e.target.value)}/>
                <Form.Control.Feedback type="invalid">Please provide a name</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridLastFourDigits">
                <Form.Label>Last four digits of identification</Form.Label>
                <Form.Control 
                    required
                    placeholder="123A"
                    defaultValue={lastFourDigits}
                    onChange={(e) => setLastFourDigits(e.target.value)}/>
                <Form.Control.Feedback type="invalid">Please provide the last four digits of your identification</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formGridMobileNumer">
                <Form.Label>Mobile number</Form.Label>
                <Form.Control 
                    required
                    placeholder="Mobile number"
                    defaultValue={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)} />
                <Form.Control.Feedback type="invalid">Please provide a mobile number</Form.Control.Feedback>
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridStartDate">
                <Form.Label>Start date of visit</Form.Label>
                <Form.Control required type="date"/>
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEndDate">
                <Form.Label>End date of visit</Form.Label>
                <Form.Control required type="date"/>
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    )
}

export default Register

