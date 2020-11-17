let allValue = document.querySelectorAll("button");
let varLeft = document.getElementById("varLeft");
let varMid = document.getElementById("varMid");
let varRight = document.getElementById("varRight");
let result = document.getElementById("result");

let switchCase = false;
let switchComma = false;

allValue.forEach(e => e.addEventListener("click", function() {
    console.log(e.innerHTML);

    if (e.innerHTML == "÷" || e.innerHTML == "+" || e.innerHTML == "-" || e.innerHTML == "x") {   
        varMid.innerHTML = `${e.innerHTML}`;
        switchCase = true;
        switchComma = false;
    }
    else if (e.innerHTML == "C") {
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
    else {
        let a = parseInt(varLeft.innerHTML);
        let b = varMid.innerHTML;
        let c = parseInt(varRight.innerHTML);
        switch (b) {
            case "÷":
                result.innerHTML = a / c;
                break;
            case "+":
                result.innerHTML = a + c;
                break;
            case "-":
                result.innerHTML = a - c;
                break;
            case "x":
                result.innerHTML = a * c;
                break;
        }
    }
}));

function resetValue() {
    varLeft.innerHTML = ``;
    varMid.innerHTML = ``;
    varRight.innerHTML = ``;
    result.innerHTML = ``;
    switchCase = false;
}