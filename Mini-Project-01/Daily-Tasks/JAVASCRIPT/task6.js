let userAge = 25; // Define the user's age
let hasPromoCode = true; // Check if the user has a discount code

// Using OR (||): One condition must be true
if (userAge < 18 || hasPromoCode == true) { // If user is a minor OR has a code
    console.log("Discount Applied!"); // Runs if at least one part is true
}

let totalBill = 4000; // Define the total purchase amount
let isVIP = false; // Check if the user is a VIP member

// Using AND (&&): All conditions must be true
if (totalBill >= 3000 && isVIP == true) { // If bill is 3000+ AND user is VIP
    console.log("VIP Gift Added!"); // Only runs if BOTH are true
} else {
    console.log("Standard Shipping Applied."); // Runs because one condition (isVIP) failed
}
