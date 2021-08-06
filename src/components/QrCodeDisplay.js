import { useEffect, useState } from "react";

const QrCodeDisplay = () => {
  
    const urlParams = new URLSearchParams(window.location.search);
    const qrId = urlParams.get('qrCode');
    const fetchQrURL = process.env.REACT_APP_QRCODE_API_ENDPOINT+qrId;
    console.log("Console print Qrcode: "+process.env.REACT_APP_QRCODE_API_ENDPOINT);
    const [visitDetails, setVisitDetails] = useState([]);
    const fetchVisitURL = process.env.REACT_APP_VISITBYQRID_API_ENDPOINT+qrId; 

    useEffect(()=> {

       
        console.log(fetchVisitURL);
        
        const fetchVisitDetail = async () => {
            try{
                const res = await fetch(fetchVisitURL,{
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                    },
                });
                const jsonResponse = await res.json();
                console.log(jsonResponse);
                setVisitDetails(jsonResponse);
                
            
            }catch(error){
                console.log("error", error);
            }
        };
        fetchVisitDetail();
        
    },[fetchVisitURL]);

    return (
        <div>
            <h2>Your QR entry pass</h2>
            <h5>Start date of visit: {visitDetails.map((e)=> {return [e.startDateOfVisit]})} </h5>
            <img src={fetchQrURL} alt="QR entry" width="200px" height="200px"></img>
            <h5>End date of visit: {visitDetails.map((e)=> {return [e.endDateOfVisit]})} </h5>
        </div>
    )
}

export default QrCodeDisplay
