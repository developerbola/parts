
let firstInp = document.querySelector('#txt1');
firstInp.focus();



let move = (e, p, c, n) => {
    c = document.getElementById(c)

    if (c.value !== '' && e.code !== 'Backspace') {
        document.getElementById(n).focus();
    }

    if (c.value == '' && e.code == 'Backspace') {
        document.getElementById(p).focus();
    }
    if (c.value.includes(isNaN)) {
        c.value = '';
        c.focus();
    }
}

let inps = document.querySelectorAll('.inp');

inps.forEach((a) => {
    if (a.innerHTML == '') {
        a.addEventListener('input', () => {
            a.classList.add('focus');
        });
        a.addEventListener('keyup', (e) => {
            if (e.code == 'Backspace') {
                a.classList.remove('focus');
            }
        })
    }
})

let lastInp = document.getElementById("txt4");
if (lastInp.value) {
    console.log("salom");
}
