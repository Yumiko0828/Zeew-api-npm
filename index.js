const {sfw} = require('./src/sfw.js')
const nsfw = require('./src/nsfw.js')
const img = require('./src/img.js')
const {Bienvenida} = require("./src/bienvenida/Bienvenida.js")
const {WelcomeZeew}= require("./src/bienvenida/WelcomeZeew.js")



module.exports = {
    Bienvenida,
    WelcomeZeew,
    sfw,
    nsfw,
    img
}