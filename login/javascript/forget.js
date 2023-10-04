// Select the form and the login button
const loginForm = document.querySelector('.login_form');
const loginButton = document.querySelector('#login_button');
const successMessage = document.getElementById('successMessage'); // Chọn phần tử thông báo

// Add a click event listener to the login button
loginButton.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the form from submitting in the default way

  // Get the input values (username and password)
  const username = document.querySelector('input[type="text"]').value;
  const password = document.querySelector('input[type="Email"]').value;

  // You can perform validation here (e.g., checking if fields are not empty)

  // Assuming you want to simulate a successful login
  if (username === '' && password === '') {
    // Hiển thị thông báo đăng nhập thành công
    alert ("Send failed. Please check your credentials.");
    return;
  } else {
    alert('Information has been sent, please check your Email !'); // Handle failed login
  }
});
