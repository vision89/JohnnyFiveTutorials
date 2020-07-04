const five = require("johnny-five");
const Tessel = require("tessel-io");

let board = new five.Board({
    'io': new Tessel()
});

board.on("ready", () => {

    let sensor = new five.Sensor("a7");

    sensor.on("change", () => console.log(sensor.value));

});