var arr = [1, 2, 3, 4, 5, 6, 7];

var body = document.querySelector('body');

body.style.color = 'white'

let i = 0;
while (i < 10000) {

  const data = "<h1>pizdeeess</h1>";
  setInterval(() => {
    body.insertAdjacentHTML('beforeend', data)
  }, 5000);

  i++;
}