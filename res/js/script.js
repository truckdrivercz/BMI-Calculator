document.getElementById("calculate-btn").addEventListener("click", function () {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Převod na metry

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").textContent = "Zadejte platné hodnoty!";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let category = "";

    if (bmi < 18.5) {
        category = "Podváha";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Norma";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Nadváha";
    } else if (bmi >= 30 && bmi < 34.9) {
        category = "Obezita 1. stupně";
    } else if (bmi >= 35 && bmi < 39.9) {
        category = "Obezita 2. stupně (závažná)";
    } else {
        category = "Obezita 3. stupně (těžká)";
    }

    document.getElementById("result").textContent = `Vaše BMI je ${bmi} (${category})`;
});