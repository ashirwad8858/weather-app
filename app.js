const geolocation = require('./utils/geocode')
const forcaste = require('./utils/forecast')

const address = process.argv[2];
// console.log(process.argv);
if(!address){
    console.log("Please enter location")
}else{

    geolocation(process.argv[2],(error,data)=>{
        if(error){
            return console.log(error)
        }
        
        forcaste(data.long,data.lati,(erro,dat)=>{
                if(erro){
                   return console.log(erro)
                }
                console.log(data.location)
                console.log(dat);
            })
        
    })
    
}








// const url = 'http://api.weatherstack.com/current?access_key=ec51f6693da6d36af9b24fe2e3db7471&query=26.8467,80.9462&units=f'

// request({url : url, json:true}, (error,responce) =>{
//     if(error){
//         console.log('not able ');
//     }else{
//     console.log(responce.body.current.weather_descriptions+'. It is currently '+responce.body.current.temperature+' and eel like '+responce.body.current.feelslike);

//     }
//     // console.log(responce);

//     // const data = JSON.parse(responce.body);
// });


// const geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Ghazipur.json?access_token=pk.eyJ1IjoiYXNoaXJ3YWRzaGFybWExMjc5NSIsImEiOiJja2hicm5tamkwN2RuMnhuZzhiemFvOXUyIn0._0AfyLZIaEvnRjZjcecdxQ';

// request({url: geourl,json:true},(error,responce)=>{
// const latitute = responce.body.features[0].center[1];
// const longitute = responce.body.features[0].center[0];

// console.log(latitute,longitute);
// });
