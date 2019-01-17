function Platform() {
  // Private variables for x, y coordinates
  var x = 280,
      y = 580;

      // Public property fo X nd Y coordinates
  Object.defineProperty(this, "X",
    {
      // Getter
      get: function() {
        // Return the value of x
        return x;
      },
      // Setter
      set: function (value) {
        // Set the value of x
         x = value;
      }
    }
  )
  Object.defineProperty(this, "Y",
    {
      // Getter
      get: function() {
        // Return the value of y
        return y;
      },
      set: function (value) {
        // set the value of y
        y = value
      }
    }
  )
  Platform.prototype.draw = function (context) {
    // Save state before changing
    /*context.save();
    // Set the coordinates of drawing area of new platform to x and y
    context.translate(x, y);*/
    // Start path
    context.beginPath();
    // Set colour
    context.fillStyle = "black";
    // Move path
    context.moveTo(x, y);
    // Draw the platform
    context.lineTo(400, 580);
    context.lineTo(400, 600);
    context.lineTo(200, 600);
    context.lineTo(200, 580);
    // Close the path
    context.closePath();
    // Fill the platform
    context.fill();
    // Draw the line
    context.stroke();
    // Restore the state of the context to what it was before
    context.restore();
  }
  Object.defineProperty(this, "Top",
    {
      // Getter
      get: function() {
        // Return the valie of y minus the height
        return y - 20;
      }
    }
  )
    Object.defineProperty(this, "Bottom",
    {
      // Getter
      get: function() {
        // Return the value of y plus the height
        return y + 20;
      }
    }
  )
  Object.defineProperty(this, "Left",
  {
    // Getter
    get: function() {
      // Return the value of x minus the width
      return x - 120;
    }
  }
)
  Object.defineProperty(this, "Right",
  {
    // Getter
    get: function() {
      // Return the value of x plus the width
      return x + 120;
    }
  }
)
}
