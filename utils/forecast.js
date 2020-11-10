const request = require('request')

const forcaste = (long,lati,callback)=>{

    const url = 'http://api.weatherstack.com/current?access_key=ec51f6693da6d36af9b24fe2e3db7471&query='+long+','+lati+'&units=f'

    request({url:url,json:true},(error,responce)=>{
        if(error){
                  callback('unable to connect to weathr servoce',undefined);
                }else if(responce.body.error){
                    callback('unable to find location',undefined);
                }else{
                callback(undefined,responce.body.current.weather_descriptions+'. It is currently '+responce.body.current.temperature+' and eel like '+responce.body.current.feelslike);
                }
    });
}
module.exports = forcaste