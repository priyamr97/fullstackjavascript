function addnumber() {
    var firstNumber=parseInt(document.getElementById("firstnumber").value);
    if (firstNumber==="   ") {
        alert("field is required");
       return;
    }

    var secondNumber=parseInt(document.getElementById("secondnumber").value);
    if (secondNumber===" ") {
        alert("field is required");
        return;
    }
    document.getElementById('result').value=firstNumber+secondNumber;
    if(isNaN(firstNumber)){
        alert('please enter  number')
    }
    if(isNaN(secondNumber)){
        alert('please enter number')
    }
   
   
}