const five = require("johnny-five");
const Tessel = require("tessel-io");

let board = new five.Board({
    'io': new Tessel()
});

board.on("ready", () => {

    let leds = new five.Leds(["a2", "a3", "a4", "a5", "a6", "a7"]);
    let index = 0;

    board.loop(100, () => {

        if(index === leds.length) {
            leds.off();
            index=0;
        } else {
            leds[index].on();
            index++;
        }

    });

});