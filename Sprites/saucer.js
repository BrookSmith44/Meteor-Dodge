function Saucer() {

    // Create private variables for the x,y coordinates
    var x = 300,
        y = 300,
        RedWindow = 1,
        GlobeYellow = 1;

    // Create a public property called X (upper case)
    Object.defineProperty(this, "X",
        {
            // Getter
            get: function () {
                // Return the value of x (lower case)
                return x;
            },
            // Setter
            set: function (value) {
                // Set the value of x (lower case)
                x = value;
            }
        }
    )

    // Create the draw function to give us the draw method
    // It accepts one parameter which is the context from the canvas it is drawn on
    Saucer.prototype.draw = function (context) {
        // Save the state of the drawing context before we change it
        context.save();
        // Set the coordinates of the drawing area of the new ship to x and y
        context.translate(x, y);
        // Start the path
        context.beginPath();
        context.fillStyle = "#d3d3d3";
        // Move the path
        context.moveTo(30, 12);
        //Draw the saucer
        context.lineTo(80, 12);
        context.lineTo(80, 10);
        context.lineTo(70, 0);
        context.lineTo(30, -10);
        context.lineTo(23, -20);
        context.lineTo(-23, -20);
        context.lineTo(-30, -10);
        context.lineTo(-70, 0);
        context.lineTo(-80, 10);
        context.lineTo(-80, 12);
        context.lineTo(-30, 12);
        context.lineTo(-30, 20);
        context.lineTo(30, 20);
        //Close the path
        context.closePath();
        context.fill();
        // Draw the line
        context.stroke();
        // Draw Globes
        DrawGlobes(context);
        // Draw windows
        DrawWindows(context);
        // Restore the state of the context to what it was before drawing
        context.restore();

        function DrawWindows(context) {
            // Var for the offset of the window to be drawn
            var XOffset = -20,
                // Var for loop counter to indicate which window we are drawing
                WindowNo = 1,
                // Var to store the colour we use
                Colour = "";
            // Loop through each window
            while (WindowNo != 6) {
                // If the red window is being drawn then set the colour to red
                if (WindowNo == RedWindow) {
                    // Set colour to red
                    Colour = "#ff0000";
                }
                else {
                    // Set colour to white
                    Colour = "#ffffff";
                }
                // Draw the window
                Window(context, XOffset, -12, Colour);
                // Point to next window
                WindowNo++;
                // Work out the position of the next window
                XOffset = XOffset + 10;
            }

            // Change the red window to the next one
            RedWindow = RedWindow + .25;
            // If the red window is 6 that is too many
            if (RedWindow == 6) {
                RedWindow = 1;
            }
        }

        function Window(context, xposn, yposn, colour) {
            // Draw window
            context.beginPath();
            context.fillStyle = colour;
            //x, y, radius, start angle, end angle, anti-clockwise
            context.arc(xposn, yposn, 3, 0, (Math.PI * 2));
            context.fill();
            context.stroke();
        }
        function DrawGlobes(context) {
            // Var to store the colour of the globe
            var Colour = "";
            // If the value of GlobeYellow is less than 50
            if (GlobeYellow < 50) {
                // Set the colour to yellow
                Colour = "#ffff00";
            }
            else {
                //set the colour to red
                Colour = "#ff0000";
            }
            // Left landing globe
            Globe(context, -63, 12, Colour);
            // Middle landing globe
            Globe(context, -14, 12, Colour);
            // Right landing globe
            Globe(context, 32, 12, Colour);
            // Increase the value of GlobeYellow (Larger the value the faster it flashed)
            GlobeYellow += 1;
            // If yellow is more than 100 reset
            if (GlobeYellow > 100) {
                GlobeYellow = 1;
            }
        }
        function Globe(context, xposn, yposn, colour) {
            // Begin the path
            context.beginPath();
            // Set the fill colour
            context.fillStyle = colour;
            // Move to the position to start the globe
            context.moveTo(xposn, yposn);
            // Draw the curve from that position to the =30px passing towards x+13, y+20
            context.quadraticCurveTo(xposn + 13, yposn + 20, xposn + 30, yposn);
            // Fill the globe
            context.fill();
            // Draw the globe
            context.stroke();
        }

    }
}
