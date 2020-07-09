const five = require("johnny-five");
const Tessel = require("tessel-io");

let board = new five.Board({
    'io': new Tessel()
});

board.on("ready", () => {
    let light = new five.Light({
        'pin': "a7"
    });

    let nightlight = new five.Led("b6");

    light.on("change", () => {
        if(light.level < 0.5) nightlight.on();
        else nightlight.off();
    });
});