const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const input = document.querySelector('input');

  const value = input.value;

  window.location.href = 'https://google.com/search?q=' + value;
});
