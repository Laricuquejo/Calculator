let firstNumber = null;
let secondNumber = null;
let operator = null;
let result = null;
let text = null;


function resultTitle() {

    if (document.firstNumber != null) {
        console.log(document.firstNumber);
        document.text = document.firstNumber;
    }

    if (document.operator != null) {
        console.log(document.operator);
        document.text = document.text + document.operator;
    }

    if (document.secondNumber != null) {
        console.log(document.secondNumber);
        document.text = document.text + document.secondNumber;
    }

    if (document.result != null) {
        console.log( "this is the result" + document.result);
        document.text = document.text + "=" + document.result;
    }

    
    console.log("im text" + document.text)
    document.getElementById("textResult").innerHTML = document.text;
}

function numClick(obj) {
    // if firstnumber != null  && operator != null && secondnumbre == null save simbol
    if ((document.firstNumber != null) && (document.operator != null) && (document.secondNumber == null)) {
        console.log("firstNumber equals not null, secondNumber equals null");
        document.secondNumber = $(obj).text();
        console.log("firstNumber =" + document.firstNumber);
        console.log("secondNumber = " + document.secondNumber);
    }

    // if firstNumber != null save simbol 
    if ((document.firstNumber != null) && (document.operator == null)) {
        console.log("not null")
        document.operator = $(obj).text();
        console.log(document.operator)
        
    }

    if (document.firstNumber == null) {
        console.log("null");
        document.firstNumber = $(obj).text();
        console.log("firstnumber = " + document.firstNumber);
    }

    new resultTitle()
}

// if first number != null && secondnumber != null sum the numbers

function calculator(obj) {
    if ((document.firstNumber != null) && (document.secondNumber != null)) {
        console.log("firstNumber not null, secondNumber not null");
        document.result = eval(document.firstNumber + document.operator + document.secondNumber);
        console.log(result);
        new resultTitle()
        // let firstInteger = parseInt(document.firstNumber)
        // console.log(firstInteger)
        // let secondInteger = parseInt(document.secondNumber)
        // console.log(secondInteger)
        // console.log(firstInteger + secondInteger )


    }
}



function reset(obj) {
    document.firstNumber = null 
    document.secondNumber = null
    document.operator = null
    document.text = null
    document.result = null
    new resultTitle()
    document.getElementById("textResult").innerHTML = "Calculator";
}

// if firstnumber != null && secondnumber != null && operator != null && result != null show the result


// function sumar(obj) {
//     if ((document.firstNumber != null) && (document.secondNumber != null)) {
//         console.log("firstNumber not null, secondNumber not null");
//         let result = parseInt(document.firstNumber) + parseInt(document.secondNumber);
//         console.log(result);
//         // let firstInteger = parseInt(document.firstNumber)
//         // console.log(firstInteger)
//         // let secondInteger = parseInt(document.secondNumber)
//         // console.log(secondInteger)
//         // console.log(firstInteger + secondInteger )


//     }
// }
