import { useEffect } from "react";

const RegisterSuccess = (props) => {

    const visit = props.location.state.visit;
    
    return (
        <div>
            <h1>{visit}</h1>
        </div>
    )
}

export default RegisterSuccess
