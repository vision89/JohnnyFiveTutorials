const five = require("johnny-five");
const Tessel = require("tessel-io");

let board = new five.Board({
    'io': new Tessel()
});

board.on("ready", () => {
    let light = new five.Light("a7");

    light.on("change", () => console.log(light.level));
});