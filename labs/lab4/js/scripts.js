// json object holding user info
const users = {
  XavierMuise: "Password!12345",
  username12: "Password&54321",
  EveLeBlanc: "Password$12345",
};

const letters = new Set(
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
);

const numbers = new Set("0123456789".split(""));

const isNumber = (character) => {
  return numbers.has(character);
};

const isLetter = (character) => {
  return letters.has(character);
};

// cant begin with a number or contain spaces/special characters
function checkUsername(username) {
  if (isNumber(username[0])) {
    throw new Error("Username cant start with a number");
  }

  for (let i = 0; i < username.length; i++) {
    if (username[i] == " ") {
      throw new Error("Username cant contain spaces");
    }

    if (!isLetter(username[i]) && !isNumber(username[i])) {
      throw new Error("Username may only contain letters or numbers");
    }
  }

  return true;
}

// at least 1 number, 1 uppercase, 1 lowercase and 1 special
// must be 12 characters long
function checkPassword(password, confirmPassword) {
  if (password != confirmPassword) {
    throw new Error("Passwords dont match");
  }

  if (password.length < 12) {
    throw new Error("Password must be at least 12 characters long");
  }

  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasSpecial = false;

  for (let i = 0; i < password.length; i++) {
    const c = password[i];
    const code = c.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      hasUpper = true;
    } else if (code >= 97 && code <= 122) {
      hasLower = true;
    } else if (code >= 48 && code <= 57) {
      hasNumber = true;
    } else {
      hasSpecial = true;
    }
  }

  if (!hasUpper)
    throw new Error("Password must contain at least one uppercase letter.");
  if (!hasLower)
    throw new Error("Password must contain at least one lowercase letter.");
  if (!hasNumber) throw new Error("Password must contain at least one number.");
  if (!hasSpecial)
    throw new Error("Password must contain at least one special character.");

  return true;
}

function checkEmail(email) {
  const [name, domain] = email.split("@");

  if (!domain.includes(".")) {
    throw new Error("email has invalid domain format");
  }

  const [server, topLevelDomain] = domain.split(".");

  if (topLevelDomain.length < 2 || topLevelDomain.length > 8) {
    throw new Error(
      "Emails top level domain must be between 2 and 8 characters long.",
    );
  }

  return true;
}

// add user to users
const userRegister = (e) => {
  e.preventDefault();

  let { email, username, password, confirmPassword } = e.target.elements;
  email = email.value.trim();
  username = username.value.trim();
  password = password.value.trim();
  confirmPassword = confirmPassword.value.trim();

  const errorMsg = document.getElementById("error");

  try {
    checkEmail(email);
    checkUsername(username);
    checkPassword(password, confirmPassword);

    if (users[username]) {
      throw new Error("username is already taken!");
    } else {
      users[username] = password;
    }

    console.log(`${username} : ${password} added to users`);
    alert("Successfully registered!");
    console.log(users);
  } catch (error) {
    errorMsg.textContent = error.message;
    alert("Error: " + error.message);
  }
};

const userLogin = (e) => {
  e.preventDefault();

  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const errorMsg = document.getElementById("error");

  try {
    if (!users[username]) {
      throw new Error("User doesnt exist!");
    } else if (users[username] != password) {
      throw new Error("Wrong password!");
    } else {
      alert("Logged in successfully!");
      console.log(`Logged in as : ${username}`);
    }
  } catch (error) {
    errorMsg.textContent = error.message;
    alert("Error: " + error.message);
  }
};

const registerForm = document.getElementById("newUser");
if (registerForm) {
  registerForm.addEventListener("submit", userRegister);
}

const loginForm = document.getElementById("login");
if (loginForm) {
  loginForm.addEventListener("submit", userLogin);
}
