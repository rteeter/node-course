const request = require('request')

const url = 'https://api.darksky.net/forecast/c3effcd34d97e93e61e0162136636134/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
})
