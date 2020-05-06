async function showModalWin(e) {
    const data = await fetch(`/calls/report/${event.target.getAttribute('data-id')}`)
    const call = await data.json()
    console.log(call)
    // blur
    const body = document.getElementsByClassName('main-block')
    body[0].style.filter = 'blur(3px)'

    var darkLayer = document.createElement('div'); // слой затемнения
    darkLayer.id = 'shadow'; // id чтобы подхватить стиль
    document.body.appendChild(darkLayer); // включаем затемнение

    var modalWin = document.getElementById('report-root')
    modalWin.innerHTML = parseReport(call.call); // находим наше "окно"
    document.querySelector('#popupWin').style.display = 'block'

    darkLayer.onclick = () => {  // при клике на слой затемнения все исчезнет
        darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
        modalWin.innerHTML = ''; // делаем окно невидимым
        body[0].style.filter = 'blur(0px)'
        return false;
    };
}

function parseReport(call) {
    let html = `<div style="text-align: center" id="popupWin" class="modalwin report-block">
        <h1>Call number: ${call._id}</h1>
        <h3>Main information:</h3>
        <p>Addressee: ${call.addressee}</p>
        <p>Address: ${call.address}</p>
        <p class="call-description">Description: ${call.description}</p>
        <p>Status: ${call.status}</p>
        <p>Call arrival date: ${call.createdAt}</p>
        <p>Report creation date: ${call.updatedAt}</p>
        <h3>Incidents: </h3>
    `

    call.incidents.map((el) => {
        html += `<p>Incident name: ${el.name}</p>`
    })

    html += `<h3>Members:</h3>`

    call.members.map((el) => {
        html += `<p>Name: ${el.member.fullname}</p>
                <p class="member-role">Role: ${el.description}</p>`
    })

    html += '</div>'

    return html
}