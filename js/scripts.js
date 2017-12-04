function drawTree(height) {
  for(var i = 0; i < height; i++) {
    var line = "";
    for(var j = 0; j < (height - i); j++) {
      line += " ";}
      for(var k = 0; k <= i*2; k++) {
        line += "*";
      }
    
    console.log(line);
  }
}

drawTree(5);