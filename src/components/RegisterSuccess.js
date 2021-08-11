

const RegisterSuccess = (props) => {

    const visit = {
        firstName : props.location.state.visit.firstName,
        lastName : props.location.state.visit.lastName,
        idNumber : props.location.state.visit.idNumber,
        mobileNumber : props.location.state.visit.mobileNumber,
        startDateOfVisit: props.location.state.visit.startDateOfVisit,
        endDateOfVisit : props.location.state.visit.endDateOfVisit
    };
    
    console.log(visit);

    return (
        <div>
            <h3>Registration completed</h3><br/>
            <p>
                Thank you for registering. You will receive a message with a link to your registered number <b>{visit.mobileNumber}</b>.
            </p>
            <p>
                Please click on the link to access a QR code for your visit from <b> {visit.startDateOfVisit} to {visit.endDateOfVisit}</b>.
            </p>
            <p>
                You may scan the QR code at the entrance to access the building.
            </p>
        </div>
    )
}

export default RegisterSuccess
