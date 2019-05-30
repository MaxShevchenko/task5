'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
                if (typeof(a) === "string" && typeof(a) != null && 
                typeof(b) != null && a != "" && b != "" && a.length < 50) {
                    console.log("Done");
                    appData.expenses[a] = b;
                } else {
        
                }
        };
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0 ; i < 3 ; i++) {
            let a = prompt("Статья необязательных расходов", "");
                if (typeof(a) != null && a != "") {
                    console.log("Done");
                    appData.optionalExpenses[i] = a;
                } else {
        
                }
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений"),
                percent = +prompt("Под какой процент");
            
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита :" + appData.monthIncome);
        }
    },
    chooseIncome: function() {
      
            let items = promt("Что принесет доп доход? (переислете через запятую)", "");

            if (typeof(items) != "string" || items != "" || items != null) {
                console.log("Вы ввели некорректные данные");
            } else {
                appData.income = items.split(", ");
                appData.income.push(prompt("Может что то еще?"));
                appData.income.sort();
            }
            appData.income.forEach (function (itemmassive, i) {
                alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
            });
    }
};

appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.chooseOptExpenses();
appData.checkSavings();
appData.chooseIncome();

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}