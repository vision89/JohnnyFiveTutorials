const Tessel = require("tessel-io");
const five = require("johnny-five");

let board = new five.Board({
    'io': new Tessel()
});

board.on("ready", () => {
    let led = new five.Led("b5");
    let spdt = new five.Switch("a5");
    spdt.on("close", () => led.on());
    spdt.on("open", () => led.off());
});