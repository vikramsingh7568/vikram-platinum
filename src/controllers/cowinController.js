let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
      //  console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}




//Assignment 1 *******************************************************************


let getByDistrictId = async function (req, res) {
    try {
        let district_id = req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${district_id} ${date}`)
        var options = {
            method: "get",
            url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
           
        }
        let result = await axios(options)
       // console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//Assignment-2************************************************************************************


let LondonWeather = async function (req, res) {
    try {
        let q = req.query.q
        let appid = req.query.appid
        console.log(`query params are: ${q} ${appid}`)
        var options = {
            method: "get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
            
        }
        let result = await axios(options)
       // console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


//2 Question **************************************************************************************8

let WeatherTemperture = async function (req, res) {
    try {
        let q = req.query.q
        let appid = req.query.appid
        console.log(`query params are: ${q} ${appid}`)
        var options = {
            method: "get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
            
        }
        let result = await axios(options)
       // console.log(result.data)
        res.status(200).send({ msg: result.data.main.temp})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
// Question 3 sortedcities *******************************************************************

let SortedTempertureCities = async function (req, res) {
    try {
        let store=[]
        let city =["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        for(let i=0 ; i<city.length; i++){
            let q = city[i]
        var options = {
            method: "get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=8483e59d8860872343402229a619f6f7`
        }
        let result = await axios(options)
        store.push({ city: city[i], temp: result.data.main.temp });
    }
    res.status(200).send({ data: store.sort((a, b) => a.temp - b.temp) })    
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// let  SortedTempertureCities = async function (req, res) {
//     try {
//         let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
//         let options
//         let result = []
//         for (let city of cities) {
//             options = {
//                 method: 'get',
//                 url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8483e59d8860872343402229a619f6f7`
//             }
//             let my = await axios(options);
//             result.push({ city: city, temp: my.data.main.temp });
//         }
//         res.status(200).send({ data: result.sort((a, b) => a.temp - b.temp) })
//     }
//     catch (err) {
//         res.status(500).send({ Error: err.message })
//     }
// }

// Assignment -3 ******************************************************************************
let memeCreation = async function(req, res){
    try{
        let options= {
            vikram : "get" ,
                url : "https://api.imgflip.com/caption_image?template_id=181913649&txt0=Functionup&text1=wow&username=chewie12345&password=meme@123"
                
                // url :"https://www.google.com"
            }
        let result = await axios(options) 

         res.status(200).send({data : result.data})
   }catch(error){
         res.status(500).send(error.message)
    }
}










module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
//Assignment -1
module.exports.getByDistrictId =  getByDistrictId
//Assignmenbt -2
module.exports.LondonWeather = LondonWeather
//Assignment - 2 question - 2
module.exports.WeatherTemperture =WeatherTemperture
//Assignment- 2 question - 3
module.exports.SortedTempertureCities = SortedTempertureCities  
//Assignment - 3
module.exports.memeCreation = memeCreation