let chatId = document.querySelector('#chatId');
let message = document.querySelector('#message');
let token = document.querySelector('#token');
token.focus();

chatId.addEventListener('input', () => {
    if (!chatId.value.includes('-')) {
        chatId.value = `-${chatId.value}`
    }
})

let sending = e => {
    e.preventDefault();
    fetch(`http://api.telegram.org/bot${token.value}/sendMessage?chat_id=${chatId.value}&text=${message.value}`, {
        method: "GET"
    }).then(success => {
        alert('Message Succesfully Sended!');

        message.value = '';
        token.focus();

    }, error => {
        alert(`ERROR! ${error}`);
        token.focus();
    })
}

let enter = (e, n) => {
    if (e.code == 'Enter') {
        n = document.getElementById(n).focus();
    }
}

let btn = document.querySelector('#send');

btn.addEventListener('click', (e) => {
    sending(e);
})


message.addEventListener('keyup', (e) => {
    if (e.code == 'Enter') {
        sending(e);
    }
})