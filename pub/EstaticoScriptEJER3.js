
// En el lado del cliente
function recitar(markupText) {
  const url = 'http://localhost:3000/'
  const data = {
    text: markupText
  }
  console.log(data)
  const request = {
    method: 'POST', // Podría ser GET
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
  http = fetch(url, request)
  http.then(
    response => response.json()
  ).then(
    data => {
      document.getElementById("htmlCode").innerHTML = data.text
    }
  )
}
document.addEventListener('DOMContentLoaded', function () {
  const text = document.getElementById('markupText')
  document.getElementById('markupForm').onclick = () => {
    console.log(text.value+"<-- esta es el text value");
    recitar(text.value)
    return false;
  }
})






 