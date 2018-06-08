


function Ball(x, y, radius, speed, color, score=0, lives=3){
  this.x = x;
  this.y = y; 
  this.radius=radius;
  this.color=color;
  this.speed=speed;
  this.score=score;
  this.lives = lives;
  var plusOrMinusX = Math.random() < 0.5 ? -1 : 1; //random direction, left or right.
  var plusOrMinusY = Math.random() < 0.5 ? -1 : 1; //random direction, up or down.
  this.vx = plusOrMinusX * Math.floor((Math.random() * speed)+1); //velocity - direction, randomly chosen from -speed to speed, excluding 0.
  this.vy = plusOrMinusY * (Math.abs(this.vx)-(speed+1)); //velocity - direction, randomly chosen from -speed to speed, excluding 0. Depends on vx, thus the speed of all balls will be the same (but not direction)

  this.vx1 = plusOrMinusX * Math.floor((Math.random() * speed)+1);
  this.vy1 = plusOrMinusY * (Math.abs(this.vx1)-(speed+1));

  this.vx0 = plusOrMinusX * Math.floor((Math.random() * 5)+1); 
  this.vy0 = plusOrMinusY * (Math.abs(this.vx0)-(5+1)); 
 }

 Ball.prototype.draw=function(){
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
  ctx.closePath();
  ctx.fillStyle=this.color;
  ctx.fill();
}

Ball.prototype.update0=function(){ 
  
  this.x += this.vx0;
  this.y += this.vy0;
  if (this.y + this.vy0 +this.radius> canvas.height || this.y + this.vy0-this.radius < 0) {
  this.vy0 *= -1;
  }
  if (this.x + this.vx0 +this.radius > canvas.width || this.x + this.vx0-this.radius < 0) {
  this.vx0 *= -1;
  }
}

Ball.prototype.update=function(){ 
  this.vx0=0;
  this.vy0=0;
  this.x += this.vx;
  this.y += this.vy;
  if (this.y + this.vy +this.radius> canvas.height || this.y + this.vy-this.radius < 0) {
  this.vy *= -1;
  }
  if (this.x + this.vx +this.radius > canvas.width || this.x + this.vx-this.radius < 0) {
  this.vx *= -1;
  }
}
Ball.prototype.update1=function(){ 
  this.vx=0;
  this.vy=0;
  this.vx=0;
  this.vy=0;
  this.x += this.vx1;
  this.y += this.vy1;
  if (this.y + this.vy1 +this.radius> canvas.height || this.y + this.vy1-this.radius < 0) {
  this.vy1 *= -1;
  }
  if (this.x + this.vx1 +this.radius > canvas.width || this.x + this.vx1-this.radius < 0) {
  this.vx1 *= -1;
  }
}

Ball.prototype.stop=function(){
  this.vx=0;
  this.vy=0;
  this.vx0=0;
  this.vy0=0;
  this.vx1=0;
  this.vy1=0;
}