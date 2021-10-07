//Коли я починав писати цей код,то зімною був мій розум,Паша і Бог...Тепер,тут тільки моя шиза o_0

import { exit } from 'process';
import * as scanner from 'readline-sync';

let date1: Date = new Date();
let currentYear = date1.getFullYear();
let currentMonths = date1.getMonth();
++currentMonths;



let date: string = scanner.question('Enter your date of birth, xx.xx.xxxx\r\n');
let bDay: string = date;

let bDaySp: string[] = bDay.split('.', 3);
let bYear = +bDaySp[2];
let bMonths = +bDaySp[1];
let day = +bDaySp[0];

check(day,bMonths,bDaySp[2]);

let choos: string="";

type();

cons(calc(currentYear, currentMonths, bYear, bMonths));

function calc(cYear: number, cMonth: number, bYear: number, bMonths: number): number {
    let months: number = (currentYear * 12 + currentMonths) - bYear * 12 - bMonths;
    return months;
}

function cons(months: number) {
    console.log("You lived for " + months + " months");
}

function check(day: number, months:number, year:string) {


    if (day > 30 || months > 12 || year.length > 4) {

        console.log("Invalid date");
        exit();

    }

}

function type() {
    choos = scanner.question('You want to enter the second date manually?, write "Y" or "N"\r\n');

    repeat(choos.toLowerCase());
}

function repeat(choos: string) {
    if (choos === 'y') {

        let date2: string = scanner.question('Enter the date you want, xx.xx.xxxx\r\n');
        let cDay: string = date2;

        let cDaySp: string[] = cDay.split('.', 3);
        currentYear = +cDaySp[2];
        currentMonths = +cDaySp[1];
        let day1 = +cDaySp[0]

        check(day1, currentMonths, cDaySp[2]);

    } else if (choos === "n") {

    } else {
        console.log("type something");
        type();
    }
}
