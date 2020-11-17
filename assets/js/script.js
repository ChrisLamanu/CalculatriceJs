let allValue = document.querySelectorAll("button");
let varLeft = document.getElementById("varLeft");
let varMid = document.getElementById("varMid");
let varRight = document.getElementById("varRight");
let result = document.getElementById("result");
let lastResult;

let switchCase = false;
let switchComma = false;
let isStop = false;

allValue.forEach(e => e.addEventListener("click", function() {
    console.log(e.innerHTML);
    let a = e.innerHTML;
    if (a == "÷" || a == "+" || a == "-" || a == "x") {   
        varMid.innerHTML = `${a}`;
        switchCase = true;
        switchComma = false;
    }
    else if (a == "C") {
        resetValue();
    }
    else if (!switchCase && e.innerHTML != "=" && e.innerHTML != ",") {
        varLeft.innerHTML += `${e.innerHTML}`;
    }
    else if (switchCase && e.innerHTML != "=" && e.innerHTML != ","){
        varRight.innerHTML += `${e.innerHTML}`;
    }
    else if (!switchComma && e.innerHTML == ",") {
        if (!switchCase) {
            varLeft.innerHTML += `${e.innerHTML}`;
            switchComma = true;
        }
        else {
            varRight.innerHTML += `${e.innerHTML}`;
            switchComma = true;
        }    
    }
    else if (e.innerHTML == "=") {
        let a = parseFloat(varLeft.innerHTML.replace(",", "."));
        let b = varMid.innerHTML;
        let c = parseFloat(varRight.innerHTML.replace(",", "."));
        let d;
        switch (b) {
            case "÷":
                d =  a / c;
                result.innerHTML = d.toString().replace(".", ",");
                break;
            case "+":
                d =  a + c;
                result.innerHTML = d.toString().replace(".", ",");
                break;
            case "-":
                d =  a - c;
                result.innerHTML = d.toString().replace(".", ",");
                break;
            case "x":
                d =  a * c;
                result.innerHTML = d.toString().replace(".", ",");
                break;
        }
        lastResult = result;
    }
}));

function resetValue() {
    varLeft.innerHTML = ``;
    varMid.innerHTML = ``;
    varRight.innerHTML = ``;
    result.innerHTML = ``;
    switchCase = false;
    switchComma = false;
}