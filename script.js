// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20:
for (let i = 10; i <= 20; i++) {
    console.log(i + ', ');
}

// 2. Вивести квадрати чисел від 10 до 20:
for (let i = 10; i <= 20; i++) {
    console.log(Math.pow(i, 2) + ' ');
}

// 3. Вивести таблицю множення на 7:
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i} <br>`);
}

// 4. Знайти суму всіх цілих чисел від 1 до 15:
let sumResult = 0;
for (let i = 1; i <= 15; i++) {
    sumResult += i;
}
console.log(`Сума: ${sumResult}`);

// 5. Знайти добуток усіх цілих чисел від 15 до 35:
let productResult = 1;
for (let i = 15; i <= 35; i++) {
    productResult *= i;
}
console.log(`Добуток: ${productResult}`);

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500:
let sum = 0;
for (let i = 1; i <= 500; i++) {
    sum += i;
}
let average = sum / 500;
console.log(`Середнє арифметичне: ${average}`);

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80:
let sumEven = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    }
}
console.log(`Сума парних чисел: ${sumEven}`);

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3:
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i + ' ');
    }
}

// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let number = 36; // Замініть це число за потреби
console.log(`Дільники числа ${number}: `);
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i + ' ');
    }
}

// 10. Визначити кількість його парних дільників:
let evenDivisorsCount = 0;
for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
        evenDivisorsCount++;
    }
}
console.log(`Кількість парних дільників: ${evenDivisorsCount}`);

// 11. Знайти суму його парних дільників:
let sumEvenDivisors = 0;
for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
        sumEvenDivisors += i;
    }
}
console.log(`Сума парних дільників: ${sumEvenDivisors}`);

// 12. Надрукувати повну таблицю множення від 1 до 10:
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j} <br>`);
    }
}
















/* let number1 = prompt('number');
let number2 = prompt('number');
let number3 = prompt('number');

alert((Number(number1) + Number(number2) + Number(number3)) / 2); */

/* let rik = prompt('Pік народження?');


if(rik === null){
    alert(`Шкода, що Ви не захотіли ввести свій(ю) дату народження`); 
    } else if (rik != null){
        let city = prompt('В якому місті ти живеш?');
        if(city === null){
            alert(`Шкода, що Ви не захотіли ввести свійє місто`);
        } else if(city != null){
            let sport = prompt('Улюблений вид спорту?');
            if (sport ===  null){
                alert(`Шкода, що Ви не захотіли ввести свій вид спорту`);
            } else if(sport != null){
                if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
                    if(sport === "Box" || sport === "MMA" || sport === "Judo"){
                        if(sport === "Box"){
                            alert(`${rik}\nТи живеш у столиці ${city}\nКруто! Хочеш стати Олександром Усиком?`);
                        } else if(sport === "MMA"){
                            alert(`${rik}\nТи живеш у столиці ${city}\nКруто! Хочеш стати Шоном Стриклендом?`);
                        } else if(sport === "Judo"){
                            alert(`${rik}\nТи живеш у столиці ${city}\nКруто! Хочеш стати Арманом Адамяном?`);
                        }
                    } else{
                        alert(`${rik}\nТи живеш у столиці ${city}`);
                    }
                } else {
                    if(sport === "Box" || sport === "MMA" || sport === "Judo"){
                        if(sport === "Box"){
                            alert(`${rik}\nТи живеш у місті ${city}\nКруто! Хочеш стати Олександром Усиком?`);
                        } else if(sport === "MMA"){
                            alert(`${rik}\nТи живеш у місті ${city}\nКруто! Хочеш стати Шоном Стриклендом?`);
                        } else if(sport === "Judo"){
                            alert(`${rik}\nТи живеш у місті ${city}\nКруто! Хочеш стати Арманом Адамяном?`);
                        }
                    } else{
                        alert(`${rik}\nТи живеш у місті ${city}`);
                    }
                }
            }
        }
    }
            
            
            
             */

/* } else (rik === null){
    alert(`Шкода, що Ви не захотіли ввести свій(ю) дату народження`);
} else if (city === null){
    alert(`Шкода, що Ви не захотіли ввести свій(ю) місто`);
} else if (sport === null){
    alert(`Шкода, що Ви не захотіли ввести свій(ю) вид спорту`); */