// script.js

function calculateFee() {
    const age = document.getElementById("age").value;
    let fee = 0;

    if (age < 14) {
        fee = 300;
    } else if (age >= 15) {
        fee = 600;
    }

    document.getElementById("feeDisplay").textContent = "Fee: Rs. " + fee;
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const contact = document.getElementById("contact").value;
    const workshop = document.getElementById("workshop").value;
    const fee = (age < 14) ? 300 : 600;

    const confirmationMessage = `
        Thank you, ${name}! You have registered for ${workshop}.
        Your age: ${age}. The fee is Rs. ${fee}.
        Please contact us at ${contact} for further details.
    `;

    document.getElementById("confirmationDetails").textContent = confirmationMessage;
    document.getElementById("confirmationMessage").classList.remove("hidden");
    document.getElementById("registrationForm").classList.add("hidden");
});
