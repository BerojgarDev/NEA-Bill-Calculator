const form = document.getElementById("form");
const categorySelect = document.getElementById("user-category");
const categoryError = document.getElementById("user-category-error");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // ======================
    // 1. Get values
    // ======================
    const presentReading = form.elements["current-units"];
    const previousReading = form.elements["previous-reading"];
    const userCategory = form.elements["user-category"].value;
    const ampereRating = form.elements["ampere-rating"].value;

    const totalUnits = Number(presentReading.value) - Number(previousReading.value);

    // console.log("Total Units:", totalUnits);
    // console.log("Ampere Rating:", ampereRating);
    // console.log("User Category:", userCategory);

    let energyCharge;
    let totalCharge;
    let vatCharge;

    // ======================
    // 2. Validation
    // ======================
    categorySelect.classList.remove("error");
    categoryError.hidden = true;

    if (userCategory === "") {
        categorySelect.classList.add("error");
        categoryError.hidden = false;
        categorySelect.focus();
        return;
    }

    // Set VAT based on category
    if (userCategory === "domestic") {
        vatCharge = 5;
    } else if (userCategory === "commercial") {
        vatCharge = 13;
    }

    // ======================
    // 3. Calculation
    // ======================
    if (ampereRating == "5") {
        const upto20Units = 0;
        const minimumCharge_upto20units = 30;
        const upto30units = 6.5;
        const minimumCharge_upto30units = 50;
        const upto50units = 8;
        const minimumCharge_upto50units = 50;
        const upto100units = 9.5;
        const minimumCharge_upto100units = 75;
        const upto250units = 9.5;
        const minimumCharge_upto250units = 100;
        const above250units = 11;
        const minimumCharge_above250units = 150;

        calculate(
            totalUnits,
            upto20Units,
            upto30units,
            upto50units,
            upto100units,
            upto250units,
            above250units,
            minimumCharge_upto20units,
            minimumCharge_upto30units,
            minimumCharge_upto50units,
            minimumCharge_upto100units,
            minimumCharge_upto250units,
            minimumCharge_above250units
        );
    }
    else if (ampereRating == "15") {
        const upto20Units = 4;
        const minimumCharge_upto20units = 50;
        const upto30units = 6.5;
        const minimumCharge_upto30units = 75;
        const upto50units = 8;
        const minimumCharge_upto50units = 75;
        const upto100units = 9.5;
        const minimumCharge_upto100units = 100;
        const upto250units = 9.5;
        const minimumCharge_upto250units = 125;
        const above250units = 11;
        const minimumCharge_above250units = 175;

        calculate(
            totalUnits,
            upto20Units,
            upto30units,
            upto50units,
            upto100units,
            upto250units,
            above250units,
            minimumCharge_upto20units,
            minimumCharge_upto30units,
            minimumCharge_upto50units,
            minimumCharge_upto100units,
            minimumCharge_upto250units,
            minimumCharge_above250units
        );
    }
    else if (ampereRating == "30") {
        const upto20Units = 5;
        const minimumCharge_upto20units = 75;
        const upto30units = 6.5;
        const minimumCharge_upto30units = 100;
        const upto50units = 8;
        const minimumCharge_upto50units = 100;
        const upto100units = 9.5;
        const minimumCharge_upto100units = 125;
        const upto250units = 9.5;
        const minimumCharge_upto250units = 150;
        const above250units = 11;
        const minimumCharge_above250units = 200;

        calculate(
            totalUnits,
            upto20Units,
            upto30units,
            upto50units,
            upto100units,
            upto250units,
            above250units,
            minimumCharge_upto20units,
            minimumCharge_upto30units,
            minimumCharge_upto50units,
            minimumCharge_upto100units,
            minimumCharge_upto250units,
            minimumCharge_above250units
        );
    }
    else if (ampereRating == "60") {
        const upto20Units = 6;
        const minimumCharge_upto20units = 125;
        const upto30units = 6.5;
        const minimumCharge_upto30units = 125;
        const upto50units = 8;
        const minimumCharge_upto50units = 125;
        const upto100units = 9.5;
        const minimumCharge_upto100units = 150;
        const upto250units = 9.5;
        const minimumCharge_upto250units = 200;
        const above250units = 11;
        const minimumCharge_above250units = 250;

        calculate(
            totalUnits,
            upto20Units,
            upto30units,
            upto50units,
            upto100units,
            upto250units,
            above250units,
            minimumCharge_upto20units,
            minimumCharge_upto30units,
            minimumCharge_upto50units,
            minimumCharge_upto100units,
            minimumCharge_upto250units,
            minimumCharge_above250units
        );
    }
    else {
        console.log("Error: No ampere rating selected");
    }

    // ======================
    // Calculate function (same as yours)
    // ======================
    function calculate(
        totalUnits,
        upto20Units,
        upto30units,
        upto50units,
        upto100units,
        upto250units,
        above250units,
        minimumCharge_upto20units,
        minimumCharge_upto30units,
        minimumCharge_upto50units,
        minimumCharge_upto100units,
        minimumCharge_upto250units,
        minimumCharge_above250units
    ) {
        if (totalUnits <= 20) {
            energyCharge = totalUnits * upto20Units;
            totalCharge = energyCharge + minimumCharge_upto20units;
        }
        else if (totalUnits >= 20 && totalUnits <= 30) {
            energyCharge = 20 * upto20Units + (totalUnits - 20) * upto30units;
            totalCharge = minimumCharge_upto30units + energyCharge;
        }
        else if (totalUnits >= 30 && totalUnits <= 50) {
            energyCharge = 20 * upto20Units + 10 * upto30units + (totalUnits - 20 - 10) * upto50units;
            totalCharge = minimumCharge_upto50units + energyCharge;
        }
        else if (totalUnits >= 50 && totalUnits <= 100) {
            energyCharge = 20 * upto20Units + 10 * upto30units + 20 * upto50units + (totalUnits - 20 - 10 - 20) * upto100units;
            totalCharge = minimumCharge_upto100units + energyCharge;
        }
        else if (totalUnits >= 100 && totalUnits <= 250) {
            energyCharge = 20 * upto20Units + 10 * upto30units + 20 * upto50units + 50 * upto100units + (totalUnits - 20 - 10 - 20 - 50) * upto250units;
            totalCharge = minimumCharge_upto250units + energyCharge;
        }
        else if (totalUnits >= 250) {
            energyCharge = 20 * upto20Units + 10 * upto30units + 20 * upto50units + 50 * upto100units + 150 * upto250units + (totalUnits - 20 - 10 - 20 - 50 - 150) * above250units;
            totalCharge = minimumCharge_above250units + energyCharge;
        }
        else {
            console.log("Error");
            return;
        }

        const first50Units = 20 * upto20Units + 10 * upto30units + 20 * upto50units;
        const vatApplyableCharge = totalCharge - first50Units;
        const vatAmount = vatApplyableCharge * (vatCharge / 100);
        const finalAmount = totalCharge + vatAmount;

        // console.log("Energy Charge:", energyCharge);
        // console.log("Total Charge:", totalCharge);
        // console.log("VAT %:", vatCharge);
        // console.log("VAT Amount:", vatAmount);
        // console.log("Final Amount:", finalAmount);

        document.write(`
            <!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>NEA Electricity Bill</title>
                <link rel="stylesheet" href="style.css">
            </head>

            <body>
                <div class="bill">
                    <h1>NEA Electricity Bill</h1>
                    <hr>
                    <p>Previous Reading: ${previousReading.value}</p>
                    <p>Present Reading: ${presentReading.value}</p>
                    <p>Units: ${totalUnits}</p>
                    <p>Category: ${userCategory}</p>
                    <p>Ampere Rating: ${ampereRating}</p>
                    <hr>
                    <p>Energy Charge: ${energyCharge}</p>
                    <p>Total Charge: ${totalCharge}</p>
                    <p>VAT %: ${vatCharge}</p>
                    <p>VAT free amount(&lt;=50 units): ${first50Units}</p>
                    <p>VAT Amount: ${vatAmount}</p>
                    <p>Final Amount: ${finalAmount}</p>
                </div>
            </body>
            </html>
            `);
    }
});