fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => { return response.json() })
  .then(data => { searchData(data) })
  .catch(err => console.error(err))

function searchData (data) {
  console.log(data)
}
