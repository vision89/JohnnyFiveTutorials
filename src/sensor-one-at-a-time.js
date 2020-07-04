const five = require("johnny-five");
const Tessel = require("tessel-io");

let board = new five.Board({
    'io': new Tessel()
});

board.on("ready", () => {

    let leds = new five.Leds(["b0", "b1", "b2", "b3", "b4"]);
    const range = [0, 5];

    let sensor = new five.Sensor({
        'pin': "a7",
    });

    sensor.on("change", () => {
        leds.off();
        const selectedLed = sensor.scaleTo(range);
        leds[selectedLed].on();
    });

});
