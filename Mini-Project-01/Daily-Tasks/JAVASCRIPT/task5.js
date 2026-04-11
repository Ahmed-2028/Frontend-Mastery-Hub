let studentDegree = 75; // Set the student's degree

if (studentDegree >= 90) { // Check the first condition: is it 90 or more?
    console.log("Grade: Excellent"); // Executes if degree is 90+
} else if (studentDegree >= 70) { // If the first failed, check if it's 70 or more
    console.log("Grade: Good"); // Executes if degree is between 70 and 89
} else { // If all previous conditions are false
    console.log("Grade: Failed"); // Executes as a final alternative
}
