document.getElementById("calculate-btn").addEventListener("click", function () {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Převod cm na metry
    const gender = document.getElementById("gender").value;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0 || !gender) {
        document.getElementById("result").textContent = "Zadejte platné hodnoty!";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let category = "";

    if (gender === "male") {
        // Hodnocení BMI pro muže
        if (bmi < 20) {
            category = "Podváha";
        } else if (bmi >= 20 && bmi < 25) {
            category = "Norma";
        } else if (bmi >= 25 && bmi < 30) {
            category = "Nadváha";
        } else if (bmi >= 30 && bmi < 35) {
            category = "Obezita 1. stupně";
        } else if (bmi >= 35 && bmi < 40) {
            category = "Obezita 2. stupně (závažná)";
        } else {
            category = "Obezita 3. stupně (těžká)";
        }
    } else if (gender === "female") {
        // Hodnocení BMI pro ženy
        if (bmi < 19) {
            category = "Podváha";
        } else if (bmi >= 19 && bmi < 24) {
            category = "Norma";
        } else if (bmi >= 24 && bmi < 29) {
            category = "Nadváha";
        } else if (bmi >= 29 && bmi < 34) {
            category = "Obezita 1. stupně";
        } else if (bmi >= 34 && bmi < 39) {
            category = "Obezita 2. stupně (závažná)";
        } else {
            category = "Obezita 3. stupně (těžká)";
        }
    }

    document.getElementById("result").textContent = `Vaše BMI je ${bmi} (${category})`;
});