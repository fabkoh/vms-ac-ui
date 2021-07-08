import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import { useState } from "react"


const Register = () => {

    const [validated, setValidated] = useState(false);
    const [visitorId, setVisitorId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastFourDigits, setLastFourDigits] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const visit = {
        firstName : firstName,
        lastName : lastName,
        lastFourDigits : lastFourDigits,
        mobileNumber : mobileNumber,
        startDate: startDate,
        endDate : endDate
    }
    

    const addVisit = async (visit) => {
        const res = await fetch('http://localhost:8080/api/register-scheduled-visit',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(visit), 
        })
        
        console.log(res.status);
    }
   /* const addVisitor = async (visit) => {
        const res = await fetch('http://localhost:8080/api/register-new-visitor',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(visit), 
        })  
    }*/
    const handleSubmit = (event) => {
       
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        console.log(visit);
        setValidated(true);
        addVisit(visit);
        event.preventDefault();
      };
    
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
                    <Form.Text id="mobileHelp" muted>
                        A QR code will be sent to this number for entry.
                    </Form.Text>
                <Form.Control.Feedback type="invalid">Please provide your mobile number</Form.Control.Feedback>
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridStartDate">
                <Form.Label>Start date of visit</Form.Label>
                <Form.Control 
                    required 
                    type="date"
                    defaultValue={startDate}
                    onChange={(e)=> setStartDate(e.target.value)}/>
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEndDate">
                <Form.Label>End date of visit</Form.Label>
                <Form.Control 
                    required 
                    type="date"
                    defaultValue={endDate}
                    onChange={(e)=> setEndDate(e.target.value)}/>
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

