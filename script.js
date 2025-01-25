// Authentication Logic
const authContainer = document.getElementById('auth-container');
const signupContainer = document.getElementById('signup-container');
const uploaderContainer = document.getElementById('uploader-container');

let users = {}; // Mock user storage

function showSignup() {
  authContainer.classList.add('hidden');
  signupContainer.classList.remove('hidden');
}

function showLogin() {
  signupContainer.classList.add('hidden');
  authContainer.classList.remove('hidden');
}

function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  if (users[username] && users[username] === password) {
    alert('Login successful!');
    authContainer.classList.add('hidden');
    uploaderContainer.classList.remove('hidden');
  } else {
    alert('Invalid username or password!');
  }
}

function signup() {
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;

  if (username && password) {
    users[username] = password;
    alert('Signup successful! You can now login.');
    showLogin();
  } else {
    alert('Please fill out all fields.');
  }
}

// File Upload and Download Logic
const fileInput = document.getElementById('file-input');
const fileList = document.getElementById('file-list');

fileInput.addEventListener('change', () => {
  const files = fileInput.files;
  fileList.innerHTML = ''; // Clear previous file list

  Array.from(files).forEach((file, index) => {
    const fileItem = document.createElement('div');
    fileItem.className = 'file-item';

    const fileName = document.createElement('span');
    fileName.textContent = file.name;

    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(file);
    downloadLink.download = file.name;
    downloadLink.textContent = 'Download';

    fileItem.appendChild(fileName);
    fileItem.appendChild(downloadLink);
    fileList.appendChild(fileItem);
  });
});

// Exit Website Logic
function exitWebsite() {
  alert('You have exited the website.');
  window.location.href = 'https://www.google.com'; // Redirect to a specific page
}
