const Tessel = require("tessel-io");
const five = require("johnny-five");

let board = new five.Board({
    'io': new Tessel()
});

board.on("ready", () => {
    let led = new five.Led.RGB({
        'pins': {
            'red': "a5",
            'green': "a6",
            'blue': "b6",
        }
    });
    led.color(0, 255, 255);
})