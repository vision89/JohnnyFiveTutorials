const five = require("johnny-five");
const Tessel = require("tessel-io");

let board = new five.Board({
    'io': new Tessel()
});

board.on("ready", () => {
    let leds = new five.Leds(["a5", "a6", "b5"]);
    let index = 0;

    let fader = () => {
        if(index < leds.length) {
            leds[index].fadeIn(1000, () => {
                leds[index++].fadeOut(1000, fader);
            });
        }
    };
    fader();
});