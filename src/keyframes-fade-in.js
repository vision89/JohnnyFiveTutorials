const five = require("johnny-five");
const Tessel = require("tessel-io");

let board = new five.Board({
    'io': new Tessel()
});

board.on("ready", () => {
    let led = new five.Led("a5");
    let animation = new five.Animation(led);

    animation.enqueue({
        'duration': 2000,
        'keyFrames': [
            {'intensity': 0},
            {'intensity': 100}
        ],
        oncomplete() {
            console.log("Done!");
        }
    });
});