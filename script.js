
let snake;
let rez = 10;
let food;
let w;
let h;

function setup() {
    createCanvas(400, 400);
    w = floor(width / rez);
    h = floor(height / rez);
    frameRate(15);
    snake = new Snake();
    foodLocation();
    }
  
    function foodLocation() {
        let x = floor(random(w));
        let y = floor(random(h));
        food = createVector(x, y);
    }

  function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      snake.setDir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
      snake.setDir(1, 0);
    }
    else if (keyCode === UP_ARROW) {
      snake.setDir(0, -1);
      }
      else if (keyCode === DOWN_ARROW) {
      snake.setDir(0, 1);
      }
      else if (key == ' ') {
        snake.grow();
      }
    }


   function draw() {
    scale(rez);  
    background(220);
    if (snake.eat(food)) {
        foodLocation();
    }

    noStroke();
    fill(255, 0, 0)
    rect(food.x, food.y, 1, 1);

    snake.update();
    snake.show();
    

    if (snake.endGame()) {
        background(255, 0, 0);
        textSize(3);
        text('Você Morreu!',(w/2-10),(h/2));
        text('Você fez ' + snake.len + ' ponto(s)',(w/2-14),(h/2+5));
        textSize(2);
        text('Aperte F5 para reiniciar o Jogo. ' ,(w/2-14),(h/2+18));
        noLoop();
    }
  }