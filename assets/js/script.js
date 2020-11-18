let allValue = document.querySelectorAll("button");
let varLeft = document.getElementById("varLeft");
let varMid = document.getElementById("varMid");
let varRight = document.getElementById("varRight");
let result = document.getElementById("result");
let lastResult;
let lastResultM2;
let resultCount = 0;

let switchCase = false;
let switchComma = false;
let isStop = false;

// allValue.forEach(e => e.addEventListener("click", function() {
//     console.log(e.innerHTML);
//     let a = e.innerHTML;
//     if (a == "÷" || a == "+" || a == "-" || a == "x") {   
//         varMid.innerHTML = `${a}`;
//         switchCase = true;
//         switchComma = false;
//     }
//     else if (a == "C") {
//         resetValue();
//     }
//     else if (!switchCase && e.innerHTML != "=" && e.innerHTML != ",") {
//         varLeft.innerHTML += `${e.innerHTML}`;
//     }
//     else if (switchCase && e.innerHTML != "=" && e.innerHTML != ","){
//         varRight.innerHTML += `${e.innerHTML}`;
//     }
//     else if (!switchComma && e.innerHTML == ",") {
//         if (!switchCase) {
//             varLeft.innerHTML += `${e.innerHTML}`;
//             switchComma = true;
//         }
//         else {
//             varRight.innerHTML += `${e.innerHTML}`;
//             switchComma = true;
//         }    
//     }
//     else if (e.innerHTML == "=") {
//         let a = parseFloat(varLeft.innerHTML.replace(",", "."));
//         let b = varMid.innerHTML;
//         let c = parseFloat(varRight.innerHTML.replace(",", "."));
//         let d;
//         switch (b) {
//             case "÷":
//                 d =  a / c;
//                 result.innerHTML = d.toString().replace(".", ",");
//                 break;
//             case "+":
//                 d =  a + c;
//                 result.innerHTML = d.toString().replace(".", ",");
//                 break;
//             case "-":
//                 d =  a - c;
//                 result.innerHTML = d.toString().replace(".", ",");
//                 break;
//             case "x":
//                 d =  a * c;
//                 result.innerHTML = d.toString().replace(".", ",");
//                 break;
//         }
//         lastResult = result;
//     }
// }));
allValue.forEach(e => e.addEventListener("click", () => {
    let v = e.innerHTML;
    switch (v) {
        case "÷":
            clickOperator(v);
            break;
        case "+":
            clickOperator(v);
            break;
        case "-":
            clickOperator(v);
            break;
        case "x":
            clickOperator(v);
            break;
        case "C":
            resetValue();
            break;
        case ",":
            if (!switchComma) {
                if (!switchCase) {
                    varLeft.innerHTML += v;
                    switchComma = true;
                }
                else {
                    varRight.innerHTML += v;
                    switchComma = true;
                }
            }
            break;
        case "=":
            let a = parseFloat(varLeft.innerHTML.replace(",", "."));
            let b = varMid.innerHTML;
            let c = parseFloat(varRight.innerHTML.replace(",", "."));
            let d;
            switch (b) {
                case "÷":
                    d =  a / c;
                    break;
                case "+":
                    d =  a + c;
                    break;
                case "-":
                    d =  a - c;
                    break;
                case "x":
                    d =  a * c;
                    break;
            }
            result.innerHTML = d.toString().replace(".", ",");
            
            if (resultCount != 1) {
                resultCount++;
                console.log(resultCount);

            }
            else {
                console.log("ss" + resultCount);
                lastResultM2 = lastResultM1;
                resultCount = 0;
            }

            lastResultM1 = result.innerHTML;
            
            break;
        case "x²":
            (!switchCase) ? varLeft.innerHTML = varLeft.innerHTML * varLeft.innerHTML : varRight.innerHTML = varRight.innerHTML * varRight.innerHTML;
            break;
        case "M1":
            if (typeof lastResultM1 !== "undefined") {
                (!switchCase) ? varLeft.innerHTML = lastResultM1 : varRight.innerHTML = lastResultM1;
            } 
            break;
        case "M2":
            if (typeof lastResultM2 !== "undefined") {
                (!switchCase) ? varLeft.innerHTML = lastResultM2 : varRight.innerHTML = lastResultM2;
            }
            break;
        default:
            (!switchCase) ? varLeft.innerHTML += v : varRight.innerHTML += v;
            break;
    }
}))

function clickOperator(v) {
    varMid.innerHTML = v;
    switchCase = true;
    switchComma = false;
}

function resetValue() {
    varLeft.innerHTML = ``;
    varMid.innerHTML = ``;
    varRight.innerHTML = ``;
    result.innerHTML = ``;
    switchCase = false;
    switchComma = false;
}