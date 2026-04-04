ision 2# Frontend-Mastery-Hub
The ultimate core of the web: Mastering HTML5, CSS3, and Modern JavaScript. Part of Ahmed-2028 Journey.
# 🚀 Frontend Mastery Hub (V028)
### "Turning logic into beautiful interfaces."

This is my dedicated repository for mastering the core of the web: **HTML5**, **CSS3**, and **Modern JavaScript**. 

---

## 🛠 Tech Stack
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) 
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🏆 Learning Roadmap & Progress

| Milestone | Skills | Status | Evidence |
| :--- | :--- | :--- | :--- |
| **Secondary School (Term 2)** | HTML & CSS Basics | ⏳ Active | [View Files](./) |
| **JS Core Fundamentals** | JavaScript Logic | ✅ Completed | [Certificates](./) |
| **Responsive Web Design**| Advanced CSS/Flexbox | ⏳ Learning | [Projects](./) |

---
*Stay consistent. The best is yet to come.* 🚀
# 📅 Day 2: Journey to 2028 | Programming Mastery

Today is the second day of my 30-month roadmap. I am building a strong foundation in JavaScript, covering basics, math, variables, and advanced decision-making logic.

---

## 📖 Chapter 1: Introduction to Programming
Understanding how we talk to computers and the core tools of the web.
* **Programming:** Writing instructions (code) for a computer to perform specific tasks.
* **The Web Trio:** 1. **HTML:** The Framework (Structure).
    2. **CSS:** The Appearance (Style).
    3. **JavaScript:** The Brain (Logic and behavior).

---

## 🧮 Chapter 2: Calculations and Strings
How computers process math and how to join text with numbers.
* **Arithmetic Operators:** `+` (Add), `-` (Sub), `*` (Mult), `/` (Div).
* **Consolidation:** Use the `+` sign to join text and math. 
* **Crucial Rule:** Always put math formulas in **Parentheses `( )`** when joining with text.

---

## 📦 Chapter 3: Variables
Variables are "boxes" used to store, use, and change data.
* **Declaring:** Using the keyword `let` to create a variable. (e.g., `let apple;`)
* **Assigning:** Using the `=` operator to put a value in the box. (e.g., `apple = 10;`)
* **Reassigning:** Updating the value later (e.g., `fish = 7;`).
* **Output Rule:** Do **not** use quotes `" "` when printing a variable's value in `console.log`.

---

## ⚖️ Chapter 4: The `if` Statement (Decision Making)
The `if` statement allows the computer to take a specific path only if a condition is **True**.
* **Syntax:** `if (condition) { process }`
* **Assignment vs Equality:**
    * **`=` (Assignment):** Sets a value to a variable.
    * **`==` (Equality):** Compares two values.
* **Logic:** If the condition is False, the code block is **skipped**.

---

## 🛤️ Chapter 5: The `if...else` Statement (Alternative Paths)
The `if...else` statement provides an alternative path when the first condition is not met.

### 1. Logic:
* The code inside the `else` block runs **only** if the `if` condition is **False**.

### 2. Syntax:
```javascript
if (condition) {
  // Runs if true
} else {
  // Runs if false
} 
// ======================================================
// 📅 Day 3: JavaScript Logical Foundations & Problem Solving (Interactive Enhanced)
// ======================================================

console.log("🚀 Starting Day 3: Mastering Logic & Coercion (Interactive)\n");

// ==========================
// 1️⃣ Explanation & Examples (Type Coercion)
// ==========================
console.log("📖 --- 1. The Logic Engine (Type Coercion) ---");

// Addition (+) Trap
console.log("Addition (10 + '20'):", 10 + "20"); // "1020"

// Math Mode (- , * , /)
console.log("Subtraction ('15' - 5):", "15" - 5);  // 10
console.log("Multiplication ('5' * '2'):", "5" * "2"); // 10

// Equality Levels
console.log("Loose Equality ('5' == 5):", "5" == 5);  // true
console.log("Strict Equality ('5' === 5):", "5" === 5); // false
console.log("");

// ==========================
// 2️⃣ Interactive Logic Challenges
// ==========================

// 🟢 LEVEL 1: Basic Decision
let score = Number(prompt("Level 1: Enter your score (0-100):"));
console.log("--- Level 1: Basic Grading ---");
if (score >= 50) {
    console.log("Result: ✅ Passed\n");
} else {
    console.log("Result: ❌ Failed\n");
}

// 🟡 LEVEL 2: The Coercion Trap
let input = prompt("Level 2: Enter a number as string:");
console.log("--- Level 2: The Coercion Trap ---");
if (input == 100) { 
    console.log("Result: ⚠️ Match by Value, but Type is String!\n");
}

// 🟠 LEVEL 3: Multi-Decision Logic
let grade = Number(prompt("Level 3: Enter your grade (0-100):"));
console.log("--- Level 3: Multi-Decision Logic ---");
if (grade >= 90) {
    console.log("Result: 🏆 Grade: Excellent\n");
} else if (grade >= 75) {
    console.log("Result: 🌟 Grade: Very Good\n");
} else {
    console.log("Result: 📚 Grade: Keep Studying\n");
}

// 🔴 LEVEL 4: Security Shield
let user = prompt("Level 4: Enter username:");
let pass = Number(prompt("Level 4: Enter password:"));
console.log("--- Level 4: Security Shield ---");
if (user === "Admin" && pass === 1234) {
    console.log("Result: 🔐 Access Granted: Identity Verified.\n");
} else {
    console.log("Result: 🚫 Access Denied: Incorrect Credentials.\n");
}

// 💎 LEVEL 5: THE MASTERMIND (Enhanced Interactive)
let balance = prompt("Level 5: Enter your account balance:");
let isAccountActive = confirm("Is your account active? (OK = Yes / Cancel = No)");
console.log("--- Level 5: The Mastermind (Enhanced) ---");

if (isAccountActive && Number(balance) > 0) {
    console.log("Result: 💸 Processing Transaction...");
} else if (isAccountActive && !Number(balance)) { 
    console.log("Result: ❌ Transaction Blocked: Your balance is $0.");
} else {
    console.log("Result: 🚨 Alert: Account is Frozen!");
}

console.log("\n================================================");
console.log("⚖️ Fixed Rules Applied:");
console.log("1. Parentheses () used for math clarity.");
console.log("2. Strict Equality === used for security.");
console.log("3. Step-by-Step tracing for logic mastery.");
console.log("================================================");
console.log("✅ Day 3 Logic Challenges: INTERACTIVE VERSION COMPLETED!");
// ======================================================
// 📅 Day 4: JavaScript Practical Journey (Chapters 6 - 10)
// ======================================================
console.log("🚀 Starting Practical Part: From Decision Making to Data Structures\n");

// --- 📖 Chapter 6: The If...Else Statement ---
// [Basic Decision Making]
console.log("📖 --- Chapter 6: If...Else (Basic) ---");
let score = 75; 

if (score >= 50) {
    console.log(`Result: ✅ Student Passed with ${score}%\n`);
} else {
    console.log("Result: ❌ Student Failed\n");
}

// --- 🛡️ Chapter 9: Logical Operators ---
// [Combining Multiple Conditions: && (AND) & || (OR)]
console.log("🛡️ --- Chapter 9: Logical Operators ---");

let bill = 4000;
let items = 3;
let isVIP = false;

// 12. The Logical AND (&&) - Ampersand
// All conditions must be True
if (bill > 3000 && items > 2) {
    console.log("Discount: ✅ 10% Off Applied! (Both conditions met)");
}

// 13. The Logical OR (||) - Pipe / Vertical Line
// At least one condition must be True
if (bill > 5000 || isVIP) {
    console.log("Shipping: ✅ Free Shipping Awarded!");
} else {
    console.log("Shipping: 🚚 Standard Shipping Fees Apply\n");
}

// --- 📦 Chapter 10: Arrays ---
// [Storing Multiple Values in one Variable]
console.log("📦 --- Chapter 10: Arrays (The Data Container) ---");

// Level 1: Creating & Accessing (The Zero Rule)
let students = ["Ahmed", "Sara", "Yassin"];
console.log("Top Students List:", students);
console.log("First Student (Index 0):", students[0]); 

// Level 2: Editing & Length
students[1] = "Mona"; // Chapter 10: Modifying index 1
console.log("Updated List:", students);
console.log("Total Students in Array:", students.length); 

// --- 💎 The Mastermind: Integrating Ch 6, 9 & 10 ---
console.log("\n💎 --- The Mastermind: Logic + Operators + Arrays ---");

let inputName = prompt("Enter student name to check record:");

// Using Array Index (Ch 10) + Strict Equality (Ch 6) + Logical OR (Ch 9)
if (inputName === students[0]) {
    console.log(`🏆 Result: ${inputName} is the CHAMPION (Rank 1).`);
} else if (inputName === students[1] || inputName === students[2]) {
    console.log(`🌟 Result: ${inputName} is in the TOP 3.`);
} else {
    console.log("📚 Result: Student not in Top 3. Keep Studying!");
}

console.log("\n================================================");
console.log("✅ Chapters 6, 9, & 10: PRACTICAL COMPLETED!");
console.log("================================================");
