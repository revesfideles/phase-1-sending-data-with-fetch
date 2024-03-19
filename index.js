function submitData(name, email) {
    const postData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    };
  
    return fetch('http://localhost:3000/users', postData)
      .then(response => response.json())
      .then(data => {
        const id = data.id;
        document.body.innerHTML += `<p>id: ${id}</p>`;
        return data;
      })
      .catch(function (error) {
        const errorMessage = "Unauthorized Access";
        alert(errorMessage);
        console.log(error.message);
        document.body.innerHTML += `<p>${errorMessage}</p>`;
      });
  }