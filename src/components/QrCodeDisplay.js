import { useEffect } from "react";

const QrCodeDisplay = () => {

    const urlParams = new URLSearchParams(window.location.search);
    const qrId = urlParams.get('qrCode');
    const fetchQrURL = 'http://localhost:8080/api/qr-code/'+qrId;

    console.log(fetchQrURL);
    useEffect(()=> {

        const getQrCode = async (fetchQrURL) => {
            const res = await fetch(fetchQrURL,{
                method: 'GET',
                headers: {
                    'Content-type': 'image/jpeg',
                }
            });
            
        };
        getQrCode();
    },[]);

    return (
        <div>
            <h2>Your QR entry pass</h2>
            <img src={fetchQrURL} alt="QR entry" width="200px" height="200px"></img>
        </div>
    )
}

export default QrCodeDisplay
