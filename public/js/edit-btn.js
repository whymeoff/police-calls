const edit_btns = document.querySelectorAll('.edit-btn')

if (edit_btns) {
    edit_btns.forEach((el) => {
        el.addEventListener('click', showModalWin)
    })
}

async function showModalWin(e) {
    const path = event.target.getAttribute('data-path')
    const editInputs = document.getElementsByClassName('editInputs')

    const jsonData = await fetch(`/admin/${path}/${e.target.getAttribute('data-id')}`)
    const data = await jsonData.json()
    const entityName = e.target.getAttribute('data-entity')
    console.log(data)
    for (let i = 0; i < editInputs.length; i++) {
        if (editInputs[i].selectedIndex !== undefined) {
            console.log('here')
            editInputs[i].selectedIndex = findChild(parseChild(editInputs[i].childNodes), data[entityName][editInputs[i].dataset.field])
            console.log(editInputs[i].childNodes)
            continue
        }
        editInputs[i].value = data[entityName][editInputs[i].dataset.field]
    }

    // blur
    const body = document.getElementsByClassName('main-block')
    body[0].style.filter = 'blur(3px)'

    var darkLayer = document.createElement('div'); // слой затемнения
    darkLayer.id = 'shadow'; // id чтобы подхватить стиль
    document.body.appendChild(darkLayer); // включаем затемнение

    var modalWin = document.getElementById('popupWin'); // находим наше "окно"
    modalWin.style.display = 'block'; // "включаем" его

    const save_btn = document.getElementById('save-btn')
    save_btn.dataset.id = e.target.getAttribute('data-id')

    darkLayer.onclick = () => {  // при клике на слой затемнения все исчезнет
        darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
        modalWin.style.display = 'none'; // делаем окно невидимым
        body[0].style.filter = 'blur(0px)'
        return false;
    };

    save_btn.onclick = () => {
        fetch(`/admin/${path}/${e.target.getAttribute('data-id')}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(parseObj(editInputs))
        })
        .then((res) => {
            // window.location.reload()
        })
    }
}

const parseObj = (inputs) => {
    const obj = {}

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].selectedIndex !== undefined) {
            // obj[inputs[i].dataset.field] = document.getElementsByClassName('option')[inputs[i].selectedIndex].value
            obj[inputs[i].dataset.field] = inputs[i].value
            continue
        }
        obj[inputs[i].dataset.field] = inputs[i].value
    }
    console.log(obj)
    return obj
}

const findChild = (options, value) => {
    for (let i = 0; i < options.length; i++) {
        if (options[i].value === value) {
            return i
        }
    }

    return -1
}

const parseChild = (childNodes) => {
    const arr = []

    for (let i = 0; i < childNodes.length; i++) {
        if (childNodes[i].nodeName === 'OPTION') {
            arr.push(childNodes[i])
        }
    }

    return arr
}