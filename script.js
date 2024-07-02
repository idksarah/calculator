let displayValue = document.querySelector('.display'); 

function display (input) {
  displayValue.textContent = input;
}

function addition(a,b){
  ans = Number(a) + Number(b);
  display(ans);
}

function subtraction(a,b){
  ans = Number(a) -Number(b);
  display(ans);
}

function multiplication(a,b){
  ans = Number(a) * Number(b);
  display(ans);
}

function division(a,b){
  if(b==0){
    ans =("can't do that silly goose :p");
    display(ans);
  } else {
    ans = Number(a)/Number(b);
    display(ans);
  }
}

let a ='';
let b =''
let ans

function operate(firstInput, secondInput){
  a = firstInput;
  b = secondInput;
  if(add){
    addition(a,b);
    add=false;
  } else if(sub){
    subtraction(a,b);
    sub=false;
  } else if (mul){
    multiplication(a,b);
    mul=false;
  } else if(div) {
    division(a,b);
    div=false;
  } else {
    display(a);
  }
  console.log(ans);
}

let add,sub,mul,div;
let operator = false;


let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');

let zero = document.querySelector('.zero');
let decimal = document.querySelector('.decimal');
let percentage = document.querySelector('.percentage');

let addButton = document.querySelector('.addition'); //have to match the button value to the operatiosn within the operate; ie.m ake this == + some how idk;
addButton.addEventListener('click', () => {
  add=true;
  display('+');
});

let subButton = document.querySelector('.subtraction');
subButton.addEventListener('click', () => {
  sub=true;
  display('-');
});

let mulButton = document.querySelector('.multiplication');
mulButton.addEventListener('click', () => {
  mul=true;
  display('x');
});

let divButton = document.querySelector('.division');
divButton.addEventListener('click', () => {
  div=true;
  display('/');
});

let operatorContainer = document.querySelector('.operators');
operatorContainer.addEventListener('click', () => {
  operator = true;
});

percentage.addEventListener('click', ()=> {
  if(operator==false){
    a = '0.' + a;
    display(a);
  } else {
    b = '0.' + b;
    display(b);
  }
});

//sorry god for the following code

  one.addEventListener('click', ()=> {
    if(operator==false){
      a +="1";
      display(a);
    } else if(b != '' && b != "-") {
      b = '1';
      display(b);
    }else {
      b+="1";
      display(b);
    }
  });
  two.addEventListener('click', ()=> {
    if(operator==false){
      a +="2";
      display(a);
    } else if(b != '' && b != "-") {
      b = '2';
      display(b);
    } else{
      b +="2";
      display(b);
    }
  });
  three.addEventListener('click', ()=> {
    if(operator==false){
      a +="3";
      display(a);
    } else if(b != '' && b != "-") {
      b = '3';
      display(b);
    } else{
      b +="3";
      display(b);
    }
  });
  four.addEventListener('click', ()=> {
    if(operator==false){
      a +="4";
      display(a);
    } else if(b != '' && b != "-") {
      b = '4';
      display(b);
    } else{
      b +="4";
      display(b);
    }
  });
  five.addEventListener('click', ()=> {
    if(operator==false){
      a +="5";
      display(a);
    } else if(b != '' && b != "-") {
      b = '5';
      display(b);
    } else{
      b +="5";
      display(b);
    }
  });
  six.addEventListener('click', ()=> {
    if(operator==false){
      a +="6";
      display(a);
    } else if(b != '' && b != "-") {
      b = '6';
      display(b);
    } else{
      b +="6";
      display(b);
    }
  });
  seven.addEventListener('click', ()=> {
    if(operator==false){
      a +="7";
      display(a);
    } else if(b != '' && b != "-") {
      b = '7';
      display(b);
    } else{
      b +="7";
      display(b);
    }
  });
  eight.addEventListener('click', ()=> {
    if(operator==false){
      a +="8";
      display(a);
    } else if(b != '' && b != "-") {
      b = '8';
      display(b);
    } else{
      b +="8";
      display(b);
    }
  });
  nine.addEventListener('click', ()=> {
    if(operator==false){
      a +="9";
      display(a);
    } else if(b != '' && b != "-") {
      b = '9';
      display(b);
    } else{
      b +="9";
      display(b);
    }
  });
  zero.addEventListener('click', ()=> {
    if(operator==false){
      a +="0";
      display(a);
    } else if(b != '' && b != "-") {
      b = '0';
      display(b);
    } else{
      b +="0";
      display(b);
    }
  });
  decimal.addEventListener('click', ()=> {
    if(operator==false){
      a +=".";
      display(a);
    } else if(b != '' && b != "-") {
      b = '.'; //this isn't right i don't think but idc tbh
      display(b);
    } else{
      b +=".";
      display(b);
    }
  }); //i think when uadd the decimal like 1.4 4 overwrites 1

//assigning values to a and b


/*if(a!='' && (add == true || sub == true || mul == true || div == true)){
  first = false;
  second = true; //could toggle? need to add that later so the calculator can work more than once
} //uidik where to put this but anyway

//reset a and b every time; store last in a last
//requires an initial click before everything registers but we'll fihguire that out later*/

let equals = document.querySelector('.equals');
equals.addEventListener('click', ()=> {
  operate(a,b);
  operator = true;
  a = ans;
})

let clear = document.querySelector('.clear')
clear.addEventListener('click', () => {
  a ='';
  b ='';
  operator = false;
  ans = '';
  display(ans);
});

let plusMinus = document.querySelector('.plusMinus');
plusMinus.addEventListener('click', ()=> {
  if(operator==false){
    if(Array.from(a)[0] =='-'){
      a = a.substring(1)
    } else {
      a = '-' + a;
    }
  } else {
    if(Array.from(b)[0] =='-'){
      b = b.substring(1)
    } else {
      b = '-' + b;
    }
  }
})

//i think there's an issue with subtraction but idk how
//needs to rewrite answer on screen
//should be able to start an entirely new operation
