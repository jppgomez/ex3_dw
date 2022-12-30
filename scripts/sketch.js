let w = document.getElementById("about_text").clientWidth;
let h = document.getElementById("about_text").clientHeight;
let text_gif_width, text_gif_height;

let about_text = "ESTA É A PÁGINA INFORMATIVA SOBRE UM DE UMA NUM ESTE JOVEM NASCEU NUMA O QUE O FAZ TER UMA ATUALMENTE VIVE NUMA ONDE ESTUDA NUM DE UMA ELE TRABALHA NA TENDO ALGUNS";
let click_text = ["JOVEM", "VILA", "PAÍS", "DATA", "IDADE", "CIDADE", "CURSO", "UNIVERSIDADE", "ESPECIALIDADE", "INTERESSES"];
let base_text;
let clicked_text = [];
let selected_text = [];
let current_gif_text;
let words = [];


function preload(){
  text_font = loadFont("assets/fonts/lack-regular.otf");
  paint_font = loadFont("assets/fonts/baguette.otf");
  for(let k=0; k<13; k++) {
    clicked_text[k] = createVideo(["assets/text-gifs/webm/"+k+".webm", "assets/text-gifs/mov/"+k+".mov"]);
    clicked_text[k].hide();
  }
}

function setup() {
  createCanvas(w, h).parent('about_text');
  base_text = split(about_text, " ");
  for(let i=0; i<click_text.length; i++) words[i] = new Words(click_text[i], random(w/6,w-w/6), random(h/6,h-h/6), true, random(1,3), int(random(1,3)), int(random(1,3))); 
  for(let j=click_text.length; j<click_text.length+base_text.length; j++) words[j] = new Words(base_text[j-click_text.length], random(w/6,w-w/6), random(h/6,h-h/6), false, random(1,3), int(random(1,3)), int(random(1,3)));  
  for(let l=0; l<clicked_text.length; l++) selected_text[l] = false;
  text_gif_width = w-w/5;
  text_gif_height = text_gif_width*843 / 1914;
}

function draw() {
  background(color('rgba(12,12,12,1)'));
  cursor("assets/cursors/cursor.png");
  //console.log(clicked_text[0].width);
  for(let w=0; w<words.length; w++){
    let bbx = text_font.textBounds(words[w].text, words[w].px, words[w].py);
    if(mouseX >= words[w].px && mouseX <= words[w].px + bbx.w && mouseY >= words[w].py-bbx.h && mouseY <= words[w].py){
      if(w >= 0 && w < click_text.length) cursor("assets/cursors/hand.png");
    }
    words[w].desenha();
    words[w].move();
  }
  for(let n=0; n<click_text.length; n++){
    if(selected_text[n]){
      imageMode(CENTER);
      image(clicked_text[current_gif_text], w/2, h/2, text_gif_width, text_gif_height);
      if(clicked_text[current_gif_text].time() >= clicked_text[current_gif_text].duration()) clicked_text[current_gif_text].stop(); 
    }
  }

}

function mousePressed(){
  if(mouseX >= 0 && mouseX <= w && mouseY >= 0 && mouseY <= h){
  for(let l=0; l<clicked_text.length; l++) {
    clicked_text[l].stop();
    selected_text[l] = false;
  }
  for(let w=0; w<click_text.length; w++){
    let bbx = text_font.textBounds(words[w].text, words[w].px, words[w].py);
    if(mouseX >= words[w].px && mouseX <= words[w].px + bbx.w && mouseY >= words[w].py-bbx.h && mouseY <= words[w].py){
      showPaint(w);
    }

}
  }
}

function showPaint(n){
  current_gif_text = n;
  if(n==9) current_gif_text = int(random(9,13));
  selected_text[n] = !selected_text[n];
  clicked_text[current_gif_text].play();
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
  textSize(h/30);
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

  text_gif_width = w-w/5;
  text_gif_height = text_gif_width*843 / 1914;
}