const formTitle = document.getElementById('form-title');
const confirmPasswordContainer = document.getElementById(
  'confirm-password-container'
);
const submitButton = document.getElementById('submit');
const toggleLink = document.getElementById('toggle-link');
const paragraph = document.getElementById('paragraph');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

function toggleAuth() {
  const isLoginForm = formTitle.textContent === 'Welcome back!';
  formTitle.textContent = isLoginForm ? 'Hello there!' : 'Welcome back!';
  submitButton.textContent = isLoginForm ? 'Sign Up' : 'Login';
  toggleLink.textContent = isLoginForm ? 'Login' : 'Sign Up';
  paragraph.innerHTML = isLoginForm
    ? 'Ready to unlock endless possibilities? Sign up now and let the adventure begin'
    : "Login to your account and let's get that productivity soaring";
  confirmPasswordContainer.style.display = isLoginForm ? 'block' : 'none';
}

const users = [];

function login(username, password) {
  const user = users.find(
    (user) => user.username === username && user.password === password
  ); //.find() goes through the array and returns the first match.

  if (user) {
    alert('Successful login!');
  } else {
    alert('User not found. Please sign up first.');
  }
}

function signUp(username, password, confirmPassword) {
  const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/;
  if (password === confirmPassword) {
    if (strongPassword.test(password)){
      users.push({ username: username, password: password });
      alert('Sign up successful! You can now log in');
      toggleAuth();
    } else {
      alert ("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character. ")
    } 
  } else {
    alert("Passwords don't match");
  }
}
    

function handleSubmit() {
  const isLoginForm = formTitle.textContent === 'Welcome back!';
  const username = usernameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (!username || !password) {
    alert('Please enter a username and password.');
    return;
  }

  if (isLoginForm) {
    login(username, password);
  } else {
    signUp(username, password, confirmPassword);
  }
}
