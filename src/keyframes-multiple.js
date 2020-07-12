const five = require("johnny-five");
const Tessel = require("tessel-io");

let board = new five.Board({
    'io': new Tessel()
});

board.on("ready", () => {
    let leds = new five.Leds(["a5", "a6", "b5"]);
    let animation = new five.Animation(leds);

    let animateForever = () => {
        animation.enqueue({
            'duration': 2000,
            'cuePoints': [0, 0.05, 1.0],
            'keyFrames': [
                [{'intensity': 100}, {'intensity': 0}, {'intensity': 100}],
                [{'intensity': 0}, {'intensity': 100}, {'intensity': 0}],
                [{'intensity': 100}, {'intensity': 0}, {'intensity': 100}],
            ],
            oncomplete() {
                console.log("Do it again!");
                animateForever();
            }
        });
    };
    animateForever();
});