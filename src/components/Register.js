import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import { useState } from "react"
import { Redirect } from "react-router-dom"


const Register = () => {
    
    //utility 
    const [validated, setValidated] = useState(false);
    const [redirect, setRedirect] = useState(false);
    //user data
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const visit = {
        firstName : firstName,
        lastName : lastName,
        idNumber : idNumber,
        mobileNumber : mobileNumber,
        startDateOfVisit: startDate,
        endDateOfVisit : endDate
    }
    //redirect variable is set to true after a valid form submit. upon re-render, this is triggered and redirects to new page.
    if (redirect){
        return <Redirect 
                    to={{
                        pathname: '/visitor/registration-complete',
                        state: {visit : visit}
                    }}
                />
    }
    const addVisit = async (visit) => {
        const res = await fetch(process.env.REACT_APP_REGISTER_SCHEDULED_VISIT_API_ENDPOINT,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(visit), 
        })
        
        console.log(res.status);
    }
   const addVisitor = async (visit) => {
        const res = await fetch(process.env.REACT_APP_REGISTER_VISITOR_API_ENDPOINT,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(visit), 
        })  
        console.log(res.status);
    }
    const handleSubmit = (event) => {
       
        const form = event.currentTarget;

        if (form.checkValidity()) {
            console.log(visit);
            addVisitor(visit).then(() => addVisit(visit));
            setValidated(true);
            setRedirect(true);
            
        }else{
        event.preventDefault();
        event.stopPropagation();
        setValidated(true); 
        }
    
    }
    
    console.log(visit)

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

            <Form.Group controlId="formGridIdNumber">
                <Form.Label>Identification number</Form.Label>
                <Form.Control 
                    required
                    placeholder="123A"
                    defaultValue={idNumber}
                    onChange={(e) => setIdNumber(e.target.value)}/>
                <Form.Control.Feedback type="invalid">Please provide your identification number.</Form.Control.Feedback>
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

