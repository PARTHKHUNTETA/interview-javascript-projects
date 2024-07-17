function calculateBmi() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    let heightM = height / 100
    var bmi = (weight / (heightM * heightM));
    document.getElementById("heading").innerHTML = "Your BMI is :";

    if (bmi < 18.5) {
        document.getElementById("result").style.color = "yellow";
        document.getElementById("result").innerHTML = bmi.toFixed(2) + " (Underweight)";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = bmi.toFixed(2) + " (Normal)";
    }
    else if (bmi >= 25 && bmi < 30) {
        document.getElementById("result").style.color = "orange";
        document.getElementById("result").innerHTML = bmi.toFixed(2) + " (Overweight)";
    }
    else if (bmi >= 30) {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = bmi.toFixed(2) + " (Obese)";
    }
    else {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = bmi.toFixed(2) + " (Invalid)";
    }

}