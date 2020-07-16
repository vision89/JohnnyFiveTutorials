const five = require("johnny-five");
const Tessel = require("tessel-io");

let board = new five.Board({
    'io': new Tessel()
});

board.on("ready", () => {
    let spdt = new five.Switch("a7");
    //let throttle = new five.Sensor("b7");
    let motor = new five.Motor(["a5", "a4", "a3"]);

    spdt.on("open", () => {
        motor.stop().forward(128);
    });

    spdt.on("close", () => {
        motor.stop().reverse(128);
    });

    /*
    throttle.on("change", () => {
        console.log(throttle.value);
        motor.speed(throttle.value >> 2);
    });
    */

});