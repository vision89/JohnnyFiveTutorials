const Tessel = require("tessel-io");
const five = require("johnny-five");

let board = new five.Board({
    'io': new Tessel()
});

board.on("ready", () => {
    let leds = new five.Leds(["a5", "b6"]);
    let buttons = new five.Buttons(["a2", "a6"]);

    buttons.on("press", (button) => {
        leds.off();
        leds[buttons.indexOf(button)].on();
    });
});