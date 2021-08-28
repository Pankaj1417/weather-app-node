const request = require('request')
const chalk = require('chalk')
const getGeoCode = require('./utils/geocode.js')
const getWeatherForecast = require('./utils/weatherForecast')

const address = process.argv[2]
if(!address){
 console.log(chalk.bold.red('Please provide address of the location'))
}else{
   const geoCodes = getGeoCode(address,(error,{longitude,latitude,location})=>{
      if(error){ 
         return console.log(chalk.red.bold('Error ---->>> '+error))
      }
      getWeatherForecast(longitude,latitude,(error,result)=>{
         if(error){
           return console.log(chalk.red.bold('Error ---->>> '+error))
         }
            console.log(chalk.bold.green(location))
            console.log('Description -> '+result.description)
            console.log('Tempratiure -> '+result.temprature)
            console.log('Humidity -> '+result.humidity)
      })
   })
}

