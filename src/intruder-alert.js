const Tessel = require("tessel-io");
const five = require("johnny-five");

let board = new five.Board({
    'io': new Tessel()
});

board.on("ready", () => {
    let led = new five.Led("a5");
    let door = new five.Switch({
        'pin': "a2",
        'invert': true,
    });
    door.on("open", () => led.on());
    door.on("close", () => led.off());
});