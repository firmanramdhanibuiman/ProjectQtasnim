function getAllMonths(callback) {
    let error = false;
    let months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    if (!error) {
        callback(null, months);
    } else {
        callback(new Error("Sorry, data not found"), []);
    }
}

function capitalizeMonths(months, callback) {
    const capitalizedMonths = months.map(month => month.toUpperCase());
    callback(null, capitalizedMonths);
}

// Panggil fungsi getAllMonths dengan callback
getAllMonths((error, months) => {
    if (error) {
        console.error("Error:", error.message);
    } else {
        // Panggil fungsi capitalizeMonths dengan callback
        capitalizeMonths(months, (error, capitalizedMonths) => {
            if (error) {
                console.error("Error:", error.message);
            } else {
                console.log("Capitalized months:", capitalizedMonths);
            }
        });
    }
});
