var sketchProc = function(processingInstance) {

  with (processingInstance) {
    size(700,500);
   
  background(173, 229, 255);
// The ground
fill(226, 241, 245);
rect(0, 300, 400, 100);  

// The sun
fill(252, 252, 5);
ellipse(80, 64, 100, 100);  

// The snowman
fill(0, 204, 255);
ellipse(200, 300, 150, 150);
ellipse(200, 200, 100, 100);
ellipse(200, 120, 75, 75);



  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);