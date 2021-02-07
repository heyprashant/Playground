const http = require('http');
const url = 'http://api.weatherstack.com/current?access_key=b5b9c3b9e7791900c6f33020d52562bd&query=40,-75&units=m';

const request = http.request(url, (response)=>{
    let data ='';
    
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', ()=>{
        const body = JSON.parse(data);
        console.log(body);
    });

});

request.on('error', (error)=>{
    console.log('As error', error);
});

request.end();