let arr = new Array();
let error = document.getElementById("Error");
let number_button = document.querySelectorAll("a");
error.style.display = "none";

console.log(number_button);

number_button.forEach(function(a) {
    a.addEventListener("click", function(e) {
        switch (e.target.id) {
            case "numberOne":
                getbutton_value(1);
                break;
            case "numberTwo":
                getbutton_value(2);
                break;
            case "numberThree":
                getbutton_value(3);
                break;
            case "numberFour":
                getbutton_value(4);
                break;
            case "numberFive":
                getbutton_value(5);
                break;
            case "numberSix":
                getbutton_value(6);
                break;
            case "numberSeven":
                getbutton_value(7);
                break;
            case "numberEight":
                getbutton_value(8);
                break;
            case "numberNine":
                getbutton_value(9);
                break;
            case "numberZero":
                getbutton_value(0);
                break;
            case "remove":
                getbutton_value("remove");
                break;
            case "add":
                getbutton_value("add");
                break;
            case "minus":
                getbutton_value("minus");
                break;
            case "division":
                getbutton_value("division");
                break;
            case "multiply":
                getbutton_value("multiply");
                break;
            default:
                console.log("nan from main");
        }
    })
})



document.getElementById("calculateBtn").addEventListener("click", function() {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "+") {
            operating("+", arr, i);
        } else if (arr[i] == "-") {
            operating("-", arr, i);
        } else if (arr[i] == "*") {
            operating("*", arr, i);
        } else if (arr[i] == "/") {
            operating("/", arr, i);
        } else {
            console.log("Choose Operator");
        }

    }

})

function operating(operator, arr, i) {
    let front = arr.slice(0, i);
    let frontString = front.join("");
    let frontNum = parseInt(frontString);
    console.log(frontNum);
    let end = arr.slice(i + 1, arr.length);
    let endString = end.join("");
    let endNum = parseInt(endString);
    if (operator == "+") {
        let finalValue = frontNum + endNum;
        document.getElementById("textFinal").innerHTML = finalValue;
        arr.length = 0;
        arr[0] = finalValue;
    } else if (operator == "-") {
        let finalValue = frontNum - endNum;
        document.getElementById("textFinal").innerHTML = finalValue;
        arr.length = 0;
        arr[0] = finalValue;
    } else if (operator == "*") {
        let finalValue = frontNum * endNum;
        document.getElementById("textFinal").innerHTML = finalValue;
        arr.length = 0;
        arr[0] = finalValue;
    } else if (operator == "/") {
        let finalValue = frontNum / endNum;
        document.getElementById("textFinal").innerHTML = finalValue.toFixed(3);
        arr.length = 0;
        arr[0] = finalValue;
    } else {
        console.log("choose operator");
    }

}

function getbutton_value(input) {
    switch (input) {
        case 1:
            arr.push(1);
            document.getElementById("textFinal").innerHTML = arr.join("");
            error.style.display = "none";
            break;
        case 2:
            arr.push(2);
            document.getElementById("textFinal").innerHTML = arr.join("");
            error.style.display = "none";
            break;
        case 3:
            arr.push(3);
            document.getElementById("textFinal").innerHTML = arr.join("");
            error.style.display = "none";
            break;
        case 4:
            arr.push(4);
            document.getElementById("textFinal").innerHTML = arr.join("");
            error.style.display = "none";
            break;
        case 5:
            arr.push(5);
            document.getElementById("textFinal").innerHTML = arr.join("");
            error.style.display = "none";
            break;
        case 6:
            arr.push(6);
            document.getElementById("textFinal").innerHTML = arr.join("");
            error.style.display = "none";
            break;
        case 7:
            arr.push(7);
            document.getElementById("textFinal").innerHTML = arr.join("");
            error.style.display = "none";
            break;
        case 8:
            arr.push(8);
            document.getElementById("textFinal").innerHTML = arr.join("");
            error.style.display = "none";
            break;
        case 9:
            arr.push(9);
            document.getElementById("textFinal").innerHTML = arr.join("");
            error.style.display = "none";
            break;
        case 0:
            arr.push(0);
            document.getElementById("textFinal").innerHTML = arr.join("");
            error.style.display = "none";
            break;
        case "remove":
            if (arr.length >= 2) {
                arr.pop();
                document.getElementById("textFinal").innerHTML = arr.join("");
            } else {
                document.getElementById("textFinal").innerHTML = "0";
                arr.length = 0;
            }
            break;
        case "add":
            if (arr.length == 0) {
                error.style.display = "block";
            } else {
                arr.push("+");
                document.getElementById("textFinal").innerHTML = arr.join("");
                error.style.display = "none";

            }
            break;
        case "minus":
            if (arr.length == 0) {
                error.style.display = "block";
            } else {
                arr.push("-");
                document.getElementById("textFinal").innerHTML = arr.join("");
                error.style.display = "none";

            }
            break;
        case "multiply":
            if (arr.length == 0) {
                error.style.display = "block";
            } else {
                arr.push("*");
                document.getElementById("textFinal").innerHTML = arr.join("");
                error.style.display = "none";

            }
            break;
        case "division":
            if (arr.length == 0) {
                error.style.display = "block";
            } else {
                arr.push("/");
                document.getElementById("textFinal").innerHTML = arr.join("");
                error.style.display = "none";

            }
            break;
        default:
            console.log("nan from function");
    }

}