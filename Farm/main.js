var speed = 8;
var counter1 = 2;
var gold = 30000;

var game = {
    width: 960,
    height: 480,
    ctx: undefined,
    isRunning: true,
    turkeys: [],
    cats: [],
    dogs: [],
    sheep: [],
    bears: undefined,
    cows: [],
    sprites: {
        cats: undefined,
        dogs: undefined,
        sheep: undefined,
        bears: undefined,
        turkeys: [],
        cows: []
    },
    init: function () {
        var canvas = document.getElementById("myCanvas");
        this.ctx = canvas.getContext("2d");

    },

    load: function () {
        for (let i = 0; i < this.turkeys.length; i++) {
            this.turkeys[i].sprites = new Image();
            this.turkeys[i].sprites.src = "Pictures/turkeyRight.png";
        }
        for (let i = 0; i < this.cows.length; i++) {
            this.cows[i].sprites = new Image();
            this.cows[i].sprites.src = "Pictures/cowLeft.png";
        }
        for (let i = 0; i < this.dogs.length; i++) {
            this.dogs[i].sprites = new Image();
            this.dogs[i].sprites.src = "Pictures/dogLeft.png";
        }
        for (let i = 0; i < this.cats.length; i++) {
            this.cats[i].sprites = new Image();
            this.cats[i].sprites.src = "Pictures/catLeft.png";
        }
        for (let i = 0; i < this.sheep.length; i++) {
            this.sheep[i].sprites = new Image();
            this.sheep[i].sprites.src = "Pictures/sheepLeft.png";
        }
    },
    start: function () {
        this.init();
        this.load();
        this.run();
    },

    render: function () {
        this.ctx.clearRect(0, 0, this.width, this.height);

        for (let i = 0; i < this.turkeys.length; i++) {
            this.ctx.drawImage(this.turkeys[i].sprites, this.turkeys[i].width * this.turkeys[i].frame, 0, this.turkeys[i].width,
                this.turkeys[i].height, this.turkeys[i].x, this.turkeys[i].y, this.turkeys[i].width, this.turkeys[i].height);
        }

        for (let i = 0; i < this.cows.length; i++) {
            this.ctx.drawImage(this.cows[i].sprites, this.cows[i].width * this.cows[i].frame, 0, this.cows[i].width,
                this.cows[i].height, this.cows[i].x, this.cows[i].y, this.cows[i].width, this.cows[i].height);
        }

        for (let i = 0; i < this.cats.length; i++) {
            this.ctx.drawImage(this.cats[i].sprites, this.cats[i].width * this.cats[i].frame, 0, this.cats[i].width,
                this.cats[i].height, this.cats[i].x, this.cats[i].y, this.cats[i].width, this.cats[i].height);
        }

        for (let i = 0; i < this.dogs.length; i++) {
            this.ctx.drawImage(this.dogs[i].sprites, this.dogs[i].width * this.dogs[i].frame, 0, this.dogs[i].width,
                this.dogs[i].height, this.dogs[i].x, this.dogs[i].y, this.dogs[i].width, this.dogs[i].height);
        }

        for (let i = 0; i < this.sheep.length; i++) {
            this.ctx.drawImage(this.sheep[i].sprites, this.sheep[i].width * this.sheep[i].frame, 0, this.sheep[i].width,
                this.sheep[i].height, this.sheep[i].x, this.sheep[i].y, this.sheep[i].width, this.sheep[i].height);
        }


    },

    update: function () {
        for (let i = 0; i < this.turkeys.length; i++) {
            if (this.turkeys[i].dx || this.turkeys[i].dy) {
                this.turkeys[i].move();
            }
            this.turkeys[i].checkBounds();
        }
        for (let i = 0; i < this.cows.length; i++) {
            if (this.cows[i].dx || this.cows[i].dy) {
                this.cows[i].move();
            }
            this.cows[i].checkBounds();
        }
        for (let i = 0; i < this.cats.length; i++) {
            if (this.cats[i].dx || this.cats[i].dy) {
                this.cats[i].move();
            }
            this.cats[i].checkBounds();
        }
        for (let i = 0; i < this.dogs.length; i++) {
            if (this.dogs[i].dx || this.dogs[i].dy) {
                this.dogs[i].move();
            }
            this.dogs[i].checkBounds();
        }
        for (let i = 0; i < this.sheep.length; i++) {
            if (this.sheep[i].dx || this.sheep[i].dy) {
                this.sheep[i].move();
            }
            this.sheep[i].checkBounds();
        }

    },

    run: function () {
        this.update();
        this.render();
        if (game.isRunning) {
            window.requestAnimationFrame(function () {
                game.run();
            });
        }


    },


};

game.turkeys[0] = {
    width: 94,
    height: 72,
    frame: 0,
    x: 300,
    y: 300,
    velocity: 0.5,
    dx: 0,
    dy: 0,
    checkBounds: function () {
        var x = this.x + this.dx;
        var y = this.y + this.dy;

        if (x < 0) {
            counter1 = 4;
        } else {
            if (x + this.width > game.width) {
                counter1 = 0;
            } else {
                if (y < 0) {
                    counter1 = 6;
                } else {
                    if (y + this.height > game.height) {
                        counter1 = 2;
                    }
                }
            }
        }
    },

    impactBorder: function () {
    },

    move: function () {
        this.x += this.dx;
        this.y += this.dy;
        this.animate();
    },
    animate: function () {
        switch (counter1) {
            case 0:
                this.sprites.src = this.left;
                this.width = 94;
                this.height = 72;
                this.dx = -this.velocity;
                this.dy = 0;
                break;
            case 1:
                this.sprites.src = this.upLeft;
                this.width = 82;
                this.height = 84;
                this.dx = -this.velocity;
                this.dy = -this.velocity;
                break;
            case 2:
                this.sprites.src = this.up;
                this.width = 70;
                this.height = 90;
                this.dy = -this.velocity;
                this.dx = 0;
                break;
            case 3:
                this.sprites.src = this.upRight;
                this.width = 82;
                this.height = 84;
                this.dx = this.velocity;
                this.dy = -this.velocity;
                break;
            case 4:
                this.sprites.src = this.right;
                this.width = 94;
                this.height = 72;
                this.dx = game.turkeys[0].velocity;
                this.dy = 0;
                break;
            case 5:
                this.sprites.src = this.downRight;
                this.width = 80;
                this.height = 66;
                this.dx = game.turkeys[0].velocity;
                this.dy = game.turkeys[0].velocity;
                break;
            case 6:
                this.sprites.src = this.down;
                this.width = 72;
                this.height = 68;
                this.dy = game.turkeys[0].velocity;
                this.dx = 0;
                break;
            case 7:
                this.sprites.src = this.downLeft;
                this.width = 80;
                this.height = 66;
                this.dx = -game.turkeys[0].velocity;
                this.dy = game.turkeys[0].velocity;
                break;
        }

        let timerIdNew = setTimeout(function () {
            ++game.turkeys[0].frame;
            if (game.turkeys[0].frame > 23) {
                game.turkeys[0].frame = 0;
            }
            clearInterval(timerIdNew);
        }, 10);

    }
    ,
    left: "Pictures/turkeyLeft.png",
    upLeft:
        "Pictures/turkeyUpLeft.png",
    downLeft:
        "Pictures/turkeyDownLeft.png",
    down:
        "Pictures/turkeyDown.png",
    downRight:
        "Pictures/turkeyDownRight.png",
    right:
        "Pictures/turkeyRight.png",
    upRight:
        "Pictures/turkeyUpRight.png",
    up:
        "Pictures/turkeyUp.png",
};


window.addEventListener('load', function () {
    game.start();
});

// Анимация строений
var wheatHouse = document.getElementById('EggDryer');
wheatHouse.addEventListener('click', () => {
    let start = Date.now();
    var q = 0;
    let counter = 0;
    requestAnimationFrame(step);

    function step() {
        let timestamp = Date.now();

        let progress = timestamp - start;

        if (q > 15) {
            counter = counter + 15
        }
        q = Math.floor(progress / 60) - counter;
        console.log('progress' + progress + '  q=' + q);
        wheatHouse.style.backgroundPosition = -q * 128 + 'px';
        if (progress >= 5000) {
            wheatHouse.style.backgroundPosition = '0px';
        }
        if (progress < 5000) {
            requestAnimationFrame(step);
        }
    }


});

var timerId = setInterval(function () {
    counter1 = Math.floor(Math.random() * 7);
}, 4000);


//классы зверей


class Turkey {
    constructor(x, y) {
        this.width = 94;
        this.height = 72;
        this.x = x;
        this.y = y;
        this.counter = 0;
        this.velocity = 0.5;
        this.dx = 0.5;
        this.dy = 0;
        this.frame = 0;
        this.left = "Pictures/turkeyLeft.png";
        this.upLeft = "Pictures/turkeyUpLeft.png";
        this.downLeft = "Pictures/turkeyDownLeft.png";
        this.down = "Pictures/turkeyDown.png";
        this.downRight = "Pictures/turkeyDownRight.png";
        this.right = "Pictures/turkeyRight.png";
        this.upRight = "Pictures/turkeyUpRight.png";
        this.up = "Pictures/turkeyUp.png";
    };

    move() {
        this.x += this.dx;
        this.y += this.dy;
        this.animate();
    };

    animate() {

        switch (this.counter) {
            case 0:
                this.sprites.src = this.left;
                this.width = 94;
                this.height = 72;
                this.dx = -this.velocity;
                this.dy = 0;
                break;
            case 1:
                this.sprites.src = this.upLeft;
                this.width = 82;
                this.height = 84;
                this.dx = -this.velocity;
                this.dy = -this.velocity;
                break;
            case 2:
                this.sprites.src = this.up;
                this.width = 70;
                this.height = 90;
                this.dy = -this.velocity;
                this.dx = 0;
                break;
            case 3:
                this.sprites.src = this.upRight;
                this.width = 82;
                this.height = 84;
                this.dx = this.velocity;
                this.dy = -this.velocity;
                break;
            case 4:
                this.sprites.src = this.right;
                this.width = 94;
                this.height = 72;
                this.dx = this.velocity;
                this.dy = 0;
                break;
            case 5:
                this.sprites.src = this.downRight;
                this.width = 80;
                this.height = 66;
                this.dx = this.velocity;
                this.dy = this.velocity;
                break;
            case 6:
                this.sprites.src = this.down;
                this.width = 72;
                this.height = 68;
                this.dy = this.velocity;
                this.dx = 0;
                break;
            case 7:
                this.sprites.src = this.downLeft;
                this.width = 80;
                this.height = 66;
                this.dx = -this.velocity;
                this.dy = this.velocity;
                break;
        }


        var self = this;

        let timerIdNew = setTimeout(function f() {
            ++self.frame;
            if (self.frame > 23) {
                self.frame = 0;
            }
            clearInterval(timerIdNew);
        }, 10);

    };

    checkBounds() {
        var x = this.x + this.dx;
        var y = this.y + this.dy;

        if (x < 0) {
            this.counter = 4;
        } else {
            if (x + this.width > game.width) {
                this.counter = 0;
            } else {
                if (y < 0) {
                    this.counter = 6;
                } else {
                    if (y + this.height > game.height) {
                        this.counter = 2;
                        this.y = this.y - 15;
                    }
                }
            }
        }
    }
}

class Cow {
    constructor(x, y) {
        this.width = 160;
        this.height = 110;
        this.x = x;
        this.y = y;
        this.counter = 0;
        this.velocity = 0.5;
        this.dx = 0.5;
        this.dy = 0;
        this.frame = 0;
        this.left = "Pictures/cowLeft.png";
        this.upLeft = "Pictures/cowUpLeft.png";
        this.downLeft = "Pictures/cowDownLeft.png";
        this.down = "Pictures/cowDown.png";
        this.downRight = "Pictures/cowDownRight.png";
        this.right = "Pictures/cowRight.png";
        this.upRight = "Pictures/cowUpRight.png";
        this.up = "Pictures/cowUp.png";
    };

    move() {
        this.x += this.dx;
        this.y += this.dy;
        this.animate();
    };

    animate() {

        switch (this.counter) {
            case 0:
                this.sprites.src = this.left;
                this.width = 160;
                this.height = 110;
                this.dx = -this.velocity;
                this.dy = 0;
                break;
            case 1:
                this.sprites.src = this.upLeft;
                this.width = 138;
                this.height = 128;
                this.dx = -this.velocity;
                this.dy = -this.velocity;
                break;
            case 2:
                this.sprites.src = this.up;
                this.width = 114;
                this.height = 132;
                this.dy = -this.velocity;
                this.dx = 0;
                break;
            case 3:
                this.sprites.src = this.upRight;
                this.width = 138;
                this.height = 128;
                this.dx = this.velocity;
                this.dy = -this.velocity;
                break;
            case 4:
                this.sprites.src = this.right;
                this.width = 160;
                this.height = 110;
                this.dx = this.velocity;
                this.dy = 0;
                break;
            case 5:
                this.sprites.src = this.downRight;
                this.width = 140;
                this.height = 100;
                this.dx = this.velocity;
                this.dy = this.velocity;
                break;
            case 6:
                this.sprites.src = this.down;
                this.width = 118;
                this.height = 110;
                this.dy = this.velocity;
                this.dx = 0;
                break;
            case 7:
                this.sprites.src = this.downLeft;
                this.width = 140;
                this.height = 100;
                this.dx = -this.velocity;
                this.dy = this.velocity;
                break;
        }


        let self = this;

        let timerIdNew = setTimeout(function f() {
            ++self.frame;
            if (self.frame > 23) {
                self.frame = 0;
            }
            clearInterval(timerIdNew);
        }, 10);

    };

    checkBounds() {
        var x = this.x + this.dx;
        var y = this.y + this.dy;

        if (x < 0) {
            this.counter = 4;
        } else {
            if (x + this.width > game.width) {
                this.counter = 0;
            } else {
                if (y < 0) {
                    this.counter = 6;
                } else {
                    if (y + this.height > game.height) {
                        this.counter = 2;
                        this.y = this.y - 20;
                    }
                }
            }
        }
    }
}



class Sheep{
    constructor(x, y) {
        this.width = 130;
        this.height = 78;
        this.x = x;
        this.y = y;
        this.counter = 0;
        this.velocity = 0.5;
        this.dx = 0.5;
        this.dy = 0;
        this.frame = 0;
        this.left = "Pictures/sheepLeft.png";
        this.upLeft = "Pictures/sheepUpLeft.png";
        this.downLeft = "Pictures/sheepDownLeft.png";
        this.down = "Pictures/sheepDown.png";
        this.downRight = "Pictures/sheepDownRight.png";
        this.right = "Pictures/sheepRight.png";
        this.upRight = "Pictures/sheepUpRight.png";
        this.up = "Pictures/sheepUp.png";
    };

    move() {
        this.x += this.dx;
        this.y += this.dy;
        this.animate();
    };

    animate() {

        switch (this.counter) {
            case 0:
                this.sprites.src = this.left;
                this.width = 130;
                this.height = 78;
                this.dx = -this.velocity;
                this.dy = 0;
                break;
            case 1:
                this.sprites.src = this.upLeft;
                this.width = 102;
                this.height = 88;
                this.dx = -this.velocity;
                this.dy = -this.velocity;
                break;
            case 2:
                this.sprites.src = this.up;
                this.width = 82;
                this.height = 96;
                this.dy = -this.velocity;
                this.dx = 0;
                break;
            case 3:
                this.sprites.src = this.upRight;
                this.width = 102;
                this.height = 88;
                this.dx = this.velocity;
                this.dy = -this.velocity;
                break;
            case 4:
                this.sprites.src = this.right;
                this.width = 130;
                this.height = 78;
                this.dx = this.velocity;
                this.dy = 0;
                break;
            case 5:
                this.sprites.src = this.downRight;
                this.width = 104;
                this.height = 90;
                this.dx = this.velocity;
                this.dy = this.velocity;
                break;
            case 6:
                this.sprites.src = this.down;
                this.width = 84;
                this.height = 102;
                this.dy = this.velocity;
                this.dx = 0;
                break;
            case 7:
                this.sprites.src = this.downLeft;
                this.width = 104;
                this.height = 90;
                this.dx = -this.velocity;
                this.dy = this.velocity;
                break;
        }


        let self = this;

        let timerIdNew = setTimeout(function f() {
            ++self.frame;
            if (self.frame > 23) {
                self.frame = 0;
            }
            clearInterval(timerIdNew);
        }, 10);

    };

    checkBounds() {
        var x = this.x + this.dx;
        var y = this.y + this.dy;

        if (x < 0) {
            this.counter = 4;
        } else {
            if (x + this.width > game.width) {
                this.counter = 0;
            } else {
                if (y < 0) {
                    this.counter = 6;
                } else {
                    if (y + this.height > game.height) {
                        this.counter = 2;
                    }
                }
            }
        }
    }
}


class Cat {
    constructor(x, y) {
        this.width = 86;
        this.height = 78;
        this.x = x;
        this.y = y;
        this.counter = 0;
        this.velocity = 0.5;
        this.dx = 0.5;
        this.dy = 0;
        this.frame = 0;
        this.left = "Pictures/catLeft.png";
        this.upLeft = "Pictures/catUpLeft.png";
        this.downLeft = "Pictures/catDownLeft.png";
        this.down = "Pictures/catDown.png";
        this.downRight = "Pictures/catDownRight.png";
        this.right = "Pictures/catRight.png";
        this.upRight = "Pictures/catUpRight.png";
        this.up = "Pictures/catUp.png";
    };

    move() {
        this.x += this.dx;
        this.y += this.dy;
        this.animate();
    };

    animate() {

        switch (this.counter) {
            case 0:
                this.sprites.src = this.left;
                this.width = 86;
                this.height = 78;
                this.dx = -this.velocity;
                this.dy = 0;
                break;
            case 1:
                this.sprites.src = this.upLeft;
                this.width = 86;
                this.height = 80;
                this.dx = -this.velocity;
                this.dy = -this.velocity;
                break;
            case 2:
                this.sprites.src = this.up;
                this.width = 64;
                this.height = 82;
                this.dy = -this.velocity;
                this.dx = 0;
                break;
            case 3:
                this.sprites.src = this.upRight;
                this.width = 86;
                this.height = 80;
                this.dx = this.velocity;
                this.dy = -this.velocity;
                break;
            case 4:
                this.sprites.src = this.right;
                this.width = 86;
                this.height = 78;
                this.dx = this.velocity;
                this.dy = 0;
                break;
            case 5:
                this.sprites.src = this.downRight;
                this.width = 82;
                this.height = 86;
                this.dx = this.velocity;
                this.dy = this.velocity;
                break;
            case 6:
                this.sprites.src = this.down;
                this.width = 64;
                this.height = 92;
                this.dy = this.velocity;
                this.dx = 0;
                break;
            case 7:
                this.sprites.src = this.downLeft;
                this.width = 82;
                this.height = 86;
                this.dx = -this.velocity;
                this.dy = this.velocity;
                break;
        }


        let self = this;

        let timerIdNew = setTimeout(function f() {
            ++self.frame;
            if (self.frame > 23) {
                self.frame = 0;
            }
            clearInterval(timerIdNew);
        }, 10);

    };

    checkBounds() {
        var x = this.x + this.dx;
        var y = this.y + this.dy;

        if (x < 0) {
            this.counter = 4;
        } else {
            if (x + this.width > game.width) {
                this.counter = 0;
            } else {
                if (y < 0) {
                    this.counter = 6;
                } else {
                    if (y + this.height > game.height) {
                        this.counter = 2;
                    }
                }
            }
        }
    }
}


class Dog {
    constructor(x, y) {
        this.width = 104;
        this.height = 92;
        this.x = x;
        this.y = y;
        this.counter = 0;
        this.velocity = 0.5;
        this.dx = 0.5;
        this.dy = 0;
        this.frame = 0;
        this.left = "Pictures/dogLeft.png";
        this.upLeft = "Pictures/dogUpLeft.png";
        this.downLeft = "Pictures/dogDownLeft.png";
        this.down = "Pictures/dogDown.png";
        this.downRight = "Pictures/dogDownRight.png";
        this.right = "Pictures/dogRight.png";
        this.upRight = "Pictures/dogUpRight.png";
        this.up = "Pictures/dogUp.png";
    };

    move() {
        this.x += this.dx;
        this.y += this.dy;
        this.animate();
    };

    animate() {

        switch (this.counter) {
            case 0:
                this.sprites.src = this.left;
                this.width = 104;
                this.height = 92;
                this.dx = -this.velocity;
                this.dy = 0;
                break;
            case 1:
                this.sprites.src = this.upLeft;
                this.width = 90;
                this.height = 100;
                this.dx = -this.velocity;
                this.dy = -this.velocity;
                break;
            case 2:
                this.sprites.src = this.up;
                this.width = 70;
                this.height = 102;
                this.dy = -this.velocity;
                this.dx = 0;
                break;
            case 3:
                this.sprites.src = this.upRight;
                this.width = 90;
                this.height = 100;
                this.dx = this.velocity;
                this.dy = -this.velocity;
                break;
            case 4:
                this.sprites.src = this.right;
                this.width = 104;
                this.height = 92;
                this.dx = this.velocity;
                this.dy = 0;
                break;
            case 5:
                this.sprites.src = this.downRight;
                this.width = 90;
                this.height = 88;
                this.dx = this.velocity;
                this.dy = this.velocity;
                break;
            case 6:
                this.sprites.src = this.down;
                this.width = 74;
                this.height = 88;
                this.dy = this.velocity;
                this.dx = 0;
                break;
            case 7:
                this.sprites.src = this.downLeft;
                this.width = 90;
                this.height = 88;
                this.dx = -this.velocity;
                this.dy = this.velocity;
                break;
        }


        let self = this;

        let timerIdNew = setTimeout(function f() {
            ++self.frame;
            if (self.frame > 23) {
                self.frame = 0;
            }
            clearInterval(timerIdNew);
        }, 10);

    };

    checkBounds() {
        var x = this.x + this.dx;
        var y = this.y + this.dy;

        if (x < 0) {
            this.counter = 4;
        } else {
            if (x + this.width > game.width) {
                this.counter = 0;
            } else {
                if (y < 0) {
                    this.counter = 6;
                } else {
                    if (y + this.height > game.height) {
                        this.counter = 2;
                    }
                }
            }
        }
    }
}




// добавление индюшек
var turkeyNew = document.getElementById('turkey');

turkeyNew.addEventListener('click', () => {
    let x = Math.floor(Math.random() * 900);
    let y = Math.floor(Math.random() * 400);
    let turkey = new Turkey(x, y);
    game.isRunning = false;
    game.turkeys.push(turkey);
    let number = game.turkeys.length-1;
    var timerId = setInterval(function () {
        game.turkeys[number].counter = Math.floor(Math.random() * 8);
    }, 4000);

    let promise = new Promise (() => {
         game.turkeys[game.turkeys.length-1].sprites = new Image();

    }).then(
        game.isRunning = true
    )


});


//Добавление коров

var cowNew = document.getElementById('cow');

cowNew.addEventListener('click', () => {
    let x = Math.floor(Math.random() * 900);
    let y = Math.floor(Math.random() * 400);
    let cow = new Cow(x, y);
    game.isRunning = false;
    game.cows.push(cow);
    let number = game.cows.length-1;
    var timerId = setInterval(function () {
        game.cows[number].counter = Math.floor(Math.random() * 8);
    }, 4000);

    let promise = new Promise (() => {
        game.cows[game.cows.length-1].sprites = new Image();

    }).then(
        game.isRunning = true
    )


});

// Добавление овец

var sheepNew = document.getElementById('sheep');

sheepNew.addEventListener('click', () => {
    let x = Math.floor(Math.random() * 900);
    let y = Math.floor(Math.random() * 400);
    let sheep = new Sheep(x, y);
    game.isRunning = false;
    game.sheep.push(sheep);
    let number = game.sheep.length-1;
    var timerId = setInterval(function () {
        game.sheep[number].counter = Math.floor(Math.random() * 8);
    }, 4000);

    let promise = new Promise (() => {
        game.sheep[game.sheep.length-1].sprites = new Image();

    }).then(
        game.isRunning = true
    )
});

// Добавление котиков

var catNew = document.getElementById('cat');

catNew.addEventListener('click', () => {
    let x = Math.floor(Math.random() * 900);
    let y = Math.floor(Math.random() * 400);
    let cat = new Cat(x, y);
    game.isRunning = false;
    game.cats.push(cat);
    let number = game.cats.length-1;
    var timerId = setInterval(function () {
        game.cats[number].counter = Math.floor(Math.random() * 8);
    }, 4000);

    let promise = new Promise (() => {
        game.cats[game.cats.length-1].sprites = new Image();
    }).then(
        game.isRunning = true
    )


});

// Добавление собак

var dogNew = document.getElementById('dog');

dogNew.addEventListener('click', () => {
    let x = Math.floor(Math.random() * 900);
    let y = Math.floor(Math.random() * 400);
    let dog = new Dog(x, y);
    game.isRunning = false;
    game.dogs.push(dog);
    let number = game.dogs.length-1;
    var timerId = setInterval(function () {
        game.dogs[number].counter = Math.floor(Math.random() * 8);
    }, 4000);

    let promise = new Promise (() => {
        game.dogs[game.dogs.length-1].sprites = new Image();

    }).then(
        game.isRunning = true
    )


});

// Building handler

let place = {
    place1: [1, '128px', '114px', '144px', '132px', '164px', '150px', '186px', '158px'],
    place2: [1, '134px', '142px', '158px', '150px', '158px', '166px', '166px', '170px',],
    place3: [1, '184px', '172px', '158px', '148px', '170px', '168px', '176px', '170px',],
    place4: [1, '136px', '112px', '146px', '130px', '148px', '136px', '158px', '148px',],
    place5: [1, '130px', '106px', '138px', '150px', '178px', '146px', '176px', '182px',],
    place6: [1, '166px', '116px', '148px', '132px', '164px', '126px', '148px', '156px',],

};

function buildHandler (place, buildingMain, href1, href2, href3, href4, width1, height1, width2, height2,
                       width3, height3, width4, height4) {
    if(place === 1) {
        buildingMain.style.background = href1;
        buildingMain.style.width = width1;
        buildingMain.style.height = height1;
    }
    if(place === 2) {
        buildingMain.style.background = href2;
        buildingMain.style.width = width2;
        buildingMain.style.height = height2;
    }
    if(place === 3) {
        buildingMain.style.background = href3;
        buildingMain.style.width = width3;
        buildingMain.style.height = height3;
    }
    if(place === 4) {
        buildingMain.style.background = href4;
        buildingMain.style.width = width4;
        buildingMain.style.height = height4;
    }
};

// eggdryer handler
let buyEggDryer = document.getElementById('buyEggDryer');
let eggDryer = document.getElementById('EggDryer');
buyEggDryer.addEventListener('click', () => {
    if (gold > place.place1[0] * 150 && place.place1[0] !== 5) {
        console.log('1');
        buildHandler(place.place1[0], eggDryer, 'Pictures/eggDryer1.png', 'Pictures/eggDryer2.png', 'Pictures/eggDryer3.png',
            'Pictures/eggDryer4.png', place.place1[1], place.place1[2], place.place1[3], place.place1[4], place.place1[5],
            place.place1[6], place.place1[7], place.place1[8]);
        let btnText = document.getElementById('buyEggDryer');
        btnText.innerText = 150 * place.place1[0] +150;
        place.place1[0]++;
        gold = gold - place.place1[0] * 150;
        console.log(gold);
    }
});

// pancakesMaker
let buyPancakesMaker = document.getElementById('buyPancakesMaker');
let pancakesMaker = document.getElementById('pancakesMaker');
buyPancakesMaker.addEventListener('click', () => {
    if (gold > place.place2[0] * 150 && place.place2[0] !== 5) {
        console.log('2');
        buildHandler(place.place2[0], pancakesMaker, 'Pictures/wheat1.png', 'Pictures/wheat2.png', 'Pictures/wheat3.png',
            'Pictures/wheat4.png', place.place2[1], place.place2[2], place.place2[3], place.place2[4], place.place2[5],
            place.place2[6], place.place2[7], place.place2[8]);
        place.place2[0]++;
        gold = gold - place.place2[0] * 150;
        console.log(gold);
    }
});

//cakeMaker
let buyCakeMaker = document.getElementById('buyCakeMaker');
let cakeMaker = document.getElementById('cakeMaker');
buyCakeMaker.addEventListener('click', () => {
    if (gold > place.place3[0] * 150 && place.place3[0] !== 5) {
        console.log('3');
        buildHandler(place.place3[0], cakeMaker, 'Pictures/cakeMaker1.png', 'Pictures/cakeMaker2.png', 'Pictures/cakeMaker3.png',
            'Pictures/cakeMaker4.png', place.place3[1], place.place3[2], place.place3[3], place.place3[4], place.place3[5],
            place.place3[6], place.place3[7], place.place3[8]);
        place.place3[0]++;
        gold = gold - place.place3[0] * 150;
        console.log(gold);
    }
});

//milkMaker

let buyMilkMaker = document.getElementById('buyMilkMaker');
let milkMaker = document.getElementById('milkMaker');
buyMilkMaker.addEventListener('click', () => {
    if (gold > place.place4[0] * 150 && place.place4[0] !== 5) {
        console.log('4');
        buildHandler(place.place4[0], milkMaker, 'Pictures/milkMaker1.png', 'Pictures/milkMaker2.png',
            'Pictures/milkMaker3.png', 'Pictures/milkMaker4.png', place.place4[1], place.place4[2], place.place4[3],
            place.place4[4], place.place4[5], place.place4[6], place.place4[7], place.place4[8]);
        place.place4[0]++;
        gold = gold - place.place4[0] * 150;
        console.log(gold);
    }
});

//stringMaker

let buyStringMaker = document.getElementById('buyStringMaker');
let stringMaker = document.getElementById('stringMaker');
buyStringMaker.addEventListener('click', () => {
    if (gold > place.place5[0] * 150 && place.place5[0] !== 5) {
        console.log('5');
        buildHandler(place.place5[0], stringMaker, 'Pictures/stringMaker1.png', 'Pictures/stringMaker2.png',
            'Pictures/stringMaker3.png', 'Pictures/stringMaker4.png', place.place5[1], place.place5[2], place.place5[3],
            place.place5[4], place.place5[5], place.place5[6], place.place5[7], place.place5[8]);
        place.place5[0]++;
        gold = gold - place.place5[0] * 150;
        console.log(gold);
    }
});

//canvasMaker

let buyCanvasMaker = document.getElementById('buyCanvasMaker');
let canvasMaker = document.getElementById('canvasMaker');
buyCanvasMaker.addEventListener('click', () => {
    if (gold > place.place6[0] * 150 && place.place6[0] !== 5) {
        console.log('6');
        buildHandler(place.place6[0], canvasMaker, 'Pictures/canvasMaker1.png', 'Pictures/canvasMaker2.png',
            'Pictures/canvasMaker3.png', 'Pictures/canvasMaker4.png', place.place6[1], place.place6[2], place.place6[3],
            place.place6[4], place.place6[5], place.place6[6], place.place6[7], place.place6[8]);
        place.place6[0]++;
        gold = gold - place.place6[0] * 150;
        console.log(gold);
    }
});
