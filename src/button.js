const Tessel = require("tessel-io");
const five = require("johnny-five");

let board = new five.Board({
    'io': new Tessel()
});

board.on("ready", () => {
    let button = new five.Button("a2");
    button.on("press", () => console.log("Button Pressed!"));
    button.on("release", () => console.log("Button Released!"));
});