let input = document.getElementById('demo');

function calculate(v) {
  input.value += v;
}

function ResultEqual() {
  input.value = eval(input.value);
}

input.addEventListener('keyup', (e) => {
  if (e.code === 'Enter') {
    ResultEqual();
  } else {
    display();
  }
});

function clr() {
  input.value = '';
}
function del() {
  input.value = input.value.slice(0, -1);
}


