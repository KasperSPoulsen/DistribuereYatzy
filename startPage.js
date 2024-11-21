const addUserButton = document.querySelector('#addUserButton')


addUserButton.addEventListener('click', createNewUser)

async function createNewUser() {
    const username = document.querySelector('#usernameText').value
    console.log(username);
    const res = await fetch('/', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username: username})
    })
    const usernames = await res.json()
    const usernameList = document.querySelector('#usernameList')
    usernameList.innerHTML = ''
    for (const username of usernames) {
        const listItem = document.createElement('li');
        listItem.textContent = username;
        usernameList.appendChild(listItem);
    }
}