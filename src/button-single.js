const Tessel = require("tessel-io");
const five = require("johnny-five");

let board = new five.Board({
    'io': new Tessel()
});

board.on("ready", () => {
    let led = new five.Led("a5");
    let button = new five.Button("a2");
    button.on("press", () => led.on());
    button.on("release", () => led.off());
});