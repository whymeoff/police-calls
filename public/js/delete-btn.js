const deleteButtons = document.querySelectorAll('#delete-btn')

if (deleteButtons) {
    deleteButtons.forEach(el => {
        el.addEventListener('click', deleteItem)
    })
}

function deleteItem (e) {
    let id = e.target.getAttribute('data-id')
    let url = e.target.getAttribute('data-url')
    fetch(`${url}/${id}`, { method: 'DELETE' }).then(() => {
        window.location.reload()
    })
}