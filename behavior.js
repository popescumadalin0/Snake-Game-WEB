//test
//******************* start ***************************
document.addEventListener('keyup', start);
function start() {
    document.getElementById("h1").style.display = "none";
    document.getElementById("snake").style.display = "block";
    document.getElementById("food").style.display = "block";
    run();
}
function run() {
    document.removeEventListener('keyup', start);
    //**************************** variable ****************************
    var snake_style = document.getElementById("snake").style;
    let container_width = document.getElementById("container").clientWidth;
    let container_height = document.getElementById("container").clientHeight;
    var container = document.getElementById("container");
    var food = document.getElementById("food");
    var pos_x = 1;
    var pos_y = 1;
    var up = 0, bottom = 0, right = 0, left = 0;
    //**********************create food ***************************
    var time_food = 0;
    var food_y = Math.floor((Math.random() * (container_height - 26)) + 1);
    var food_x = Math.floor((Math.random() * (container_width - 26)) + 1);
    food.style.top = food_y + "px";
    food.style.left = food_x + "px";
    //*************************** move ***********************************
    var time_snake = null;
    clearInterval(time_snake);
    time_snake = setInterval(frame, 1);
    function frame() {
        //move_keyevent
        document.addEventListener('keydown', function (event) {
            var key = event.key;
            if (key == "w") {
                up = 1; bottom = 0; right = 0; left = 0;
            }
            else if (key == "a") {
                up = 0; bottom = 0; right = 0; left = 1;
            }
            else if (key == "d") {
                up = 0; bottom = 0; right = 1; left = 0;
            }
            else if (key == "s") {
                up = 0; bottom = 1; right = 0; left = 0;
            }
        });
        //move_edges
        if (pos_x == container_width - 25)
            pos_x = 1;
        else if (pos_y == container_height - 25)
            pos_y = 1;
        else if (pos_x == 0)
            pos_x = container_width - 26;
        else if (pos_y == 0)
            pos_y = container_height - 26;
        //move_position
        if (up == 1)
            pos_y--;
        else if (bottom == 1)
            pos_y++;
        else if (right == 1)
            pos_x++;
        else if (left == 1)
            pos_x--;
        snake_style.left = pos_x + "px";
        snake_style.top = pos_y + "px";
        //collision
        time_food++;
        if (pos_x + 25 >= food_x && pos_x <= food_x + 25 && 
            pos_y + 25 >= food_y && pos_y <= food_y + 25) {
            time_food = 0;
            reposition();
        }
        if (time_food >= 2000) {
            time_food = 0;
            reposition();
        }
    }
    //reposition food
    function reposition() {
        food_y = Math.floor((Math.random() * (container_height - 26)) + 1);
        food_x = Math.floor((Math.random() * (container_width - 26)) + 1);
        food.style.top = food_y + "px";
        food.style.left = food_x + "px";

        var snake=document.getElementById("snake");
        var coada= snake.cloneNode();
    }
}
