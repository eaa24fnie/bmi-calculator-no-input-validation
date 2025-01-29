"use script";

function calculateBMI() {
    let height = parseFloat(prompt("Enter your height in cm:"));
    let weight = parseFloat(prompt("Enter your weight in kg:"));
    
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Please enter valid positive numbers for height and weight.");
        return;
    }
    
    let bmi = weight / ((height / 100) ** 2);
    let category = "";
    
        if (bmi < 16) {
        category = "Severely Underweight";
        } else if (bmi < 18.4) {
        category = "Underweight";
        } else if (bmi < 24.9) {
        category = "Normal Weight";
        } else if (bmi < 29.9) {
        category = "Overweight";
        } else if (bmi < 34.9) {
        category = "Moderately Obese";
        } else if (bmi < 39.9) {
        category = "Severely Obese";
        } else if (bmi > 40) {
        category = "Morbidly Obese";
        }
    
    alert(`Your BMI is ${bmi.toFixed(2)}. Category: ${category}`);
}
