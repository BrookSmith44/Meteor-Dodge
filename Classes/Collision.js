  function Collision() {
    Collision.prototype.overlap = function(ItemA, ItemB) {
      // Private variables to store the types of overlap
      var overlapLeft,
          overlapRight,
          overlapTop,
          overlapBottom;
      // Left overlap
      overlapLeft = (ItemA.Left >= ItemB.Left) & (ItemA.Left <= ItemB.Right);
      // Right overlap
      overlapRight = (ItemA.Right >= ItemB.Left) & (ItemA.Right <= ItemB.Right);
      // Top overlap
      overlapTop = (ItemA.Top >= ItemB.Top) & (ItemA.Top <= ItemB.Bottom);
      // Bottom overlap
      overlapBottom = (ItemA.Bottom >= ItemB.Top) & (ItemA.Top <= ItemB.Top);
      // If left or Right and Top or Bottom are overlapping
      if ((overlapLeft || overlapRight) && (overlapTop || overlapBottom)) {
        // Return true as there is a overlapping
        return true;
      } else {
        // Otherwise return false;
        return false;
      }
    }
  }
