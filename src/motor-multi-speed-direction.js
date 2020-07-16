const five = require("johnny-five");
const Tessel = require("tessel-io");

let board = new five.Board({
    'io': new Tessel()
});

board.on("ready", () => {
    let spdt = new five.Switch("a7");
    //let throttle = new five.Sensor("b7");
    let motors = new five.Motors([
        ["a5", "a4", "a3"],
        ["b5", "b4", "b3"],
    ]);

    //let speed = 0;
    spdt.on("open", () => {
        motors.stop().forward(128);
    });

    spdt.on("close", () => {
        motors.stop().reverse(128);
    });

    /*
    throttle.on("change", () => {
        speed = throttle.value >> 2;
        motors.speed(speed);
    });
    */

});