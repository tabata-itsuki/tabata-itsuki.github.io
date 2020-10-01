'use strict';

{
const result = document.getElementById('result');
const btns = document.getElementsByClassName('btn');
const clear = document.getElementById('clear');
const enter = document.getElementById('enter');
const sum = document.getElementById('sum');
const difference = document.getElementById('difference');
const multiplication = document.getElementById('multiplication');
const division = document.getElementById('division');
let numbers = [];
let judge = null;
let count = -1;

//計算式
function sumFunction(NumF, NumT) {
    return NumF + NumT;
};
function differenceFunction(NumF, NumT) {
    return NumF - NumT;
};
function multiplicationFunction(NumF, NumT) {
    return NumF * NumT;
};
function divisionFunction(NumF, NumT) {
    return NumF / NumT;
};

//計算方法判定
function judgecalculator(){
    if(judge === "sum"){
        result.textContent = String(sumFunction(numbers[0],numbers[1]));
    } else if(judge === 'difference'){
        result.textContent =  String(differenceFunction(numbers[0],numbers[1]));
    } else if(judge === 'multiplication'){
        result.textContent =  String(multiplicationFunction(numbers[0],numbers[1]));
    } else if(judge === 'division'){
        result.textContent =  String(divisionFunction(numbers[0],numbers[1]));
    } 
};

//途中計算
function fragmentCalculator(){
    if (judge !== null){
        judgecalculator()
        numbers = [];
        numbers.push(Number(result.textContent));
    };
};

function basicSystem(){
    count = -1;
    numbers.push(Number(result.textContent));
};

// クリックイベント
[...btns].forEach(bt=>{
    bt.addEventListener('click',(e)=>{
        count +=　1;
        if(count > 0){
            result.textContent = `${10*Number(result.textContent) + Number(bt.textContent)}`;
        } else {
            result.textContent = bt.textContent;
        };
    });
});

// sum.onclick = function() {
//     basicSystem();
//     fragmentCalculator();
//     judge = "sum";

// };
$("#sum").on("click", function() {
    basicSystem();
    fragmentCalculator();
    judge = "sum";
  });
difference.onclick = function() {
    basicSystem();
    fragmentCalculator();
    judge = "difference";
};
multiplication.onclick = function() {
    basicSystem();
    fragmentCalculator();
    judge = "multiplication";
};
division.onclick = function() {
    basicSystem();
    fragmentCalculator();
    judge = "division";
};
clear.onclick = function() {
    count = -1;
    result.textContent = '0';
    judge = null;
    numbers = [];
}


enter.onclick = function() {
    basicSystem();
    judgecalculator();
    numbers = [];
    judge = null;
};
// ．．．．クリックイベント

}   
