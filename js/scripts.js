function drawTree(heightTree) {
  for(var i = 0; i < heightTree; i++) {
    var line = "";
    for(var j = 0; j < (heightTree - i); j++) {
      line += " ";}
      for(var k = 0; k <= i*2; k++) {
        line += "*";
      }
    console.log(line);
  }
}

drawTree(5);