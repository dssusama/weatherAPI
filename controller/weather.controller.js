var request = require('request');
var http= require('http');

var url = 'https://api.openweathermap.org/data/2.5/weather?q=Islamabad,pk-is,pk&appid=e88a0bdd9015614480073b585ef54821';
exports.getData = (req, res) => {
    
    request(url,function(err,response,body){

    var data =JSON.parse(body);
    res.send(data);

    // res.write('API Running', body);
    // console.log(data);
    // res.end();
    });
};
