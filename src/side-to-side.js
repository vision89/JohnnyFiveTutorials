const five = require("johnny-five");
const Tessel = require("tessel-io");

let board = new five.Board({
    'io': new Tessel()
});

board.on("ready", () => {
    let leds = new five.Leds(["a2", "a3", "a4", "a5", "a6", "a7",]);
    let index = 0;
    let step = 1;

    board.loop(100, () => {
        leds.off();
        leds[index].on();
        index+=step;

        if(index === 0 || index === leds.length-1) step *= -1;

    });
});