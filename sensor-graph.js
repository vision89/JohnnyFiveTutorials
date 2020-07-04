const Barcli = require("barcli");
const five = require("johnny-five");
const Tessel = require("tessel-io");

let board = new five.Board({
    'io': new Tessel(),
    'repl': false,
    'debug': false,
});

board.on("ready", () => {
    const range = [0, 100];

    let graph = new Barcli({
        'label': "My Data",
        'reange': range,
    });

    let sensor = new five.Sensor({
        'pin': "a7",
        'threshold': 5
    });
    
    sensor.on("change", () => {
        graph.update(sensor.scaleTo(range));
    });

});