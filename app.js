function getNum(num){
    console.log(num)
document.getElementById('result').value +=num;
}

//for C screen clear krny k liye
function clearScreen()
{
document.getElementById('result').value ="";
}

//for AC digit screen sy remove krny k liye
function removeNum(){

    var rem = document.getElementById('result').value
    document.getElementById('result').value = document.getElementById('result').value.slice(0,rem.length-1);
    //console.log(document.getElementById('result').value.slice(0,rem.length-1)) 

}
//for answers
function getanswer(){
    document.getElementById('result').value = eval(document.getElementById('result').value)

console.log(document.getElementById('result').value);
}

function getRes(){
    var inputExp = document.getElementById('result').value
    console.log(inputExp)
    //var value = "Math.PI"
    //document.getElementById('result').value  = value.replace("Math.PI"," π ")
}

  