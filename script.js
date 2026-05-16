const DOB = document.getElementById("DOB");
button.addEventListener("click", function() {
}
const birthDate = DOB.value;
if (birthDate == "") {
    alert("Please enter your date of birth");
}
const today = new Date();
const birth = new Date(birthDate);
let age = today.getFullYear() - birth.getFullYear();
result.innerHTML = "Your age is: " ;
if (birth > today){
    alert("Future date is not allowed");
}