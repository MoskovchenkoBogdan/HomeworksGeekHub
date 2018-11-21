class Cat {
    constructor(name) {
        this.Name = name;
        this.health = 100;
        this.hunger = 100;
        this.energy = 100;
        this.happiness = 100;
    };

    eat() {
        this.hunger = this.hunger + 20;
        this.energy = this.energy + 10;
    };

    sleep() {
        this.energy = this.energy + 60;
        this.hunger = this.hunger - 30;
    };

    play() {
        this.health = this.health + 5;
        this.happiness = this.happiness + 20;
        this.energy = this.energy - 5;
        this.hunger = this.hunger - 5;
    };

    walk() {
        this.health = this.health + 10;
        this.hunger = this.hunger - 10;
        this.energy = this.energy - 20;
        this.happiness = this.happiness + 40;
    };

    treat() {
        this.health = this.health + 40;
        this.happiness = this.happiness - 20;
    };

    reduce() {
        this.health = this.health - 5;
        this.hunger = this.hunger - 5;
        this.energy = this.energy - 5;
        this.happiness = this.happiness - 5;
    };
}

let tamagochi = document.getElementById('container');
let addButton = document.getElementById('add');
let inputName = tamagochi.querySelector('input[type=text]');


addButton.addEventListener('click', () => {

    let catMaker = document.createElement('div');
    tamagochi.appendChild(catMaker);
    let catMakerProp = document.createElement('ul');
    catMaker.appendChild(catMakerProp);
    let tamagochiButtons = document.createElement('div');
    catMaker.appendChild(tamagochiButtons);
    let catImage = document.createElement('img');
    catImage.setAttribute('src', 'img/catCool1.jpg');
    catMaker.appendChild(catImage);
    let name = inputName.value;
    let cat = new Cat(name);
    inputName.value = '';

    let list = function () {

        for (let key in cat) {
            let item = document.createElement('li');
            let span = document.createElement('span');
            span.innerText = key + ': ' + cat[key];
            item.appendChild(span);
            catMakerProp.appendChild(item);
        }
    };

    let delList = function () {

        while (catMakerProp.firstChild) {
            catMakerProp.removeChild(catMakerProp.firstChild);
        }
    };

    let max = function (cat) {
        if (cat.health > 100) {
            cat.health = 100
        }
        if (cat.hunger > 100) {
            cat.hunger = 100
        }
        if (cat.energy > 100) {
            cat.energy = 100
        }
        if (cat.happiness > 100) {
            cat.happiness = 100
        }
    };

    let minHunger = function (cat) {

        if (cat['hunger'] <= 0) {
            cat['hunger'] = 0;
            cat['health'] = cat['health'] - 15;
        }
    };

    let minEnergy = function (cat) {

        if (cat['energy'] <= 0) {
            cat['energy'] = 0;
            cat['health'] = cat['health'] - 5;
        }
    };

    let minHappiness = function (cat) {

        if (cat['happiness'] <= 0) {
            cat['happiness'] = 0;
            cat['health'] = cat['health'] - 10;
        }
    };

    let minHealth = function (cat) {

        if (cat['health'] <= 0) {
            alert(cat['Name'] + ' is dead ... ');
        }

    };

    let setImg = function (cat) {
        if (cat['health'] >= 81) {
            catMaker.removeChild(catImage);
            catImage.setAttribute('src', 'img/catCool1.jpg');
            catMaker.appendChild(catImage);
        }
        if (cat['health'] <= 80 && cat['health'] >= 61) {
            catMaker.removeChild(catImage);
            catImage.setAttribute('src', 'img/catSad1.jpg');
            catMaker.appendChild(catImage);
        }
        if (cat['health'] <= 60 && cat['health'] >= 41) {
            catMaker.removeChild(catImage);
            catImage.setAttribute('src', 'img/cathungry1.jpg');
            catMaker.appendChild(catImage);
        }
        if (cat['health'] <= 40 && cat['health'] >= 1) {
            catMaker.removeChild(catImage);
            catImage.setAttribute('src', 'img/cattired1.jpg');
            catMaker.appendChild(catImage);
        }
        if (cat['health'] <= 0) {
            catMaker.removeChild(catImage);
            catImage.setAttribute('src', 'img/catDead.jpg');
            catMaker.appendChild(catImage);
        }
    };

    list();

    let eat = document.createElement('button');
    let sleep = document.createElement('button');
    let walk = document.createElement('button');
    let treat = document.createElement('button');
    let play = document.createElement('button');

    let spanPlay = document.createElement('span');
    spanPlay.innerText = "Play";
    play.appendChild(spanPlay);
    tamagochiButtons.appendChild(play);

    let spanEat = document.createElement('span');
    spanEat.innerText = "Eat";
    eat.appendChild(spanEat);
    tamagochiButtons.appendChild(eat);

    let spanSleep = document.createElement('span');
    spanSleep.innerText = "Sleep";
    sleep.appendChild(spanSleep);
    tamagochiButtons.appendChild(sleep);

    let spanWalk = document.createElement('span');
    spanWalk.innerText = "Walk";
    walk.appendChild(spanWalk);
    tamagochiButtons.appendChild(walk);

    let spanTreat = document.createElement('span');
    spanTreat.innerText = "Treat";
    treat.appendChild(spanTreat);
    tamagochiButtons.appendChild(treat);


    play.addEventListener('click', () => {
        cat.play();
        max(cat);
        minHunger(cat);
        minEnergy(cat);
        minHealth(cat);
        setimg(cat);
        delList();
        list();
    });

    eat.addEventListener('click', () => {
        cat.eat();
        max(cat);
        minHealth(cat);
        setimg(cat);
        delList();
        list();
    });

    sleep.addEventListener('click', () => {
        cat.sleep();
        max(cat);
        minHunger(cat);
        minHealth(cat);
        setimg(cat);
        delList();
        list();
    });

    walk.addEventListener('click', () => {
        cat.walk();
        max(cat);
        minHunger(cat);
        minEnergy(cat);
        minHealth(cat);
        setimg(cat);
        delList();
        list();
    });

    treat.addEventListener('click', () => {
        cat.treat();
        max(cat);
        minHappiness(cat);
        setimg(cat);
        delList();
        list();
    });

    let setId = setInterval(function () {
        cat.reduce();
        max(cat);
        minHunger(cat);
        minEnergy(cat);
        minHappiness(cat);
        setimg(cat);
        delList();
        list();
        if (cat['health'] <= 0) {
            clearInterval(setId);
            alert(cat['Name'] + ' is dead ... ');
        }
    }, 3000);
});


