// Vector Constructor
function Vector(Degrees, Magnitude) {

  // Private variables for x and y vector
  var vx = CalcVX(Degrees, Magnitude);
  var vy = CalcVY(Degrees, Magnitude);

  // Public read only properties for vx and vy
  Object.defineProperty(this, "VX",
    {
      // Getter
      get : function() {
        // return the value of vx
        return vx;
      }
    }
  )
  Object.defineProperty(this, "VY",
    {
      // Getter
      get : function() {
        // Return the value of vy
        return vy;
      }
    }
  )
  function CalcVX(Degrees, Magnitude) {
    // Convert the degress to radions
    var radians =   Degrees * Math.PI / 180;
    // Calculate the vx value
    return Math.cos(radians) * Magnitude;
  }

  function CalcVY(Degrees, Magnitude) {
    // Convert degrees to radians again
    var radians = Degrees * Math.PI / 180;
    // Calculate the vy value
    return Math.sin(radians) * Magnitude;
  }
}
