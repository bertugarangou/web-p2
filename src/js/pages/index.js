fetch('https://localhost:3000/api/list', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data["overwatch"])
    })
    .catch((error) => {
        console.error('Error:', error)
    })

