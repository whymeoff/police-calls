const complete_btns = document.querySelectorAll('.complete-btn')
const add_member = document.querySelector('#add-member')
const add_incident = document.querySelector('#add-incident')

let incidents = []
let members = []
let member = []
let flag = 0

if (complete_btns) {
    complete_btns.forEach((el) => {
        el.addEventListener('click', showModalWin)
    })
}

if (add_member) {
    add_member.addEventListener('click', addMemberFunc)
}

if (add_incident) {
    add_incident.addEventListener('click', addIncidentFunc)
}

function showModalWin(e) {
    // blur
    const body = document.getElementsByClassName('main-block')
    body[0].style.filter = 'blur(3px)'

    var darkLayer = document.createElement('div'); // слой затемнения
    darkLayer.id = 'shadow'; // id чтобы подхватить стиль
    document.body.appendChild(darkLayer); // включаем затемнение

    var modalWin = document.getElementById('popupWin'); // находим наше "окно"
    modalWin.style.display = 'block'; // "включаем" его

    const complete = document.getElementById('complete-btn')
    complete.dataset.call = e.target.getAttribute('data-id')

    darkLayer.onclick = () => {  // при клике на слой затемнения все исчезнет
        darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
        modalWin.style.display = 'none'; // делаем окно невидимым
        body[0].style.filter = 'blur(0px)'
        incidents = []
        members = []
        return false;
    };
}

function addIncidentFunc(e) {
    const input = document.querySelector('#incident-id')
    if (!input.value) return false
    const membersBlock = document.querySelector('#incidents')
    e.preventDefault()

    if (incidents.find((el) => el === input.value)) {
        input.value = ''
        return
    }

    fetch(`/admin/incidents/${input.value}`, { method: 'GET' })
        .then((jsonData) => {
            return jsonData.json()
        })
        .then((data) => {
            if (data.incident) {
                incidents.push(input.value)
                membersBlock.innerHTML += `<div class="single-block" data-id="${data.incident.id}"><p>${data.incident.name}</p><button class="remove-btn" onclick="removeIncident()">Remove</button></div>` 
                input.value = ''
            } else {
                return false
            }
        })
}

function removeIncident() {
    event.preventDefault()
    const id = event.target.parentNode.dataset.id
    event.target.parentNode.remove()

    incidents = incidents.filter((el) => el !== id)
    console.log(incidents)
}

function addMemberFunc(e) {
    e.preventDefault()
    if (flag === 1) return
    flag = 1
    const input = document.querySelector('#member-id')
    if (!input.value) return false
    const membersBlock = document.querySelector('#members')

    if (members.find((el) => el[0] === input.value)) {
        input.value = ''
        return
    }

    fetch(`/admin/members/${input.value}`, { method: 'GET' })
        .then((jsonData) => {
            return jsonData.json()
        })
        .then((data) => {
            if (data.member) {
                membersBlock.innerHTML = `<div class="description-block"><label>Role of member</label><input type="text" id="member-desc"><div class="desc-buttons"><button onclick="addMemberDesc()" class="green-btn">Confirm</button><button onclick="cancelMember()" class="red-btn">Cancel</button></div></div>` + membersBlock.innerHTML
                member.push(input.value, data.member.fullname)
            } else {
                return false
            }
        })
}

function addMemberDesc() {
    event.preventDefault()
    const desc = document.querySelector('#member-desc').value
    document.querySelector('#member-id').value = ''

    if (!desc) return false

    member.push(desc)
    members.push(member)

    document.querySelectorAll('.description-block')[0].remove()

    document.querySelector('#members').innerHTML += `<div class="single-block" data-id="${member[0]}"><p>${member[1]}</p><button class="remove-btn" onclick="removeMember()">Remove</button></div>`
    member = []
    flag = 0
}

function cancelMember() {
    document.querySelectorAll('.description-block')[0].remove()
    document.querySelector('#member-id').value = ''
    flag = 0
}

function removeMember() {
    event.preventDefault()

    const id = event.target.parentNode.dataset.id
    event.target.parentNode.remove()

    members = members.filter((el) => el[0] !== id)
}

function completeCall() {
    event.preventDefault()
    const call = document.querySelector('#complete-btn').dataset.call

    fetch('/calls/complete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ members, incidents, call })
    })
    .then(() => {
        window.location.reload()
    })
}