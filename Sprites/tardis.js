function Tardis() {

    // Create private variables for the x,y coordinates
    var x = 270,
        y = 0,
        vx = 0,
        vy = 0,
        RedWindow = 1,
        GlobeYellow = 1,
        Boom = false;

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
    // Create a public property called Y (upper case)
    Object.defineProperty(this, "Y",
      {
        // Getter
        get : function () {
          // Return the value of y
          return y;
        },
        // Setter
        set: function (value) {
          // set the value of y
          y = value;
        }
      }
    )

      Object.defineProperty(this, "BOOM",
          {
              // Getter
              get: function () {
                  // Return the value of Boom (lower case)
                  return Boom;
              },
              // Setter
              set: function (value) {
                  // Set the value of Boom (lower case)
                  Boom = value;
              }
          }
      )

    // Create the draw function to give us the draw method
    // It accepts one parameter which is the context from the canvas it is drawn on
    Tardis.prototype.draw = function (context) {
        // Save the state of the drawing context before we change it
        context.save();
        // Set the coordinates of the drawing area of the new tardis to x and y
        context.translate(x, y);
        // Start the path
        context.beginPath();
        context.fillStyle = "blue";
        // Move the path
        context.moveTo(30, 12);
        //Draw the Tardis
        context.lineTo(60, 16);
        context.lineTo(60, 22);
        context.lineTo(64, 22);
        context.lineTo(64, 24);
        context.lineTo(68, 24);
        context.lineTo(68, 25);
        context.lineTo(69, 25);
        context.lineTo(74, 25);
        context.lineTo(74, 30);
        context.lineTo(69, 30);
        context.lineTo(69, 100);
        context.lineTo(74, 102);
        context.lineTo(74, 107);
        context.lineTo(-14, 107);
        context.lineTo(-14, 102);
        context.lineTo(-9, 100);
        context.lineTo(-9, 30);
        context.lineTo(-14, 30);
        context.lineTo(-14, 25);
        context.lineTo(-9, 25);
        context.lineTo(-9, 24);
        context.lineTo(-8, 24);
        context.lineTo(-4, 24);
        context.lineTo(-4, 23);
        context.lineTo(0, 23);
        context.lineTo(0, 17);
        //Close the path
        context.closePath();
        context.fill();
        // Draw the line
        context.stroke();
        // Draw Globes
        DrawGlobes(context);
        // Draw squares
        // Left top square
        /*
        Squares(context, 0, 35, "black");
        // Right top square
        Squares(context, 40, 35, "black");
        // Bottom left square
        Squares(context, 0, 60, "black");
        // Bottom right square
        Squares(context, 40, 60, "black");*/
        // Draw squares
        DrawSquares(context);
        // Draw windows
        //DrawWindows(context);

        //If a meteor hits the Tardis
        if (Boom == true) {
          // Create a new instance of the image
          var img = new Image();
          // Get the source of the image
          img.src = "Images/boom.png";
          // Draw the image on the context
          context.drawImage(img, -100, -60);
        }

        // Restore the state of the context to what it was before drawing
        context.restore();
    }



    // Functions
    function DrawSquares(context) {
      // Var for the x offset of the square to be drawn
      var XOffset = 0,
      // Var for the y offset of the square to be drawn
      YOffset = 35,
      // Var for loop counter to indicate which window we are drawing
      SquareNo = 1,
      // Var to store the colour we use
      Colour = "";
      // Loop through each window
      while (SquareNo != 5) {
        // If the red window is being drawn then set the colour to red
        if (SquareNo == RedWindow) {
          // Set colour to red
          Colour = "#ff0000";
        }
        else {
          // Set colour to white
          Colour = "blue";
        }
        // Draw the Square
        Squares(context, XOffset, YOffset, Colour);
        // Point to next window
        SquareNo++;
        // If statement to reset offset values if the SquareNo is larger than 2
        if (SquareNo > 2) {
          XOffset = 0;
          YOffset  = 60;
        }
        // Work out the position of the next Square
        if (SquareNo == 2 || SquareNo == 4 ) {
        XOffset = XOffset + 40;
        }
      }

      // Change the red window to the next one
      RedWindow = RedWindow + .25;
      // If the red window is 6 that is too many
      if (RedWindow == 4) {
        RedWindow = 1;
      }
    }

    function Window(context, xposn, yposn, colour) {
      // Draw window
      context.beginPath();
      context.fillStyle = colour;
      // Draw window
      context.lineTo(yposn);
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
      // Top lamp
      Globe(context, 25, 13, Colour);
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
      context.quadraticCurveTo(xposn, yposn - 20, xposn + 10, yposn);
      // Fill the globe
      context.fill();
      // Draw the globe
      context.stroke();
    }
    function Squares(context, xposn, yposn, colour) {
      // Begin path
      context.beginPath();
      // set colour
      context.fillStyle = colour;
      // Set the outline colour
      context.strokeStyle = "black";
      // Move to the position of the start of the square
      context.moveTo(xposn, yposn);
      // Draw the sqaure
      context.lineTo(xposn + 20, yposn);
      context.lineTo(xposn + 20, yposn + 20);
      context.lineTo(xposn, yposn + 20);
      context.lineTo(xposn, yposn);
      // Close path
      context.closePath();
      // Fill the squares
      context.fill();
      // Draw the line
      context.stroke();
    }

    // Publoc method to move the tardis
    Tardis.prototype.move = function() {
      // Change the x axis by the x velocity
      x += vx;
      // Change the y axis by the y velocity
      y += vy;
    }

    // public method to set the vector
    Tardis.prototype.setVector = function(vector) {
      // Set the vx axis value based on this vector
      vx = vector.VX;
      // Set the vy axis based on this vector
      vy = vector.VY;
    }

    // Public method to apply acceleratiom
    Tardis.prototype.acceleration = function(Acceleration) {
      // Set vx
      vx += Acceleration.AX;
      vy += Acceleration.AY;
    }
    // Create a public property for the top of the tardis
    Object.defineProperty(this, "Top",
    {
      // Getter
      get: function() {
        // Return the value of y, take away the height
        return y - 90;
      }
    }
  )
  // Create a public property for the bottom of the tardis
  Object.defineProperty(this, "Bottom",
  {
    // Getter
    get: function() {
      // Return the value of y, add the height
      return y + 90;
    }
  }
)
  // Create a public property for the left most side of the tardis
  Object.defineProperty(this, "Left",
  {
    // Getter
    get: function() {
      // Return the value for the x, take away width
      return x - 46;
    }
  }
)
// Create public property for the right most side of the Tardis
Object.defineProperty(this, "Right",
  {
    // Getter
    get: function() {
      // Return the value of x plus width
      return x + 46;
    }
  }
)
Tardis.prototype.halt = function() {
  vx = 0;
  vy = 0;
}
}
