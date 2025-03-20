let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const result = document.querySelector("#result"); 

    if (isNaN(height) || height <= 0) {
        result.innerHTML = `⚠ Please enter a valid height`;
        result.style.color = "red";
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = `⚠ Please enter a valid weight`;
        result.style.color = "red";
    } else {
        let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        result.innerHTML = `✅ Your BMI is: <span style="color: #48c6ef">${bmi}</span>`;
        result.style.color = "#222"; // Reset color after valid input
    }
});
