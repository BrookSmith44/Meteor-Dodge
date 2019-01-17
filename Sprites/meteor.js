function Meteor() {

  // Create priavte variables for the metoer
  var x = 0,
      y = 0,
      vx = 0,
      vy = 0;

  // Create public property for x and y variables
  Object.defineProperty(this, "X",
  {
    //Getter
    get: function() {
      //Return x variable
      return x;
    },
    // Setter
    set: function(value) {
      // Set the value of x to value parameter
      x = value;
    }
  }
)
Object.defineProperty(this, "Y",
  {
    //Getter
    get: function() {
      // Return value of y
      return y;
    },
    set: function(value) {
      // Set valie of y to value parameter
      y = value;
    }
  }
)

  // Draw function for the meteor with the parameter X
  Meteor.prototype.draw = function (context) {
    // Save the state of the canvas before changing it
    context.save();
    // Set the coordinates of the drawing area of the new metoer
    context.translate(x, y);
    // Start the path
    context.beginPath();
    context.fillStyle = "black";
    // Move the path
    context.moveTo(x, y);
    // Draw the meteor
    context.arc(x, y, 10, 0, (Math.PI * 2));
    //Close the path
    context.closePath();
    // fill with colour
    context.fill();
    // Draw the line
    context.stroke();
    // Restore
    context.restore();
  }
  // Publoc method to move the Meteor
  Meteor.prototype.move = function() {
    // Change the x axis by the x velocity
    x += vx;
    // Change the y axis by the y velocity
    y += vy;
  }

  // public method to set the vector
  Meteor.prototype.setVector = function(vector) {
    // Set the vx axis value based on this vector
    vx = vector.VX;
    // Set the vy axis based on this vector
    vy = vector.VY;
  }

  // Public method to apply acceleratiom
  Meteor.prototype.acceleration = function(Acceleration) {
    // Set vx
    vx += Acceleration.AX;
    vy += Acceleration.AY;
  }
  Meteor.prototype.halt = function() {
    vx = 0;
    vy = 0;
  }
  Object.defineProperty(this, 'Left',
  {
    // Getter
    get: function() {
      //return the valiue of x minus the width
      return x - 10;
    }
  }
)
  Object.defineProperty(this, "Right",
    {
      // Getter
      get: function() {
        // Return the value of x plus the width
        return x + 10;
      }
    }
)
  Object.defineProperty(this, "Top",
  {
    // Getter
    get: function() {
      // Return the value of y minus the height
      return y - 10;
    }
  }
)
  Object.defineProperty(this, "Bottom",
  {
    // Getter
    get: function() {
      // Return the value of y plus the height
      return y + 10;
    }
  }
)
}
