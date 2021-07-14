import { useEffect, useState } from "react";

const QrCodeDisplay = () => {
  
    const urlParams = new URLSearchParams(window.location.search);
    const qrId = urlParams.get('qrCode');
    const fetchQrURL = 'http://localhost:8080/api/qr-code/'+qrId;
    const [visitDetails, setVisitDetails] = useState([]);
    const fetchVisitURL = 'http://localhost:8080/api/visit-by-qrcodeid/'+qrId;

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
                const jsonResponse = res.json();
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
            <h3>Start Date of Visit:</h3>
            <img src={fetchQrURL} alt="QR entry" width="200px" height="200px"></img>
        </div>
    )
}

export default QrCodeDisplay
