const Tessel = require("tessel-io");
const five = require("johnny-five");

let board = new five.Board({
    'io': new Tessel()
});

board.on("ready", () => {
    let spdt = new five.Switch("a5");
    spdt.on("close", () => console.log("Switch closed"));
    spdt.on("open", () => console.log("Switch opened"));
});