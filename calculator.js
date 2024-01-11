let result = document.getElementById("demo");

function calculate(v) {
    result.value += v;
}

function ResultEqual() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}

result.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevent the default behavior of the Enter key
        ResultEqual();
    } else {
        display();
    }
});

function clr() {
    result.value = "";
}

function del() {
    result.value = result.value.slice(0, -1);
}

function display() {
    localStorage.setItem('value', result.value);
    demo.innerHTML = localStorage.getItem('value');
}









