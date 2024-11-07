let imgArray = [];
let font; 
function preload() {
  //images
  imgArray[0] = loadImage("assets/dither_it_3spidermen.png");
  imgArray[1] = loadImage("assets/dither_it_Screenshot 2024-10-22 142609.png")
  imgArray[2] = loadImage("assets/dither_it_Screenshot 2024-10-22 143927.png")
  imgArray[3] = loadImage("assets/dither_it_Screenshot 2024-10-24 131756 (1).png")
  //font
  font = loadFont('assets/Agdasima-Bold.ttf')
   //music
  song = loadSound('assets/The Amazing Spider-Man 2 theme song.mp3');
}
function setup() {
  //canvas
  var canvas = createCanvas(500, 500);
  canvas.parent("sketch-holder");
  background(0);
  //button
  var button = createButton("Draw Spidermen");
  button.parent("button-holder");
  button.mousePressed(spidermanDraw);
  
    //lizard
  var button2 = createButton("Draw Lizard");
  button2.parent("button-holder");
  button2.mousePressed(lizardDraw);
  
  //electro
  var button3 = createButton("Draw Electro");
  button3.parent("button-holder");
  button3.mousePressed(electroDraw);
  
  //random image
  var button4 = createButton("Random");
  button4.parent("button-holder");
  button4.mousePressed(randomDraw);
  
  //music
   var button5 = createButton("Music");
  button5.parent("button-holder");
  button5.mousePressed(playMusic);
  
  //clear screen button
  var button6 = createButton("Clear Screen");
  button6.parent("button-holder");
  button6.mousePressed(clearScreen);
  
   //save image button
  var button7 = createButton("Save Image");
  button7.parent("button-holder");
  button7.mousePressed(saveDrawing);
  
  frameRate(75);
  rectMode(CENTER);
  imageMode(CENTER);
  
}

function draw() {
}
function spidermanDraw(){
  image(imgArray[0],random(width),random(height),100,100)
}
function electroDraw(){
  image((imgArray[1]),random(width),random(height),100,100);
}
function lizardDraw(){
  image((imgArray[2]),random(width),random(height),100,100);
}
function randomDraw() {
  let ranImg = int(random(imgArray.length));
  image(imgArray[ranImg], random(width), random(height), 100, 100);
}
function clearScreen() {
  background(0);
}
function mousePressed(){
  if (mouseX < width && mouseX > 0) {
    if (mouseY < height && mouseY > 0) {
      image(imgArray[3], mouseX, mouseY, 100,100)
      
    }
  }
}
function playMusic(){
    
  if (song.isPlaying()){
  song.stop();
  } else {
    song.play();
  } 
}
function saveDrawing(){
  save("Picture.png") 
}