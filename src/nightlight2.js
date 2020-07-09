const five = require("johnny-five");
const Tessel = require("tessel-io");

let board = new five.Board({
    'io': new Tessel()
});

board.on("ready", () => {
    let light = new five.Light("a7");
    let nightlight = new five.Led("b6");
    let dimmest = 1023;
    let brightest = 0;

    light.on("change", () => {
        let relativeValue;
        
        if(light.value < dimmest) dimmest = light.value;
        if(light.value > brightest) brightest = light.value;

        relativeValue = five.Fn.scale(light.value, dimmest, brightest, 0, 511);

        if(relativeValue <= 255) nightlight.brightness(255 - relativeValue);
        else nightlight.off();

    });
});