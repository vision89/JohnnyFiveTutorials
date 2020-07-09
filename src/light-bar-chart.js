const Barcli = require("barcli");
const five = require("johnny-five");
const Tessel = require("tessel-io");

let board = new five.Board({
    'io': new Tessel(),
    'repl': false,
    'debug': false,
});

board.on("ready", () => {
    let graph = new Barcli({
        'color': "white",
        'label': "Light Level",
        'range': [0, 1],
    });
    let light = new five.Light("a7");

    light.on("change", () => {
        graph.update(light.level);
    });
});