document.addEventListener('DOMContentLoaded', function () {

    let btnFirst = document.getElementById('makeDinner');
    let btnSecond = document.getElementById('add');
    let btnThird = document.getElementById('list');
    let hide = document.querySelectorAll('.hidden');
    let span = document.createElement('span');
    let counter = 0;
    let restCalories = document.createElement('div');
    document.getElementById('foodCheck').appendChild(restCalories);

    btnFirst.addEventListener('click', () => {

        let foodCheck = document.getElementById('foodCheck');

        for (let key of hide) {
            key.style.display = 'none';
        }
        foodCheck.style.display = 'block';
    });

    btnSecond.addEventListener('click', () => {

        let foodCheck = document.getElementById('foodAdd');
        span.innerText = '';

        for (let key of hide) {
            key.style.display = 'none';
        }

        foodCheck.style.display = 'block';
    });

    btnThird.addEventListener('click', () => {

        let menu = document.getElementById('menu');
        let ul = document.getElementById('menuList');

        for (let key of hide) {
            key.style.display = 'none';
        }
        menu.style.display = 'block';

        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:8080/api/foods');
        xhr.send();
        xhr.addEventListener('load', () => {

            while (ul.firstChild) {
                ul.removeChild(ul.firstChild);
            }

            let arr = JSON.parse(xhr.response);
            for (let key of arr) {
                let li = document.createElement('li');
                li.textContent = key.name + '  ' + key.calories + 'кКал';
                ul.appendChild(li);
            }

        })
    });

    document.getElementById('addForm').addEventListener('submit', (e) => {

        e.preventDefault();

        let food = document.getElementById('foodName');
        let calories = document.getElementById('numberCalories');

        let formData = 'name=' + encodeURIComponent(food.value) + '&calories=' + encodeURIComponent(calories.value);

        food.value = '';
        calories.value = '';

        let xhr = new XMLHttpRequest();

        xhr.open('POST', `http://localhost:8080/api/foods`);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.addEventListener('load', () => {

            let foodCheck = document.getElementById('foodAdd');

            span.innerText = 'Меню обновлено';
            foodCheck.appendChild(span);

        });

        xhr.send(formData);

    });

    document.getElementById('find').addEventListener('click', (e) => {


        let inputDish = document.getElementById('findDishFromList');
        let caloriesValue = document.getElementById('countCalories');

        if (caloriesValue.value == '') {
            alert('Не забывайте о калориях -- введите нужную графу');
            inputDish.value = '';
            return;
        }

        if (inputDish.value == '') {
            alert("Введите название перекуса")
        }

        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'http://localhost:8080/api/foods/find/' + inputDish.value);
        xhr.send();

        xhr.addEventListener('load', (e) => {

            let response = JSON.parse(xhr.responseText);
            counter += response.calories;

            if (counter > caloriesValue.value) {
                alert('Воздержитесь от последнего блюда');
                return;
            }

            restCalories.innerText = caloriesValue.value - counter + ' оставшихся кКал';

            let findList = document.getElementById('findList');
            let li = document.createElement('li');
            li.innerText = response.name + ': ' + response.calories + ' кКал';
            findList.appendChild(li);

            li.addEventListener('click', (event) => {

                findList.removeChild(event.target);
                counter = counter - response.calories;
                restCalories.innerText = caloriesValue.value - counter + ' оставшихся кКал';

            });

            e.preventDefault();
        })

    });
});