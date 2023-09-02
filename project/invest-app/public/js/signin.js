import API from './lib/auth.js';

window.handleSubmit = handleSubmit;

const form = document.querySelector('form');

async function handleSubmit(event) {
  event.preventDefault();

  const user = Object.fromEntries(new FormData(form));

  const config = {
    method: 'post',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch('/signin', config);

  const { auth, token } = await response.json();

  if (auth) {
    API.signin(token);
  } else {
    console.log('Error no login');
  }
}
