function checkScholarshipEligibility(gpa) {
    if (gpa >= 7.5) {
        console.log("Student is eligible for scholarship.");
    } else {
        console.log("Student is not eligible for scholarship.");
    }
}
let studentGPA = 8.0; 
checkScholarshipEligibility(studentGPA);