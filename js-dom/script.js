const buttons = document.querySelectorAll('button');

for (const btn of buttons) {
  btn.addEventListener('click', function (event) {
    console.log('CLICKED:', btn.dataset.description);
  });
}
