// Select the form and the login button
const loginForm = document.querySelector('.login_form');
const loginButton = document.querySelector('#login_button');
const successMessage = document.getElementById('successMessage'); // Chọn phần tử thông báo

// Add a click event listener to the login button
loginButton.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the form from submitting in the default way

  // Get the input values (username and password)
  const username = document.querySelector('input[type="text"]').value;
  const password = document.querySelector('input[type="password"]').value;

  // You can perform validation here (e.g., checking if fields are not empty)

  // Assuming you want to simulate a successful login
  if (username === 'nguyennhuvu' && password === '123') {
    // Hiển thị thông báo đăng nhập thành công
    alert ("Logged in successfully");
    return;
  } else {
    alert('Login failed. Please check your credentials.'); // Handle failed login
  }
});
