
const fetchFunctional = (url, meth, data) => {
    fetch(url, {
        method: meth,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res.json()
    })
    .catch(error => console.log('Error:', error));
}

// const fetchF2 = async () => {
//     const response = await fetch('http://localhost:4001/api/users');
//     const data = await response.json();
//     return data;
// }

export {
    fetchFunctional,
    // fetchF2
}