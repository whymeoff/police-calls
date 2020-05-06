const accept_btns = document.querySelectorAll('.accept-btn')

if (accept_btns) {
    accept_btns.forEach((el) => {
        el.addEventListener('click', showModalWin)
    })
}

async function showModalWin(e) {
    // blur
    const body = document.getElementsByClassName('main-block')
    body[0].style.filter = 'blur(3px)'

    var darkLayer = document.createElement('div'); // слой затемнения
    darkLayer.id = 'shadow'; // id чтобы подхватить стиль
    document.body.appendChild(darkLayer); // включаем затемнение

    var modalWin = document.getElementById('popupWin'); // находим наше "окно"
    modalWin.style.display = 'block'; // "включаем" его

    const accept = document.getElementById('accept-btn')
    accept.dataset.id = e.target.getAttribute('data-id')

    darkLayer.onclick = () => {  // при клике на слой затемнения все исчезнет
        darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
        modalWin.style.display = 'none'; // делаем окно невидимым
        body[0].style.filter = 'blur(0px)'
        return false;
    };
    
    accept.onclick = (e) => {
        fetch(`/calls/accept/${accept.dataset.id}`, { 
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ crew: document.getElementById('crew-id').value })
        })
        .then(() => {
                window.location.reload()
        })
    }
}