
function loadLevel(speed, size, amount){
  this.speed=speed;
  this.size=size;
  this.amount=amount;
  var xPoint=canvas.width/(this.amount+1);

  var player=new Ball(canvas.width/2, canvas.height/2, size, this.speed, 'red');  
  var wrongBall1=new Ball(xPoint, canvas.height/2, size, this.speed,'red');
  var wrongBall2=new Ball(xPoint*2, canvas.height/2, size, this.speed,'red');
  var wrongBall3=new Ball(xPoint*4, canvas.height/2, size, this.speed,'red');
  var wrongBall4=new Ball(xPoint*5, canvas.height/2, size, this.speed,'red');

  player.draw();
  wrongBall1.draw();  
  wrongBall2.draw();  
  wrongBall3.draw();  
  wrongBall4.draw();
  
  document.getElementById("start-button").onclick = function() {   
    var intervalId = setInterval(function(){
      ctx.clearRect(0,0, canvas.width, canvas.height);
      player.draw();
     
      player.update0();
      setTimeout(function(){player.update();}, 3000);
      setTimeout(function(){player.update1();}, 6000);
      setTimeout(function(){player.stop();}, 12000);

      wrongBall1.draw();
      wrongBall1.update0();
      setTimeout(function(){wrongBall1.update();}, 3000);
      setTimeout(function(){wrongBall1.update1();}, 6000);
      setTimeout(function(){wrongBall1.stop();}, 12000);




      wrongBall2.draw();
      wrongBall2.update0();
      setTimeout(function(){wrongBall2.update();}, 3000);
      setTimeout(function(){wrongBall2.update1();}, 6000);
      setTimeout(function(){wrongBall2.stop();}, 12000);




      wrongBall3.draw();
      wrongBall3.update0();
      setTimeout(function(){wrongBall3.update();}, 3000);
      setTimeout(function(){wrongBall3.update1();}, 6000);
      setTimeout(function(){wrongBall3.stop();}, 12000);



      wrongBall4.draw();
      wrongBall4.update0();
      setTimeout(function(){wrongBall4.update();}, 3000);
      setTimeout(function(){wrongBall4.update1();}, 6000);
      setTimeout(function(){wrongBall4.stop();}, 12000);

    }, 1000/60);
  };


  canvas.addEventListener('mousemove', function(evt){
    console.log(player);
    console.log("ball position", player.x, player.y, player.radius);
    var rect = canvas.getBoundingClientRect();
    console.log(evt.clientX, evt.clientY)
    if (evt.clientX-60 >player.x-player.radius && evt.clientX-60 <player.x+player.radius && evt.clientY-80 >player.y-player.radius && evt.clientY-80 <player.y+player.radius )
    { console.log("whatever");
    alert("you catched the ball");
    }console.log("wrong");
  });







}
function checkClick(){
  // function checkMousePos() {
  //   var cursorX;
  //   var cursorY;
  //   canvas.onmousemove = function(e){
  //   cursorX:  e.pageX;
  //   cursorY: e.pageY;
  //   console.log(cursorX, cursorY)
  // }
  //}
 
  



  if(player.x !=evt.clientX) {
    var score=100;
  
  ctx.fillText(100);
  }
  
}
 