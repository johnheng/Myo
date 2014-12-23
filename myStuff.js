    // Wrap everything in a function to keep your stuff private.
    (function () {

        // JavaScript strict mode is a good thing.
        "use strict";

        // Define a unique global namespace for your stuff.
        // You should change this to a namespace that is appropriate for your project.
        fluid.registerNamespace("myStuff");

        // Expose any public functions or constructors as properties on your namesapce.
        myStuff.play = function () {
            var mySynth = flock.synth({
                synthDef: {
					id: "modulator",
                    ugen: "flock.ugen.triOsc",
                    freq: 440,
                    mul: .25
                }
            });

            // If you're on iOS, you will need to call in a listener for
            // some kind of user input action, such a button click or touch handler.
            // This is because iOS will only play sound if the user initiated it.
            flock.enviro.shared.play();
        };

    }());