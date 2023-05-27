//window.onload = function() {
//  setInterval(function(){
//    location.reload();
//  }, 8000);
//}


const hrst_1k = 101.09; //часовая ставка охранника 1 категории.

const hrst_st2k = 120; //часовая ставка старшего охранника 2 категории (5 разряд).

const hrst_st4k = 141.00; //часовая ставка старшего охранника 4 категории (старший абк).

const hrst_5k = 161.75; //часовая ставка охранника 5 категории (страгий мобилки).

const hrst_7k = 161.07; //часовая ставка охранника 7 категории (оперативный дежурный).

const hrst_4r = 90.51; //часовая ставка охранника 4 разряда (старое).

const hrst_5r = 101.18; //часовая ставка охранника 5 разряда (старое).

const hrst_str = 141.39; //часовая ставка старшего охранника 4 разряда (старое).


var choice = 1;
var st_vibor = 1;

var staw = 1;

var rpr = 9;
var dpr = 1;


function updateValue() {
  var selectElement = document.getElementById("dols");
  var selectedValue = selectElement.value;
  choice = parseInt(selectedValue);
}
function updateValue1() {
  var selectElement = document.getElementById("prem");
  var selectedValue = selectElement.value;
  rpr = parseInt(selectedValue);
}
function updateValue2() {
  var selectElement = document.getElementById("dprem");
  var selectedValue = selectElement.value;
  dpr = parseInt(selectedValue);
}
function updateValue3() {
  var selectElement = document.getElementById("stas");
  var selectedValue = selectElement.value;
  staw = parseInt(selectedValue);
}


function recalculate() {


if(choice == 1) {st_vibor = hrst_1k}
else if(choice == 2) {st_vibor = hrst_st2k}
else if(choice == 3) {st_vibor = hrst_st4k}
else if(choice == 4) {st_vibor = hrst_5k}
else if(choice == 5) {st_vibor = hrst_7k}
else if(choice == 6) {st_vibor = hrst_4r}
else if(choice == 7) {st_vibor = hrst_5r}
else if(choice == 8) {st_vibor = hrst_str}
else {console.log("Stavka shit, brah")}

const podnst = 0.4
const nst = st_vibor * podnst; //ночная ставка


var hr = 0; //количество часов.
var nhr = 0; //количество ночных часов.
var phr = 0; //количество праздничных часов.


var hrsInput = document.getElementById("hrs");
hr = parseInt(hrsInput.value);
var nhrsInput = document.getElementById("nhrs");
nhr = parseInt(nhrsInput.value);
var prhrsInput = document.getElementById("prhrs");
phr = parseInt(prhrsInput.value);


var rrpr = 0.4;
var ddpr = 0.0; //премия за доп. сложность.
var staaw = 0.0; //% стажа.
const skf = 0.8; //северный коэффициент.
const rkf = 0.7; //районный коэффициент.


//function updateValue() {
//  var selectElement = document.getElementById("prem");
//  var selectedValue = selectElement.value;
 // rpr = parseInt(selectedValue);
//}

if(rpr == 1) {rrpr = 0.0}
else if(rpr == 2) {rrpr = 0.05}
else if(rpr == 3) {rrpr = 0.1}
else if(rpr == 4) {rrpr = 0.15}
else if(rpr == 5) {rrpr = 0.2}
else if(rpr == 6) {rrpr = 0.25}
else if(rpr == 7) {rrpr = 0.3}
else if(rpr == 8) {rrpr = 0.35}
else if(rpr == 9) {rrpr = 0.4}
else {console.log("rpr shit, brah")}

if(dpr == 1) {ddpr = 0.0}
else if(dpr == 2) {ddpr = 0.05}
else if(dpr == 3) {ddpr = 0.1}
else if(dpr == 4) {ddpr = 0.15}
else if(dpr == 5) {ddpr = 0.2}
else if(dpr == 6) {ddpr = 0.25}
else if(dpr == 7) {ddpr = 0.3}
else if(dpr == 8) {ddpr = 0.35}
else if(dpr == 9) {ddpr = 0.4}
else {console.log("dpr shit, brah")}

if(staw == 1) {staaw = 0.0}
else if(staw == 2) {staaw = 0.03}
else if(staw == 3) {staaw = 0.05}
else if(staw == 4) {staaw = 0.07}
else if(staw == 5) {staaw = 0.1}
else {console.log("staw shit, brah")}




var ddh = 0; //дополнительный доход.


//далее расчёт:.
var a1 = st_vibor * hr; //часовая оплата общ.
var s1 = staaw * a1; // стаж * на количество часов
var a2 = nst * nhr; //часовая оплата за ночные часы 
var a3 = st_vibor * phr; //часовая оплата за праздничные часы.

var aa4 = a1 * ddpr; //премия доп сложность.
var a4 = (a1 + a2 + aa4 + s1) * rrpr; //премия от предприятия.
var a5 = (a1 + a2 + a3 + a4 + aa4 + s1) * rkf; //районный коэффициент.
var a6 = (a1 + a2 + a3 + a4 + aa4 + s1) * skf; //северный коэффициент.


var dopdoh = 0;


var pre = a1 + a2 + a3+ aa4 + s1 + a4 + a5 + a6 + dopdoh;
var preout = pre / 100 * 13;
var out = pre - preout;


a1 = a1.toFixed(2);
a2 = a2.toFixed(2);
a3 = a3.toFixed(2);
aa4 = aa4.toFixed(2);
a4 = a4.toFixed(2);
a5 = a5.toFixed(2);
a6 = a6.toFixed(2);
pre = pre.toFixed(2);
preout = preout.toFixed(2);
out = out.toFixed(2);

console.log("Часы" + " - " + a1);
console.log(a2);
console.log(a3);
console.log(aa4);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(pre);
console.log("13%" + " - " + preout);
console.log(choice);
console.log(rrpr);
console.log(ddpr);

document.getElementById("output").value = out;
}


setInterval(function() {
recalculate();
}, 500);
