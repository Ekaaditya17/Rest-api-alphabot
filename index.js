const Canvas = require("canvas");
// Register Bold font
Canvas.registerFont(`${__dirname}/assets/fonts/theboldfont.ttf`, { family: "Bold" });
// Register SketchMatch font
Canvas.registerFont(`${__dirname}/assets/fonts/SketchMatch.ttf`, { family: "SketchMatch" });
// Register SketchMatch font
Canvas.registerFont(`${__dirname}/assets/fonts/LuckiestGuy-Regular.ttf`, { family: "luckiest guy" });
// Register KeepCalm font
Canvas.registerFont(`${__dirname}/assets/fonts/KeepCalm-Medium.ttf`, { family: "KeepCalm" });

module.exports.Base = require('./src/greetings/Base');
module.exports.Lickanime = require('./src/linz/Lick');
module.exports.Burnsp = require('./src/linz/Burn');
module.exports.Welcome = require('./src/greetings/Welcome');
module.exports.Goodbye = require('./src/greetings/Goodbye');


var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www');
const PORT = process.env.PORT || 8080 || 5000 || 3000
var { color } = require('./lib/color.js')

var mainrouter = require('./routes/main'),
    apirouter = require('./routes/api')

var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("public"))

app.use('/', mainrouter)
app.use('/api', apirouter)

app.listen(PORT, () => {
    console.log(color("Server running on port " + PORT,'green'))
})

module.exports = app
