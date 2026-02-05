const form = document.getElementById("registrationForm");
const submitBtn = document.getElementById("submitButton");

const inputs = document.querySelectorAll(".form-control, .form-check-input");

inputs.forEach((input) => {
    input.addEventListener('focus', () => {
        input.classList.add("active");
    });
    input.addEventListener('blur', () => {
        input.classList.remove("active");
    });
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    const email = document.getElementById('email').value;

    const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
    const hobbiesArray = Array.from(hobbies).map((checkbox) => checkbox.value);

    const user = {firstName, lastName, email, hobbies: hobbiesArray};
    console.log(user);
    alert(`Your name is ${firstName} ${lastName}. Your email is ${email}. You enjoy ${hobbiesArray.join(', ')}`)
});

