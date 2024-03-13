//option 1: directly set on the html element
//option-2 add onclick function on the html element
function makeRed(){
    document.body.style.backgroundColor = 'red';
}//option-3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

//option 3 another [we will use this sometimes]
const purpleButton = document.getElementById('purple');
purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple'
}  

//option 4
const pinkButton = document.getElementById('pink');
pinkButton.addEventListener('click', makePink);
 function makePink(){
    document.body.style.backgroundColor = 'pink'
}
//option 4 another
const greenButton = document.getElementById('green');
greenButton.addEventListener('click', function makeGreen(){
document.body.style.backgroundColor = 'green'; })        

//final important
document.getElementById('orange').addEventListener('click', function(){
    document.body.style.backgroundColor = 'orange';
})