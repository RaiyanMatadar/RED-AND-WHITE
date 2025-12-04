function Grade() {

    let marks = Number(prompt("Enter your marks:"));

    if (marks >= 90 && marks <= 100) {
        console.log("Grade: A")
    } else if (marks >= 80 && marks < 90) {
        console.log("Grade: B")
    } else if (marks >= 70 && marks < 80) {
        console.log("Grade: C")
    } else if (marks >= 60 && marks < 70) {
        console.log("Grade: D")
    } else if (marks >= 0 && marks < 60) {
        console.log("Grade: F")
    } else {
        console.log("Invalid marks entered");
    }
}

function interestBill() {

    let Principal = Number(prompt("Enter Amount : "))

    let InterestRate = Number(prompt("Enter Interest Rate : "))

    let TimePeriod = Number(prompt("Enter Time in Years : "))

    let interest = (Principal * InterestRate * TimePeriod) / 100

    console.log("Interest is:", interest)
}

function changePassword() {

    let oldPassword = prompt("Enter your current password : ")

    let newPassword = prompt("Enter your new password : ")

    let confirmPassword = prompt("Confirm your new password : ")

    if (newPassword === confirmPassword) {
        console.log("Password changed successfully!")
    } else {
        console.log("New password and confirm password are not match.")
    }
}

let choice;

do {

    console.log("1.Grade")
    console.log("2.Interest Bill")
    console.log("3.Change Password")
    console.log("4.EXIT")

    choice = Number(prompt("Enter Your choice : "))

    switch (choice) {
        case 1:
            Grade()
            break;
        case 2:
            interestBill()
            break;
        case 3:
            changePassword()
            break;
        case 4:
            console.log("Exit");
            break;
        default:
            console.log("Invalid option selected.");
    }

} while (choice > 0 && choice < 4)