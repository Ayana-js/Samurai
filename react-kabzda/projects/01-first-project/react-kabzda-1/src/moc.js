import React, { useState } from "react";
import './Progress.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

//let progressInterval = null;
const Progress = () => {
    const [status, setStatus] = useState()
    //const [ progress, setProgress ] = useState(0);

    //useEffect(() => {
    //    progressInterval = setInterval(() => {
    //        setProgress(prev => prev + 1);
    //    }, 100)
    //}, []);

    //useEffect(() => {
    //    if (progress >= 100) {
    //        clearInterval(progressInterval);
    //    }
    //}, [progress]);

    const showButton = () => {
        return <div>
            {/*<a  href="http://10.100.78.39:8080/api/v1/reestr/info?ident=b49171ce-37c2-44b9-9114-75a70db1b291"> Get file </a>*/}
        </div>
    }

    const id = localStorage.getItem('id')
    
    function requestToServer(page) {
        axios.get(`http:10.100.78.39:4949/api/v1/reestr/exec?page=${page}&ident=${id}`, {
            mode: 'no-cors',
            'Access-Control-Allow-Origin': '*'
        })
            .then((response) => {
                console.log(response.data);
                let stat = response.data.status;
                if(stat === false) {
                    //let dataCount = response.data.count;
                    //if (dataCount / 15)  {
                    //}
                    requestToServer(page);
                }else {
                    setStatus(response.data.status);
                    //console.log(response.data.count);
                }
            }, (error) => {
                console.log(error);
                //setStatus(false);
            })
            .catch(function (error) {
                //setStatus(true);
                console.log(JSON.stringify(error))
              });
    }
    function getStatus() {
        axios.get(`http://10.100.78.39:4949/api/v1/reestr/info?ident=${id}`, {
            mode: 'no-cors',
            'Access-Control-Allow-Origin': '*'
        })
            .then((response) => {
                console.log(response);
                setStatus(response.data.status);
                
            }, (error) => {
                console.log(error);
                //setStatus(true);
            })
            .catch(function (error) {
                //setStatus(true);
                console.log(JSON.stringify(error))
              });
    }

    let requestCount = 10;
    for (let i = 1; i < (requestCount + 1); i++) {
        requestToServer(i);
    }
    
    let interval = setInterval(function () {
        if(status === true) {
            console.log('finish');
            clearInterval(interval);
            getStatus();
            showButton();
        }
    }, 5000);

    clearInterval(interval);
      
    return (
        <div>
            <h1>Progress</h1>
            {/*<div className="prog">
                <div className="progress w-50" style={{ height: 30}}>
                    <div 
                        className="progress-bar progress-bar-striped progress-bar-animated" 
                        role="progressbar" 
                        style={{ width: ${progress}%}}
                    >
                        {progress}%
                    </div>
                </div>
            </div>*/}
        </div>
    );
}

export default Progress;