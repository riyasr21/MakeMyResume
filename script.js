/* jshint esversion: 6 */

function addNewacQuField() {
console.log("Adding new field");

  let newNode=document.createElement('textarea')
  newNode.classList.add('form-control')
  newNode.classList.add('acQuField')
  newNode.classList.add('mt-2')
  newNode.setAttribute('placeholder', 'Enter here')

  let acQuob = document.getElementById("acQu");
  let acQuAddButtonOb=document.getElementById("acQuAddButton");

  acQuob.insertBefore(newNode,acQuAddButtonOb)
}
function addNewjReSkField(){
  //console.log("Adding new field");

  let newNode=document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('jReSkField');
  newNode.classList.add("mt-2");
  newNode.setAttribute('placeholder', 'Enter here');

  let jReSkob = document.getElementById("jReSk");
  let jReSkAddButtonOb=document.getElementById("jReSkAddButton");

  jReSkob.insertBefore(newNode,jReSkAddButtonOb);
}
function addNewmaCoField(){
  //console.log("Adding new field");

  let newNode=document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('maCoField');
  newNode.classList.add("mt-2");
  newNode.setAttribute('placeholder', 'Enter here');

  let maCoob = document.getElementById("maCo");
  let maCoAddButtonOb=document.getElementById("maCoAddButton");

  maCoob.insertBefore(newNode,maCoAddButtonOb);
}
function addNewachCerField(){
  //console.log("Adding new field");

  let newNode=document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('achCerField');
  newNode.classList.add("mt-2");
  newNode.setAttribute('placeholder', 'Enter here');

  let achCerob = document.getElementById("achCer");
  let achCerAddButtonOb=document.getElementById("achCerAddButton");

  achCerob.insertBefore(newNode,achCerAddButtonOb);
}



function addNewknOfField(){
  //console.log("Adding new field");
  let newNode=document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('knOfField');
  newNode.classList.add("mt-2");
  newNode.setAttribute('placeholder', 'Enter here');
  newNode.setAttribute("rows",1);


  let knOfob = document.getElementById("knOf");
  let knOfAddButtonOb=document.getElementById("knOfAddButton");

  knOfob.insertBefore(newNode,knOfAddButtonOb);
}

function addNewpeSkField(){
  //console.log("Adding new field");
  let newNode=document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('peSkField');
  newNode.classList.add("mt-2");
  newNode.setAttribute('placeholder', 'Enter here');
  newNode.setAttribute("rows",1);


  let peSkob = document.getElementById("peSk");
  let peSkAddButtonOb=document.getElementById("peSkAddButton");

  peSkob.insertBefore(newNode,peSkAddButtonOb);
}
function addNewhoBbField(){
  //console.log("Adding new field");
  let newNode=document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('hoBbField');
  newNode.classList.add("mt-2");
  newNode.setAttribute('placeholder', 'Enter here');
  newNode.setAttribute("rows",1);


  let hoBbob = document.getElementById("hoBb");
  let hoBbAddButtonOb=document.getElementById("hoBbAddButton");

  hoBbob.insertBefore(newNode,hoBbAddButtonOb);
}
function addNewyRefField(){
  //console.log("Adding new field");
  let newNode=document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('yRefField');
  newNode.classList.add("mt-2");
  newNode.setAttribute('placeholder', 'Enter here');
  newNode.setAttribute("rows",1);


  let yRefob = document.getElementById("yRef");
  let yRefAddButtonOb=document.getElementById("yRefAddButton");

  yRefob.insertBefore(newNode,yRefAddButtonOb);
}
function generatePDF(){
  const ele  = document.getElementById("cv-template");
  html2pdf()
  .from(ele)
  .save();
  var myBtn = document.getElementById("dwnlBtn");
  myBtn.style.display = 'none';


}


function generateResume(){

let nameField=document.getElementById("nameField").value;
let nameT1 = document.getElementById("nameT");
nameT1.innerHTML=nameField;

document.getElementById('objective').innerHTML=document.getElementById("object").value;
document.getElementById('linkedinT').href=document.getElementById("linkedinProfileField").value;
document.getElementById('linkedinT').innerHTML=document.getElementById("linkedinProfileField").value;
document.getElementById("emailidT").href = document.getElementById("emailidT").href.replace("PLACEHOLDER", document.getElementById("emailaddressField").value);
document.getElementById("emailidT").innerHTML = document.getElementById("emailaddressField").value;
document.getElementById('contactNoT').innerHTML=document.getElementById("contactFieldom").value;
document.getElementById("githubT").href = document.getElementById("githubProfileField").value;
document.getElementById("githubT").innerHTML = document.getElementById("githubProfileField").value;


let knowledge = document.getElementsByClassName("knOfField");
let str = " ";
for(let e of knowledge){
  str = str + `<li> ${e.value} </li>`;
}
document.getElementById("list1").innerHTML= str;

let personal = document.getElementsByClassName(" peSkField");
let str1 = " ";
for(let e of personal){
  str1 = str1 + `<li> ${e.value} </li>`;
}
document.getElementById("list2").innerHTML= str1;

let hobbiess = document.getElementsByClassName("hoBbField");
let str2 = " ";
for(let e of hobbiess){
  str2 = str2 + `<li> ${e.value} </li>`;
}
document.getElementById("list3").innerHTML= str2;


let resf = document.getElementsByClassName("yRefField");
let str3 = " ";
for(let e of resf){
  str3 = str3 + `<li> ${e.value} </li>`;
}
document.getElementById("list4").innerHTML= str3;




let acure = document.getElementsByClassName("acQuField");
let str4 = " ";
for(let e of acure){
  str4 = str4 + `<li> ${e.value} </li>`;
}
document.getElementById("list5").innerHTML= str4;

let jut = document.getElementsByClassName("jReSkField");
let str5 = " ";
for(let e of jut){
  str5 = str5 + `<li> ${e.value} </li>`;
}
document.getElementById("list6").innerHTML= str5;

let tut = document.getElementsByClassName("maCoField");
let str6 = " ";
for(let e of tut){
  str6 = str6 + `<li> ${e.value} </li>`;
}
document.getElementById("list7").innerHTML= str6;

let yut = document.getElementsByClassName("achCerField");
let str7 = " ";
for(let e of yut){
  str7 = str7 + `<li> ${e.value} </li>`;
}
document.getElementById("list8").innerHTML= str7;
document.getElementById("cv-form").style.display = 'none';
document.getElementById("cv-template").style.display = 'block';

}
