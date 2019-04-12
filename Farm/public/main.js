var gold = 30000;
var goods = {
    eggs: 30,
    wheat: 10,
    pancakes: 10,
    cakes: 10,
    wool: 30,
    strings: 30,
    leather: 30,
    milk: 30,
    kefir: 10
};
var stockPileClicker = false;

var sendGoods = {
    eggs: 0,
    wheat: 0,
    pancakes: 0,
    cakes: 0,
    wool: 0,
    strings: 0,
    leather: 0,
    milk: 0,
    kefir: 0,
};

let waterGround = 0;


const goldGoal = document.getElementById("goldGoal");
const kefirGoal = document.getElementById("kefirGoal");
const canvasGoal = document.getElementById("canvasGoal");
const cakesGoal = document.getElementById("cakesGoal");


let eggsCounter = 0;
let wheatCounter = 0;
let pancakesCounter = 0;
let woolCounter = 0;
let stringsCounter = 0;
let milkCounter = 0;


var checkGoldGoal = false;
var checkCanvasGoal = false;
var checkKefirGoal = false;
var checkCakesGoal = false;
let goldCheck = document.getElementById('moneyAmount');

showGold();

function gameOver() {
    alert('Congratulations you have completed this game');
    game.isRunning = false;
    canvasRoad.isRunning = false;
}

function showGold() {
    goldCheck.innerText = gold;
    console.log('gold = ', gold)
}

var game = {
    width: 856,
    height: 428,
    grass: [],
    ctx: undefined,
    isRunning: true,
    eggs: [],
    wheat: [],
    pancakes: [],
    cakes: [],
    wool: [],
    strings: [],
    leather: [],
    milk: [],
    kefir: [],
    turkeys: [],
    cats: [],
    dogs: [],
    sheep: [],
    bears: [],
    cows: [],
    sprites: {
        cats: [],
        dogs: [],
        sheep: [],
        bears: [],
        turkeys: [],
        cows: []
    },
    init: function () {
        var canvas = document.getElementById("myCanvas");
        this.ctx = canvas.getContext("2d");

    },

    load: function () {
        this.grass.forEach(function (element) {
            element.sprites = new Image();
            element.sprites.src = "Pictures/grass.png";
        }, this);
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
        for (let i = 0; i < this.wheat.length; i++) {
            this.wheat[i].sprites = new Image();
            this.wheat[i].sprites.src = "Pictures/eggWheat.png";
        }
        for (let i = 0; i < this.eggs.length; i++) {
            this.eggs[i].sprites = new Image();
            this.eggs[i].sprites.src = "Pictures/egg.png";
        }
        for (let i = 0; i < this.pancakes.length; i++) {
            this.pancakes[i].sprites = new Image();
            this.pancakes[i].sprites.src = "Pictures/pancakes.png";
        }
        for (let i = 0; i < this.cakes.length; i++) {
            this.cakes[i].sprites = new Image();
            this.cakes[i].sprites.src = "Pictures/cake.png";
        }
        for (let i = 0; i < this.wool.length; i++) {
            this.wool[i].sprites = new Image();
            this.wool[i].sprites.src = "Pictures/wool.png";
        }
        for (let i = 0; i < this.strings.length; i++) {
            this.strings[i].sprites = new Image();
            this.strings[i].sprites.src = "Pictures/string.png";
        }
        for (let i = 0; i < this.leather.length; i++) {
            this.leather[i].sprites = new Image();
            this.leather[i].sprites.src = "Pictures/canvas.png";
        }
        for (let i = 0; i < this.milk.length; i++) {
            this.milk[i].sprites = new Image();
            this.milk[i].sprites.src = "Pictures/milk.png";
        }
        for (let i = 0; i < this.kefir.length; i++) {
            this.kefir[i].sprites = new Image();
            this.kefir[i].sprites.src = "Pictures/kefir.png";
        }

    },
    start: function () {
        this.init();
        this.load();
        this.run();
    },

    click: function (x, y) {
        if (!waterGround) {
            this.wheat.forEach(function (element, i) {
                if (x >= element.x && x <= element.x + element.width && y >= element.y &&
                    y <= element.y + element.height) {
                    this.wheat.splice(i, 1);
                    goods.wheat = goods.wheat + 1;
                    console.log('goods.wheat =', goods.wheat)
                }
            }, this);

            this.eggs.forEach(function (element, i) {
                if (x >= element.x && x <= element.x + element.width && y >= element.y &&
                    y <= element.y + element.height) {
                    this.eggs.splice(i, 1);
                    goods.eggs = goods.eggs + 1;
                    console.log('goods.eggs =', goods.eggs)
                }
            }, this);

            this.cakes.forEach(function (element, i) {
                if (x >= element.x && x <= element.x + element.width && y >= element.y &&
                    y <= element.y + element.height) {
                    this.cakes.splice(i, 1);
                    goods.cakes = goods.cakes + 1;
                    console.log('goods.cakes =', goods.cakes)
                }
            }, this);

            this.leather.forEach(function (element, i) {
                if (x >= element.x && x <= element.x + element.width && y >= element.y &&
                    y <= element.y + element.height) {
                    this.leather.splice(i, 1);
                    goods.leather = goods.leather + 1;
                    console.log('goods.leather =', goods.leather)
                }
            }, this);

            this.wool.forEach(function (element, i) {
                if (x >= element.x && x <= element.x + element.width && y >= element.y &&
                    y <= element.y + element.height) {
                    this.wool.splice(i, 1);
                    goods.wool = goods.wool + 1;
                    console.log('goods.wool =', goods.wool)
                }
            }, this);

            this.strings.forEach(function (element, i) {
                if (x >= element.x && x <= element.x + element.width && y >= element.y &&
                    y <= element.y + element.height) {
                    this.strings.splice(i, 1);
                    goods.strings = goods.strings + 1;
                    console.log('goods.strings =', goods.strings)
                }
            }, this);

            this.pancakes.forEach(function (element, i) {
                if (x >= element.x && x <= element.x + element.width && y >= element.y &&
                    y <= element.y + element.height) {
                    this.pancakes.splice(i, 1);
                    goods.pancakes = goods.pancakes + 1;
                    console.log('goods.pancakes =', goods.pancakes)
                }
            }, this);

            this.milk.forEach(function (element, i) {
                if (x >= element.x && x <= element.x + element.width && y >= element.y &&
                    y <= element.y + element.height) {
                    this.milk.splice(i, 1);
                    goods.milk = goods.milk + 1;
                    console.log('goods.milk =', goods.milk)
                }
            }, this);

            this.kefir.forEach(function (element, i) {
                if (x >= element.x && x <= element.x + element.width && y >= element.y &&
                    y <= element.y + element.height) {
                    this.kefir.splice(i, 1);
                    goods.kefir = goods.kefir + 1;
                    console.log('goods.kefir =', goods.kefir)
                }
            }, this);

            checkCakes();
            checkLeather();
            checkKefir();
            checkGold();

        } else {
            let grassNew = {
                x: x,
                y: y,
                width: 412,
                height: 262
            };
            game.isRunning = false;
            game.grass.push(grassNew);
            waterGround = waterGround - 1;
            let promise = new Promise(() => {
                game.grass[game.grass.length - 1].sprites = new Image();
                game.grass[game.grass.length - 1].sprites.src = "Pictures/grass.png";
            }).then(
                game.isRunning = true
            );

        }
    },


    render: function () {
        this.ctx.clearRect(0, 0, this.width, this.height);

        this.grass.forEach(function (element) {
            this.ctx.drawImage(element.sprites, 0, 0, element.width, element.height, element.x - 80, element.y - 80,
                element.width, element.height)
        }, this);

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

        this.wheat.forEach(function (element) {
            this.ctx.drawImage(element.sprites, element.x, element.y)
        }, this);

        this.eggs.forEach(function (element) {
            this.ctx.drawImage(element.sprites, element.x, element.y)
        }, this);

        this.pancakes.forEach(function (element) {
            this.ctx.drawImage(element.sprites, element.x, element.y)
        }, this);

        this.cakes.forEach(function (element) {
            this.ctx.drawImage(element.sprites, element.x, element.y)
        }, this);

        this.wool.forEach(function (element) {
            this.ctx.drawImage(element.sprites, element.x, element.y)
        }, this);

        this.strings.forEach(function (element) {
            this.ctx.drawImage(element.sprites, element.x, element.y)
        }, this);

        this.leather.forEach(function (element) {
            this.ctx.drawImage(element.sprites, element.x, element.y)
        }, this);

        this.milk.forEach(function (element) {
            this.ctx.drawImage(element.sprites, element.x, element.y)
        }, this);

        this.kefir.forEach(function (element) {
            this.ctx.drawImage(element.sprites, element.x, element.y)
        }, this);


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

        if (checkGoldGoal && checkCanvasGoal && checkKefirGoal && checkCakesGoal) {
            gameOver();
        }

        if (game.isRunning) {
            window.requestAnimationFrame(function () {
                game.run();
            });
        }


    },


};


game.wheat[0] = {
    x: 200,
    y: 200,
    width: 48,
    height: 48,
};

game.eggs[0] = {
    x: 500,
    y: 200,
    width: 48,
    height: 48,
};

game.pancakes[0] = {
    x: 100,
    y: 400,
    width: 48,
    height: 48,
};

game.cakes[0] = {
    x: 220,
    y: 20,
    width: 48,
    height: 48,
};

game.wool[0] = {
    x: 150,
    y: 430,
    width: 48,
    height: 48,
};

game.strings[0] = {
    x: 340,
    y: 340,
    width: 48,
    height: 48,
};

game.leather[0] = {
    x: 600,
    y: 200,
    width: 48,
    height: 48,
};

game.milk[0] = {
    x: 500,
    y: 100,
    width: 48,
    height: 48,
};

game.kefir[0] = {
    x: 250,
    y: 250,
    width: 48,
    height: 48,
};


var myCanvas = document.getElementById('myCanvas');

myCanvas.addEventListener('click', function (event) {
    var rect = myCanvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    console.log(x, y);
    game.click(x, y);
    checkCakes();
    checkLeather();
    checkKefir();
    checkGold();


}, false);

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

    eggs() {
        game.isRunning = false;
        let egg = {
            x: this.x,
            y: this.y,
            width: 42,
            height: 42
        };
        game.eggs.push(egg);
        let promise = new Promise(() => {
            console.log('stage1');
            game.eggs[game.eggs.length - 1].sprites = new Image();
            game.eggs[game.eggs.length - 1].sprites.src = 'Pictures/egg.png';
        }).then(
            game.isRunning = true
        );
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

    milk() {
        game.isRunning = false;
        let milk = {
            x: this.x,
            y: this.y,
            width: 42,
            height: 42
        };
        game.milk.push(milk);
        let promise = new Promise(() => {
            console.log('stage1');
            game.milk[game.milk.length - 1].sprites = new Image();
            game.milk[game.milk.length - 1].sprites.src = 'Pictures/milk.png';
        }).then(
            game.isRunning = true
        );
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


class Sheep {
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

    wool() {
        game.isRunning = false;
        let wool = {
            x: this.x,
            y: this.y,
            width: 42,
            height: 42
        };
        game.wool.push(wool);
        let promise = new Promise(() => {
            console.log('stage1');
            game.wool[game.wool.length - 1].sprites = new Image();
            game.wool[game.wool.length - 1].sprites.src = 'Pictures/wool.png';
        }).then(
            game.isRunning = true
        );
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
    if (gold >= 100) {
        let x = Math.floor(Math.random() * 800);
        let y = Math.floor(Math.random() * 400);
        let turkey = new Turkey(x, y);
        game.isRunning = false;
        game.turkeys.push(turkey);
        let number = game.turkeys.length - 1;
        var timerId = setTimeout(function tick() {

            game.turkeys[number].counter = Math.floor(Math.random() * 8);

            timerId = setTimeout(tick, 4000)
        }, 4000);

        var timerIdNew = setTimeout(function tick() {

            game.turkeys[number].eggs();

            timerIdNew = setTimeout(tick, 15000)
        }, 15000);

        let promise = new Promise(() => {
            game.turkeys[game.turkeys.length - 1].sprites = new Image();

        }).then(
            game.isRunning = true
        );
        gold = gold - 100;
        showGold(gold);
        checkGold();
        console.log(gold);
    }


});


//Добавление коров

var cowNew = document.getElementById('cow');

cowNew.addEventListener('click', () => {
    if (gold >= 10000) {
        let x = Math.floor(Math.random() * 800);
        let y = Math.floor(Math.random() * 400);
        let cow = new Cow(x, y);
        game.isRunning = false;
        game.cows.push(cow);
        let number = game.cows.length - 1;
        var timerId = setInterval(function () {
            game.cows[number].counter = Math.floor(Math.random() * 8);
        }, 4000);

        var timerIdNew = setTimeout(function tick() {

            game.cows[number].milk();

            timerIdNew = setTimeout(tick, 20000)
        }, 20000);

        let promise = new Promise(() => {
            game.cows[game.cows.length - 1].sprites = new Image();

        }).then(
            game.isRunning = true
        );
        gold = gold - 10000;
        showGold();
        checkGold();
        console.log(gold);
    }


});

// Добавление овец

var sheepNew = document.getElementById('sheep');

sheepNew.addEventListener('click', () => {
    if (gold >= 1000) {
        let x = Math.floor(Math.random() * 800);
        let y = Math.floor(Math.random() * 400);
        let sheep = new Sheep(x, y);
        game.isRunning = false;
        game.sheep.push(sheep);
        let number = game.sheep.length - 1;
        var timerId = setInterval(function () {
            game.sheep[number].counter = Math.floor(Math.random() * 8);
        }, 4000);

        var timerIdNew = setTimeout(function tick() {

            game.sheep[number].wool();

            timerIdNew = setTimeout(tick, 18000)
        }, 18000);

        let promise = new Promise(() => {
            game.sheep[game.sheep.length - 1].sprites = new Image();

        }).then(
            game.isRunning = true
        );
        gold = gold - 1000;
        showGold();
        checkGold();
        console.log(gold);
    }

});

// Добавление котиков

var catNew = document.getElementById('cat');

catNew.addEventListener('click', () => {
    if (gold >= 2500) {
        let x = Math.floor(Math.random() * 800);
        let y = Math.floor(Math.random() * 400);
        let cat = new Cat(x, y);
        game.isRunning = false;
        game.cats.push(cat);
        let number = game.cats.length - 1;
        var timerId = setInterval(function () {
            game.cats[number].counter = Math.floor(Math.random() * 8);
        }, 4000);

        let promise = new Promise(() => {
            game.cats[game.cats.length - 1].sprites = new Image();
        }).then(
            game.isRunning = true
        );
        gold = gold - 2500;
        showGold();
        checkGold();
        console.log(gold);
    }


});

// Добавление собак

var dogNew = document.getElementById('dog');

dogNew.addEventListener('click', () => {
    if (gold >= 2600) {
        let x = Math.floor(Math.random() * 800);
        let y = Math.floor(Math.random() * 400);
        let dog = new Dog(x, y);
        game.isRunning = false;
        game.dogs.push(dog);
        let number = game.dogs.length - 1;
        var timerId = setInterval(function () {
            game.dogs[number].counter = Math.floor(Math.random() * 8);
        }, 4000);

        let promise = new Promise(() => {
            game.dogs[game.dogs.length - 1].sprites = new Image();

        }).then(
            game.isRunning = true
        );
        gold = gold - 2600;
        showGold();
        checkGold();
        console.log(gold);
    }


});

// Building handler

let place = {
    place1: [1, '128', '114', '144', '132', '164', '150', '186', '158', true],
    place2: [1, '134', '142', '158', '150', '158', '166', '166', '170', true],
    place3: [1, '184', '172', '158', '148', '170', '168', '176', '170', true],
    place4: [1, '136', '112', '146', '130', '148', '136', '158', '148', true],
    place5: [1, '130', '106', '138', '150', '178', '146', '176', '182', true],
    place6: [1, '166', '116', '148', '132', '164', '126', '148', '156', true],

};

function buildHandler(place, buildingMain, href1, href2, href3, href4, width1, height1, width2, height2,
                      width3, height3, width4, height4) {
    if (place === 1) {
        buildingMain.style.background = 'url("' + href1 + '")';
        buildingMain.style.width = width1 + 'px';
        buildingMain.style.height = height1 + 'px';
    }
    if (place === 2) {
        buildingMain.style.background = 'url("' + href2 + '")';
        buildingMain.style.width = width2 + 'px';
        buildingMain.style.height = height2 + 'px';
    }
    if (place === 3) {
        buildingMain.style.background = 'url("' + href3 + '")';
        buildingMain.style.width = width3 + 'px';
        buildingMain.style.height = height3 + 'px';
    }
    if (place === 4) {
        buildingMain.style.background = 'url("' + href4 + '")';
        buildingMain.style.width = width4 + 'px';
        buildingMain.style.height = height4 + 'px';
    }
};

// eggdryer handler

let buyEggDryer = document.getElementById('buyEggDryer');
let eggDryer = document.getElementById('EggDryer');
buyEggDryer.addEventListener('click', () => {
    if (place.place1[9]) {
        if (gold > place.place1[0] * 150 && place.place1[0] !== 5) {
            console.log('1');
            buildHandler(place.place1[0], eggDryer, 'Pictures/eggDryer1.png', 'Pictures/eggDryer2.png', 'Pictures/eggDryer3.png',
                'Pictures/eggDryer4.png', place.place1[1], place.place1[2], place.place1[3], place.place1[4], place.place1[5],
                place.place1[6], place.place1[7], place.place1[8]);
            let btnText = document.getElementById('buyEggDryer');
            btnText.innerText = 150 * place.place1[0] + 150;
            place.place1[0]++;
            if (place.place1[0] > 4) {
                btnText.innerText = '';
            }
            gold = gold - place.place1[0] * 150;
            showGold();
            console.log(gold);
        }
    }
});
eggDryer.addEventListener('click', () => {
    if (place.place1[0] === 2 && goods.eggs >= 2 && place.place1[9]) {

        place.place1[9] = false;
        goods.eggs = goods.eggs - 2;
        eggsCounter = 1;
        buidingAnimation(eggDryer, place.place1[1], 1)

    } else {

        if (place.place1[0] === 3 && place.place1[9] && goods.eggs >= 2) {
            if (goods.eggs >= 4) {
                goods.eggs = goods.eggs - 4;
                eggsCounter = 2;
            } else {
                goods.eggs = goods.eggs - 2;
                eggsCounter = 2;
            }
            place.place1[9] = false;
            buidingAnimation(eggDryer, place.place1[3], 1);

        } else {

            if (place.place1[0] === 4 && place.place1[9] && goods.eggs >= 2) {

                if (goods.eggs >= 6) {
                    goods.eggs = goods.eggs - 6;
                    eggsCounter = 3;
                } else {
                    if (goods.eggs >= 4) {
                        goods.eggs = goods.eggs - 4;
                        eggsCounter = 2;
                    } else {
                        goods.eggs = goods.eggs - 2;
                        eggsCounter = 1;
                    }
                }

                place.place1[9] = false;
                buidingAnimation(eggDryer, place.place1[5], 1);
            } else {
                if (place.place1[0] === 5 && place.place1[9] && goods.eggs >= 2) {
                    if (goods.eggs >= 8) {
                        goods.eggs = goods.eggs - 8;
                        eggsCounter = 4;
                    } else {
                        if (goods.eggs >= 6) {
                            goods.eggs = goods.eggs - 6;
                            eggsCounter = 3;
                        } else {
                            if (goods.eggs >= 4) {
                                goods.eggs = goods.eggs - 4;
                                eggsCounter = 2;
                            } else {
                                goods.eggs = goods.eggs - 2;
                                eggsCounter = 1;
                            }
                        }
                    }
                    place.place1[9] = false;
                    buidingAnimation(eggDryer, place.place1[7], 1);
                }
            }
        }
    }
});

// pancakesMaker
let buyPancakesMaker = document.getElementById('buyPancakesMaker');
let pancakesMaker = document.getElementById('pancakesMaker');
buyPancakesMaker.addEventListener('click', () => {
    if (place.place2[9]) {
        if (gold > place.place2[0] * 150 && place.place2[0] !== 5) {
            console.log('2');
            buildHandler(place.place2[0], pancakesMaker, 'Pictures/wheat1.png', 'Pictures/wheat2.png', 'Pictures/wheat3.png',
                'Pictures/wheat4.png', place.place2[1], place.place2[2], place.place2[3], place.place2[4], place.place2[5],
                place.place2[6], place.place2[7], place.place2[8]);
            let btnText = document.getElementById('buyPancakesMaker');
            btnText.innerText = 150 * place.place2[0] + 150;
            place.place2[0]++;
            if (place.place2[0] > 4) {
                btnText.innerText = '';
            }
            gold = gold - place.place2[0] * 150;
            showGold();
            console.log(gold);
        }
    }
});
pancakesMaker.addEventListener('click', () => {
    if (place.place2[0] === 2 && goods.wheat >= 2 && place.place2[9]) {
        wheatCounter = 1;
        goods.wheat = goods.wheat - 2;
        place.place2[9] = false;
        buidingAnimation(pancakesMaker, place.place2[1], 2)
    } else {
        if (place.place2[0] === 3 && place.place2[9] && goods.wheat >= 2) {

            if (goods.wheat >= 4) {
                wheatCounter = 2;
                goods.wheat = goods.wheat - 4;
            } else {
                goods.wheat = goods.wheat - 2;
                wheatCounter = 1;
            }

            place.place2[9] = false;
            buidingAnimation(pancakesMaker, place.place2[3], 2)
        } else {
            if (place.place2[0] === 4 && place.place2[9] && goods.wheat >= 2) {

                if (goods.wheat >= 6) {
                    wheatCounter = 3;
                    goods.wheat = goods.wheat - 6;
                } else {
                    if (goods.wheat >= 4) {
                        goods.wheat = goods.wheat - 4;
                        wheatCounter = 2;
                    } else {
                        wheatCounter = 1;
                        goods.wheat = goods.wheat - 2;
                    }
                }

                place.place2[9] = false;
                buidingAnimation(pancakesMaker, place.place2[5], 2)
            } else {
                if (place.place2[0] === 5 && place.place2[9] && goods.wheat >= 2) {

                    if (goods.wheat >= 8) {
                        wheatCounter = 4;
                        goods.wheat = goods.wheat - 8;
                    } else {
                        if (goods.wheat >= 6) {
                            wheatCounter = 3;
                            goods.wheat = goods.wheat - 6;
                        } else {
                            if (goods.wheat >= 4) {
                                wheatCounter = 2;
                                goods.wheat = goods.wheat - 4;
                            } else {
                                wheatCounter = 1;
                                goods.wheat = goods.wheat - 2;
                            }
                        }
                    }

                    place.place2[9] = false;
                    buidingAnimation(pancakesMaker, place.place2[7], 2)
                }
            }
        }
    }
});

//cakeMaker
let buyCakeMaker = document.getElementById('buyCakeMaker');
let cakeMaker = document.getElementById('cakeMaker');
buyCakeMaker.addEventListener('click', () => {
    if (place.place3[9]) {
        if (gold > place.place3[0] * 150 && place.place3[0] !== 5) {
            console.log('3');
            buildHandler(place.place3[0], cakeMaker, 'Pictures/cakeMaker1.png', 'Pictures/cakeMaker2.png', 'Pictures/cakeMaker3.png',
                'Pictures/cakeMaker4.png', place.place3[1], place.place3[2], place.place3[3], place.place3[4], place.place3[5],
                place.place3[6], place.place3[7], place.place3[8]);
            let btnText = document.getElementById('buyCakeMaker');
            btnText.innerText = 150 * place.place3[0] + 150;
            place.place3[0]++;
            if (place.place3[0] > 4) {
                btnText.innerText = '';
            }
            gold = gold - place.place3[0] * 150;
            showGold();
            console.log(gold);
        }
    }
});
cakeMaker.addEventListener('click', () => {
    if (place.place3[0] === 2 && place.place3[9] && goods.pancakes >= 2 && goods.wheat >= 1) {
        pancakesCounter = 1;
        goods.wheat = goods.wheat - 1;
        goods.pancakes = goods.pancakes - 2;
        place.place3[9] = false;
        buidingAnimation(cakeMaker, place.place3[1], 3)
    } else {
        if (place.place3[0] === 3 && place.place3[9] && goods.pancakes >= 2 && goods.wheat >= 1) {
            if (goods.pancakes >= 4 && goods.wheat >= 2) {
                pancakesCounter = 2;
                goods.wheat = goods.wheat - 2;
                goods.pancakes = goods.pancakes - 4;
            } else {
                pancakesCounter = 1;
                goods.wheat = goods.wheat - 1;
                goods.pancakes = goods.pancakes - 2;
            }
            place.place3[9] = false;
            buidingAnimation(cakeMaker, place.place3[3], 3)
        } else {
            if (place.place3[0] === 4 && place.place3[9] && goods.pancakes >= 2 && goods.wheat >= 1) {
                if (goods.pancakes >= 6 && goods.wheat >= 3) {
                    pancakesCounter = 3;
                    goods.wheat = goods.wheat - 3;
                    goods.pancakes = goods.pancakes - 6;
                } else {
                    if (goods.pancakes >= 4 && goods.wheat >= 2) {
                        pancakesCounter = 2;
                        goods.wheat = goods.wheat - 2;
                        goods.pancakes = goods.pancakes - 4;
                    } else {
                        pancakesCounter = 1;
                        goods.wheat = goods.wheat - 1;
                        goods.pancakes = goods.pancakes - 2;
                    }
                }
                place.place3[9] = false;
                buidingAnimation(cakeMaker, place.place3[5], 3)
            } else {
                if (place.place3[0] === 5 && place.place3[9] && goods.pancakes >= 2 && goods.wheat >= 1) {
                    if (goods.pancakes >= 8 && goods.wheat >= 4) {
                        pancakesCounter = 4;
                        goods.wheat = goods.wheat - 4;
                        goods.pancakes = goods.pancakes - 8;
                    } else {
                        if (goods.pancakes >= 6 && goods.wheat >= 3) {
                            pancakesCounter = 3;
                            goods.wheat = goods.wheat - 3;
                            goods.pancakes = goods.pancakes - 6;
                        } else {
                            if (goods.pancakes >= 4 && goods.wheat >= 2) {
                                pancakesCounter = 2;
                                goods.wheat = goods.wheat - 2;
                                goods.pancakes = goods.pancakes - 4;
                            } else {
                                pancakesCounter = 1;
                                goods.wheat = goods.wheat - 1;
                                goods.pancakes = goods.pancakes - 2;
                            }
                        }
                    }
                    place.place3[9] = false;
                    buidingAnimation(cakeMaker, place.place3[7], 3)
                }
            }
        }
    }
});

//milkMaker

let buyMilkMaker = document.getElementById('buyMilkMaker');
let milkMaker = document.getElementById('milkMaker');
buyMilkMaker.addEventListener('click', () => {
    if (place.place4[9]) {
        if (gold > place.place4[0] * 150 && place.place4[0] !== 5) {
            console.log('4');
            buildHandler(place.place4[0], milkMaker, 'Pictures/milkMaker1.png', 'Pictures/milkMaker2.png',
                'Pictures/milkMaker3.png', 'Pictures/milkMaker4.png', place.place4[1], place.place4[2], place.place4[3],
                place.place4[4], place.place4[5], place.place4[6], place.place4[7], place.place4[8]);
            let btnText = document.getElementById('buyMilkMaker');
            btnText.innerText = 150 * place.place4[0] + 150;
            place.place4[0]++;
            if (place.place4[0] > 4) {
                btnText.innerText = '';
            }
            gold = gold - place.place4[0] * 150;
            showGold();
            console.log(gold);
        }
    }
});
milkMaker.addEventListener('click', () => {
    if (place.place4[0] === 2 && place.place4[9] && goods.milk >= 2) {
        milkCounter = 1;
        goods.milk = goods.milk - 2;
        place.place4[9] = false;
        buidingAnimation(milkMaker, place.place4[1], 4)
    } else {
        if (place.place4[0] === 3 && place.place4[9] && goods.milk >= 2) {
            if (goods.milk >= 4) {
                milkCounter = 2;
                goods.milk = goods.milk - 4;
            } else {
                milkCounter = 1;
                goods.milk = goods.milk - 2;
            }
            place.place4[9] = false;
            buidingAnimation(milkMaker, place.place4[3], 4)
        } else {
            if (place.place4[0] === 4 && place.place4[9] && goods.milk >= 2) {
                if (goods.milk >= 6) {
                    milkCounter = 3;
                    goods.milk = goods.milk - 6;
                } else {
                    if (goods.milk >= 4) {
                        milkCounter = 2;
                        goods.milk = goods.milk - 4;
                    } else {
                        milkCounter = 1;
                        goods.milk = goods.milk - 2;
                    }
                }
                place.place4[9] = false;
                buidingAnimation(milkMaker, place.place4[5], 4)
            } else {
                if (place.place4[0] === 5 && place.place4[9] && goods.milk >= 2) {
                    if (goods.milk >= 8) {
                        milkCounter = 4;
                        goods.milk = goods.milk - 8;
                    } else {
                        if (goods.milk >= 6) {
                            goods.milk = goods.milk - 6;
                            milkCounter = 3;
                        } else {
                            if (goods.milk >= 4) {
                                goods.milk = goods.milk - 4;
                                milkCounter = 2;
                            } else {
                                milkCounter = 1;
                                goods.milk = goods.milk - 2;
                            }
                        }
                    }
                    place.place4[9] = false;
                    buidingAnimation(milkMaker, place.place4[7], 4)
                }
            }
        }
    }
});

//stringMaker

let buyStringMaker = document.getElementById('buyStringMaker');
let stringMaker = document.getElementById('stringMaker');
buyStringMaker.addEventListener('click', () => {
    if (place.place5[9]) {
        if (gold > place.place5[0] * 150 && place.place5[0] !== 5) {
            console.log('5');
            buildHandler(place.place5[0], stringMaker, 'Pictures/stringMaker1.png', 'Pictures/stringMaker2.png',
                'Pictures/stringMaker3.png', 'Pictures/stringMaker4.png', place.place5[1], place.place5[2], place.place5[3],
                place.place5[4], place.place5[5], place.place5[6], place.place5[7], place.place5[8]);
            let btnText = document.getElementById('buyStringMaker');
            btnText.innerText = 150 * place.place5[0] + 150;
            place.place5[0]++;
            if (place.place5[0] > 4) {
                btnText.innerText = '';
            }
            gold = gold - place.place5[0] * 150;
            showGold();
            console.log(gold);
        }
    }
});
stringMaker.addEventListener('click', () => {
    if (place.place5[0] === 2 && place.place5[9] && goods.wool >= 2) {
        woolCounter = 1;
        goods.wool = goods.wool - 2;
        place.place5[9] = false;
        buidingAnimation(stringMaker, place.place5[1], 5)
    } else {
        if (place.place5[0] === 3 && place.place5[9] && goods.wool >= 2) {
            if (goods.wool >= 4) {
                woolCounter = 2;
                goods.wool = goods.wool - 4;
            } else {
                woolCounter = 1;
                goods.wool = goods.wool - 2;
            }
            place.place5[9] = false;
            buidingAnimation(stringMaker, place.place5[3], 5)
        } else {
            if (place.place5[0] === 4 && place.place5[9] && goods.wool >= 2) {
                if (goods.wool >= 6) {
                    woolCounter = 3;
                    goods.wool = goods.wool - 6;
                } else {
                    if (goods.wool >= 4) {
                        woolCounter = 2;
                        goods.wool = goods.wool - 4;
                    } else {
                        woolCounter = 1;
                        goods.wool = goods.wool - 2;
                    }
                }
                place.place5[9] = false;
                buidingAnimation(stringMaker, place.place5[5], 5)
            } else {
                if (place.place5[0] === 5 && place.place5[9] && goods.wool >= 2) {
                    if (goods.wool >= 8) {
                        woolCounter = 4;
                        goods.wool = goods.wool - 8;
                    } else {
                        if (goods.wool >= 6) {
                            woolCounter = 3;
                            goods.wool = goods.wool - 6;
                        } else {
                            if (goods.wool >= 4) {
                                woolCounter = 2;
                                goods.wool = goods.wool - 4;
                            } else {
                                woolCounter = 1;
                                goods.wool = goods.wool - 2;
                            }
                        }
                    }
                    place.place5[9] = false;
                    buidingAnimation(stringMaker, place.place5[7], 5)
                }
            }
        }
    }
});

//canvasMaker

let buyCanvasMaker = document.getElementById('buyCanvasMaker');
let canvasMaker = document.getElementById('canvasMaker');
buyCanvasMaker.addEventListener('click', () => {
    if (place.place6[9]) {
        if (gold > place.place6[0] * 150 && place.place6[0] !== 5) {
            console.log('6');
            buildHandler(place.place6[0], canvasMaker, 'Pictures/canvasMaker1.png', 'Pictures/canvasMaker2.png',
                'Pictures/canvasMaker3.png', 'Pictures/canvasMaker4.png', place.place6[1], place.place6[2], place.place6[3],
                place.place6[4], place.place6[5], place.place6[6], place.place6[7], place.place6[8]);
            let btnText = document.getElementById('buyCanvasMaker');
            btnText.innerText = 150 * place.place6[0] + 150;
            place.place6[0]++;
            if (place.place6[0] > 4) {
                btnText.innerText = '';
            }
            gold = gold - place.place6[0] * 150;
            showGold();
            console.log(gold);
        }
    }
});
canvasMaker.addEventListener('click', () => {
    if (place.place6[0] === 2 && place.place6[9] && goods.strings >= 2) {
        stringsCounter = 1;
        goods.strings = goods.strings - 2;
        place.place6[9] = false;
        buidingAnimation(canvasMaker, place.place6[1], 6)
    } else {
        if (place.place6[0] === 3 && place.place6[9] && goods.strings >= 2) {
            if (goods.strings >= 4) {
                stringsCounter = 2;
                goods.strings = goods.strings - 4;
            } else {
                stringsCounter = 1;
                goods.strings = goods.strings - 2;
            }
            place.place6[9] = false;
            buidingAnimation(canvasMaker, place.place6[3], 6)
        } else {
            if (place.place6[0] === 4 && place.place6[9] && goods.strings >= 2) {
                if (goods.strings >= 6) {
                    stringsCounter = 3;
                    goods.strings = goods.strings - 6;
                } else {
                    if (goods.strings >= 4) {
                        stringsCounter = 2;
                        goods.strings = goods.strings - 4;
                    } else {
                        goods.strings = goods.strings - 2;
                    }
                }
                place.place6[9] = false;
                buidingAnimation(canvasMaker, place.place6[5], 6)
            } else {
                if (place.place6[0] === 5 && place.place6[9] && goods.strings >= 2) {
                    if (goods.strings >= 8) {
                        stringsCounter = 4;
                        goods.strings = goods.strings - 8;
                    } else {
                        if (goods.strings >= 6) {
                            stringsCounter = 3;
                            goods.strings = goods.strings - 6;
                        } else {
                            if (goods.strings >= 4) {
                                stringsCounter = 2;
                                goods.strings = goods.strings - 4;
                            } else {
                                stringsCounter = 1;
                                goods.strings = goods.strings - 2;
                            }
                        }
                    }
                    place.place6[9] = false;
                    buidingAnimation(canvasMaker, place.place6[7], 6)
                }
            }
        }
    }
});


// Анимация строений
function buidingAnimation(building, buildingWidth, clickhandler) {
    stockPileClicker = true;
    let start = Date.now();
    let q = 0;
    let counter = 0;
    requestAnimationFrame(step);

    function step() {
        let timestamp = Date.now();

        let progress = timestamp - start;

        if (q > 15) {
            counter = counter + 15
        }
        q = Math.floor(progress / 60) - counter;

        building.style.backgroundPosition = -q * buildingWidth + 'px';
        if (progress >= 5000) {
            building.style.backgroundPosition = '0px';
            cancelAnimationFrame(step);
            if (clickhandler === 1) {
                place.place1[9] = true;
                buildProducts(0, 20, place.place1[0], game.wheat, 'Pictures/eggWheat.png', eggsCounter);

            } else {
                if (clickhandler === 2) {
                    place.place2[9] = true;
                    buildProducts(0, 180, place.place2[0], game.pancakes, 'Pictures/pancakes.png', wheatCounter);

                } else {
                    if (clickhandler === 3) {
                        place.place3[9] = true;
                        buildProducts(0, 320, place.place3[0], game.cakes, 'Pictures/cake.png', pancakesCounter);

                    } else {
                        if (clickhandler === 4) {
                            place.place4[9] = true;
                            buildProducts(760, 30, place.place4[0], game.kefir, 'Pictures/kefir.png', milkCounter);
                        } else {
                            if (clickhandler === 5) {
                                place.place5[9] = true;
                                buildProducts(760, 180, place.place5[0], game.strings, 'Pictures/string.png', woolCounter);
                            } else {
                                place.place6[9] = true;
                                buildProducts(760, 320, place.place6[0], game.leather, 'Pictures/canvas.png', stringsCounter);
                            }
                        }
                    }
                }
            }

        }
        if (progress < 5000) {
            requestAnimationFrame(step);

        }
    }


};


// функция отрисовки продуктов вырабатываемых сданиями

function buildProducts(x, y, place, placeHolder, image, counter) {
    if (place === 2) {
        let item = {
            x: x,
            y: y,
            width: 42,
            height: 42
        };
        game.isRunning = false;
        placeHolder.push(item);
        console.log('STAGE1');
        placeHolder[placeHolder.length - 1].sprites = new Image();
        placeHolder[placeHolder.length - 1].sprites.src = image;
        placeHolder[placeHolder.length - 1].sprites.addEventListener('load', () => {

            game.isRunning = true;
            counter = 0;
            if (!stockPileClicker){
                game.run()
            }

        });


    } else {
        if (place === 3) {
            let item1 = {
                x: x,
                y: y,
                width: 42,
                height: 42
            };
            let item2 = {
                x: x,
                y: y + 40,
                width: 42,
                height: 42
            };

            game.isRunning = false;


            if (counter === 2) {
                placeHolder.push(item1);
                placeHolder[placeHolder.length - 1].sprites = new Image();
                placeHolder[placeHolder.length - 1].sprites.src = image;
                placeHolder[placeHolder.length - 1].sprites.addEventListener('load', () => {
                    placeHolder.push(item2);
                    placeHolder[placeHolder.length - 1].sprites = new Image();
                    placeHolder[placeHolder.length - 1].sprites.src = image;
                    placeHolder[placeHolder.length - 1].sprites.addEventListener('load', () => {

                        game.isRunning = true;
                        counter = 0;
                        if (!stockPileClicker){
                            game.run()
                        }
                    })
                })

            } else {
                placeHolder.push(item1);
                console.log('STAGE1');
                placeHolder[placeHolder.length - 1].sprites = new Image();
                placeHolder[placeHolder.length - 1].sprites.src = image;
                placeHolder[placeHolder.length - 1].sprites.addEventListener('load', () => {

                    game.isRunning = true;
                    counter = 0;
                    if (!stockPileClicker){
                        game.run()
                    }
                });
            }


        } else {
            if (place === 4) {
                let item1 = {
                    x: x,
                    y: y,
                    width: 42,
                    height: 42
                };
                let item2 = {
                    x: x,
                    y: y + 40,
                    width: 42,
                    height: 42
                };
                let item3 = {
                    x: x + 40,
                    y: y,
                    width: 42,
                    height: 42
                };


                game.isRunning = false;

                if (counter === 3) {
                    placeHolder.push(item1);
                    placeHolder[placeHolder.length - 1].sprites = new Image();
                    placeHolder[placeHolder.length - 1].sprites.src = image;
                    placeHolder[placeHolder.length - 1].sprites.addEventListener('load', () => {
                        placeHolder.push(item2);
                        placeHolder[placeHolder.length - 1].sprites = new Image();
                        placeHolder[placeHolder.length - 1].sprites.src = image;
                        placeHolder[placeHolder.length - 1].sprites.addEventListener('load', () => {
                            placeHolder.push(item3);
                            placeHolder[placeHolder.length - 1].sprites = new Image();
                            placeHolder[placeHolder.length - 1].sprites.src = image;
                            placeHolder[placeHolder.length - 1].sprites.addEventListener('load', () => {

                                game.isRunning = true;
                                counter = 0;
                                if (!stockPileClicker){
                                    game.run()
                                }
                            })
                        })

                    })

                } else {
                    if (counter === 2) {
                        placeHolder.push(item1);
                        placeHolder[placeHolder.length - 1].sprites = new Image();
                        placeHolder[placeHolder.length - 1].sprites.src = image;
                        placeHolder[placeHolder.length - 1].sprites.addEventListener('load', () => {
                            placeHolder.push(item2);
                            placeHolder[placeHolder.length - 1].sprites = new Image();
                            placeHolder[placeHolder.length - 1].sprites.src = image;
                            placeHolder[placeHolder.length - 1].sprites.addEventListener('load', () => {

                                game.isRunning = true;
                                counter = 0;
                                if (!stockPileClicker){
                                    game.run()
                                }
                            })
                        })

                    } else {
                        placeHolder.push(item1);
                        console.log('STAGE1');
                        placeHolder[placeHolder.length - 1].sprites = new Image();
                        placeHolder[placeHolder.length - 1].sprites.src = image;
                        placeHolder[placeHolder.length - 1].sprites.addEventListener('load', () => {

                            game.isRunning = true;
                            counter = 0;
                            if (!stockPileClicker){
                                game.run()
                            }
                        });
                    }
                }


            } else {
                if (place === 5) {
                    let item1 = {
                        x: x,
                        y: y,
                        width: 42,
                        height: 42
                    };
                    let item2 = {
                        x: x,
                        y: y + 40,
                        width: 42,
                        height: 42
                    };
                    let item3 = {
                        x: x + 40,
                        y: y,
                        width: 42,
                        height: 42
                    };
                    let item4 = {
                        x: x + 40,
                        y: y + 40,
                        width: 42,
                        height: 42
                    };

                    game.isRunning = false;


                    if (counter === 4) {
                        placeHolder.push(item1);
                        placeHolder[placeHolder.length - 1].sprites = new Image();
                        placeHolder[placeHolder.length - 1].sprites.src = image;
                        placeHolder[placeHolder.length - 1].sprites.addEventListener('load', () => {
                            placeHolder.push(item2);
                            placeHolder[placeHolder.length - 1].sprites = new Image();
                            placeHolder[placeHolder.length - 1].sprites.src = image;
                            placeHolder[placeHolder.length - 1].sprites.addEventListener('load', () => {
                                placeHolder.push(item3);
                                placeHolder[placeHolder.length - 1].sprites = new Image();
                                placeHolder[placeHolder.length - 1].sprites.src = image;
                                placeHolder[placeHolder.length - 1].sprites.addEventListener('load', () => {
                                    placeHolder.push(item4);
                                    placeHolder[placeHolder.length - 1].sprites = new Image();
                                    placeHolder[placeHolder.length - 1].sprites.src = image;
                                    placeHolder[placeHolder.length - 1].sprites.addEventListener('load', () => {

                                        game.isRunning = true;
                                        counter = 0;
                                        if (!stockPileClicker){
                                            game.run()
                                        }
                                    });
                                });

                            });

                        });

                    } else {
                        if (counter === 3) {
                            placeHolder.push(item1);
                            placeHolder[placeHolder.length - 1].sprites = new Image();
                            placeHolder[placeHolder.length - 1].sprites.src = image;
                            placeHolder[placeHolder.length - 1].sprites.addEventListener('load', () => {
                                placeHolder.push(item2);
                                placeHolder[placeHolder.length - 1].sprites = new Image();
                                placeHolder[placeHolder.length - 1].sprites.src = image;
                                placeHolder[placeHolder.length - 1].sprites.addEventListener('load', () => {
                                    placeHolder.push(item3);
                                    placeHolder[placeHolder.length - 1].sprites = new Image();
                                    placeHolder[placeHolder.length - 1].sprites.src = image;
                                    placeHolder[placeHolder.length - 1].sprites.addEventListener('load', () => {

                                        game.isRunning = true;
                                        counter = 0;
                                        if (!stockPileClicker){
                                            game.run()
                                        }
                                    })
                                })

                            })

                        } else {
                            if (counter === 2) {
                                placeHolder.push(item1);
                                placeHolder[placeHolder.length - 1].sprites = new Image();
                                placeHolder[placeHolder.length - 1].sprites.src = image;
                                placeHolder[placeHolder.length - 1].sprites.addEventListener('load', () => {
                                    placeHolder.push(item2);
                                    placeHolder[placeHolder.length - 1].sprites = new Image();
                                    placeHolder[placeHolder.length - 1].sprites.src = image;
                                    placeHolder[placeHolder.length - 1].sprites.addEventListener('load', () => {

                                        game.isRunning = true;
                                        counter = 0;
                                        if (!stockPileClicker){
                                            game.run()
                                        }
                                    })
                                })

                            } else {
                                placeHolder.push(item1);
                                console.log('STAGE1');
                                placeHolder[placeHolder.length - 1].sprites = new Image();
                                placeHolder[placeHolder.length - 1].sprites.src = image;
                                placeHolder[placeHolder.length - 1].sprites.addEventListener('load', () => {

                                    game.isRunning = true;
                                    counter = 0;
                                    if (!stockPileClicker){
                                        game.run()
                                    }
                                });
                            }
                        }
                    }
                }
            }
        }
    }
}

// отрисовка поездок в город

var canvasRoad = {
    width: 540,
    height: 234,
    ctx: undefined,
    isRunning: false,

    sprites: {
        background: undefined,
        car: undefined,
    },

    init: function () {
        var canvas = document.getElementById("roadCanvas");
        this.ctx = canvas.getContext("2d");
    },

    load: function () {
        this.sprites.background = new Image();
        this.sprites.background.src = 'Pictures/road.png';
        this.sprites.car = new Image();
        this.sprites.car.src = 'Pictures/mobile.png';
    },

    start: function () {
        this.init();
        this.load();
        this.run();
    },

    render: function () {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.drawImage(this.sprites.background, 0, 0, 180, 78, 180, 0, 360, 234);
        this.ctx.drawImage(this.sprites.car, 0, 0, 130, 130, this.car.x, 100, 40, 110);
    },

    update: function () {
        if (this.car.dx) {
            this.car.x = this.car.x + this.car.dx;
        }
        this.car.checkBounds();
    },

    run: function () {
        this.update();
        this.render();

        if (this.isRunning) {
            window.requestAnimationFrame(function () {
                canvasRoad.run();
            })
        }

    }
};

canvasRoad.car = {
    velocity: 0.5,
    x: 210,
    y: 100,
    dx: 1,
    dy: 0,

    checkBounds: function () {
        if (this.x + 42 > canvasRoad.width) {
            this.dx = -this.dx;
        }
        if (this.x - 0.00001 < 210) {
            this.dx = 0;
            canvasRoad.isRunning = false;
            gold = gold + sendGoods.eggs * 10 + sendGoods.wheat * 10 + sendGoods.pancakes * 70 + sendGoods.cakes * 150 +
                sendGoods.wool * 20 + sendGoods.strings * 50 + sendGoods.leather * 110 + sendGoods.milk * 50 +
                sendGoods.kefir * 150;
            showGold();
            checkGold();
            for (let key in sendGoods) {
                sendGoods[key] = 0;
            }

        }
    }
};


window.addEventListener('load', function () {
    game.start();
    canvasRoad.start();
    checkCakes();
    checkLeather();
    checkKefir();
    checkGold();

});

var roadCanvas = document.getElementById("roadCanvas");


// WareHouse handler


const mobile = document.querySelector('.mobile');
const visuallyHidden = document.querySelector('.visuallyHidden');

let eggsStore = document.getElementById('eggsStore');
let wheatStore = document.getElementById('wheatStore');
let pancakesStore = document.getElementById('pancakesStore');
let cakesStore = document.getElementById('cakesStore');
let woolStore = document.getElementById('woolStore');
let stringsStore = document.getElementById('stringsStore');
let leatherStore = document.getElementById('leatherStore');
let milkStore = document.getElementById('milkStore');
let kefirStore = document.getElementById('kefirStore');

let sendEggs = document.getElementById('sendEggs');
let sendWheat = document.getElementById('sendWheat');
let sendPancakes = document.getElementById('sendPancakes');
let sendCakes = document.getElementById('sendCakes');
let sendWool = document.getElementById('sendWool');
let sendStrings = document.getElementById('sendStrings');
let sendLeather = document.getElementById('sendLeather');
let sendMilk = document.getElementById('sendMilk');
let sendKefir = document.getElementById('sendKefir');

function showSendGoods() {
    eggsStore.innerText = goods.eggs;
    wheatStore.innerText = goods.wheat;
    pancakesStore.innerText = goods.pancakes;
    cakesStore.innerText = goods.cakes;
    woolStore.innerText = goods.wool;
    stringsStore.innerText = goods.strings;
    leatherStore.innerText = goods.leather;
    milkStore.innerText = goods.milk;
    kefirStore.innerText = goods.kefir;

    sendEggs.innerText = sendGoods.eggs;
    sendWheat.innerText = sendGoods.wheat;
    sendPancakes.innerText = sendGoods.pancakes;
    sendCakes.innerText = sendGoods.cakes;
    sendWool.innerText = sendGoods.wool;
    sendStrings.innerText = sendGoods.strings;
    sendLeather.innerText = sendGoods.leather;
    sendMilk.innerText = sendGoods.milk;
    sendKefir.innerText = sendGoods.kefir;
}

eggsStore.addEventListener('click', () => {
    if (goods.eggs) {
        goods.eggs = goods.eggs - 1;
        sendGoods.eggs = sendGoods.eggs + 1;
        showSendGoods();
    }

});

wheatStore.addEventListener('click', () => {

    if (goods.wheat) {
        goods.wheat = goods.wheat - 1;
        sendGoods.wheat = sendGoods.wheat + 1;
        showSendGoods();
    }
});

pancakesStore.addEventListener('click', () => {

    if (goods.pancakes) {
        goods.pancakes = goods.pancakes - 1;
        sendGoods.pancakes = sendGoods.pancakes + 1;
        showSendGoods();
    }
});

cakesStore.addEventListener('click', () => {

    if (goods.cakes) {
        goods.cakes = goods.cakes - 1;
        sendGoods.cakes = sendGoods.cakes + 1;
        showSendGoods();
    }
});

woolStore.addEventListener('click', () => {

    if (goods.wool) {
        goods.wool = goods.wool - 1;
        sendGoods.wool = sendGoods.wool + 1;
        showSendGoods();
    }
});

stringsStore.addEventListener('click', () => {

    if (goods.strings) {
        goods.strings = goods.strings - 1;
        sendGoods.strings = sendGoods.strings + 1;
        showSendGoods();
    }
});

leatherStore.addEventListener('click', () => {

    if (goods.leather) {
        goods.leather = goods.leather - 1;
        sendGoods.leather = sendGoods.leather + 1;
        showSendGoods();
    }
});

milkStore.addEventListener('click', () => {

    if (goods.milk) {
        goods.milk = goods.milk - 1;
        sendGoods.milk = sendGoods.milk + 1;
        showSendGoods();
    }
});

kefirStore.addEventListener('click', () => {

    if (goods.kefir) {
        goods.kefir = goods.kefir - 1;
        sendGoods.kefir = sendGoods.kefir + 1;
        showSendGoods();
    }
});

sendEggs.addEventListener('click', () => {

    if (sendGoods.eggs) {
        sendGoods.eggs = sendGoods.eggs - 1;
        goods.eggs = goods.eggs + 1;
        showSendGoods();
    }
});

sendWheat.addEventListener('click', () => {

    if (sendGoods.wheat) {
        sendGoods.wheat = sendGoods.wheat - 1;
        goods.wheat = goods.wheat + 1;
        showSendGoods();
    }
});

sendPancakes.addEventListener('click', () => {

    if (sendGoods.pancakes) {
        sendGoods.pancakes = sendGoods.pancakes - 1;
        goods.pancakes = goods.pancakes + 1;
        showSendGoods();
    }
});

sendCakes.addEventListener('click', () => {

    if (sendGoods.cakes) {
        sendGoods.cakes = sendGoods.cakes - 1;
        goods.cakes = goods.cakes + 1;
        showSendGoods();
    }
});

sendWool.addEventListener('click', () => {

    if (sendGoods.wool) {
        sendGoods.wool = sendGoods.wool - 1;
        goods.wool = goods.wool + 1;
        showSendGoods();
    }
});

sendStrings.addEventListener('click', () => {

    if (sendGoods.strings) {
        sendGoods.strings = sendGoods.strings - 1;
        goods.strings = goods.strings + 1;
        showSendGoods();
    }
});

sendLeather.addEventListener('click', () => {

    if (sendGoods.leather) {
        sendGoods.leather = sendGoods.leather - 1;
        goods.leather = goods.leather + 1;
        showSendGoods();
    }
});

sendMilk.addEventListener('click', () => {

    if (sendGoods.milk) {
        sendGoods.milk = sendGoods.milk - 1;
        goods.milk = goods.milk + 1;
        showSendGoods();
    }
});

sendKefir.addEventListener('click', () => {

    if (sendGoods.kefir) {
        sendGoods.kefir = sendGoods.kefir - 1;
        goods.kefir = goods.kefir + 1;
        showSendGoods();
    }
});

const buttonSend = document.getElementById('buttonSend');
const buttonExit = document.getElementById('buttonExit');

buttonSend.addEventListener('click', () => {
    visuallyHidden.style.display = "none";
    canvasRoad.car.dx = 1;
    canvasRoad.isRunning = true;
    canvasRoad.run();
    checkCakes();
    checkLeather();
    checkKefir();
    checkGold();
    game.isRunning = true;
    game.run();
    stockPileClicker = false;
});

buttonExit.addEventListener('click', () => {

    visuallyHidden.style.display = "none";
    goods.eggs = goods.eggs + sendGoods.eggs;
    goods.wheat = goods.wheat + sendGoods.wheat;
    goods.pancakes = goods.pancakes + sendGoods.pancakes;
    goods.cakes = goods.cakes + sendGoods.cakes;
    goods.wool = goods.wool + sendGoods.wool;
    goods.strings = goods.strings + sendGoods.strings;
    goods.leather = goods.leather + sendGoods.leather;
    goods.milk = goods.milk + sendGoods.milk;
    goods.kefir = goods.kefir + sendGoods.kefir;

    for (let key in sendGoods) {
        sendGoods[key] = 0;
    }
    checkCakes();
    checkLeather();
    checkKefir();
    checkGold();
    game.isRunning = true;
    game.run();
    stockPileClicker = false;

});

mobile.addEventListener('click', () => {
    if (!canvasRoad.isRunning) {
        game.isRunning = false;
        visuallyHidden.style.display = "block";
        showSendGoods();
        checkCakes();
        checkLeather();
        checkKefir();
        checkGold();

    }
});

// Game End Check

function checkCakes() {
    if (goods.cakes >= cakesGoal.innerText) {
        cakesGoal.innerText = 'Ok';
        checkCakesGoal = true
    } else {
        cakesGoal.innerText = 5;
        checkCakesGoal = false
    }
}

function checkLeather() {
    if (goods.leather >= canvasGoal.innerText) {
        canvasGoal.innerText = 'Ok';
        checkCanvasGoal = true
    } else {
        canvasGoal.innerText = 5;
        checkCanvasGoal = false
    }
}

function checkKefir() {
    if (goods.kefir >= kefirGoal.innerText) {
        kefirGoal.innerText = 'Ok';
        checkKefirGoal = true
    } else {
        kefirGoal.innerText = 5;
        checkKefirGoal = false
    }
}

function checkGold() {
    if (gold >= goldGoal.innerText) {
        goldGoal.innerText = 'Ok';
        checkGoldGoal = true
    } else {
        goldGoal.innerText = 40000;
        checkGoldGoal = false
    }
}

const well = document.querySelector('.well');
well.addEventListener('click', () => {
    let start = Date.now();
    let q = 0;
    let counter = 0;
    console.log('23');
    requestAnimationFrame(step1);

    function step1() {
        let timestamp = Date.now();
        console.log('23');
        let progress = timestamp - start;

        if (q > 15) {
            counter = counter + 15
        }
        q = Math.floor(progress / 60) - counter;

        well.style.backgroundPosition = -q * 158 + 'px';
        if (progress >= 5000) {
            well.style.backgroundPosition = '0px';
            cancelAnimationFrame(step1);
            waterGround = waterGround + 4;
        }
        if (progress < 5000) {
            requestAnimationFrame(step1);

        }
    }
});







