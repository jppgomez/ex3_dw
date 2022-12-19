let w = document.getElementById("about_text").clientWidth;
let h = document.getElementById("about_text").clientHeight;

let about_text = "THIS IS AN ABOUT TEXT FOR A FROM THAT IS AND STUFF...";
let click_text = ["MYSELF", "YEAR OLD", "A CITY"];
let clicked_text = ["João Gomes", "21", "Vieira de Leiria"];
let selected_text = [];
let words = [];


function setup() {
  createCanvas(w, h).parent('about_text');

  text_font = loadFont("../assets/lack-regular.otf");
  paint_font = loadFont("../assets/baguette.otf")

  let base_text = split(about_text, " ");
  for(let i=0; i<click_text.length; i++) words[i] = new Words(click_text[i], random(w/6,w-w/6), random(h/6,h-h/6), true, random(1,3), int(random(1,3)), int(random(1,3))); 
  for(let j=click_text.length; j<click_text.length+base_text.length; j++) words[j] = new Words(base_text[j-click_text.length], random(w/6,w-w/6), random(h/6,h-h/6), false, random(1,3), int(random(1,3)), int(random(1,3)));  
  for(let l=0; l<clicked_text.length; l++) selected_text[l] = false;
}

function draw() {
  background(color('#0c0c0c'));
  for(let w=0; w<words.length; w++){
    let bbx = text_font.textBounds(words[w].text, words[w].px, words[w].py);
    if(mouseX >= words[w].px && mouseX <= words[w].px + bbx.w && mouseY >= words[w].py-bbx.h && mouseY <= words[w].py){
      showPaint(w);
    }
    words[w].desenha();
    words[w].move();
  }
  for(let n=0; n<clicked_text.length; n++){
    if(selected_text[n] ==  true){
      fill(255,0,0);
      textAlign(CENTER);
      textSize(w/10);
      textFont(paint_font);
      text(clicked_text[n], w/2, h/2);
      textAlign(LEFT);
    }
  }

}

function mousePressed(){
  for(let w=0; w<click_text.length; w++){
    let bbx = text_font.textBounds(words[w].text, words[w].px, words[w].py);
    if(mouseX >= words[w].px && mouseX <= words[w].px + bbx.w && mouseY >= words[w].py-bbx.h && mouseY <= words[w].py){
      showPaint(w);
    }
    else
    for(let l=0; l<clicked_text.length; l++) selected_text[l] = false;
}
}

function showPaint(n){
  for(let l=0; l<clicked_text.length; l++) selected_text[l] = false;
  selected_text[n] = !selected_text[n];
}

class Words{
  constructor(text, px, py, style3D, speed, dx, dy){
    this.text = text;
    this.px = px;
    this.py = py;
    this.style3D = style3D;
    this.speed = speed;
    this.dx = dx;
    this.dy = dy;
  }
desenha(){
  textFont(text_font);
  textSize(w/50);
  if(this.style3D == false){
    fill(255);
    text(this.text, this.px, this.py);
  }
  else{
    stroke(255);
    noFill();
    text(this.text, this.px, this.py);
    noStroke();
  }
}
 move(){
  if(this.dx == 2) this.dx = -1;
  if(this.dy == 2) this.dy = -1;
  this.px = this.px + this.dx*this.speed;
  this.py = this.py + this.dy*this.speed;

  let bbx = text_font.textBounds(this.text, this.px, this.py);

  if(this.px +  bbx.w >= w || this.px <= 0) this.dx = -this.dx;
  if(this.py +  bbx.h >= h || this.py <= 0.025*windowHeight) this.dy = -this.dy;
  }
}

function windowResized(){
  w = document.getElementById("about_text").clientWidth;
  h = document.getElementById("about_text").clientHeight;
  resizeCanvas(w,h);
  textSize(w/35);

}