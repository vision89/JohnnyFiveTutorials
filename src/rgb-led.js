const Tessel = require("tessel-io");
const five = require("johnny-five");

let board = new five.Board({
    'io': new Tessel()
});

board.on("ready", () => {
    let led = new five.Led.RGB({
        'pins': {
            'red': "a5",
            'green': "a6",
            'blue': "b6",
        }
    });
    let index = 0;
    const rainbow = ["white", "black", "red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    board.loop(1000, () => {
        led.color(rainbow[index]);
        index = index + 1;
        if(index === rainbow.length) index = 0;
    });
})