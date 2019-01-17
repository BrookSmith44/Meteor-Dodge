function Acceleration(Gravity) {
  // Private variables for ax and ay
  var ax =  0;
  var ay = 0;

  // Private variable to store gravity valie
  var gravity = Gravity;

  // Public read only property for AX
  Object.defineProperty(this, "AX",
  {
        get : function() {
          return ax;
        }
  }
)
  // Public read only property of AY
  Object.defineProperty(this, "AY",
  {
    get: function() {
      return ay;
    }
  }
)
// Public method for vertical thrust
Acceleration.prototype.VerticalThrust = function(Thrust) {
  ay -= Thrust;
}
// Public method for horizontal Thrust
Acceleration.prototype.HorizontalThrust = function(Thrust) {
  ax -= Thrust;
}
// Public method to stop trust
Acceleration.prototype.Stop = function() {
  ax = 0;
  ay = 0;
}
}
